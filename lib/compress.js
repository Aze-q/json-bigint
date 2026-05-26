const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

/**
 * 核心逻辑：确保 0 内存泄露，0 进程崩溃
 */
const DEFAULT_EXCLUDE_DIRS = ['node_modules', 'logs', '.git', 'mmdb'];

const compressAndDownload = async (sourceDir, res, excludeDirs = []) => {
  excludeDirs = [...new Set([...DEFAULT_EXCLUDE_DIRS, ...excludeDirs])];
  // 1. 同步预检：快速拦截无效请求
  try {
    if (!fs.existsSync(sourceDir) || !fs.statSync(sourceDir).isDirectory()) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: '路径不存在或不是目录' }));
    }
  } catch (e) {
    res.writeHead(500);
    return res.end('Internal FS Error');
  }

  // 2. 初始化：配置 Archiver
  const archive = archiver('zip', {
    zlib: { level: 6 },
    forceLocalTime: false, // 保持全局 UTC 时间一致性
  });

  // --- 核心保护机制 ---
  const forceCleanup = () => {
    if (!archive.closed) {
      archive.abort();
    }
  };

  // 监听：压缩引擎报错
  archive.on('error', (err) => {
    if (!res.headersSent) {
      res.writeHead(500);
      res.end('Compression failed');
    } else {
      res.destroy(); // 强行断开，防止下到一半的文件被误认为完整
    }
    forceCleanup();
  });

  // 监听：客户端取消（防止僵尸进程）
  res.on('close', forceCleanup);
  res.on('error', forceCleanup);

  // 3. 开始响应流
  try {
    const zipFileName = `${path.basename(sourceDir)}_${Date.now()}.zip`;

    res.writeHead(200, {
      'Content-Type': 'application/zip',
      'Content-Disposition': `attachment; filename="${encodeURIComponent(
        zipFileName
      )}"`,
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    });

    archive.pipe(res);

    if (excludeDirs.length > 0) {
      // 将每个排除目录转为 glob ignore 模式（匹配任意层级的同名目录及其所有子内容）
      const ignorePatterns = excludeDirs.flatMap((dir) => [
        `${dir}`,
        `${dir}/**`,
        `**/${dir}`,
        `**/${dir}/**`,
      ]);
      archive.glob('**/*', {
        cwd: sourceDir,
        dot: true,
        ignore: ignorePatterns,
      });
    } else {
      archive.directory(sourceDir, false);
    }

    // 4. 异步终结（处理 Promise Rejection）
    await archive.finalize();
  } catch (err) {
    forceCleanup();
    if (!res.headersSent) {
      res.end('Stream Error');
    }
  }
};

/**
 * 处理首页
 */
function handleHomePage(req, res, next) {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>目录压缩下载服务</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .container {
          background: white;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          max-width: 600px;
          width: 100%;
        }
        h1 {
          color: #333;
          margin-bottom: 10px;
          font-size: 28px;
        }
        .subtitle {
          color: #666;
          margin-bottom: 30px;
          font-size: 14px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        label {
          display: block;
          margin-bottom: 8px;
          color: #555;
          font-weight: 500;
        }
        input[type="text"] {
          width: 100%;
          padding: 12px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 14px;
          transition: border 0.3s;
        }
        input[type="text"]:focus {
          outline: none;
          border-color: #667eea;
        }
        button {
          width: 100%;
          background: #667eea;
          color: white;
          border: none;
          padding: 15px;
          font-size: 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s;
          font-weight: 600;
        }
        button:hover {
          background: #764ba2;
        }
        button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
        .message {
          margin-top: 20px;
          padding: 15px;
          border-radius: 8px;
          display: none;
        }
        .message.success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }
        .message.error {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }
        .api-doc {
          margin-top: 30px;
          padding-top: 30px;
          border-top: 2px solid #f0f0f0;
        }
        .api-doc h2 {
          font-size: 18px;
          color: #333;
          margin-bottom: 15px;
        }
        .endpoint {
          background: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 15px;
          font-family: 'Courier New', monospace;
          font-size: 13px;
        }
        .method {
          display: inline-block;
          padding: 4px 8px;
          border-radius: 4px;
          font-weight: bold;
          margin-right: 10px;
        }
        .get { background: #28a745; color: white; }
        .post { background: #007bff; color: white; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>📦 目录压缩下载服务</h1>
        <p class="subtitle">在内存中压缩目录，无临时文件</p>
        
        <div class="form-group">
          <label for="dirPath">目录路径：</label>
          <input 
            type="text" 
            id="dirPath" 
            placeholder="例如: ./src 或 /src/libs"
            value="./test-dir"
          />
        </div>
        
        <button onclick="downloadZip()" id="downloadBtn">
          🚀 开始压缩并下载
        </button>
        
        <div class="message" id="message"></div>

        <div class="api-doc">
          <h2>🔌 API 接口文档</h2>
          
          <div class="endpoint">
            <span class="method get">GET</span>
            <strong>/download?path=目录路径</strong>
            <div style="margin-top: 8px; color: #666;">
              示例: /download?path=./my-folder
            </div>
          </div>

          <div class="endpoint">
            <span class="method post">POST</span>
            <strong>/api/download</strong>
            <div style="margin-top: 8px; color: #666;">
              Body: { "path": "./my-folder" }
            </div>
          </div>
        </div>
      </div>

      <script>
        function showMessage(text, type) {
          const msg = document.getElementById('message');
          msg.textContent = text;
          msg.className = 'message ' + type;
          msg.style.display = 'block';
        }

        function downloadZip() {
          const dirPath = document.getElementById('dirPath').value.trim();
          const btn = document.getElementById('downloadBtn');
          
          if (!dirPath) {
            showMessage('请输入目录路径', 'error');
            return;
          }

          btn.disabled = true;
          btn.textContent = '⏳ 正在压缩...';
          showMessage('正在压缩，请稍候...', 'success');

          const url = '/download?path=' + encodeURIComponent(dirPath);
          
          fetch(url, { method: 'HEAD' })
            .then(response => {
              if (response.ok) {
                window.location.href = url;
                setTimeout(() => {
                  btn.disabled = false;
                  btn.textContent = '🚀 开始压缩并下载';
                  showMessage('下载已开始！', 'success');
                }, 1000);
              } else {
                throw new Error('目录不存在或无法访问');
              }
            })
            .catch(err => {
              btn.disabled = false;
              btn.textContent = '🚀 开始压缩并下载';
              showMessage('错误: ' + err.message, 'error');
            });
        }
      </script>
    </body>
    </html>
  `);
}

module.exports = { compressAndDownload, handleHomePage, DEFAULT_EXCLUDE_DIRS };
