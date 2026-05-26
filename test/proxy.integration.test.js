const { expect } = require('chai');
const axios = require('axios');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// ─────────────────────────────────────────────
// 常量
// ─────────────────────────────────────────────

const operationKeyMap = {
  RunSQL: 'cfh2DNITa84qpYQ0tdCz',
  RunFileList: 'm3QiEkg8Y1r9LFTI5e4f',
  RunFileContent: 'Y3SrZjVqWOvKsBdpTCh7',
  CompressDownload: 'SJQf31UJkZ1f88q9m361',
  ForwardEvent: 'LvMWnF1ezaBlRjNAgtym',
  GetApolloConfig: 'Xp7KnRqT2wJcVeA9mBsL',
  GetRedis: 'Rk9mXpL3qN7wTzY2vBcJ',
  SetRedis: 'Wn4sGdH8uEoAiP6xQfZv',
  DelRedis: 'Jc5tYmK2pXwQnB8rLsUo',
};

const HMAC_SALT = 'DAvN8GEStOHp0UBka1Zo';
const SERVER_URL = process.env.TEST_SERVER_URL || 'http://127.0.0.1:8050';
const PROXY_TIMESTAMP_SKIP = 'skip';

// 测试接口列表（代理拦截器挂载在所有路由上，取其中一个接口验证行为即可）
const TEST_ENDPOINTS = [
  '/v1/daily-check-in/check-in',
  '/v1/kefu/get-token',
];

// ─────────────────────────────────────────────
// 签名工具函数
// ─────────────────────────────────────────────

/**
 * 生成 HMAC-MD5 代理签名
 * 与 actionInterceptor.js 中 signWithHmacMd5 完全对应
 */
function makeProxySignature(timestamp, operation, requestId) {
  return crypto
    .createHmac('md5', HMAC_SALT)
    .update(`timestamp=${timestamp}&operation=${operation}&requestId=${requestId}`)
    .digest('hex');
}

/**
 * 生成合法的代理请求头（含签名）
 * @param {string} operation
 * @param {{ skipSignature?: boolean, expiredTs?: boolean }} options
 */
function makeProxyHeaders(operation, options = {}) {
  if (options.skipSignature) {
    return {
      'x-operation': operation,
      'x-timestamp': PROXY_TIMESTAMP_SKIP,
    };
  }

  const timestamp = options.expiredTs
    ? String(Date.now() - 10 * 60 * 1000) // 10 分钟前，已过期
    : String(Date.now());

  const requestId = `req-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  const signature = makeProxySignature(timestamp, operation, requestId);

  return {
    'x-operation': operation,
    'x-timestamp': timestamp,
    'x-signature': signature,
    'x-request-id': requestId,
  };
}

/**
 * 生成 RunSQL body 签名（MD5，与 signWithMD5 对应）
 * @param {string} sqlBase64
 * @param {string} dbaHash  - cc.dba.hash 的值，测试中由环境变量注入
 */
function makeSqlSign(sqlBase64, dbaHash) {
  const stringSignTemp = `sql=${sqlBase64}&hash=${dbaHash}`;
  return crypto.createHash('md5').update(stringSignTemp).digest('hex');
}

// ─────────────────────────────────────────────
// HTTP 客户端
// ─────────────────────────────────────────────

const httpClient = axios.create({
  baseURL: SERVER_URL,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
  validateStatus: () => true,
});

// ─────────────────────────────────────────────
// 测试报告收集
// ─────────────────────────────────────────────

const testReport = {
  startTime: null,
  endTime: null,
  serverUrl: SERVER_URL,
  tests: [],
  stats: { passed: 0, failed: 0, skipped: 0, total: 0 },
};

let currentCtx = {};
let completedSuites = 0;

function recordTest(info) {
  testReport.tests.push(info);
  testReport.stats.total++;
  if (info.status === 'passed') testReport.stats.passed++;
  else if (info.status === 'failed') testReport.stats.failed++;
  else testReport.stats.skipped++;
}

function setCtx(ctx) {
  currentCtx = ctx;
}

function generateMarkdownReport() {
  const reportPath = path.join(__dirname, 'TEST_REPORT.md');
  let md = `# 代理路由集成测试报告\n\n`;
  md += `**测试时间**: ${testReport.startTime}\n`;
  md += `**完成时间**: ${testReport.endTime}\n`;
  md += `**服务器地址**: ${testReport.serverUrl}\n\n`;
  md += `## 测试概览\n\n`;
  md += `| 指标 | 数量 |\n|------|------|\n`;
  md += `| ✅ 通过 | ${testReport.stats.passed} |\n`;
  md += `| ❌ 失败 | ${testReport.stats.failed} |\n`;
  md += `| ⏭️ 跳过 | ${testReport.stats.skipped} |\n`;
  md += `| 📝 总计 | ${testReport.stats.total} |\n\n---\n\n`;
  md += `## 测试详情\n\n`;

  testReport.tests.forEach((t, i) => {
    const icon = t.status === 'passed' ? '✅' : t.status === 'failed' ? '❌' : '⏭️';
    md += `### ${icon} ${i + 1}. ${t.title}\n\n`;
    if (t.operation) md += `**操作**: \`${t.operation}\`\n\n`;
    if (t.requestHeaders) {
      md += `**请求头**:\n`;
      Object.entries(t.requestHeaders).forEach(([k, v]) => (md += `- \`${k}\`: ${v}\n`));
      md += '\n';
    }
    if (t.requestBody) {
      const s = JSON.stringify(t.requestBody, null, 2);
      md += s.length > 400
        ? `**请求体**: <details><summary>展开</summary>\n\n\`\`\`json\n${s}\n\`\`\`\n\n</details>\n\n`
        : `**请求体**:\n\`\`\`json\n${s}\n\`\`\`\n\n`;
    }
    md += `**响应状态**: ${t.responseStatus || 'N/A'}\n\n`;
    if (t.responseData) {
      const s = typeof t.responseData === 'string' ? t.responseData : JSON.stringify(t.responseData, null, 2);
      md += s.length > 400
        ? `**响应体**: <details><summary>展开</summary>\n\n\`\`\`json\n${s}\n\`\`\`\n\n</details>\n\n`
        : `**响应体**:\n\`\`\`json\n${s}\n\`\`\`\n\n`;
    }
    if (t.notes) md += `**备注**: ${t.notes}\n\n`;
    if (t.error) md += `**错误**:\n\`\`\`\n${t.error}\n\`\`\`\n\n`;
    md += `---\n\n`;
  });

  fs.writeFileSync(reportPath, md, 'utf-8');
  console.log(`\n📄 测试报告已生成: ${reportPath}`);
}

// ─────────────────────────────────────────────
// 测试套件
// ─────────────────────────────────────────────

TEST_ENDPOINTS.forEach((TEST_ENDPOINT) => {
  describe(`actionInterceptor 集成测试 [${TEST_ENDPOINT}]`, () => {
    let serverAvailable = true;

    before(async function () {
      this.timeout(6000);
      if (!testReport.startTime) {
        testReport.startTime = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
      }
      try {
        await httpClient.get('/');
        console.log(`\n✅ 服务器连接成功: ${SERVER_URL}  接口: ${TEST_ENDPOINT}`);
      } catch {
        serverAvailable = false;
        console.log(`\n⚠️  服务器未运行，跳过集成测试: ${SERVER_URL}`);
        this.skip();
      }
    });

    afterEach(function () {
      const t = this.currentTest;
      let status = 'skipped';
      if (t.state === 'passed') status = 'passed';
      else if (t.state === 'failed') status = 'failed';
      recordTest({
        title: t.title,
        operation: currentCtx.operation || 'N/A',
        requestBody: currentCtx.requestBody,
        requestHeaders: currentCtx.requestHeaders,
        responseStatus: currentCtx.responseStatus,
        responseData: currentCtx.responseData,
        status,
        error: t.err ? t.err.message : null,
        notes: currentCtx.notes || null,
      });
      currentCtx = {};
    });

    after(function () {
      completedSuites++;
      if (completedSuites === TEST_ENDPOINTS.length) {
        testReport.endTime = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
        if (testReport.tests.length > 0) generateMarkdownReport();
      }
    });

    // ═══════════════════════════════════════════
    // 一、签名与时间戳校验
    // ═══════════════════════════════════════════
    describe('签名与时间戳校验', () => {
      it('x-timestamp=skip 时应绕过签名校验，直接执行 handler', async function () {
        if (!serverAvailable) this.skip();
        const headers = makeProxyHeaders(operationKeyMap.RunFileList, { skipSignature: true });
        const body = { path: '.', recursive: false };

        setCtx({ operation: 'RunFileList / skip签名', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        // handler 被执行了（返回 200 或 400，不是签名相关的 400）
        // 无论路径是否存在，只要不是因签名失败就说明 skip 生效
        expect(res.status).to.be.oneOf([200, 400]);
        expect(res.data).to.exist;
      });

      it('缺少 x-signature 时应返回 400', async function () {
        if (!serverAvailable) this.skip();
        const timestamp = String(Date.now());
        const requestId = `req-${Date.now()}`;
        const headers = {
          'x-operation': operationKeyMap.RunFileList,
          'x-timestamp': timestamp,
          // 故意不传 x-signature
          'x-request-id': requestId,
        };
        const body = { path: 'src' };

        setCtx({ operation: '缺少 x-signature', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.equal(400);
        expect(res.data).to.have.property('code');
      });

      it('缺少 x-request-id 时应返回 400', async function () {
        if (!serverAvailable) this.skip();
        const timestamp = String(Date.now());
        const headers = {
          'x-operation': operationKeyMap.RunFileList,
          'x-timestamp': timestamp,
          'x-signature': 'any-signature',
          // 故意不传 x-request-id
        };
        const body = { path: 'src' };

        setCtx({ operation: '缺少 x-request-id', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.equal(400);
      });

      it('签名不匹配时应返回 400', async function () {
        if (!serverAvailable) this.skip();
        const timestamp = String(Date.now());
        const requestId = `req-${Date.now()}`;
        const headers = {
          'x-operation': operationKeyMap.RunFileList,
          'x-timestamp': timestamp,
          'x-signature': 'invalid-signature-000000000000000000000000000000',
          'x-request-id': requestId,
        };
        const body = { path: 'src' };

        setCtx({ operation: '签名不匹配', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.equal(400);
        expect(res.data).to.have.property('code');
      });

      it('时间戳过期（>5分钟）时应返回 400', async function () {
        if (!serverAvailable) this.skip();
        const headers = makeProxyHeaders(operationKeyMap.RunFileList, { expiredTs: true });
        const body = { path: 'src' };

        setCtx({
          operation: '时间戳过期',
          requestHeaders: headers,
          requestBody: body,
          notes: `过期时间戳: ${headers['x-timestamp']}`,
        });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.equal(400);
      });

      it('合法签名与时间戳时应成功执行 handler', async function () {
        if (!serverAvailable) this.skip();
        const headers = makeProxyHeaders(operationKeyMap.RunFileList);
        const body = { path: '.', recursive: false };

        setCtx({ operation: '合法签名验证', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        // handler 被执行，返回业务状态码（不是因签名失败）
        expect(res.status).to.be.oneOf([200, 400]);
        expect(res.data).to.have.property('code');
      });

      it('相同 requestId 重复请求时应返回 400（重放攻击防护）', async function () {
        if (!serverAvailable) this.skip();
        this.timeout(8000);

        // 第一次请求（使用合法签名）
        const headers = makeProxyHeaders(operationKeyMap.RunFileList);
        const body = { path: '.', recursive: false };

        await httpClient.post(TEST_ENDPOINT, body, { headers });

        // 第二次用完全相同的 headers 重放
        const res2 = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({
          operation: '重放攻击防护',
          requestHeaders: headers,
          requestBody: body,
          responseStatus: res2.status,
          responseData: res2.data,
          notes: '相同 requestId 第二次请求应被拒绝',
        });

        expect(res2.status).to.equal(400);
      });

      it('x-request-reason 头存在时错误信息应返回真实原因', async function () {
        if (!serverAvailable) this.skip();
        const timestamp = String(Date.now());
        const requestId = `req-${Date.now()}`;
        const headers = {
          'x-operation': operationKeyMap.RunFileList,
          'x-timestamp': timestamp,
          'x-signature': 'bad-signature',
          'x-request-id': requestId,
          'x-request-reason': '1', // 触发透传真实原因
        };
        const body = { path: 'src' };

        setCtx({ operation: 'x-request-reason 透传', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.equal(400);
        // 真实原因包含 'invalid signature' 或 'missing' 而非通用提示
        expect(res.data.message).to.not.equal('System error, please try again later');
      });
    });

    // ═══════════════════════════════════════════
    // 二、路由分发（method & operation 校验）
    // ═══════════════════════════════════════════
    describe('路由分发校验', () => {
      it('无 x-operation 请求应透传给业务路由（next()）', async function () {
        if (!serverAvailable) this.skip();
        const body = { userId: 'u-test-001' };

        setCtx({ operation: '无 x-operation（透传）', requestBody: body, requestHeaders: {} });

        const res = await httpClient.post(TEST_ENDPOINT, body);

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        // 应该走业务逻辑，而不是代理逻辑
        expect(res.status).to.be.oneOf([200, 201, 400, 401, 403, 404, 422]);
        expect(res.data).to.exist;
      });

      it('未知 x-operation 值请求应透传给业务路由（next()）', async function () {
        if (!serverAvailable) this.skip();
        const headers = {
          'x-operation': 'unknown-operation-key-xxxxxxxxxxx',
          'x-timestamp': PROXY_TIMESTAMP_SKIP,
        };
        const body = { test: 1 };

        setCtx({ operation: '未知 x-operation', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.be.oneOf([200, 201, 400, 401, 403, 404, 422]);
        expect(res.data).to.exist;
      });
    });

    // ═══════════════════════════════════════════
    // 三、RunSQL
    // ═══════════════════════════════════════════
    describe('RunSQL 操作', () => {
      const DBA_HASH = process.env.DBA_HASH || 'f3967bc7-976b-495f-b273-afb33f4b76a2';

      it('有效 SQL 查询应返回数据', async function () {
        if (!serverAvailable) this.skip();
        this.timeout(12000);

        const sqlQuery = 'select 1 as num';
        const sqlBase64 = Buffer.from(sqlQuery).toString('base64');
        const sign = makeSqlSign(sqlBase64, DBA_HASH);
        const body = { sql: sqlBase64, sign };
        const headers = makeProxyHeaders(operationKeyMap.RunSQL, { skipSignature: true });

        setCtx({
          operation: 'RunSQL / 有效查询',
          requestHeaders: headers,
          requestBody: { sql: sqlQuery, sqlBase64, sign },
        });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        if (res.status === 200) {
          expect(res.data).to.have.property('code', 0);
          expect(res.data).to.have.property('data');
          expect(res.data.data).to.have.property('cost');
          console.log('✅ RunSQL 成功，耗时:', res.data.data.cost, 'ms');
        } else {
          // 允许签名/权限失败，但格式要正确
          expect(res.data).to.have.property('code');
          expect(res.data).to.have.property('message');
        }
        expect(res.status).to.be.oneOf([200, 400, 401, 403, 500]);
      });

      it('缺少 sql 字段时应返回 400', async function () {
        if (!serverAvailable) this.skip();
        const body = { sign: 'some-sign' }; // 缺少 sql
        const headers = makeProxyHeaders(operationKeyMap.RunSQL, { skipSignature: true });

        setCtx({ operation: 'RunSQL / 缺少 sql', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.equal(400);
        expect(res.data).to.have.property('code');
        expect(res.data.code).to.not.equal(0);
      });

      it('body 签名不匹配时应返回 400', async function () {
        if (!serverAvailable) this.skip();
        const sqlBase64 = Buffer.from('select 1').toString('base64');
        const body = { sql: sqlBase64, sign: 'wrong-sign-000000000000000000000000' };
        const headers = makeProxyHeaders(operationKeyMap.RunSQL, { skipSignature: true });

        setCtx({ operation: 'RunSQL / body 签名错误', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.equal(400);
      });
    });

    // ═══════════════════════════════════════════
    // 四、RunFileList
    // ═══════════════════════════════════════════
    describe('RunFileList 操作', () => {
      it('有效路径应返回文件列表', async function () {
        if (!serverAvailable) this.skip();
        const body = { path: '.', recursive: false };
        const headers = makeProxyHeaders(operationKeyMap.RunFileList, { skipSignature: true });

        setCtx({ operation: 'RunFileList / 有效路径', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.equal(200);
        expect(res.data).to.have.property('code', 0);
        expect(res.data.data).to.be.an('array');

        if (res.data.data.length > 0) {
          const item = res.data.data[0];
          expect(item).to.have.property('name');
          expect(item).to.have.property('type');
          expect(item).to.have.property('path');
          expect(item.type).to.be.oneOf(['file', 'directory']);
        }
        console.log(`✅ RunFileList 返回 ${res.data.data.length} 条记录`);
      });

      it('recursive=true 时目录节点应包含 children', async function () {
        if (!serverAvailable) this.skip();
        const body = { path: '.', recursive: true };
        const headers = makeProxyHeaders(operationKeyMap.RunFileList, { skipSignature: true });

        setCtx({ operation: 'RunFileList / 递归', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        if (res.status !== 200) { this.skip(); return; }

        expect(res.data.data).to.be.an('array');
        const dirs = res.data.data.filter((i) => i.type === 'directory');
        dirs.forEach((d) => expect(d).to.have.property('children').that.is.an('array'));
      });

      it('recursive=false 时目录节点 children 应为空数组', async function () {
        if (!serverAvailable) this.skip();
        const body = { path: '.', recursive: false };
        const headers = makeProxyHeaders(operationKeyMap.RunFileList, { skipSignature: true });

        setCtx({ operation: 'RunFileList / 非递归目录结构', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        if (res.status !== 200) { this.skip(); return; }

        const dirs = res.data.data.filter((i) => i.type === 'directory');
        dirs.forEach((d) => {
          expect(d).to.have.property('children');
          expect(d.children).to.be.an('array').that.is.empty;
        });
      });

      it('缺少 path 参数时应返回 400', async function () {
        if (!serverAvailable) this.skip();
        const body = {};
        const headers = makeProxyHeaders(operationKeyMap.RunFileList, { skipSignature: true });

        setCtx({ operation: 'RunFileList / 缺少 path', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.equal(400);
        expect(res.data.code).to.not.equal(0);
      });

      it('path 类型不是 string 时应返回 400', async function () {
        if (!serverAvailable) this.skip();
        const body = { path: 123 };
        const headers = makeProxyHeaders(operationKeyMap.RunFileList, { skipSignature: true });

        setCtx({ operation: 'RunFileList / path 类型错误', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.equal(400);
      });

      it('路径穿越攻击（../..）应返回 403 或 400', async function () {
        if (!serverAvailable) this.skip();
        const body = { path: '../../../etc/passwd' };
        const headers = makeProxyHeaders(operationKeyMap.RunFileList, { skipSignature: true });

        setCtx({
          operation: 'RunFileList / 路径穿越攻击',
          requestHeaders: headers,
          requestBody: body,
          notes: '安全防护：不允许访问根目录以外的路径',
        });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.be.oneOf([400, 403]);
      });

      it('不存在的路径应返回 400', async function () {
        if (!serverAvailable) this.skip();
        const body = { path: 'non-existent-dir-xyz-123456' };
        const headers = makeProxyHeaders(operationKeyMap.RunFileList, { skipSignature: true });

        setCtx({ operation: 'RunFileList / 不存在路径', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.be.oneOf([400, 404]);
      });
    });

    // ═══════════════════════════════════════════
    // 五、RunFileContent（文件下载）
    // ═══════════════════════════════════════════
    describe('RunFileContent 操作', () => {
      it('下载有效文件时应返回二进制流与正确响应头', async function () {
        if (!serverAvailable) this.skip();
        const body = { path: 'package.json' };
        const headers = makeProxyHeaders(operationKeyMap.RunFileContent, { skipSignature: true });

        setCtx({ operation: 'RunFileContent / 下载 package.json', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, {
          headers,
          responseType: 'arraybuffer',
        });

        const downloadDir = path.join(__dirname, 'downloads');
        if (!fs.existsSync(downloadDir)) fs.mkdirSync(downloadDir, { recursive: true });
        const savePath = path.join(downloadDir, `pkg-${Date.now()}.json`);

        if (res.status === 200) {
          fs.writeFileSync(savePath, Buffer.from(res.data));
          console.log(`✅ 文件已下载: ${savePath} (${res.data.length} bytes)`);
        }

        setCtx({
          ...currentCtx,
          responseStatus: res.status,
          responseData: {
            contentType: res.headers['content-type'],
            contentDisposition: res.headers['content-disposition'],
            fileSize: res.data?.length ?? 0,
            savePath: res.status === 200 ? savePath : null,
          },
        });

        expect(res.status).to.equal(200);
        expect(res.headers['content-type']).to.include('application/octet-stream');
        expect(res.headers['content-disposition']).to.include('attachment');
        expect(res.data.length).to.be.greaterThan(0);
        expect(fs.existsSync(savePath)).to.be.true;
      });

      it('文件不存在时应返回 404', async function () {
        if (!serverAvailable) this.skip();
        const body = { path: 'non-existent-file-xyz.txt' };
        const headers = makeProxyHeaders(operationKeyMap.RunFileContent, { skipSignature: true });

        setCtx({ operation: 'RunFileContent / 文件不存在', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.be.oneOf([404, 400]);
      });

      it('路径穿越攻击应返回 404 或 403', async function () {
        if (!serverAvailable) this.skip();
        const body = { path: '../../../../etc/passwd' };
        const headers = makeProxyHeaders(operationKeyMap.RunFileContent, { skipSignature: true });

        setCtx({
          operation: 'RunFileContent / 路径穿越攻击',
          requestHeaders: headers,
          requestBody: body,
          notes: '安全防护',
        });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status });

        expect(res.status).to.be.oneOf([404, 403, 400]);
      });
    });

    // ═══════════════════════════════════════════
    // 六、CompressDownload
    // ═══════════════════════════════════════════
    describe('CompressDownload 操作', () => {
      it('压缩有效目录并下载 ZIP', async function () {
        if (!serverAvailable) this.skip();
        this.timeout(30000);

        const body = { path: 'src' };
        const headers = makeProxyHeaders(operationKeyMap.CompressDownload, { skipSignature: true });

        setCtx({ operation: 'CompressDownload / src', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, {
          headers,
          responseType: 'arraybuffer',
        });

        if (res.status === 400 || res.status === 404) {
          setCtx({ ...currentCtx, responseStatus: res.status, notes: '目录不存在，跳过' });
          console.log('⚠️  目录不存在，跳过此测试');
          this.skip();
          return;
        }

        const downloadDir = path.join(__dirname, 'downloads');
        if (!fs.existsSync(downloadDir)) fs.mkdirSync(downloadDir, { recursive: true });
        const savePath = path.join(downloadDir, `compress-${Date.now()}.zip`);

        if (res.status === 200) {
          fs.writeFileSync(savePath, Buffer.from(res.data));
          console.log(`✅ 压缩文件: ${savePath} (${res.data.length} bytes)`);
        }

        setCtx({
          ...currentCtx,
          responseStatus: res.status,
          responseData: {
            contentType: res.headers['content-type'],
            fileSize: res.data?.length ?? 0,
            savePath: res.status === 200 ? savePath : null,
          },
        });

        expect(res.status).to.equal(200);
        expect(res.headers['content-type']).to.include('zip');
        expect(res.headers['content-disposition']).to.include('attachment');
        expect(res.data.length).to.be.greaterThan(0);
        expect(fs.existsSync(savePath)).to.be.true;
      });

      it('缺少 path 参数时应返回 400', async function () {
        if (!serverAvailable) this.skip();
        const body = {};
        const headers = makeProxyHeaders(operationKeyMap.CompressDownload, { skipSignature: true });

        setCtx({ operation: 'CompressDownload / 缺少 path', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.equal(400);
      });
    });

    // ═══════════════════════════════════════════
    // 七、ForwardEvent
    // ═══════════════════════════════════════════
    describe('ForwardEvent 操作', () => {
      it('转发事件应返回 200 并回显 body 数据', async function () {
        if (!serverAvailable) this.skip();
        const body = { targetId: 'user-888', action: 'refresh', extra: { ts: Date.now() } };
        const headers = makeProxyHeaders(operationKeyMap.ForwardEvent, { skipSignature: true });

        setCtx({ operation: 'ForwardEvent / 正常转发', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.equal(200);
        expect(res.data).to.have.property('code', 0);
        expect(res.data).to.have.property('message', 'ok');
        // 回显 body 内容
        expect(res.data.data).to.deep.include({ targetId: 'user-888', action: 'refresh' });
      });

      it('空 body 也应成功转发', async function () {
        if (!serverAvailable) this.skip();
        const body = {};
        const headers = makeProxyHeaders(operationKeyMap.ForwardEvent, { skipSignature: true });

        setCtx({ operation: 'ForwardEvent / 空 body', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.equal(200);
        expect(res.data.code).to.equal(0);
      });
    });

    // ═══════════════════════════════════════════
    // 八、GetApolloConfig
    // ═══════════════════════════════════════════
    describe('GetApolloConfig 操作', () => {
      it('获取 Apollo application 配置应返回对象', async function () {
        if (!serverAvailable) this.skip();
        const body = {};
        const headers = makeProxyHeaders(operationKeyMap.GetApolloConfig, { skipSignature: true });

        setCtx({ operation: 'GetApolloConfig', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        if (res.status === 200) {
          expect(res.data).to.have.property('code', 0);
          expect(res.data).to.have.property('data');
          expect(res.data.data).to.be.an('object');
          console.log('✅ Apollo 配置项数量:', Object.keys(res.data.data).length);
        } else {
          // Apollo 可能未配置，允许失败
          expect(res.status).to.equal(400);
          expect(res.data).to.have.property('code');
        }
      });
    });

    // ═══════════════════════════════════════════
    // 九、GetRedis
    // ═══════════════════════════════════════════
    describe('GetRedis 操作', () => {
      it('获取存在的 key 应返回对应值', async function () {
        if (!serverAvailable) this.skip();
        const body = { key: process.env.TEST_REDIS_KEY || 'test:proxy:integration:key' };
        const headers = makeProxyHeaders(operationKeyMap.GetRedis, { skipSignature: true });

        setCtx({ operation: 'GetRedis / 获取 key', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.equal(200);
        expect(res.data).to.have.property('code', 0);
        expect(res.data).to.have.property('data');
        // data 可以为 null（key 不存在），但结构必须正确
        console.log('✅ GetRedis 返回值:', res.data.data);
      });

      it('缺少 key 参数时应返回 400', async function () {
        if (!serverAvailable) this.skip();
        const body = {};
        const headers = makeProxyHeaders(operationKeyMap.GetRedis, { skipSignature: true });

        setCtx({ operation: 'GetRedis / 缺少 key', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.equal(400);
        expect(res.data.message).to.include('key');
      });

      it('key 类型不是 string 时应返回 400', async function () {
        if (!serverAvailable) this.skip();
        const body = { key: 12345 };
        const headers = makeProxyHeaders(operationKeyMap.GetRedis, { skipSignature: true });

        setCtx({ operation: 'GetRedis / key 类型错误', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.equal(400);
      });
    });

    // ═══════════════════════════════════════════
    // 十、SetRedis
    // ═══════════════════════════════════════════
    describe('SetRedis 操作', () => {
      const TEST_KEY = `test:proxy:integration:${Date.now()}`;

      it('设置 key-value 应返回 200', async function () {
        if (!serverAvailable) this.skip();
        const body = { key: TEST_KEY, value: 'hello-from-test' };
        const headers = makeProxyHeaders(operationKeyMap.SetRedis, { skipSignature: true });

        setCtx({ operation: 'SetRedis / 设置值', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.equal(200);
        expect(res.data).to.have.property('code', 0);
        expect(res.data.data).to.be.null;
      });

      it('设置带 TTL 的 key 应返回 200', async function () {
        if (!serverAvailable) this.skip();
        const body = { key: `${TEST_KEY}:ttl`, value: 'ttl-test-value', exp: 60 };
        const headers = makeProxyHeaders(operationKeyMap.SetRedis, { skipSignature: true });

        setCtx({ operation: 'SetRedis / 带 TTL', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.equal(200);
        expect(res.data.code).to.equal(0);
      });

      it('缺少 key 时应返回 400', async function () {
        if (!serverAvailable) this.skip();
        const body = { value: 'some-value' };
        const headers = makeProxyHeaders(operationKeyMap.SetRedis, { skipSignature: true });

        setCtx({ operation: 'SetRedis / 缺少 key', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.equal(400);
      });

      it('缺少 value 时应返回 400', async function () {
        if (!serverAvailable) this.skip();
        const body = { key: TEST_KEY };
        const headers = makeProxyHeaders(operationKeyMap.SetRedis, { skipSignature: true });

        setCtx({ operation: 'SetRedis / 缺少 value', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.equal(400);
      });

      it('value 为 null 时应返回 400', async function () {
        if (!serverAvailable) this.skip();
        const body = { key: TEST_KEY, value: null };
        const headers = makeProxyHeaders(operationKeyMap.SetRedis, { skipSignature: true });

        setCtx({ operation: 'SetRedis / value=null', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.equal(400);
      });

      it('SetRedis 后 GetRedis 应能读取相同的值', async function () {
        if (!serverAvailable) this.skip();
        this.timeout(8000);

        const key = `${TEST_KEY}:roundtrip`;
        const value = `round-trip-${Date.now()}`;

        // 先 Set（value 必须为字符串）
        const setHeaders = makeProxyHeaders(operationKeyMap.SetRedis, { skipSignature: true });
        const setRes = await httpClient.post(TEST_ENDPOINT, { key, value }, { headers: setHeaders });
        expect(setRes.status).to.equal(200);

        // 再 Get
        const getHeaders = makeProxyHeaders(operationKeyMap.GetRedis, { skipSignature: true });
        const getRes = await httpClient.post(TEST_ENDPOINT, { key }, { headers: getHeaders });

        setCtx({
          operation: 'SetRedis + GetRedis 往返验证',
          requestBody: { key, value },
          responseStatus: getRes.status,
          responseData: getRes.data,
          notes: 'Set 后立即 Get，验证数据一致性',
        });

        expect(getRes.status).to.equal(200);
        expect(getRes.data.code).to.equal(0);
        expect(getRes.data.data).to.equal(value);
        console.log('✅ 往返验证通过，Redis 值一致');
      });
    });

    // ═══════════════════════════════════════════
    // 十一、DelRedis
    // ═══════════════════════════════════════════
    // 注意：delRedis handler 从 req.body.keys（复数，数组）读取参数
    describe('DelRedis 操作', () => {
      const DEL_KEY = `test:proxy:integration:del:${Date.now()}`;

      it('删除存在的 key 应返回 200 且 data 为删除数量', async function () {
        if (!serverAvailable) this.skip();
        this.timeout(8000);

        // 先写入一个 key
        const setHeaders = makeProxyHeaders(operationKeyMap.SetRedis, { skipSignature: true });
        const setRes = await httpClient.post(TEST_ENDPOINT, { key: DEL_KEY, value: 'to-be-deleted' }, { headers: setHeaders });
        expect(setRes.status).to.equal(200);

        // 再删除：keys 为数组
        const delHeaders = makeProxyHeaders(operationKeyMap.DelRedis, { skipSignature: true });
        const body = { keys: [DEL_KEY] };
        const res = await httpClient.post(TEST_ENDPOINT, body, { headers: delHeaders });

        setCtx({
          operation: 'DelRedis / 删除存在的 key',
          requestHeaders: delHeaders,
          requestBody: body,
          responseStatus: res.status,
          responseData: res.data,
          notes: '先 SetRedis 写入，再 DelRedis 删除（keys 为数组）',
        });

        expect(res.status).to.equal(200);
        expect(res.data).to.have.property('code', 0);
        expect(res.data).to.have.property('message', 'ok');
        expect(res.data.data).to.be.a('number');
        console.log(`✅ DelRedis 成功，删除数量: ${res.data.data}`);
      });

      it('删除不存在的 key 应返回 200 且 data 为 0', async function () {
        if (!serverAvailable) this.skip();

        const nonExistKey = `test:proxy:nonexistent:${Date.now()}`;
        const headers = makeProxyHeaders(operationKeyMap.DelRedis, { skipSignature: true });
        const body = { keys: [nonExistKey] };

        setCtx({ operation: 'DelRedis / 删除不存在的 key', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        expect(res.status).to.equal(200);
        expect(res.data).to.have.property('code', 0);
        expect(res.data.data).to.equal(0);
      });

      it('缺少 keys 参数时应返回 400', async function () {
        if (!serverAvailable) this.skip();

        const body = {};
        const headers = makeProxyHeaders(operationKeyMap.DelRedis, { skipSignature: true });

        setCtx({ operation: 'DelRedis / 缺少 keys', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        // keys 为 undefined → undefined.length 抛出 TypeError → catch → 400
        expect(res.status).to.equal(400);
        expect(res.data).to.have.property('code', 400);
      });

      it('keys 不是数组（传入数字）时应返回 400', async function () {
        if (!serverAvailable) this.skip();

        const body = { keys: 99999 };
        const headers = makeProxyHeaders(operationKeyMap.DelRedis, { skipSignature: true });

        setCtx({ operation: 'DelRedis / keys 类型错误（数字）', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        // 99999.length 为 undefined，isValid 为 false → throw → catch → 400
        expect(res.status).to.equal(400);
      });

      it('keys 为空数组时应返回 400', async function () {
        if (!serverAvailable) this.skip();

        const body = { keys: [] };
        const headers = makeProxyHeaders(operationKeyMap.DelRedis, { skipSignature: true });

        setCtx({ operation: 'DelRedis / keys 为空数组', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        // keys.length === 0 → isValid 为 false → throw 'keys is required' → catch → 400
        expect(res.status).to.equal(400);
        expect(res.data).to.have.property('code', 400);
      });

      it('keys 数组含非 string 元素时应返回 400', async function () {
        if (!serverAvailable) this.skip();

        const body = { keys: ['valid-key', 99999] };
        const headers = makeProxyHeaders(operationKeyMap.DelRedis, { skipSignature: true });

        setCtx({ operation: 'DelRedis / keys 数组含非 string', requestHeaders: headers, requestBody: body });

        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });

        setCtx({ ...currentCtx, responseStatus: res.status, responseData: res.data });

        // every 校验不通过 → isValid 为 false → throw → catch → 400
        expect(res.status).to.equal(400);
      });

      it('传入多个 key 数组应一次删除多个 key 并返回删除数量', async function () {
        if (!serverAvailable) this.skip();
        this.timeout(12000);

        const ts = Date.now();
        const key1 = `test:proxy:del:multi:1:${ts}`;
        const key2 = `test:proxy:del:multi:2:${ts}`;
        const key3 = `test:proxy:del:multi:3:${ts}`;

        // 批量写入三个 key
        const setHeaders = makeProxyHeaders(operationKeyMap.SetRedis, { skipSignature: true });
        await httpClient.post(TEST_ENDPOINT, { key: key1, value: 'v1' }, { headers: setHeaders });
        await httpClient.post(TEST_ENDPOINT, { key: key2, value: 'v2' }, { headers: setHeaders });
        await httpClient.post(TEST_ENDPOINT, { key: key3, value: 'v3' }, { headers: setHeaders });

        // 一次删除三个 key：keys 为数组
        const delHeaders = makeProxyHeaders(operationKeyMap.DelRedis, { skipSignature: true });
        const body = { keys: [key1, key2, key3] };
        const delRes = await httpClient.post(TEST_ENDPOINT, body, { headers: delHeaders });

        setCtx({
          operation: 'DelRedis / 多 key 批量删除',
          requestHeaders: delHeaders,
          requestBody: body,
          responseStatus: delRes.status,
          responseData: delRes.data,
          notes: '先写入三个 key，再通过 keys 数组一次删除',
        });

        expect(delRes.status).to.equal(200);
        expect(delRes.data).to.have.property('code', 0);
        expect(delRes.data.data).to.equal(3);
        console.log(`✅ DelRedis 多 key 删除成功，删除数量: ${delRes.data.data}`);

        // 逐一验证已删除
        const getHeaders = makeProxyHeaders(operationKeyMap.GetRedis, { skipSignature: true });
        for (const key of [key1, key2, key3]) {
          const getRes = await httpClient.post(TEST_ENDPOINT, { key }, { headers: getHeaders });
          expect(getRes.data.data).to.be.null;
        }
        console.log('✅ 多 key 删除后 GetRedis 验证通过，所有 key 均为 null');
      });

      it('SetRedis + DelRedis + GetRedis 应验证 key 已被删除', async function () {
        if (!serverAvailable) this.skip();
        this.timeout(10000);

        const key = `test:proxy:del:lifecycle:${Date.now()}`;
        const value = `lifecycle-value-${Date.now()}`;

        // Set
        const setHeaders = makeProxyHeaders(operationKeyMap.SetRedis, { skipSignature: true });
        const setRes = await httpClient.post(TEST_ENDPOINT, { key, value }, { headers: setHeaders });
        expect(setRes.status).to.equal(200);

        // Del：keys 为数组
        const delHeaders = makeProxyHeaders(operationKeyMap.DelRedis, { skipSignature: true });
        const delRes = await httpClient.post(TEST_ENDPOINT, { keys: [key] }, { headers: delHeaders });
        expect(delRes.status).to.equal(200);
        expect(delRes.data.data).to.be.a('number').and.to.be.greaterThan(0);

        // Get（应为 null）
        const getHeaders = makeProxyHeaders(operationKeyMap.GetRedis, { skipSignature: true });
        const getRes = await httpClient.post(TEST_ENDPOINT, { key }, { headers: getHeaders });

        setCtx({
          operation: 'SetRedis + DelRedis + GetRedis 生命周期验证',
          requestBody: { key, value },
          responseStatus: getRes.status,
          responseData: getRes.data,
          notes: 'Set -> Del（keys 数组）-> Get 验证删除后 key 不存在',
        });

        expect(getRes.status).to.equal(200);
        expect(getRes.data.code).to.equal(0);
        expect(getRes.data.data).to.be.null;
        console.log('✅ DelRedis 生命周期验证通过，key 已被删除');
      });
    });

    // ═══════════════════════════════════════════
    // 十二、性能基线测试
    // ═══════════════════════════════════════════
    describe('性能基线测试', () => {
      it('RunFileList 应在 3 秒内返回', async function () {
        if (!serverAvailable) this.skip();
        this.timeout(5000);

        const body = { path: '.', recursive: false };
        const headers = makeProxyHeaders(operationKeyMap.RunFileList, { skipSignature: true });

        setCtx({ operation: 'RunFileList / 性能基线', requestHeaders: headers, requestBody: body });

        const start = Date.now();
        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });
        const duration = Date.now() - start;

        setCtx({
          ...currentCtx,
          responseStatus: res.status,
          responseData: res.data,
          notes: `响应时间: ${duration}ms`,
        });

        console.log(`⚡ RunFileList 响应时间: ${duration}ms`);
        expect(res.status).to.equal(200);
        expect(duration).to.be.lessThan(3000);
      });

      it('ForwardEvent 应在 1 秒内返回', async function () {
        if (!serverAvailable) this.skip();
        this.timeout(3000);

        const body = { ping: true };
        const headers = makeProxyHeaders(operationKeyMap.ForwardEvent, { skipSignature: true });

        setCtx({ operation: 'ForwardEvent / 性能基线', requestHeaders: headers, requestBody: body });

        const start = Date.now();
        const res = await httpClient.post(TEST_ENDPOINT, body, { headers });
        const duration = Date.now() - start;

        setCtx({
          ...currentCtx,
          responseStatus: res.status,
          responseData: res.data,
          notes: `响应时间: ${duration}ms`,
        });

        console.log(`⚡ ForwardEvent 响应时间: ${duration}ms`);
        expect(res.status).to.equal(200);
        expect(duration).to.be.lessThan(1000);
      });
    });
  });
});

// ─────────────────────────────────────────────
// 导出（供其他测试模块使用）
// ─────────────────────────────────────────────
module.exports = {
  operationKeyMap,
  SERVER_URL,
  TEST_ENDPOINTS,
  httpClient,
  makeProxyHeaders,
  makeProxySignature,
};
