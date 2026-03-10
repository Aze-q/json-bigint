const redisUtil = require('@utils/redis.util');
const prisma = require('@libs/prisma');
const momentUtil = require('@utils/moment.util');

/**
 * Redis 分布式可靠任务队列
 *
 * 数据结构：
 *   rf:queue:pending   - List  待处理队列
 *   rf:queue:working   - List  处理中队列（备份）
 *   rf:hash:start_time - Hash  任务领用计时存根
 *
 * 核心流程：领用(RPOPLPUSH) → 执行 → 确认(双重清理) → 超时回收(Monitor)
 */
class RemoveFlowQueue {
  constructor(options = {}) {
    this.PENDING_KEY = 'rf:queue:pending';
    this.WORKING_KEY = 'rf:queue:working';
    this.START_TIME_KEY = 'rf:hash:start_time';
    this.MONITOR_LOCK_KEY = 'rf:monitor:lock'; // Redisson 分布式锁资源名
    this.TIMEOUT_MS = options.timeoutMs || 10 * 60 * 1000; // 10 分钟超时判定
    this.MONITOR_INTERVAL = options.monitorInterval || 60 * 1000; // 巡检间隔 1 分钟
    this._monitorTimer = null;
  }

  /**
   * 获取已在 pending 或 working 中的任务 ID 集合（用于去重检查）
   * @returns {Promise<Set<string>>}
   */
  async _getExistingTaskIds() {
    const rClient = redisUtil.getClient();
    const [pending, working] = await Promise.all([
      rClient.lRange(this.PENDING_KEY, 0, -1),
      rClient.lRange(this.WORKING_KEY, 0, -1),
    ]);
    return new Set([...(pending || []), ...(working || [])]);
  }

  /**
   * 添加任务到待处理队列（RPUSH 入队尾）
   * 若任务已存在于 pending 或 working 中，则跳过，避免重复消费
   * @param {string} taskId - 任务ID，建议格式 "userId:day"
   * @returns {Promise<{added: boolean, length: number}>} added 表示是否新增，length 为当前 pending 长度
   */
  async addTask(taskId) {
    const existing = await this._getExistingTaskIds();
    if (existing.has(taskId)) {
      return { added: false, length: await this.getPendingSize() };
    }
    const length = await redisUtil.getClient().rPush(this.PENDING_KEY, taskId);
    return { added: true, length };
  }

  /**
   * 批量添加任务
   * 自动过滤已存在于 pending 或 working 中的任务，仅添加新任务
   * @param {string[]} taskIds - 任务ID 数组
   * @returns {Promise<{added: number, skipped: number, length: number}>} added 新增数，skipped 跳过数，length 当前 pending 长度
   */
  async addTasks(taskIds) {
    if (!taskIds || !taskIds.length) {
      return { added: 0, skipped: 0, length: await this.getPendingSize() };
    }
    const existing = await this._getExistingTaskIds();
    const toAdd = [...new Set(taskIds)].filter((id) => !existing.has(id));
    const skipped = taskIds.length - toAdd.length;
    if (!toAdd.length) {
      return { added: 0, skipped, length: await this.getPendingSize() };
    }
    const length = await redisUtil.getClient().rPush(this.PENDING_KEY, toAdd);
    return { added: toAdd.length, skipped, length };
  }

  /**
   * 领取一个任务（原子操作 LMOVE RIGHT LEFT）
   * 同时在 hash 中记录领用时间，为超时回收提供依据
   * @returns {Promise<string|null>} 任务ID，队列为空时返回 null
   */
  async takeTask() {
    const rClient = redisUtil.getClient();
    const taskId = await rClient.lMove(
      this.PENDING_KEY,
      this.WORKING_KEY,
      'RIGHT',
      'LEFT'
    );
    if (!taskId) return null;
    // lMove 结果需先拿到才能写存根，无法合并管道
    await rClient.hSet(this.START_TIME_KEY, taskId, String(Date.now()));
    return taskId;
  }

  /**
   * 确认任务完成（管道双重清理：从 working 移除 + 删除计时存根）
   * @param {string} taskId - 任务ID
   * @returns {Promise<void>}
   */
  async ackTask(taskId) {
    await redisUtil
      .getClient()
      .multi()
      .lRem(this.WORKING_KEY, 1, taskId)
      .hDel(this.START_TIME_KEY, taskId)
      .exec();
  }

  /**
   * 获取待处理队列长度
   * @returns {Promise<number>}
   */
  async getPendingSize() {
    return redisUtil.getClient().lLen(this.PENDING_KEY);
  }

  /**
   * 获取处理中队列长度
   * @returns {Promise<number>}
   */
  async getWorkingSize() {
    return redisUtil.getClient().lLen(this.WORKING_KEY);
  }

  /**
   * 查看待处理队列中的任务（不消费）
   * @param {number} start - 起始下标
   * @param {number} stop  - 结束下标，-1 表示到末尾
   * @returns {Promise<string[]>}
   */
  async peekPending(start = 0, stop = -1) {
    return redisUtil.getClient().lRange(this.PENDING_KEY, start, stop);
  }

  /**
   * 扫描 working 队列，将超时任务强制回收至 pending
   * 使用 SET NX 分布式锁，确保多实例环境下每分钟只有一个实例执行回收
   * @returns {Promise<number>} 本次回收的任务数量
   */
  async recoverTimeoutTasks() {
    // waitTime:0 — 尝试一次，抢不到说明其他实例正在执行，直接跳过
    // leaseTime:true — 自动续期，持锁直到 finally 中 unlock 主动释放
    const lock = await redisUtil.getLock(this.MONITOR_LOCK_KEY, true, {
      waitTime: 0,
    });
    if (!lock) return 0;

    try {
      const rClient = redisUtil.getClient();
      const workingTasks = await rClient.lRange(this.WORKING_KEY, 0, -1);
      if (!workingTasks.length) return 0;

      const now = Date.now();

      // 管道批量拉取所有计时存根（一次网络往返）
      const getMulti = rClient.multi();
      workingTasks.forEach((id) => getMulti.hGet(this.START_TIME_KEY, id));
      const startTimes = await getMulti.exec();

      // 筛选超时或孤儿任务
      const toRecover = workingTasks.filter((id, i) => {
        const t = startTimes[i];
        if (!t) return true; // 无存根 = 孤儿任务
        return now - Number(t) > this.TIMEOUT_MS;
      });

      if (!toRecover.length) return 0;

      // 管道批量回收：lRem + hDel + lPush 合并一次提交
      const recoverMulti = rClient.multi();
      toRecover.forEach((id) => {
        recoverMulti.lRem(this.WORKING_KEY, 1, id);
        recoverMulti.hDel(this.START_TIME_KEY, id);
        recoverMulti.lPush(this.PENDING_KEY, id);
      });
      await recoverMulti.exec();

      return toRecover.length;
    } finally {
      await redisUtil.unlock(lock);
    }
  }

  /**
   * 启动超时回收定时器
   * 每 MONITOR_INTERVAL(60s) 执行一次 recoverTimeoutTasks
   */
  startMonitor() {
    if (this._monitorTimer) return;
    this._monitorTimer = setInterval(async () => {
      try {
        const count = await this.recoverTimeoutTasks();
        if (count > 0) {
          console.log(`[ReliableQueue] recovered ${count} timeout task(s)`);
        }
      } catch (err) {
        console.error('[ReliableQueue] monitor error:', err.message);
      }
    }, this.MONITOR_INTERVAL);
  }

  /**
   * 停止超时回收定时器
   */
  stopMonitor() {
    if (this._monitorTimer) {
      clearInterval(this._monitorTimer);
      this._monitorTimer = null;
    }
  }
}

class RemoveFlow {
  constructor() {
    this.DEFAULT_CONFIG = {
      backupClearDays: 7, // 不活跃超过该天数可删除流水 backup 字段
      batchSize: 500, // 每次处理500条
      reverseDays: 3, // 倒推数据天数 --- 用户清除数据的操作 比如20250101 那么 20250103 20250102 20250101 这三天的数据都需要清除
      followupCountMax: 2000, // 备份 origin 字段超过该数量可删除流水 backupOrigin 字段
    };
    this.baseTableName = 'tb_user_account_cash';

    // 队列实例
    this.queue = new RemoveFlowQueue();
  }

  /**
   * 生成按日期分表的表名
   * @param {string} baseTable - 基础表名
   * @param {number} time - 时间戳
   * @returns {string} 带日期后缀的表名
   */
  getDayTable(baseTable, time) {
    const day = momentUtil.createMoment(time).format('YYYYMMDD');
    return `${baseTable}_${day}`;
  }

  /**
   * 解析 JSON 字符串，失败返回 null
   * @param {string} jsonString
   * @returns {Object|null}
   */
  jsonParse(jsonString) {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      return null;
    }
  }

  /**
   * 获取不活跃检测配置
   * @returns {Promise<Object>}
   */
  async getConfig() {
    const cached = await redisUtil.get(this.CONFIG_KEY);
    if (cached) {
      return this.jsonParse(cached);
    }
    return { ...this.DEFAULT_CONFIG };
  }

  /**
   * 计算用户距今未登录天数（印度时间自然天）
   * @param {number} userId
   * @returns {Promise<number|null>} 相差天数，无登录记录时返回 null
   */
  async getInactiveDays(userId) {
    const userExtend = await prisma.tbUserInfoExtend.findUnique({
      where: { userId },
      select: {
        lastLoginTime: true,
      },
    });

    if (
      !userExtend ||
      !userExtend.lastLoginTime ||
      userExtend.lastLoginTime <= 0n
    ) {
      return null;
    }

    const lastLoginTime = Number(userExtend.lastLoginTime);
    const nowDay = momentUtil.createMoment().startOf('day');
    const lastLoginDay = momentUtil.createMoment(lastLoginTime).startOf('day');

    return nowDay.diff(lastLoginDay, 'days');
  }

  /*
   * 获取指定用户的流水备份数量（备份字段中包含 backup 和 backupOrigin 字段）
   * @param {number} userId - 用户ID
   * @param {number} startDay - 开始日期
   * @returns {Promise<number>}
   */
  async getFollowupCount(userId, startDay) {
    const conf = await this.getConfig();
    const curTableName = this.getDayTable(
      this.baseTableName,
      momentUtil.createMoment(startDay).valueOf()
    );
    const findRecordIdSql = `
      SELECT id, meta FROM ${curTableName} 
      WHERE userId = ${userId} 
        AND JSON_CONTAINS_PATH(meta, 'one', '$.backup', '$.backupOrigin') = 1 
      ORDER BY id DESC 
      LIMIT 1;
    `;
    const record = await prisma.$queryRawUnsafe(findRecordIdSql);
    if (!record || record?.length === 0) {
      return 0;
    }

    const computedTables = new Array(conf.backupClearDays)
      .fill(null)
      .map((_day, i) => {
        const day = momentUtil.createMoment(startDay).add(i, 'day').valueOf();
        const curDayEnd = momentUtil.createMoment().endOf('day').valueOf();
        if (day > curDayEnd) {
          return null;
        }
        const tableName = this.getDayTable(this.baseTableName, day);
        const where =
          tableName === curTableName ? `AND id > ${Number(record[0].id)}` : '';
        return { tableName, where };
      })
      .filter((item) => !!item);

    const countSql = `
      SELECT SUM(cnt) as total FROM (
        ${computedTables
          .map(
            ({ tableName, where }) =>
              `SELECT COUNT(*) as cnt FROM ${tableName} WHERE userId = ${userId} ${where}`
          )
          .join(' UNION ALL ')}
      ) as t;
    `;
    const countResult = await prisma.$queryRawUnsafe(countSql);
    return Number(countResult?.[0]?.total || 0);
  }

  /**
   * 延迟一段时间
   * @param {number} ms - 延迟时间（毫秒）
   * @returns {Promise<void>}
   */
  async delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /*
   * 删除指定用户的流水
   * @param {number} userId - 用户ID
   * @param {number} specifyDay - 指定日期
   * @param {Object} options - 选项
   * @param {number} options.startDay - 开始日期
   * @returns {Promise<{success: boolean, error: string}>}
   */
  async removeSpecifyFlow(userId, specifyDay, options = {}) {
    const conf = await this.getConfig();

    try {
      const dayTables = new Array(conf.reverseDays)
        .fill(null)
        .map((_day, i) => {
          return this.getDayTable(
            this.baseTableName,
            momentUtil.createMoment(specifyDay).subtract(i, 'day').valueOf()
          );
        });

      for (const tableName of dayTables) {
        let lastId = 0;
        let hasMore = true;

        while (hasMore) {
          // --- 阶段 A: 侦察并直接获取目标 ID ---
          const selectSql = `
            SELECT id FROM ${tableName} 
            WHERE userId = ${userId} 
              AND id > ${lastId} 
              AND JSON_CONTAINS_PATH(meta, 'one', '$.backup', '$.backupOrigin') = 1 
            ORDER BY id ASC 
            LIMIT ${conf.batchSize}
          `;

          // eslint-disable-next-line no-await-in-loop
          const targetRows = await prisma.$queryRawUnsafe(selectSql);

          // 如果连一条符合条件的都没有，直接结束当前表的扫描
          if (!targetRows || targetRows.length === 0) {
            hasMore = false;
            break;
          }

          // --- 阶段 B: 精确更新目标 ID ---
          const ids = targetRows.map((row) => Number(row.id));
          const idListStr = ids.join(',');

          const updateSql = `
            UPDATE ${tableName} 
            SET meta = JSON_REMOVE(meta, '$.backup', '$.backupOrigin') 
            WHERE id IN (${idListStr})
          `;

          // eslint-disable-next-line no-await-in-loop
          await prisma.$executeRawUnsafe(updateSql);

          // --- 阶段 C: 更新游标与边界判断 ---
          lastId = ids[ids.length - 1];

          // 核心逻辑：如果本次查出的条数小于 batchSize，说明该表后续已无符合条件的数据
          if (ids.length < conf.batchSize) {
            hasMore = false;
          }

          // 释放 Event Loop
          // eslint-disable-next-line no-await-in-loop
          await this.delay(1 * 1000);
        }
      }

      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }

  /**
   * 检查是否删除流水
   * @param {number} userId
   * @param {Object} options
   * @returns {Promise<{remove: boolean}>}
   */
  async checkRemoveFlow(userId, options = {}) {
    const conf = await this.getConfig();
    const inactiveDays = await this.getInactiveDays(userId);
    if (inactiveDays && inactiveDays >= conf.backupClearDays) {
      return { remove: true, model: 'specify_flow' };
    }

    // 当某个抽水记录往后推 >= n 就表示可以删除
    const followupCount = await this.getFollowupCount(userId, Date.now());
    if (followupCount >= conf.followupCountMax) {
      return { remove: true, model: 'backup_origin' };
    }

    return { remove: false };
  }
}

module.exports = {
  removeFlow: new RemoveFlow(),
  reliableQueue: new RemoveFlowQueue(),
};
