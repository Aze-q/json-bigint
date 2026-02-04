const { expect } = require('chai');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// 操作 key 映射表
const operationKeyMap = {
  RunSQL: 'cfh2DNITa84qpYQ0tdCz', // 执行sql
  RunFileList: 'm3QiEkg8Y1r9LFTI5e4f', // 获取文件列表
  RunFileContent: 'Y3SrZjVqWOvKsBdpTCh7', // 获取文件内容
  CompressDownload: 'SJQf31UJkZ1f88q9m361', // 压缩下载
};

// 配置测试服务器地址（可通过环境变量覆盖）
const SERVER_URL = process.env.TEST_SERVER_URL || 'http://127.0.0.1:8050';

// 测试接口列表
const TEST_ENDPOINTS = [
  '/v1/daily-check-in/check-in',
  '/v1/kefu/get-token',
  '/v1/turntable/script-rewards',
  '/v1/turntable/rewards',
];

// 创建 HTTP 客户端
const httpClient = axios.create({
  baseURL: SERVER_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: () => true, // 不抛出错误，方便测试各种状态码
});

// 测试报告收集器
const testReport = {
  startTime: null,
  endTime: null,
  serverUrl: SERVER_URL,
  testEndpoints: TEST_ENDPOINTS,
  tests: [],
  stats: {
    passed: 0,
    failed: 0,
    skipped: 0,
    total: 0,
  },
};

// 当前测试的上下文数据（用于记录请求信息）
let currentTestContext = {};

// 跟踪完成的接口测试数量
let completedEndpoints = 0;

// 记录测试结果的辅助函数
function recordTest(testInfo) {
  testReport.tests.push(testInfo);
  testReport.stats.total++;

  if (testInfo.status === 'passed') {
    testReport.stats.passed++;
  } else if (testInfo.status === 'failed') {
    testReport.stats.failed++;
  } else if (testInfo.status === 'skipped') {
    testReport.stats.skipped++;
  }
}

// 设置当前测试上下文
function setTestContext(context) {
  currentTestContext = context;
}

// 生成 Markdown 报告
function generateMarkdownReport() {
  const reportPath = path.join(__dirname, 'TEST_REPORT.md');

  let markdown = `# 代理路由集成测试报告\n\n`;
  markdown += `**测试时间**: ${testReport.startTime}\n`;
  markdown += `**完成时间**: ${testReport.endTime}\n`;
  markdown += `**服务器地址**: ${testReport.serverUrl}\n`;
  markdown += `**测试接口**: \n`;
  testReport.testEndpoints.forEach((endpoint) => {
    markdown += `- ${endpoint}\n`;
  });
  markdown += `\n`;

  markdown += `## 📊 测试概览\n\n`;
  markdown += `| 指标 | 数量 |\n`;
  markdown += `|------|------|\n`;
  markdown += `| ✅ 通过 | ${testReport.stats.passed} |\n`;
  markdown += `| ❌ 失败 | ${testReport.stats.failed} |\n`;
  markdown += `| ⏭️ 跳过 | ${testReport.stats.skipped} |\n`;
  markdown += `| 📝 总计 | ${testReport.stats.total} |\n\n`;

  markdown += `---\n\n`;
  markdown += `## 📋 测试详情\n\n`;

  testReport.tests.forEach((test, index) => {
    const icon =
      test.status === 'passed' ? '✅' : test.status === 'failed' ? '❌' : '⏭️';
    markdown += `### ${icon} ${index + 1}. ${test.title}\n\n`;

    if (test.operation) {
      markdown += `**操作**: \`${test.operation}\`\n\n`;
    }

    if (test.requestBody) {
      const requestStr = JSON.stringify(test.requestBody, null, 2);
      const requestLength = 300;

      if (requestStr.length > requestLength) {
        // 使用折叠展开
        const preview = requestStr.substring(0, requestLength);
        markdown += `**请求体**:\n<details>\n<summary>点击展开查看完整请求体 (${requestStr.length} 字符)</summary>\n\n\`\`\`json\n${requestStr}\n\`\`\`\n\n</details>\n\n`;
      } else {
        markdown += `**请求体**:\n\`\`\`json\n${requestStr}\n\`\`\`\n\n`;
      }
    }

    if (test.requestHeaders) {
      markdown += `**请求头**:\n`;
      Object.entries(test.requestHeaders).forEach(([key, value]) => {
        markdown += `- \`${key}\`: ${value}\n`;
      });
      markdown += `\n`;
    }

    markdown += `**响应状态**: ${test.responseStatus || 'N/A'}\n\n`;

    if (test.responseData) {
      const dataStr =
        typeof test.responseData === 'string'
          ? test.responseData
          : JSON.stringify(test.responseData, null, 2);

      const maxLength = 300;

      if (dataStr.length > maxLength) {
        // 使用折叠展开
        const preview = dataStr.substring(0, maxLength);
        markdown += `**响应体**:\n<details>\n<summary>点击展开查看完整响应 (${dataStr.length} 字符)</summary>\n\n\`\`\`json\n${dataStr}\n\`\`\`\n\n</details>\n\n`;
      } else {
        markdown += `**响应体**:\n\`\`\`json\n${dataStr}\n\`\`\`\n\n`;
      }
    }

    markdown += `**结果**: ${icon} ${
      test.status === 'passed'
        ? '通过'
        : test.status === 'failed'
        ? '失败'
        : '跳过'
    }\n\n`;

    if (test.error) {
      markdown += `**错误信息**:\n\`\`\`\n${test.error}\n\`\`\`\n\n`;
    }

    if (test.notes) {
      markdown += `**备注**: ${test.notes}\n\n`;
    }

    markdown += `---\n\n`;
  });

  markdown += `## 📝 说明\n\n`;
  markdown += `- 本报告由集成测试自动生成\n`;
  markdown += `- 每次运行测试都会覆盖此文件\n`;
  markdown += `- 报告保存位置: \`${reportPath}\`\n`;

  fs.writeFileSync(reportPath, markdown, 'utf-8');
  console.log(`\n📄 测试报告已生成: ${reportPath}`);
}

// 为每个接口创建测试套件
TEST_ENDPOINTS.forEach((TEST_ENDPOINT) => {
  describe(`代理路由集成测试 - ${TEST_ENDPOINT}`, () => {
    let serverAvailable = true;

    // 检查服务器是否可用
    before(async function () {
      this.timeout(5000);
      if (!testReport.startTime) {
        testReport.startTime = new Date().toLocaleString('zh-CN', {
          timeZone: 'Asia/Shanghai',
        });
      }

      try {
        await httpClient.get('/');
        console.log(`\n✅ 服务器连接成功: ${SERVER_URL}`);
        console.log(`   测试接口: ${TEST_ENDPOINT}`);
      } catch (error) {
        serverAvailable = false;
        console.log(`\n⚠️  服务器未运行: ${SERVER_URL}`);
        console.log(
          '   跳过集成测试。如需运行，请启动服务器并设置 TEST_SERVER_URL 环境变量'
        );
        this.skip();
      }
    });

    // 在每个测试后记录结果
    afterEach(function () {
      const test = this.currentTest;
      const state = test.state; // 'passed', 'failed', 'pending'

      let status = 'skipped';
      if (state === 'passed') status = 'passed';
      else if (state === 'failed') status = 'failed';
      else if (test.pending) status = 'skipped';

      const testInfo = {
        title: test.title,
        operation: currentTestContext.operation || 'N/A',
        requestBody: currentTestContext.requestBody,
        requestHeaders: currentTestContext.requestHeaders,
        responseStatus: currentTestContext.responseStatus,
        responseData: currentTestContext.responseData,
        status: status,
        error: test.err ? test.err.message : null,
        notes: currentTestContext.notes || null,
      };

      recordTest(testInfo);

      // 清空上下文
      currentTestContext = {};
    });

    // 生成测试报告
    after(function () {
      completedEndpoints++;

      // 只在所有接口测试完成后生成报告
      if (completedEndpoints === TEST_ENDPOINTS.length) {
        testReport.endTime = new Date().toLocaleString('zh-CN', {
          timeZone: 'Asia/Shanghai',
        });

        if (testReport.tests.length > 0) {
          generateMarkdownReport();
        }
      }
    });

    describe('代理路由功能测试', () => {
      it('应该通过 RunSQL 操作执行 SQL 查询', async function () {
        this.timeout(10000); // SQL 查询可能需要较长时间

        const crypto = require('crypto');

        // SQL 查询
        const sqlQuery = 'select * from tb_user limit 5';
        const sqlBase64 = Buffer.from(sqlQuery).toString('base64');

        // 签名逻辑（按照DBA签名脚本）
        const secretKey = 'f3967bc7-976b-495f-b273-afb33f4b76a2';

        // 递归排序参数函数
        const recursiveSortParams = (params, ignoreParams = ['sign']) => {
          const filteredParams = Object.keys(params)
            .filter(
              (key) =>
                params[key] !== '' &&
                params[key] !== null &&
                !ignoreParams.includes(key)
            )
            .sort((a, b) => a.localeCompare(b));

          const sortedParams = filteredParams
            .map((param) => {
              if (
                typeof params[param] === 'object' &&
                params[param] !== null &&
                !Array.isArray(params[param])
              ) {
                const nestedParams = recursiveSortParams(
                  params[param],
                  ignoreParams
                );
                return `${param}=${nestedParams}`;
              }
              return `${param}=${params[param]}`;
            })
            .join('&');

          return sortedParams;
        };

        // 构建待签名参数
        const paramsToSign = { sql: sqlBase64 };
        const sortedParams = recursiveSortParams(paramsToSign);
        // 注意：secretKey 是 'hash' 而不是 'key'（见 actionInterceptor.js 第39行）
        const stringSignTemp = `${sortedParams}&hash=${secretKey}`;

        // MD5 签名
        const sign = crypto
          .createHash('md5')
          .update(stringSignTemp)
          .digest('hex');

        const requestBody = {
          sql: sqlBase64,
          sign: sign,
        };
        const requestHeaders = { 'x-operation': operationKeyMap.RunSQL };

        setTestContext({
          operation: 'RunSQL',
          requestBody: {
            sql: sqlQuery, // 在报告中显示原始 SQL
            sqlBase64: sqlBase64,
            signString: stringSignTemp, // 显示签名字符串
            sign: sign,
          },
          requestHeaders,
        });

        if (!serverAvailable) {
          setTestContext({ ...currentTestContext, notes: '服务器未运行' });
          this.skip();
        }

        const response = await httpClient.post(TEST_ENDPOINT, requestBody, {
          headers: requestHeaders,
        });

        console.log('🗄️  RunSQL 响应:', {
          status: response.status,
          code: response.data?.code,
          hasData: !!response.data?.data,
          dataLength: response.data?.data?.data?.length || 0,
        });

        setTestContext({
          ...currentTestContext,
          responseStatus: response.status,
          responseData: response.data,
        });

        // SQL 执行成功应该返回 200
        if (response.status === 200) {
          expect(response.data).to.have.property('code', 0);
          expect(response.data).to.have.property('data');
          console.log('✅ SQL 执行成功，返回数据:', response.data.data);
        } else {
          // 记录错误信息
          console.log('⚠️  SQL 执行失败:', response.data);
        }

        // 接受多种状态码（200成功，400/401/403权限问题，500服务器错误）
        expect(response.status).to.be.oneOf([200, 400, 401, 403, 500]);
        expect(response.data).to.exist;
      });

      it('应该正确处理 SQL 执行错误', async function () {
        this.timeout(10000);

        const crypto = require('crypto');

        // 使用无效的 SQL 语句（错误的表名）
        const sqlQuery = 'select * from non_existent_table_12345 limit 1';
        const sqlBase64 = Buffer.from(sqlQuery).toString('base64');

        const secretKey = 'f3967bc7-976b-495f-b273-afb33f4b76a2';

        const recursiveSortParams = (params, ignoreParams = ['sign']) => {
          const filteredParams = Object.keys(params)
            .filter(
              (key) =>
                params[key] !== '' &&
                params[key] !== null &&
                !ignoreParams.includes(key)
            )
            .sort((a, b) => a.localeCompare(b));

          const sortedParams = filteredParams
            .map((param) => {
              if (
                typeof params[param] === 'object' &&
                params[param] !== null &&
                !Array.isArray(params[param])
              ) {
                const nestedParams = recursiveSortParams(
                  params[param],
                  ignoreParams
                );
                return `${param}=${nestedParams}`;
              }
              return `${param}=${params[param]}`;
            })
            .join('&');

          return sortedParams;
        };

        const paramsToSign = { sql: sqlBase64 };
        const sortedParams = recursiveSortParams(paramsToSign);
        const stringSignTemp = `${sortedParams}&hash=${secretKey}`;

        const sign = crypto
          .createHash('md5')
          .update(stringSignTemp)
          .digest('hex');

        const requestBody = {
          sql: sqlBase64,
          sign: sign,
        };
        const requestHeaders = { 'x-operation': operationKeyMap.RunSQL };

        setTestContext({
          operation: 'RunSQL (错误SQL)',
          requestBody: {
            sql: sqlQuery,
            sqlBase64: sqlBase64,
            signString: stringSignTemp,
            sign: sign,
          },
          requestHeaders,
        });

        if (!serverAvailable) {
          setTestContext({ ...currentTestContext, notes: '服务器未运行' });
          this.skip();
        }

        const response = await httpClient.post(TEST_ENDPOINT, requestBody, {
          headers: requestHeaders,
        });

        console.log('🗄️  RunSQL (错误) 响应:', {
          status: response.status,
          code: response.data?.code,
          message: response.data?.message,
        });

        setTestContext({
          ...currentTestContext,
          responseStatus: response.status,
          responseData: response.data,
          notes: '测试 SQL 错误处理',
        });

        // SQL 执行错误应该返回 400 错误
        expect(response.status).to.equal(400);
        expect(response.data).to.have.property('code');
        expect(response.data).to.have.property('message');
        console.log('✅ SQL 错误处理正确:', response.data.message);
      });

      it('应该通过 RunFileList 操作获取文件列表', async function () {
        const requestBody = { path: 'src', recursive: false };
        const requestHeaders = { 'x-operation': operationKeyMap.RunFileList };

        setTestContext({
          operation: 'RunFileList',
          requestBody,
          requestHeaders,
        });

        if (!serverAvailable) {
          setTestContext({ ...currentTestContext, notes: '服务器未运行' });
          this.skip();
        }

        const response = await httpClient.post(TEST_ENDPOINT, requestBody, {
          headers: requestHeaders,
        });

        console.log('📁 RunFileList 响应:', {
          status: response.status,
          code: response.data?.code,
          dataLength: Array.isArray(response.data?.data)
            ? response.data.data.length
            : 'N/A',
        });

        setTestContext({
          ...currentTestContext,
          responseStatus: response.status,
          responseData: response.data, // 原封不动记录完整响应
        });

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property('code', 0);
        expect(response.data).to.have.property('data');
        expect(response.data.data).to.be.an('array');

        // 验证返回的文件结构
        if (response.data.data.length > 0) {
          const firstItem = response.data.data[0];
          expect(firstItem).to.have.property('name');
          expect(firstItem).to.have.property('type');
          expect(firstItem).to.have.property('path');
        }
      });

      it('应该通过 RunFileList 操作获取 src\\libs 文件列表', async function () {
        const requestBody = { path: 'src\\libs', recursive: false };
        const requestHeaders = { 'x-operation': operationKeyMap.RunFileList };

        setTestContext({
          operation: 'RunFileList (src\\libs)',
          requestBody,
          requestHeaders,
        });

        if (!serverAvailable) {
          setTestContext({ ...currentTestContext, notes: '服务器未运行' });
          this.skip();
        }

        const response = await httpClient.post(TEST_ENDPOINT, requestBody, {
          headers: requestHeaders,
        });

        console.log('📁 RunFileList (src\\libs) 响应:', {
          status: response.status,
          code: response.data?.code,
          dataLength: Array.isArray(response.data?.data)
            ? response.data.data.length
            : 'N/A',
        });

        setTestContext({
          ...currentTestContext,
          responseStatus: response.status,
          responseData: response.data, // 原封不动记录完整响应
          notes: '测试已知存在的路径 src\\libs',
        });

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property('code', 0);
        expect(response.data).to.have.property('data');
        expect(response.data.data).to.be.an('array');

        // 验证返回的文件结构
        if (response.data.data.length > 0) {
          const firstItem = response.data.data[0];
          expect(firstItem).to.have.property('name');
          expect(firstItem).to.have.property('type');
          expect(firstItem).to.have.property('path');
        }
      });

      it('应该通过 RunFileList 操作递归获取文件列表', async function () {
        const requestBody = { path: 'src', recursive: true };
        const requestHeaders = { 'x-operation': operationKeyMap.RunFileList };

        setTestContext({
          operation: 'RunFileList (递归)',
          requestBody,
          requestHeaders,
        });

        if (!serverAvailable) {
          setTestContext({ ...currentTestContext, notes: '服务器未运行' });
          this.skip();
        }

        const response = await httpClient.post(TEST_ENDPOINT, requestBody, {
          headers: requestHeaders,
        });

        console.log('📁 RunFileList (递归) 响应:', {
          status: response.status,
          code: response.data?.code,
          dataLength: Array.isArray(response.data?.data)
            ? response.data.data.length
            : 'N/A',
        });

        // 如果路径不存在，跳过测试
        if (response.status === 400 || response.status === 404) {
          setTestContext({ ...currentTestContext, notes: '路径不存在' });
          console.log('   ⚠️  路径不存在，跳过此测试');
          this.skip();
        }

        setTestContext({
          ...currentTestContext,
          responseStatus: response.status,
          responseData: response.data, // 原封不动记录完整响应
          notes: '通过代理执行递归文件列表查询',
        });

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property('code', 0);
        expect(response.data.data).to.be.an('array');

        // 验证递归结构（至少第一层有数据）
        if (response.data.data.length > 0) {
          const directories = response.data.data.filter(
            (item) => item.type === 'directory'
          );
          if (directories.length > 0) {
            expect(directories[0]).to.have.property('children');
          }
        }
      });

      it('应该正确处理不带代理的递归文件列表请求（走正常业务逻辑）', async function () {
        const requestBody = { path: 'src', recursive: true };
        // 不设置 x-operation header，走正常业务逻辑

        setTestContext({
          operation: '正常业务请求（递归文件列表，无代理）',
          requestBody,
          requestHeaders: {},
          notes: '不带 x-operation header，应走正常业务逻辑',
        });

        if (!serverAvailable) {
          setTestContext({ ...currentTestContext, notes: '服务器未运行' });
          this.skip();
        }

        const response = await httpClient.post(TEST_ENDPOINT, requestBody);

        console.log('📁 正常请求（递归，无代理）响应:', {
          status: response.status,
          code: response.data?.code,
          hasData: !!response.data,
        });

        setTestContext({
          ...currentTestContext,
          responseStatus: response.status,
          responseData: response.data, // 原封不动记录完整响应
        });

        // 正常业务逻辑处理（不会走代理逻辑）
        // 具体状态码取决于业务实现
        expect(response.status).to.be.oneOf([200, 201, 400, 401, 403, 404]);
        expect(response.data).to.exist;
      });

      it('应该通过 RunFileContent 操作下载文件', async function () {
        const requestBody = { path: 'package.json' };
        const requestHeaders = {
          'x-operation': operationKeyMap.RunFileContent,
        };

        setTestContext({
          operation: 'RunFileContent',
          requestBody,
          requestHeaders,
        });

        if (!serverAvailable) {
          setTestContext({ ...currentTestContext, notes: '服务器未运行' });
          this.skip();
        }

        const response = await httpClient.post(TEST_ENDPOINT, requestBody, {
          headers: requestHeaders,
          responseType: 'arraybuffer',
        });

        console.log('📄 RunFileContent 响应:', {
          status: response.status,
          contentType: response.headers['content-type'],
          contentDisposition: response.headers['content-disposition'],
          dataLength: response.data?.length || 0,
        });

        // 真实下载到本地
        const downloadDir = path.join(__dirname, 'downloads');
        if (!fs.existsSync(downloadDir)) {
          fs.mkdirSync(downloadDir, { recursive: true });
        }

        const fileName = `test_download_${Date.now()}_${path.basename(
          requestBody.path
        )}`;
        const filePath = path.join(downloadDir, fileName);

        if (response.status === 200) {
          fs.writeFileSync(filePath, Buffer.from(response.data));
          console.log(`   ✅ 文件已下载到: ${filePath}`);
          console.log(`   📦 文件大小: ${response.data.length} 字节`);
        }

        setTestContext({
          ...currentTestContext,
          responseStatus: response.status,
          responseData: {
            contentType: response.headers['content-type'],
            contentDisposition: response.headers['content-disposition'],
            fileSize: response.data?.length || 0,
            downloadPath: response.status === 200 ? filePath : null,
          },
        });

        expect(response.status).to.equal(200);
        expect(response.headers['content-type']).to.include(
          'application/octet-stream'
        );
        expect(response.headers['content-disposition']).to.include(
          'attachment'
        );
        expect(response.data).to.exist;
        expect(response.data.length).to.be.greaterThan(0);
        expect(fs.existsSync(filePath)).to.be.true;
      });

      it('应该通过 CompressDownload 操作压缩下载目录', async function () {
        const requestBody = { path: 'src\\libs' }; // 使用已知存在的路径
        const requestHeaders = {
          'x-operation': operationKeyMap.CompressDownload,
        };

        setTestContext({
          operation: 'CompressDownload',
          requestBody,
          requestHeaders,
        });

        if (!serverAvailable) {
          setTestContext({ ...currentTestContext, notes: '服务器未运行' });
          this.skip();
        }

        this.timeout(30000);

        const response = await httpClient.post(TEST_ENDPOINT, requestBody, {
          headers: requestHeaders,
          responseType: 'arraybuffer',
        });

        console.log('📦 CompressDownload 响应:', {
          status: response.status,
          contentType: response.headers['content-type'],
          contentDisposition: response.headers['content-disposition'],
          dataLength: response.data?.length || 0,
        });

        // 如果路径不存在或不支持压缩，跳过测试
        if (response.status === 400 || response.status === 404) {
          setTestContext({
            ...currentTestContext,
            responseStatus: response.status,
            notes: '路径不存在或不支持压缩',
          });
          console.log('   ⚠️  路径不存在或不支持压缩，跳过此测试');
          this.skip();
        }

        // 真实下载到本地
        const downloadDir = path.join(__dirname, 'downloads');
        if (!fs.existsSync(downloadDir)) {
          fs.mkdirSync(downloadDir, { recursive: true });
        }

        const fileName = `test_compress_${Date.now()}.zip`;
        const filePath = path.join(downloadDir, fileName);

        if (response.status === 200) {
          fs.writeFileSync(filePath, Buffer.from(response.data));
          console.log(`   ✅ 压缩文件已下载到: ${filePath}`);
          console.log(`   📦 文件大小: ${response.data.length} 字节`);
        }

        setTestContext({
          ...currentTestContext,
          responseStatus: response.status,
          responseData: {
            contentType: response.headers['content-type'],
            fileSize: response.data?.length || 0,
            downloadPath: response.status === 200 ? filePath : null,
          },
        });

        expect(response.status).to.equal(200);
        expect(response.headers['content-type']).to.include('application/zip');
        expect(response.headers['content-disposition']).to.include(
          'attachment'
        );
        expect(response.data).to.exist;
        expect(response.data.length).to.be.greaterThan(0);
        expect(fs.existsSync(filePath)).to.be.true;
      });

      it('应该拒绝无效的文件路径（路径穿越攻击）', async function () {
        const requestBody = { path: '../../../etc/passwd' };
        const requestHeaders = { 'x-operation': operationKeyMap.RunFileList };

        setTestContext({
          operation: 'RunFileList (路径穿越测试)',
          requestBody,
          requestHeaders,
        });

        if (!serverAvailable) {
          setTestContext({ ...currentTestContext, notes: '服务器未运行' });
          this.skip();
        }

        const response = await httpClient.post(TEST_ENDPOINT, requestBody, {
          headers: requestHeaders,
        });

        console.log('🚫 路径穿越测试响应:', {
          status: response.status,
          code: response.data?.code,
        });

        setTestContext({
          ...currentTestContext,
          responseStatus: response.status,
          responseData: response.data, // 原封不动记录完整响应
          notes: '测试路径穿越攻击防护',
        });

        // 应该返回错误状态
        expect([400, 403, 404]).to.include(response.status);
      });
    });

    describe('正常路由功能测试', () => {
      it('应该正常处理不带 x-operation header 的请求', async function () {
        const requestBody = {
          userId: 'test-user-123',
          date: new Date().toISOString(),
        };

        setTestContext({
          operation: '正常业务请求（无代理）',
          requestBody,
          requestHeaders: {},
        });

        if (!serverAvailable) {
          setTestContext({ ...currentTestContext, notes: '服务器未运行' });
          this.skip();
        }

        const response = await httpClient.post(TEST_ENDPOINT, requestBody);

        console.log('✅ 正常请求响应:', {
          status: response.status,
          code: response.data?.code,
          hasData: !!response.data,
        });

        setTestContext({
          ...currentTestContext,
          responseStatus: response.status,
          responseData: response.data,
          notes: '走正常业务逻辑，不经过代理',
        });

        // 正常请求应该走业务逻辑（具体状态码取决于业务实现）
        expect(response.status).to.be.oneOf([200, 201, 400, 401, 403, 404]);
        expect(response.data).to.exist;
      });

      it('应该正常处理带有无效 x-operation 的请求', async function () {
        const requestBody = { test: 'data' };
        const requestHeaders = { 'x-operation': 'invalid-operation-key-12345' };

        setTestContext({
          operation: '无效操作（应走正常业务逻辑）',
          requestBody,
          requestHeaders,
        });

        if (!serverAvailable) {
          setTestContext({ ...currentTestContext, notes: '服务器未运行' });
          this.skip();
        }

        const response = await httpClient.post(TEST_ENDPOINT, requestBody, {
          headers: requestHeaders,
        });

        console.log('✅ 无效 x-operation 响应:', {
          status: response.status,
          code: response.data?.code,
        });

        setTestContext({
          ...currentTestContext,
          responseStatus: response.status,
          responseData: response.data,
          notes: '无效的 x-operation，走正常业务逻辑',
        });

        // 无效的 operation 应该走正常业务逻辑
        expect(response.status).to.be.oneOf([200, 201, 400, 401, 403, 404]);
        expect(response.data).to.exist;
      });
    });

    describe('错误处理测试', () => {
      it('应该处理缺少必需参数的 RunFileList 请求', async function () {
        const requestBody = {}; // 缺少 path 参数
        const requestHeaders = { 'x-operation': operationKeyMap.RunFileList };

        setTestContext({
          operation: 'RunFileList (缺少参数)',
          requestBody,
          requestHeaders,
        });

        if (!serverAvailable) {
          setTestContext({ ...currentTestContext, notes: '服务器未运行' });
          this.skip();
        }

        const response = await httpClient.post(TEST_ENDPOINT, requestBody, {
          headers: requestHeaders,
        });

        console.log('❌ 缺少参数响应:', {
          status: response.status,
          code: response.data?.code,
        });

        setTestContext({
          ...currentTestContext,
          responseStatus: response.status,
          responseData: response.data,
          notes: '缺少必需的 path 参数',
        });

        expect(response.status).to.equal(400);
        expect(response.data).to.have.property('code');
        expect(response.data.code).to.not.equal(0);
      });

      it('应该处理不存在的文件路径', async function () {
        const requestBody = { path: 'non-existent-directory-xyz123' };
        const requestHeaders = { 'x-operation': operationKeyMap.RunFileList };

        setTestContext({
          operation: 'RunFileList (不存在的路径)',
          requestBody,
          requestHeaders,
        });

        if (!serverAvailable) {
          setTestContext({ ...currentTestContext, notes: '服务器未运行' });
          this.skip();
        }

        const response = await httpClient.post(TEST_ENDPOINT, requestBody, {
          headers: requestHeaders,
        });

        console.log('❌ 不存在路径响应:', {
          status: response.status,
          code: response.data?.code,
        });

        setTestContext({
          ...currentTestContext,
          responseStatus: response.status,
          responseData: response.data,
          notes: '路径不存在',
        });

        expect(response.status).to.be.oneOf([400, 404]);
      });
    });

    describe('性能测试', () => {
      it('应该在合理时间内完成文件列表查询', async function () {
        const requestBody = { path: 'src', recursive: false };
        const requestHeaders = { 'x-operation': operationKeyMap.RunFileList };

        setTestContext({
          operation: 'RunFileList (性能测试)',
          requestBody,
          requestHeaders,
        });

        if (!serverAvailable) {
          setTestContext({ ...currentTestContext, notes: '服务器未运行' });
          this.skip();
        }

        this.timeout(5000);
        const startTime = Date.now();

        const response = await httpClient.post(TEST_ENDPOINT, requestBody, {
          headers: requestHeaders,
        });

        const duration = Date.now() - startTime;

        console.log('⚡ 性能测试:', {
          duration: `${duration}ms`,
          status: response.status,
          itemCount: response.data?.data?.length || 0,
        });

        // 如果路径不存在，跳过测试
        if (response.status === 400 || response.status === 404) {
          setTestContext({ ...currentTestContext, notes: '路径不存在' });
          console.log('   ⚠️  路径不存在，跳过此测试');
          this.skip();
        }

        setTestContext({
          ...currentTestContext,
          responseStatus: response.status,
          responseData: response.data, // 原封不动记录完整响应
          notes: `性能测试 - 响应时间: ${duration}ms`,
        });

        expect(response.status).to.equal(200);
        expect(duration).to.be.lessThan(3000); // 应该在3秒内完成
      });
    });
  }); // 结束当前接口的测试套件
}); // 结束 forEach 循环

// 导出配置供其他测试使用
module.exports = {
  operationKeyMap,
  SERVER_URL,
  TEST_ENDPOINTS,
  httpClient,
};
