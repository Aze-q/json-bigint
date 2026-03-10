# Redis 分布式可靠任务队列设计方案 (Reliable Queue)

## 1. 方案背景
在处理千万级数据（如流水清理）的分布式场景中，简单的 `RPOP` 存在任务丢失风险。本方案通过 Redis 原生指令实现一个“领用-备份-校验-回收”的闭环系统，确保任务在 8 个并发实例下不丢失、不卡死，且兼容各种 Node.js 环境。

## 2. Redis 数据结构设计

| Key | 类型 | 描述 |
| :--- | :--- | :--- |
| `rf:queue:pending` | **List** | **待处理队列**：存放待执行的任务 ID（格式：`userId:day`）。 |
| `rf:queue:working` | **List** | **处理中队列**：存放已被领走但尚未确认完成的任务（全局备份）。 |
| `rf:hash:start_time` | **Hash** | **计时存根**：记录任务被领走的起始时间。`Field: 任务ID, Value: 时间戳`。 |

---

## 3. 核心流程设计

### 3.0 任务添加阶段 (Producer) — 去重校验

1. **存在性检查**：添加前检查任务 ID 是否已存在于 `pending` 或 `working` 中。
2. **仅添加新任务**：若已存在则跳过，避免同一任务被多次入队、重复消费。
3. **批量去重**：`addTasks` 会过滤输入数组中已存在的 ID，并对数组本身去重，仅将新任务 `RPUSH` 入队。

### 3.1 任务领用阶段 (Consumer)
1. **原子移交**：使用 `RPOPLPUSH rf:queue:pending rf:queue:working`。
   - **逻辑**：从待处理队列弹出任务的同时，瞬间推入处理中队列。即使进程在此刻崩溃，任务 ID 依然在备份中。
2. **打卡计时**：执行 `HSET rf:hash:start_time "任务ID" <当前时间戳>`。
   - **目的**：记录开始处理时间，为“10 分钟超时判定”提供依据。

### 3.2 任务确认阶段 (Acknowledgment)
1. **业务执行**：执行具体的业务逻辑（如 SQL 操作）。
2. **双重清理**：业务完成后，**必须同步执行**：
   - `LREM rf:queue:working 1 "任务ID"`（从备份中移除）。
   - `HDEL rf:hash:start_time "任务ID"`（删除计时存根）。

### 3.3 超时回收阶段 (Monitor)
1. **定期巡检**：每隔 1 分钟，扫描 `rf:queue:working`。
2. **超时判定**：
   - 遍历 `working` 队列中的 ID，从 `rf:hash:start_time` 获取起始时间。
   - 若 `(当前时间 - 存根时间) > 600,000ms` (10 分钟)，则判定该任务所属实例已挂掉或卡死。
3. **强制回收**：
   - 将任务 ID 重新 `LPUSH` 回 `rf:queue:pending`。
   - 同步清理 `working` 备份和 `hash` 存根。

---

## 4. 分布式环境保障 (8 实例规范)

### 4.1 语法兼容性 (规避报错)
禁止在类中使用静态属性初始化语法（如 `static KEY = val`），以防不同 Node.js 版本报 `Unexpected token =`。建议在类定义外部赋值：
```javascript
class RemoveFlow { ... }
RemoveFlow.CONFIG_KEY = 'rank:inactive_config';
```

### 4.2 任务幂等性
由于存在超时重发机制，业务逻辑必须支持幂等（重复执行不会产生错误数据）。

### 4.3 巡检竞争防范
建议利用 Redis `SET NX` 确保每分钟只有一个实例执行回收操作，减少不必要的 Redis 遍历压力。

---

## 5. 方案总结
- **防丢失**：利用 `RPOPLPUSH` 实现原子备份。
- **防重复**：添加前检查 pending/working，跳过已存在的任务 ID。
- **自愈性**：通过 Hash 计时与巡检脚本实现 10 分钟自动回收。
- **扩展性**：支持 8 个或更多实例水平扩展，无须手动分配任务。
