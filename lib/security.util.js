const crypto = require('crypto');

/**
 * 核心安全工具
 * 采用 AES-256-GCM 认证加密算法，确保数据不可篡改且具有时效性
 */
const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 12;
const MAX_AGE_MS = 60 * 1000; // 1分钟过期

// 原始密钥（建议通过环境变量获取，如 process.env.OP_SECRET）
const RAW_SECRET = 'y74Yaowmnh3DpH0keGxE';
// 使用 SHA256 确保密钥永远是符合规格的 32 字节
const FINAL_KEY = crypto.createHash('sha256').update(RAW_SECRET).digest();

/**
 * 加密：将数据对象包装并注入 UTC 时间戳
 */
const encrypt = (data) => {
  const payload = JSON.stringify({
    d: data, // 原始数据
    t: Date.now(), // UTC 毫秒时间戳
  });

  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, FINAL_KEY, iv);

  let encrypted = cipher.update(payload, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  const authTag = cipher.getAuthTag().toString('hex');

  // 结构：iv:密文:认证标签
  return `${iv.toString('hex')}:${encrypted}:${authTag}`;
};

/**
 * 解密：校验数据完整性及是否过期（时区无关）
 */
const decrypt = (encryptedData) => {
  try {
    if (!encryptedData || typeof encryptedData !== 'string') return null;

    const [ivHex, encryptedText, authTagHex] = encryptedData.split(':');
    if (!ivHex || !encryptedText || !authTagHex) return null;

    const iv = Buffer.from(ivHex, 'hex');
    const authTag = Buffer.from(authTagHex, 'hex');

    const decipher = crypto.createDecipheriv(ALGORITHM, FINAL_KEY, iv);
    decipher.setAuthTag(authTag);

    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    const { d, t } = JSON.parse(decrypted);

    // --- 跨时区过期校验 ---
    const now = Date.now();
    const diff = now - t;

    // 超过预设时间（1分钟）
    if (diff > MAX_AGE_MS) {
      return null;
    }

    // 容忍 10 秒的服务器间时钟漂移（防止 Token 来自“未来”）
    if (diff < -10000) {
      return null;
    }

    return d;
  } catch (error) {
    // 任何解密失败、JSON 解析失败或篡改都会进入这里
    return null;
  }
};

module.exports = { encrypt, decrypt };
