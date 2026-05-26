const SALT = 'DAvN8GEStOHp0UBka1Zo';

const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');

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
  };

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


const build = ()=>{
    const timestamp = Date.now() - (4 * 60 * 1000);
    const requestId = uuidv4();
    const operation = operationKeyMap.GetRedis;
    const sign = signWithHmacMd5(`timestamp=${timestamp}&operation=${operation}&requestId=${requestId}`);
    return { timestamp, requestId, operation, sign };
}

console.log(build());
