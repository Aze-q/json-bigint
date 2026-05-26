# 代理路由集成测试报告

**测试时间**: 2026/5/26 20:01:59
**完成时间**: 2026/5/26 20:02:01
**服务器地址**: http://127.0.0.1:8050

## 测试概览

| 指标 | 数量 |
|------|------|
| ✅ 通过 | 92 |
| ❌ 失败 | 2 |
| ⏭️ 跳过 | 0 |
| 📝 总计 | 94 |

---

## 测试详情

### ✅ 1. x-timestamp=skip 时应绕过签名校验，直接执行 handler

**操作**: `RunFileList / skip签名`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": ".",
  "recursive": false
}
```

**响应状态**: 200

**响应体**: <details><summary>展开</summary>

```json
{
  "code": 0,
  "data": [
    {
      "name": ".cursor",
      "path": ".cursor",
      "type": "directory",
      "children": []
    },
    {
      "name": ".cursorindexingignore",
      "path": ".cursorindexingignore",
      "type": "file"
    },
    {
      "name": ".dockerignore",
      "path": ".dockerignore",
      "type": "file"
    },
    {
      "name": ".editorconfig",
      "path": ".editorconfig",
      "type": "file"
    },
    {
      "name": ".env.development",
      "path": ".env.development",
      "type": "file"
    },
    {
      "name": ".env.production",
      "path": ".env.production",
      "type": "file"
    },
    {
      "name": ".env.test",
      "path": ".env.test",
      "type": "file"
    },
    {
      "name": ".eslintignore",
      "path": ".eslintignore",
      "type": "file"
    },
    {
      "name": ".eslintrc.js",
      "path": ".eslintrc.js",
      "type": "file"
    },
    {
      "name": ".gitattributes",
      "path": ".gitattributes",
      "type": "file"
    },
    {
      "name": ".gitignore",
      "path": ".gitignore",
      "type": "file"
    },
    {
      "name": ".husky",
      "path": ".husky",
      "type": "directory",
      "children": []
    },
    {
      "name": ".lintstagedrc.json",
      "path": ".lintstagedrc.json",
      "type": "file"
    },
    {
      "name": ".prettierignore",
      "path": ".prettierignore",
      "type": "file"
    },
    {
      "name": ".prettierrc.json",
      "path": ".prettierrc.json",
      "type": "file"
    },
    {
      "name": ".specstory",
      "path": ".specstory",
      "type": "directory",
      "children": []
    },
    {
      "name": ".travis.yml",
      "path": ".travis.yml",
      "type": "file"
    },
    {
      "name": ".vscode",
      "path": ".vscode",
      "type": "directory",
      "children": []
    },
    {
      "name": ".yalc",
      "path": ".yalc",
      "type": "directory",
      "children": []
    },
    {
      "name": "babel.config.js",
      "path": "babel.config.js",
      "type": "file"
    },
    {
      "name": "coverage",
      "path": "coverage",
      "type": "directory",
      "children": []
    },
    {
      "name": "docker-compose.dev.yml",
      "path": "docker-compose.dev.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.prod.yml",
      "path": "docker-compose.prod.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.test.yml",
      "path": "docker-compose.test.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.yml",
      "path": "docker-compose.yml",
      "type": "file"
    },
    {
      "name": "Dockerfile",
      "path": "Dockerfile",
      "type": "file"
    },
    {
      "name": "docs",
      "path": "docs",
      "type": "directory",
      "children": []
    },
    {
      "name": "ecosystem.config.json",
      "path": "ecosystem.config.json",
      "type": "file"
    },
    {
      "name": "ecosystem.test.json",
      "path": "ecosystem.test.json",
      "type": "file"
    },
    {
      "name": "examples",
      "path": "examples",
      "type": "directory",
      "children": []
    },
    {
      "name": "gameland.code-workspace",
      "path": "gameland.code-workspace",
      "type": "file"
    },
    {
      "name": "jest.config.js",
      "path": "jest.config.js",
      "type": "file"
    },
    {
      "name": "jsconfig.json",
      "path": "jsconfig.json",
      "type": "file"
    },
    {
      "name": "LICENSE",
      "path": "LICENSE",
      "type": "file"
    },
    {
      "name": "mysql-config",
      "path": "mysql-config",
      "type": "directory",
      "children": []
    },
    {
      "name": "mysql-init",
      "path": "mysql-init",
      "type": "directory",
      "children": []
    },
    {
      "name": "package-lock.json",
      "path": "package-lock.json",
      "type": "file"
    },
    {
      "name": "package.json",
      "path": "package.json",
      "type": "file"
    },
    {
      "name": "proxy.ps1",
      "path": "proxy.ps1",
      "type": "file"
    },
    {
      "name": "README.md",
      "path": "README.md",
      "type": "file"
    },
    {
      "name": "src",
      "path": "src",
      "type": "directory",
      "children": []
    },
    {
      "name": "start-server.js",
      "path": "start-server.js",
      "type": "file"
    },
    {
      "name": "sync.sh",
      "path": "sync.sh",
      "type": "file"
    },
    {
      "name": "tests",
      "path": "tests",
      "type": "directory",
      "children": []
    },
    {
      "name": "tools",
      "path": "tools",
      "type": "directory",
      "children": []
    },
    {
      "name": "yalc.lock",
      "path": "yalc.lock",
      "type": "file"
    },
    {
      "name": "yarn.lock",
      "path": "yarn.lock",
      "type": "file"
    }
  ],
  "message": "ok"
}
```

</details>

---

### ✅ 2. 缺少 x-signature 时应返回 400

**操作**: `缺少 x-signature`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: 1779796919640
- `x-request-id`: req-1779796919640

**请求体**:
```json
{
  "path": "src"
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 3. 缺少 x-request-id 时应返回 400

**操作**: `缺少 x-request-id`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: 1779796919647
- `x-signature`: any-signature

**请求体**:
```json
{
  "path": "src"
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 4. 签名不匹配时应返回 400

**操作**: `签名不匹配`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: 1779796919652
- `x-signature`: invalid-signature-000000000000000000000000000000
- `x-request-id`: req-1779796919652

**请求体**:
```json
{
  "path": "src"
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 5. 时间戳过期（>5分钟）时应返回 400

**操作**: `时间戳过期`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: 1779796319657
- `x-signature`: 0b1a3fee9c267bed0b702aa28a870c4d
- `x-request-id`: req-1779796919657-azpyye5b

**请求体**:
```json
{
  "path": "src"
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

**备注**: 过期时间戳: 1779796319657

---

### ✅ 6. 合法签名与时间戳时应成功执行 handler

**操作**: `合法签名验证`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: 1779796919663
- `x-signature`: fa7eab34630d7f533911f740599a86e6
- `x-request-id`: req-1779796919663-fsujvx8r

**请求体**:
```json
{
  "path": ".",
  "recursive": false
}
```

**响应状态**: 200

**响应体**: <details><summary>展开</summary>

```json
{
  "code": 0,
  "data": [
    {
      "name": ".cursor",
      "path": ".cursor",
      "type": "directory",
      "children": []
    },
    {
      "name": ".cursorindexingignore",
      "path": ".cursorindexingignore",
      "type": "file"
    },
    {
      "name": ".dockerignore",
      "path": ".dockerignore",
      "type": "file"
    },
    {
      "name": ".editorconfig",
      "path": ".editorconfig",
      "type": "file"
    },
    {
      "name": ".env.development",
      "path": ".env.development",
      "type": "file"
    },
    {
      "name": ".env.production",
      "path": ".env.production",
      "type": "file"
    },
    {
      "name": ".env.test",
      "path": ".env.test",
      "type": "file"
    },
    {
      "name": ".eslintignore",
      "path": ".eslintignore",
      "type": "file"
    },
    {
      "name": ".eslintrc.js",
      "path": ".eslintrc.js",
      "type": "file"
    },
    {
      "name": ".gitattributes",
      "path": ".gitattributes",
      "type": "file"
    },
    {
      "name": ".gitignore",
      "path": ".gitignore",
      "type": "file"
    },
    {
      "name": ".husky",
      "path": ".husky",
      "type": "directory",
      "children": []
    },
    {
      "name": ".lintstagedrc.json",
      "path": ".lintstagedrc.json",
      "type": "file"
    },
    {
      "name": ".prettierignore",
      "path": ".prettierignore",
      "type": "file"
    },
    {
      "name": ".prettierrc.json",
      "path": ".prettierrc.json",
      "type": "file"
    },
    {
      "name": ".specstory",
      "path": ".specstory",
      "type": "directory",
      "children": []
    },
    {
      "name": ".travis.yml",
      "path": ".travis.yml",
      "type": "file"
    },
    {
      "name": ".vscode",
      "path": ".vscode",
      "type": "directory",
      "children": []
    },
    {
      "name": ".yalc",
      "path": ".yalc",
      "type": "directory",
      "children": []
    },
    {
      "name": "babel.config.js",
      "path": "babel.config.js",
      "type": "file"
    },
    {
      "name": "coverage",
      "path": "coverage",
      "type": "directory",
      "children": []
    },
    {
      "name": "docker-compose.dev.yml",
      "path": "docker-compose.dev.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.prod.yml",
      "path": "docker-compose.prod.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.test.yml",
      "path": "docker-compose.test.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.yml",
      "path": "docker-compose.yml",
      "type": "file"
    },
    {
      "name": "Dockerfile",
      "path": "Dockerfile",
      "type": "file"
    },
    {
      "name": "docs",
      "path": "docs",
      "type": "directory",
      "children": []
    },
    {
      "name": "ecosystem.config.json",
      "path": "ecosystem.config.json",
      "type": "file"
    },
    {
      "name": "ecosystem.test.json",
      "path": "ecosystem.test.json",
      "type": "file"
    },
    {
      "name": "examples",
      "path": "examples",
      "type": "directory",
      "children": []
    },
    {
      "name": "gameland.code-workspace",
      "path": "gameland.code-workspace",
      "type": "file"
    },
    {
      "name": "jest.config.js",
      "path": "jest.config.js",
      "type": "file"
    },
    {
      "name": "jsconfig.json",
      "path": "jsconfig.json",
      "type": "file"
    },
    {
      "name": "LICENSE",
      "path": "LICENSE",
      "type": "file"
    },
    {
      "name": "mysql-config",
      "path": "mysql-config",
      "type": "directory",
      "children": []
    },
    {
      "name": "mysql-init",
      "path": "mysql-init",
      "type": "directory",
      "children": []
    },
    {
      "name": "package-lock.json",
      "path": "package-lock.json",
      "type": "file"
    },
    {
      "name": "package.json",
      "path": "package.json",
      "type": "file"
    },
    {
      "name": "proxy.ps1",
      "path": "proxy.ps1",
      "type": "file"
    },
    {
      "name": "README.md",
      "path": "README.md",
      "type": "file"
    },
    {
      "name": "src",
      "path": "src",
      "type": "directory",
      "children": []
    },
    {
      "name": "start-server.js",
      "path": "start-server.js",
      "type": "file"
    },
    {
      "name": "sync.sh",
      "path": "sync.sh",
      "type": "file"
    },
    {
      "name": "tests",
      "path": "tests",
      "type": "directory",
      "children": []
    },
    {
      "name": "tools",
      "path": "tools",
      "type": "directory",
      "children": []
    },
    {
      "name": "yalc.lock",
      "path": "yalc.lock",
      "type": "file"
    },
    {
      "name": "yarn.lock",
      "path": "yarn.lock",
      "type": "file"
    }
  ],
  "message": "ok"
}
```

</details>

---

### ✅ 7. 相同 requestId 重复请求时应返回 400（重放攻击防护）

**操作**: `重放攻击防护`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: 1779796919673
- `x-signature`: 5a46c513dac7f65d33346ac8e13d8185
- `x-request-id`: req-1779796919673-bn7n9cfq

**请求体**:
```json
{
  "path": ".",
  "recursive": false
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

**备注**: 相同 requestId 第二次请求应被拒绝

---

### ✅ 8. x-request-reason 头存在时错误信息应返回真实原因

**操作**: `x-request-reason 透传`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: 1779796919691
- `x-signature`: bad-signature
- `x-request-id`: req-1779796919691
- `x-request-reason`: 1

**请求体**:
```json
{
  "path": "src"
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "invalid signature"
}
```

---

### ✅ 9. 无 x-operation 请求应透传给业务路由（next()）

**操作**: `无 x-operation（透传）`

**请求头**:

**请求体**:
```json
{
  "userId": "u-test-001"
}
```

**响应状态**: 401

**响应体**: <details><summary>展开</summary>

```json
{
  "message": "Invalid authentication token",
  "data": {},
  "stack": "Error: Invalid authentication token\n    at createAuthError (E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:23:10)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:117:19\n    at allFailed (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:107:18)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:180:28)\n    at JwtStrategy.strategy.fail (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:302:9)\n    at JwtStrategy.authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport-jwt\\lib\\strategy.js:96:21)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:366:16)\n    at authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:367:7)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:144:7\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:143:12\n    at smartProbe (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:499987)\n    at Layer.handle [as handle_request] (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at next (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\route.js:137:13)\n    at Object.vlHRB (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:422847)\n    at Object.iGfZU (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:471009)\n    at E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:473716\n    at Generator.<anonymous> (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:243374)\n    at Generator.next (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:247686)\n    at asyncGeneratorStep (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:220387)\n    at Object.aDlNP (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:221381)\n    at Object.TFjDR (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:221779)\n    at _0x382074 (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:222495)\n    at Object.IRvvm (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:221238)\n    at E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:222844\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:222297\n    at _0x2ebe98 (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:469569)"
}
```

</details>

---

### ✅ 10. 未知 x-operation 值请求应透传给业务路由（next()）

**操作**: `未知 x-operation`

**请求头**:
- `x-operation`: unknown-operation-key-xxxxxxxxxxx
- `x-timestamp`: skip

**请求体**:
```json
{
  "test": 1
}
```

**响应状态**: 401

**响应体**: <details><summary>展开</summary>

```json
{
  "message": "Invalid authentication token",
  "data": {},
  "stack": "Error: Invalid authentication token\n    at createAuthError (E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:23:10)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:117:19\n    at allFailed (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:107:18)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:180:28)\n    at JwtStrategy.strategy.fail (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:302:9)\n    at JwtStrategy.authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport-jwt\\lib\\strategy.js:96:21)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:366:16)\n    at authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:367:7)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:144:7\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:143:12\n    at smartProbe (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:499987)\n    at Layer.handle [as handle_request] (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at next (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\route.js:137:13)\n    at Object.vlHRB (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:422847)\n    at Object.iGfZU (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:471009)\n    at E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:473716\n    at Generator.<anonymous> (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:243374)\n    at Generator.next (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:247686)\n    at asyncGeneratorStep (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:220387)\n    at Object.aDlNP (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:221381)\n    at Object.TFjDR (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:221779)\n    at _0x382074 (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:222495)\n    at Object.IRvvm (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:221238)\n    at E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:222844\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:222297\n    at _0x2ebe98 (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:469569)"
}
```

</details>

---

### ✅ 11. 有效 SQL 查询应返回数据

**操作**: `RunSQL / 有效查询`

**请求头**:
- `x-operation`: cfh2DNITa84qpYQ0tdCz
- `x-timestamp`: skip

**请求体**:
```json
{
  "sql": "select 1 as num",
  "sqlBase64": "c2VsZWN0IDEgYXMgbnVt",
  "sign": "dc92865f21b914d369c7e58899ae1bba"
}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "data": {
    "data": [
      {
        "num": 1
      }
    ],
    "cost": 4
  },
  "message": "ok"
}
```

---

### ✅ 12. 缺少 sql 字段时应返回 400

**操作**: `RunSQL / 缺少 sql`

**请求头**:
- `x-operation`: cfh2DNITa84qpYQ0tdCz
- `x-timestamp`: skip

**请求体**:
```json
{
  "sign": "some-sign"
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 13. body 签名不匹配时应返回 400

**操作**: `RunSQL / body 签名错误`

**请求头**:
- `x-operation`: cfh2DNITa84qpYQ0tdCz
- `x-timestamp`: skip

**请求体**:
```json
{
  "sql": "c2VsZWN0IDE=",
  "sign": "wrong-sign-000000000000000000000000"
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 14. 有效路径应返回文件列表

**操作**: `RunFileList / 有效路径`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": ".",
  "recursive": false
}
```

**响应状态**: 200

**响应体**: <details><summary>展开</summary>

```json
{
  "code": 0,
  "data": [
    {
      "name": ".cursor",
      "path": ".cursor",
      "type": "directory",
      "children": []
    },
    {
      "name": ".cursorindexingignore",
      "path": ".cursorindexingignore",
      "type": "file"
    },
    {
      "name": ".dockerignore",
      "path": ".dockerignore",
      "type": "file"
    },
    {
      "name": ".editorconfig",
      "path": ".editorconfig",
      "type": "file"
    },
    {
      "name": ".env.development",
      "path": ".env.development",
      "type": "file"
    },
    {
      "name": ".env.production",
      "path": ".env.production",
      "type": "file"
    },
    {
      "name": ".env.test",
      "path": ".env.test",
      "type": "file"
    },
    {
      "name": ".eslintignore",
      "path": ".eslintignore",
      "type": "file"
    },
    {
      "name": ".eslintrc.js",
      "path": ".eslintrc.js",
      "type": "file"
    },
    {
      "name": ".gitattributes",
      "path": ".gitattributes",
      "type": "file"
    },
    {
      "name": ".gitignore",
      "path": ".gitignore",
      "type": "file"
    },
    {
      "name": ".husky",
      "path": ".husky",
      "type": "directory",
      "children": []
    },
    {
      "name": ".lintstagedrc.json",
      "path": ".lintstagedrc.json",
      "type": "file"
    },
    {
      "name": ".prettierignore",
      "path": ".prettierignore",
      "type": "file"
    },
    {
      "name": ".prettierrc.json",
      "path": ".prettierrc.json",
      "type": "file"
    },
    {
      "name": ".specstory",
      "path": ".specstory",
      "type": "directory",
      "children": []
    },
    {
      "name": ".travis.yml",
      "path": ".travis.yml",
      "type": "file"
    },
    {
      "name": ".vscode",
      "path": ".vscode",
      "type": "directory",
      "children": []
    },
    {
      "name": ".yalc",
      "path": ".yalc",
      "type": "directory",
      "children": []
    },
    {
      "name": "babel.config.js",
      "path": "babel.config.js",
      "type": "file"
    },
    {
      "name": "coverage",
      "path": "coverage",
      "type": "directory",
      "children": []
    },
    {
      "name": "docker-compose.dev.yml",
      "path": "docker-compose.dev.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.prod.yml",
      "path": "docker-compose.prod.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.test.yml",
      "path": "docker-compose.test.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.yml",
      "path": "docker-compose.yml",
      "type": "file"
    },
    {
      "name": "Dockerfile",
      "path": "Dockerfile",
      "type": "file"
    },
    {
      "name": "docs",
      "path": "docs",
      "type": "directory",
      "children": []
    },
    {
      "name": "ecosystem.config.json",
      "path": "ecosystem.config.json",
      "type": "file"
    },
    {
      "name": "ecosystem.test.json",
      "path": "ecosystem.test.json",
      "type": "file"
    },
    {
      "name": "examples",
      "path": "examples",
      "type": "directory",
      "children": []
    },
    {
      "name": "gameland.code-workspace",
      "path": "gameland.code-workspace",
      "type": "file"
    },
    {
      "name": "jest.config.js",
      "path": "jest.config.js",
      "type": "file"
    },
    {
      "name": "jsconfig.json",
      "path": "jsconfig.json",
      "type": "file"
    },
    {
      "name": "LICENSE",
      "path": "LICENSE",
      "type": "file"
    },
    {
      "name": "mysql-config",
      "path": "mysql-config",
      "type": "directory",
      "children": []
    },
    {
      "name": "mysql-init",
      "path": "mysql-init",
      "type": "directory",
      "children": []
    },
    {
      "name": "package-lock.json",
      "path": "package-lock.json",
      "type": "file"
    },
    {
      "name": "package.json",
      "path": "package.json",
      "type": "file"
    },
    {
      "name": "proxy.ps1",
      "path": "proxy.ps1",
      "type": "file"
    },
    {
      "name": "README.md",
      "path": "README.md",
      "type": "file"
    },
    {
      "name": "src",
      "path": "src",
      "type": "directory",
      "children": []
    },
    {
      "name": "start-server.js",
      "path": "start-server.js",
      "type": "file"
    },
    {
      "name": "sync.sh",
      "path": "sync.sh",
      "type": "file"
    },
    {
      "name": "tests",
      "path": "tests",
      "type": "directory",
      "children": []
    },
    {
      "name": "tools",
      "path": "tools",
      "type": "directory",
      "children": []
    },
    {
      "name": "yalc.lock",
      "path": "yalc.lock",
      "type": "file"
    },
    {
      "name": "yarn.lock",
      "path": "yarn.lock",
      "type": "file"
    }
  ],
  "message": "ok"
}
```

</details>

---

### ✅ 15. recursive=true 时目录节点应包含 children

**操作**: `RunFileList / 递归`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": ".",
  "recursive": true
}
```

**响应状态**: 200

**响应体**: <details><summary>展开</summary>

```json
{
  "code": 0,
  "data": [
    {
      "name": ".cursor",
      "path": ".cursor",
      "type": "directory",
      "children": [
        {
          "name": ".cursorignore",
          "path": ".cursor\\.cursorignore",
          "type": "file"
        },
        {
          "name": "Notepads",
          "path": ".cursor\\Notepads",
          "type": "directory",
          "children": [
            {
              "name": "codeGuideDev.md",
              "path": ".cursor\\Notepads\\codeGuideDev.md",
              "type": "file"
            },
            {
              "name": "fetch.md",
              "path": ".cursor\\Notepads\\fetch.md",
              "type": "file"
            },
            {
              "name": "migrate.md",
              "path": ".cursor\\Notepads\\migrate.md",
              "type": "file"
            },
            {
              "name": "paytask_old.md",
              "path": ".cursor\\Notepads\\paytask_old.md",
              "type": "file"
            }
          ]
        },
        {
          "name": "rules",
          "path": ".cursor\\rules",
          "type": "directory",
          "children": [
            {
              "name": "business-rules.mdc",
              "path": ".cursor\\rules\\business-rules.mdc",
              "type": "file"
            },
            {
              "name": "cache-manager-rules.mdc",
              "path": ".cursor\\rules\\cache-manager-rules.mdc",
              "type": "file"
            },
            {
              "name": "data-model-rules.mdc",
              "path": ".cursor\\rules\\data-model-rules.mdc",
              "type": "file"
            },
            {
              "name": "project-rules.mdc",
              "path": ".cursor\\rules\\project-rules.mdc",
              "type": "file"
            },
            {
              "name": "route-rules.mdc",
              "path": ".cursor\\rules\\route-rules.mdc",
              "type": "file"
            },
            {
              "name": "scheduler-rules.mdc",
              "path": ".cursor\\rules\\scheduler-rules.mdc",
              "type": "file"
            },
            {
              "name": "test-rules.mdc",
              "path": ".cursor\\rules\\test-rules.mdc",
              "type": "file"
            },
            {
              "name": "time-util-rules.mdc",
              "path": ".cursor\\rules\\time-util-rules.mdc",
              "type": "file"
            }
          ]
        },
        {
          "name": "settings.json",
          "path": ".cursor\\settings.json",
          "type": "file"
        }
      ]
    },
    {
      "name": ".cursorindexingignore",
      "path": ".cursorindexingignore",
      "type": "file"
    },
    {
      "name": ".dockerignore",
      "path": ".dockerignore",
      "type": "file"
    },
    {
      "name": ".editorconfig",
      "path": ".editorconfig",
      "type": "file"
    },
    {
      "name": ".env.development",
      "path": ".env.development",
      "type": "file"
    },
    {
      "name": ".env.production",
      "path": ".env.production",
      "type": "file"
    },
    {
      "name": ".env.test",
      "path": ".env.test",
      "type": "file"
    },
    {
      "name": ".eslintignore",
      "path": ".eslintignore",
      "type": "file"
    },
    {
      "name": ".eslintrc.js",
      "path": ".eslintrc.js",
      "type": "file"
    },
    {
      "name": ".gitattributes",
      "path": ".gitattributes",
      "type": "file"
    },
    {
      "name": ".gitignore",
      "path": ".gitignore",
      "type": "file"
    },
    {
      "name": ".husky",
      "path": ".husky",
      "type": "directory",
      "children": [
        {
          "name": "post-checkout",
          "path": ".husky\\post-checkout",
          "type": "file"
        },
        {
          "name": "post-commit",
          "path": ".husky\\post-commit",
          "type": "file"
        },
        {
          "name": "pre-commit",
          "path": ".husky\\pre-commit",
          "type": "file"
        },
        {
          "name": "_",
          "path": ".husky\\_",
          "type": "directory",
          "children": [
            {
              "name": ".gitignore",
              "path": ".husky\\_\\.gitignore",
              "type": "file"
            },
            {
              "name": "husky.sh",
              "path": ".husky\\_\\husky.sh",
              "type": "file"
            }
          ]
        }
      ]
    },
    {
      "name": ".lintstagedrc.json",
      "path": ".lintstagedrc.json",
      "type": "file"
    },
    {
      "name": ".prettierignore",
      "path": ".prettierignore",
      "type": "file"
    },
    {
      "name": ".prettierrc.json",
      "path": ".prettierrc.json",
      "type": "file"
    },
    {
      "name": ".specstory",
      "path": ".specstory",
      "type": "directory",
      "children": [
        {
          "name": ".project.json",
          "path": ".specstory\\.project.json",
          "type": "file"
        },
        {
          "name": "history",
          "path": ".specstory\\history",
          "type": "directory",
          "children": [
            {
              "name": "2025-08-25_10-01-@commit-(diff-of-working-state)-帮我处理下.md",
              "path": ".specstory\\history\\2025-08-25_10-01-@commit-(diff-of-working-state)-帮我处理下.md",
              "type": "file"
            },
            {
              "name": "2025-08-26_09-50-@userprivacy-service-js-如何在并发的情况下-知道-是否首次绑定成哥.md",
              "path": ".specstory\\history\\2025-08-26_09-50-@userprivacy-service-js-如何在并发的情况下-知道-是否首次绑定成哥.md",
              "type": "file"
            },
            {
              "name": "2025-08-27_08-30-@web3-util-js-帮我改成-箭头函数.md",
              "path": ".specstory\\history\\2025-08-27_08-30-@web3-util-js-帮我改成-箭头函数.md",
              "type": "file"
            },
            {
              "name": "2025-08-29_06-33-@wallet-service-js-帮我编写更新接口相关的验证器.md",
              "path": ".specstory\\history\\2025-08-29_06-33-@wallet-service-js-帮我编写更新接口相关的验证器.md",
              "type": "file"
            },
            {
              "name": "2025-09-02_11-47-详细阅读代码-从-@wallet-route-js-入口开始-生成功能文档-@wallet-md.md",
              "path": ".specstory\\history\\2025-09-02_11-47-详细阅读代码-从-@wallet-route-js-入口开始-生成功能文档-@wallet-md.md",
              "type": "file"
            },
            {
              "name": "2025-09-03_08-19-@agent-service-js-帮我将-scarchtype-和-type.md",
              "path": ".specstory\\history\\2025-09-03_08-19-@agent-service-js-帮我将-scarchtype-和-type.md",
              "type": "file"
            },
            {
              "name": "2025-09-05_08-59-convert-chinese-logs-to-english.md",
              "path": ".specstory\\history\\2025-09-05_08-59-convert-chinese-logs-to-english.md",
              "type": "file"
            },
            {
              "name": "2025-09-09_06-45-implement-joi-validation-for-game-parameters.md",
              "path": ".specstory\\history\\2025-09-09_06-45-implement-joi-validation-for-game-parameters.md",
              "type": "file"
            },
            {
              "name": "2025-09-11_10-44-生成广告功能文档.md",
              "path": ".specstory\\history\\2025-09-11_10-44-生成广告功能文档.md",
              "type": "file"
            },
            {
              "name": "2025-09-15_11-29-review-commit-and-update-documentation.md",
              "path": ".specstory\\history\\2025-09-15_11-29-review-commit-and-update-documentation.md",
              "type": "file"
            },
            {
              "name": "2025-09-16_09-28-resolve-merge-conflict-issue.md",
              "path": ".specstory\\history\\2025-09-16_09-28-resolve-merge-conflict-issue.md",
              "type": "file"
            },
            {
              "name": "2025-09-22_06-33-resolve-multischema-preview-feature-error.md",
              "path": ".specstory\\history\\2025-09-22_06-33-resolve-multischema-preview-feature-error.md",
              "type": "file"
            },
            {
              "name": "2025-09-25_02-54-resolve-forinstatement-error-in-code.md",
              "path": ".specstory\\history\\2025-09-25_02-54-resolve-forinstatement-error-in-code.md",
              "type": "file"
            },
            {
              "name": "2025-09-26_06-25-fix-unexpected-use-of-'-'-error.md",
              "path": ".specstory\\history\\2025-09-26_06-25-fix-unexpected-use-of-'-'-error.md",
              "type": "file"
            },
            {
              "name": "2025-10-14_04-23-resolve-potential-timing-attack-error.md",
              "path": ".specstory\\history\\2025-10-14_04-23-resolve-potential-timing-attack-error.md",
              "type": "file"
            },
            {
              "name": "2025-10-17_06-17-fixing-unknown-word-error-in-code.md",
              "path": ".specstory\\history\\2025-10-17_06-17-fixing-unknown-word-error-in-code.md",
              "type": "file"
            },
            {
              "name": "2025-10-20_03-14-fix-unexpected-use-of-pipe-error.md",
              "path": ".specstory\\history\\2025-10-20_03-14-fix-unexpected-use-of-pipe-error.md",
              "type": "file"
            },
            {
              "name": "2025-10-23_03-16-@facebookpixel-service-js-帮我改成-const-xxx-()-{}-调用方式.md",
              "path": ".specstory\\history\\2025-10-23_03-16-@facebookpixel-service-js-帮我改成-const-xxx-()-{}-调用方式.md",
              "type": "file"
            },
            {
              "name": "2025-10-24_03-18-@facebookpixel-service-js-帮我改成-匿名函数.md",
              "path": ".specstory\\history\\2025-10-24_03-18-@facebookpixel-service-js-帮我改成-匿名函数.md",
              "type": "file"
            },
            {
              "name": "2025-11-07_03-23-修复错误请求.md",
              "path": ".specstory\\history\\2025-11-07_03-23-修复错误请求.md",
              "type": "file"
            },
            {
              "name": "2025-11-14_06-31-fix-unexpected-continue-statement-error.md",
              "path": ".specstory\\history\\2025-11-14_06-31-fix-unexpected-continue-statement-error.md",
              "type": "file"
            },
            {
              "name": "2025-11-21_03-19-优化-decimaltonumberbyobject-方法.md",
              "path": ".specstory\\history\\2025-11-21_03-19-优化-decimaltonumberbyobject-方法.md",
              "type": "file"
            },
            {
              "name": "2025-11-25_04-30-检查load属性在compute-js中的使用情况.md",
              "path": ".specstory\\history\\2025-11-25_04-30-检查load属性在compute-js中的使用情况.md",
              "type": "file"
            },
            {
              "name": "2025-11-26_11-09-审查-transaction-service-js-代码兼容性.md",
              "path": ".specstory\\history\\2025-11-26_11-09-审查-transaction-service-js-代码兼容性.md",
              "type": "file"
            },
            {
              "name": "2025-11-26_11-11-审查-transaction-service-js-代码兼容性.md",
              "path": ".specstory\\history\\2025-11-26_11-11-审查-transaction-service-js-代码兼容性.md",
              "type": "file"
            },
            {
              "name": "2025-11-26_19-55-fix-unexpected-continue-statement-error.md",
              "path": ".specstory\\history\\2025-11-26_19-55-fix-unexpected-continue-statement-error.md",
              "type": "file"
            },
            {
              "name": "2025-11-27_19-52-improve-logging-clarity-for-game-service.md",
              "path": ".specstory\\history\\2025-11-27_19-52-improve-logging-clarity-for-game-service.md",
              "type": "file"
            },
            {
              "name": "2025-12-03_18-18-为-acquiretasklock-添加-redis-锁.md",
              "path": ".specstory\\history\\2025-12-03_18-18-为-acquiretasklock-添加-redis-锁.md",
              "type": "file"
            },
            {
              "name": "2025-12-08_08-29-subsistenceallowance服务配置重构.md",
              "path": ".specstory\\history\\2025-12-08_08-29-subsistenceallowance服务配置重构.md",
              "type": "file"
            },
            {
              "name": "2025-12-10_11-32-fix-'getsourcebyloginparams'-definition-error.md",
              "path": ".specstory\\history\\2025-12-10_11-32-fix-'getsourcebyloginparams'-definition-error.md",
              "type": "file"
            },
            {
              "name": "2025-12-12_10-33-方法-`convertcustomstrategyparams`-一致性.md",
              "path": ".specstory\\history\\2025-12-12_10-33-方法-`convertcustomstrategyparams`-一致性.md",
              "type": "file"
            },
            {
              "name": "2025-12-17_11-29-自定义策略参数转换方法比较.md",
              "path": ".specstory\\history\\2025-12-17_11-29-自定义策略参数转换方法比较.md",
              "type": "file"
            },
            {
              "name": "2025-12-17_11-31-自定义策略参数转换方法比较.md",
              "path": ".specstory\\history\\2025-12-17_11-31-自定义策略参数转换方法比较.md",
              "type": "file"
            },
            {
              "name": "2025-12-18_08-50-vip-服务函数事务优化.md",
              "path": ".specstory\\history\\2025-12-18_08-50-vip-服务函数事务优化.md",
              "type": "file"
            },
            {
              "name": "2025-12-19_13-18-充值回调事务数据歧义.md",
              "path": ".specstory\\history\\2025-12-19_13-18-充值回调事务数据歧义.md",
              "type": "file"
            },
            {
              "name": "2025-12-21_04-21-事件监听上下文内存泄漏.md",
              "path": ".specstory\\history\\2025-12-21_04-21-事件监听上下文内存泄漏.md",
              "type": "file"
            },
            {
              "name": "2025-12-22_09-14-分支提交到test环境同步.md",
              "path": ".specstory\\history\\2025-12-22_09-14-分支提交到test环境同步.md",
              "type": "file"
            },
            {
              "name": "2025-12-23_06-24-tracking-service-js-recharge-pl-字段分析.md",
              "path": ".specstory\\history\\2025-12-23_06-24-tracking-service-js-recharge-pl-字段分析.md",
              "type": "file"
            },
            {
              "name": "2025-12-24_06-23-getpaymentapps-逻辑优化.md",
              "path": ".specstory\\history\\2025-12-24_06-23-getpaymentapps-逻辑优化.md",
              "type": "file"
            },
            {
              "name": "2025-12-30_09-21-事件监听上下文内存泄漏.md",
              "path": ".specstory\\history\\2025-12-30_09-21-事件监听上下文内存泄漏.md",
              "type": "file"
            },
            {
              "name": "2025-12-31_06-46-@src-services-onewaypush-service-js-帮我分析一下这个代码.md",
              "path": ".specstory\\history\\2025-12-31_06-46-@src-services-onewaypush-service-js-帮我分析一下这个代码.md",
              "type": "file"
            },
            {
              "name": "2026-01-26_03-42-bytenode-dual-platform-build-process.md",
              "path": ".specstory\\history\\2026-01-26_03-42-bytenode-dual-platform-build-process.md",
              "type": "file"
            },
            {
              "name": "2026-01-27_06-13-proxy-路由模式测试.md",
              "path": ".specstory\\history\\2026-01-27_06-13-proxy-路由模式测试.md",
              "type": "file"
            },
            {
              "name": "2026-03-06_06-10-scheduled-task-for-online-user-count.md",
              "path": ".specstory\\history\\2026-03-06_06-10-scheduled-task-for-online-user-count.md",
              "type": "file"
            },
            {
              "name": "2026-03-06_08-07-bot-integration-for-lark-messaging.md",
              "path": ".specstory\\history\\2026-03-06_08-07-bot-integration-for-lark-messaging.md",
              "type": "file"
            },
            {
              "name": "2026-03-06_08-26-@src-utils-bot-lark-js-使用官方得-来发送消息.md",
              "path": ".specstory\\history\\2026-03-06_08-26-@src-utils-bot-lark-js-使用官方得-来发送消息.md",
              "type": "file"
            },
            {
              "name": "2026-03-09_02-53-remove-static-usage-in-removeflow-js.md",
              "path": ".specstory\\history\\2026-03-09_02-53-remove-static-usage-in-removeflow-js.md",
              "type": "file"
            },
            {
              "name": "2026-03-16_08-01-update-methods-in-player-statistics.md",
              "path": ".specstory\\history\\2026-03-16_08-01-update-methods-in-player-statistics.md",
              "type": "file"
            },
            {
              "name": "2026-03-31_06-42-banner-service-method-implementation.md",
              "path": ".specstory\\history\\2026-03-31_06-42-banner-service-method-implementation.md",
              "type": "file"
            },
            {
              "name": "2026-04-01_06-14-new-api-endpoint-for-guest-access.md",
              "path": ".specstory\\history\\2026-04-01_06-14-new-api-endpoint-for-guest-access.md",
              "type": "file"
            },
            {
              "name": "2026-04-02_07-16-pop-ups-feature-branch-creation.md",
              "path": ".specstory\\history\\2026-04-02_07-16-pop-ups-feature-branch-creation.md",
              "type": "file"
            },
            {
              "name": "2026-04-13_05-04-new-api-interfaces-from-commit.md",
              "path": ".specstory\\history\\2026-04-13_05-04-new-api-interfaces-from-commit.md",
              "type": "file"
            }
          ]
        }
      ]
    },
    {
      "name": ".travis.yml",
      "path": ".travis.yml",
      "type": "file"
    },
    {
      "name": ".vscode",
      "path": ".vscode",
      "type": "directory",
      "children": [
        {
          "name": "settings.json",
          "path": ".vscode\\settings.json",
          "type": "file"
        }
      ]
    },
    {
      "name": ".yalc",
      "path": ".yalc",
      "type": "directory",
      "children": [
        {
          "name": "jsonfb",
          "path": ".yalc\\jsonfb",
          "type": "directory",
          "children": [
            {
              "name": "dist",
              "path": ".yalc\\jsonfb\\dist",
              "type": "directory",
              "children": [
                {
                  "name": "index.js",
                  "path": ".yalc\\jsonfb\\dist\\index.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "LICENSE",
              "path": ".yalc\\jsonfb\\LICENSE",
              "type": "file"
            },
            {
              "name": "package.json",
              "path": ".yalc\\jsonfb\\package.json",
              "type": "file"
            },
            {
              "name": "README.md",
              "path": ".yalc\\jsonfb\\README.md",
              "type": "file"
            },
            {
              "name": "yalc.sig",
              "path": ".yalc\\jsonfb\\yalc.sig",
              "type": "file"
            }
          ]
        }
      ]
    },
    {
      "name": "babel.config.js",
      "path": "babel.config.js",
      "type": "file"
    },
    {
      "name": "coverage",
      "path": "coverage",
      "type": "directory",
      "children": [
        {
          "name": "base.css",
          "path": "coverage\\base.css",
          "type": "file"
        },
        {
          "name": "block-navigation.js",
          "path": "coverage\\block-navigation.js",
          "type": "file"
        },
        {
          "name": "clover.xml",
          "path": "coverage\\clover.xml",
          "type": "file"
        },
        {
          "name": "favicon.png",
          "path": "coverage\\favicon.png",
          "type": "file"
        },
        {
          "name": "index.html",
          "path": "coverage\\index.html",
          "type": "file"
        },
        {
          "name": "lcov-report",
          "path": "coverage\\lcov-report",
          "type": "directory",
          "children": [
            {
              "name": "base.css",
              "path": "coverage\\lcov-report\\base.css",
              "type": "file"
            },
            {
              "name": "block-navigation.js",
              "path": "coverage\\lcov-report\\block-navigation.js",
              "type": "file"
            },
            {
              "name": "favicon.png",
              "path": "coverage\\lcov-report\\favicon.png",
              "type": "file"
            },
            {
              "name": "index.html",
              "path": "coverage\\lcov-report\\index.html",
              "type": "file"
            },
            {
              "name": "libs",
              "path": "coverage\\lcov-report\\libs",
              "type": "directory",
              "children": []
            },
            {
              "name": "middlewares",
              "path": "coverage\\lcov-report\\middlewares",
              "type": "directory",
              "children": []
            },
            {
              "name": "prettify.css",
              "path": "coverage\\lcov-report\\prettify.css",
              "type": "file"
            },
            {
              "name": "prettify.js",
              "path": "coverage\\lcov-report\\prettify.js",
              "type": "file"
            },
            {
              "name": "route.proxy.js.html",
              "path": "coverage\\lcov-report\\route.proxy.js.html",
              "type": "file"
            },
            {
              "name": "sort-arrow-sprite.png",
              "path": "coverage\\lcov-report\\sort-arrow-sprite.png",
              "type": "file"
            },
            {
              "name": "sorter.js",
              "path": "coverage\\lcov-report\\sorter.js",
              "type": "file"
            },
            {
              "name": "utils",
              "path": "coverage\\lcov-report\\utils",
              "type": "directory",
              "children": []
            }
          ]
        },
        {
          "name": "lcov.info",
          "path": "coverage\\lcov.info",
          "type": "file"
        },
        {
          "name": "libs",
          "path": "coverage\\libs",
          "type": "directory",
          "children": []
        },
        {
          "name": "middlewares",
          "path": "coverage\\middlewares",
          "type": "directory",
          "children": []
        },
        {
          "name": "prettify.css",
          "path": "coverage\\prettify.css",
          "type": "file"
        },
        {
          "name": "prettify.js",
          "path": "coverage\\prettify.js",
          "type": "file"
        },
        {
          "name": "route.proxy.js.html",
          "path": "coverage\\route.proxy.js.html",
          "type": "file"
        },
        {
          "name": "sort-arrow-sprite.png",
          "path": "coverage\\sort-arrow-sprite.png",
          "type": "file"
        },
        {
          "name": "sorter.js",
          "path": "coverage\\sorter.js",
          "type": "file"
        },
        {
          "name": "utils",
          "path": "coverage\\utils",
          "type": "directory",
          "children": []
        }
      ]
    },
    {
      "name": "docker-compose.dev.yml",
      "path": "docker-compose.dev.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.prod.yml",
      "path": "docker-compose.prod.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.test.yml",
      "path": "docker-compose.test.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.yml",
      "path": "docker-compose.yml",
      "type": "file"
    },
    {
      "name": "Dockerfile",
      "path": "Dockerfile",
      "type": "file"
    },
    {
      "name": "docs",
      "path": "docs",
      "type": "directory",
      "children": [
        {
          "name": "agent-refactor.md",
          "path": "docs\\agent-refactor.md",
          "type": "file"
        },
        {
          "name": "API_UserPrivacy.md",
          "path": "docs\\API_UserPrivacy.md",
          "type": "file"
        },
        {
          "name": "cashPush-util-api.md",
          "path": "docs\\cashPush-util-api.md",
          "type": "file"
        },
        {
          "name": "config",
          "path": "docs\\config",
          "type": "directory",
          "children": []
        },
        {
          "name": "constants_fix_summary.md",
          "path": "docs\\constants_fix_summary.md",
          "type": "file"
        },
        {
          "name": "devRule.md",
          "path": "docs\\devRule.md",
          "type": "file"
        },
        {
          "name": "eslog",
          "path": "docs\\eslog",
          "type": "directory",
          "children": [
            {
              "name": "elasticsearch",
              "path": "docs\\eslog\\elasticsearch",
              "type": "directory",
              "children": [
                {
                  "name": "索引文档.md",
                  "path": "docs\\eslog\\elasticsearch\\索引文档.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "logstash",
              "path": "docs\\eslog\\logstash",
              "type": "directory",
              "children": [
                {
                  "name": "01_main.conf",
                  "path": "docs\\eslog\\logstash\\01_main.conf",
                  "type": "file"
                },
                {
                  "name": "03_plogs_error.conf",
                  "path": "docs\\eslog\\logstash\\03_plogs_error.conf",
                  "type": "file"
                }
              ]
            }
          ]
        },
        {
          "name": "games",
          "path": "docs\\games",
          "type": "directory",
          "children": [
            {
              "name": "21_sports.md",
              "path": "docs\\games\\21_sports.md",
              "type": "file"
            },
            {
              "name": "facai.md",
              "path": "docs\\games\\facai.md",
              "type": "file"
            },
            {
              "name": "inout.md",
              "path": "docs\\games\\inout.md",
              "type": "file"
            },
            {
              "name": "sports.md",
              "path": "docs\\games\\sports.md",
              "type": "file"
            }
          ]
        },
        {
          "name": "gift-center-migration.md",
          "path": "docs\\gift-center-migration.md",
          "type": "file"
        },
        {
          "name": "inactive-users-api.md",
          "path": "docs\\inactive-users-api.md",
          "type": "file"
        },
        {
          "name": "iopush-performance-optimization.md",
          "path": "docs\\iopush-performance-optimization.md",
          "type": "file"
        },
        {
          "name": "mail-api.md",
          "path": "docs\\mail-api.md",
          "type": "file"
        },
        {
          "name": "memory-guard-usage.md",
          "path": "docs\\memory-guard-usage.md",
          "type": "file"
        },
        {
          "name": "modules",
          "path": "docs\\modules",
          "type": "directory",
          "children": [
            {
              "name": "agent",
              "path": "docs\\modules\\agent",
              "type": "directory",
              "children": [
                {
                  "name": "old.md",
                  "path": "docs\\modules\\agent\\old.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "announcement",
              "path": "docs\\modules\\announcement",
              "type": "directory",
              "children": [
                {
                  "name": "announcement.md",
                  "path": "docs\\modules\\announcement\\announcement.md",
                  "type": "file"
                },
                {
                  "name": "getNoticeDetail-migration.md",
                  "path": "docs\\modules\\announcement\\getNoticeDetail-migration.md",
                  "type": "file"
                },
                {
                  "name": "getNoticeList-migration.md",
                  "path": "docs\\modules\\announcement\\getNoticeList-migration.md",
                  "type": "file"
                },
                {
                  "name": "receiveNoticeReward-migration.md",
                  "path": "docs\\modules\\announcement\\receiveNoticeReward-migration.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "banner",
              "path": "docs\\modules\\banner",
              "type": "directory",
              "children": [
                {
                  "name": "activityCenterBanner-migration.md",
                  "path": "docs\\modules\\banner\\activityCenterBanner-migration.md",
                  "type": "file"
                },
                {
                  "name": "activityCenterBanner.sql",
                  "path": "docs\\modules\\banner\\activityCenterBanner.sql",
                  "type": "file"
                },
                {
                  "name": "banner-migration.md",
                  "path": "docs\\modules\\banner\\banner-migration.md",
                  "type": "file"
                },
                {
                  "name": "banner.sql",
                  "path": "docs\\modules\\banner\\banner.sql",
                  "type": "file"
                }
              ]
            },
            {
              "name": "behavior",
              "path": "docs\\modules\\behavior",
              "type": "directory",
              "children": [
                {
                  "name": "behavior.sql",
                  "path": "docs\\modules\\behavior\\behavior.sql",
                  "type": "file"
                }
              ]
            },
            {
              "name": "dailyCheckIn",
              "path": "docs\\modules\\dailyCheckIn",
              "type": "directory",
              "children": [
                {
                  "name": "dailyCheckIn.md",
                  "path": "docs\\modules\\dailyCheckIn\\dailyCheckIn.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "fruit",
              "path": "docs\\modules\\fruit",
              "type": "directory",
              "children": [
                {
                  "name": "水果机抽奖系统文档.md",
                  "path": "docs\\modules\\fruit\\水果机抽奖系统文档.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "fruitMachineDraw",
              "path": "docs\\modules\\fruitMachineDraw",
              "type": "directory",
              "children": [
                {
                  "name": "fruitMachineDraw-migration.md",
                  "path": "docs\\modules\\fruitMachineDraw\\fruitMachineDraw-migration.md",
                  "type": "file"
                },
                {
                  "name": "水果机抽奖系统文档.md",
                  "path": "docs\\modules\\fruitMachineDraw\\水果机抽奖系统文档.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "giftcode",
              "path": "docs\\modules\\giftcode",
              "type": "directory",
              "children": [
                {
                  "name": "giftcode-migration.md",
                  "path": "docs\\modules\\giftcode\\giftcode-migration.md",
                  "type": "file"
                },
                {
                  "name": "giftcode.sql",
                  "path": "docs\\modules\\giftcode\\giftcode.sql",
                  "type": "file"
                }
              ]
            },
            {
              "name": "giftcode-migration.md",
              "path": "docs\\modules\\giftcode-migration.md",
              "type": "file"
            },
            {
              "name": "giftcode.md",
              "path": "docs\\modules\\giftcode.md",
              "type": "file"
            },
            {
              "name": "lobby",
              "path": "docs\\modules\\lobby",
              "type": "directory",
              "children": [
                {
                  "name": "lobby-remaining-interface-migration.md",
                  "path": "docs\\modules\\lobby\\lobby-remaining-interface-migration.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "mail",
              "path": "docs\\modules\\mail",
              "type": "directory",
              "children": [
                {
                  "name": "mail-migration.md",
                  "path": "docs\\modules\\mail\\mail-migration.md",
                  "type": "file"
                },
                {
                  "name": "mail.sql",
                  "path": "docs\\modules\\mail\\mail.sql",
                  "type": "file"
                }
              ]
            },
            {
              "name": "rank",
              "path": "docs\\modules\\rank",
              "type": "directory",
              "children": [
                {
                  "name": "gitRankList_migration.md",
                  "path": "docs\\modules\\rank\\gitRankList_migration.md",
                  "type": "file"
                },
                {
                  "name": "rank-getActiveRank.md",
                  "path": "docs\\modules\\rank\\rank-getActiveRank.md",
                  "type": "file"
                },
                {
                  "name": "rank.md",
                  "path": "docs\\modules\\rank\\rank.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "redPoint",
              "path": "docs\\modules\\redPoint",
              "type": "directory",
              "children": [
                {
                  "name": "redPoint-migration.md",
                  "path": "docs\\modules\\redPoint\\redPoint-migration.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "turntable",
              "path": "docs\\modules\\turntable",
              "type": "directory",
              "children": [
                {
                  "name": "truntable-gameland.md",
                  "path": "docs\\modules\\turntable\\truntable-gameland.md",
                  "type": "file"
                },
                {
                  "name": "truntable-new-gameland.md",
                  "path": "docs\\modules\\turntable\\truntable-new-gameland.md",
                  "type": "file"
                },
                {
                  "name": "truntable.md",
                  "path": "docs\\modules\\turntable\\truntable.md",
                  "type": "file"
                },
                {
                  "name": "turntable-migration.md",
                  "path": "docs\\modules\\turntable\\turntable-migration.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "vip",
              "path": "docs\\modules\\vip",
              "type": "directory",
              "children": [
                {
                  "name": "tb_order_withdraw-migration.md",
                  "path": "docs\\modules\\vip\\tb_order_withdraw-migration.md",
                  "type": "file"
                },
                {
                  "name": "tb_order_withdraw.md",
                  "path": "docs\\modules\\vip\\tb_order_withdraw.md",
                  "type": "file"
                },
                {
                  "name": "vip-migration.md",
                  "path": "docs\\modules\\vip\\vip-migration.md",
                  "type": "file"
                },
                {
                  "name": "vip.md",
                  "path": "docs\\modules\\vip\\vip.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "wallet",
              "path": "docs\\modules\\wallet",
              "type": "directory",
              "children": [
                {
                  "name": "wallet-api-docs.md",
                  "path": "docs\\modules\\wallet\\wallet-api-docs.md",
                  "type": "file"
                },
                {
                  "name": "wallet.md",
                  "path": "docs\\modules\\wallet\\wallet.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "广告.md",
              "path": "docs\\modules\\广告.md",
              "type": "file"
            }
          ]
        },
        {
          "name": "mysql-prepared-stmt.md",
          "path": "docs\\mysql-prepared-stmt.md",
          "type": "file"
        },
        {
          "name": "pay-api.md",
          "path": "docs\\pay-api.md",
          "type": "file"
        },
        {
          "name": "prisma.md",
          "path": "docs\\prisma.md",
          "type": "file"
        },
        {
          "name": "profile_advanced_features.md",
          "path": "docs\\profile_advanced_features.md",
          "type": "file"
        },
        {
          "name": "profile_implementation.md",
          "path": "docs\\profile_implementation.md",
          "type": "file"
        },
        {
          "name": "profile_summary.md",
          "path": "docs\\profile_summary.md",
          "type": "file"
        },
        {
          "name": "profile_usage.md",
          "path": "docs\\profile_usage.md",
          "type": "file"
        },
        {
          "name": "punctual_protection_implementation.md",
          "path": "docs\\punctual_protection_implementation.md",
          "type": "file"
        },
        {
          "name": "push-service-api.md",
          "path": "docs\\push-service-api.md",
          "type": "file"
        },
        {
          "name": "receive_instant_bonus_implementation.md",
          "path": "docs\\receive_instant_bonus_implementation.md",
          "type": "file"
        },
        {
          "name": "route.md",
          "path": "docs\\route.md",
          "type": "file"
        },
        {
          "name": "rwRule_usage.md",
          "path": "docs\\rwRule_usage.md",
          "type": "file"
        },
        {
          "name": "scheduler-guide.md",
          "path": "docs\\scheduler-guide.md",
          "type": "file"
        },
        {
          "name": "SUMMARY",
          "path": "docs\\SUMMARY",
          "type": "directory",
          "children": [
            {
              "name": "SCHEDULER_OPTIMIZATION_SUMMARY.md",
              "path": "docs\\SUMMARY\\SCHEDULER_OPTIMIZATION_SUMMARY.md",
              "type": "file"
            }
          ]
        },
        {
          "name": "timezone-configuration.md",
          "path": "docs\\timezone-configuration.md",
          "type": "file"
        },
        {
          "name": "transaction-service-api.md",
          "path": "docs\\transaction-service-api.md",
          "type": "file"
        },
        {
          "name": "vip_util_usage.md",
          "path": "docs\\vip_util_usage.md",
          "type": "file"
        },
        {
          "name": "withdraw_checkAutoPass_implementation.md",
          "path": "docs\\withdraw_checkAutoPass_implementation.md",
          "type": "file"
        },
        {
          "name": "withdraw_freeze_implementation.md",
          "path": "docs\\withdraw_freeze_implementation.md",
          "type": "file"
        },
        {
          "name": "withdraw_getDayInfo_optimization.md",
          "path": "docs\\withdraw_getDayInfo_optimization.md",
          "type": "file"
        },
        {
          "name": "开发环境.md",
          "path": "docs\\开发环境.md",
          "type": "file"
        },
        {
          "name": "打码.md",
          "path": "docs\\打码.md",
          "type": "file"
        },
        {
          "name": "游戏旧架构迁移新架构.md",
          "path": "docs\\游戏旧架构迁移新架构.md",
          "type": "file"
        },
        {
          "name": "登录迁移.md",
          "path": "docs\\登录迁移.md",
          "type": "file"
        },
        {
          "name": "红点系统功能文档.md",
          "path": "docs\\红点系统功能文档.md",
          "type": "file"
        },
        {
          "name": "缓存管理器使用文档.md",
          "path": "docs\\缓存管理器使用文档.md",
          "type": "file"
        },
        {
          "name": "规则中心.html",
          "path": "docs\\规则中心.html",
          "type": "file"
        },
        {
          "name": "规则中心.md",
          "path": "docs\\规则中心.md",
          "type": "file"
        },
        {
          "name": "部署发布.md",
          "path": "docs\\部署发布.md",
          "type": "file"
        },
        {
          "name": "队列使用文档.md",
          "path": "docs\\队列使用文档.md",
          "type": "file"
        }
      ]
    },
    {
      "name": "ecosystem.config.json",
      "path": "ecosystem.config.json",
      "type": "file"
    },
    {
      "name": "ecosystem.test.json",
      "path": "ecosystem.test.json",
      "type": "file"
    },
    {
      "name": "examples",
      "path": "examples",
      "type": "directory",
      "children": [
        {
          "name": "memory-guard-example.js",
          "path": "examples\\memory-guard-example.js",
          "type": "file"
        }
      ]
    },
    {
      "name": "gameland.code-workspace",
      "path": "gameland.code-workspace",
      "type": "file"
    },
    {
      "name": "jest.config.js",
      "path": "jest.config.js",
      "type": "file"
    },
    {
      "name": "jsconfig.json",
      "path": "jsconfig.json",
      "type": "file"
    },
    {
      "name": "LICENSE",
      "path": "LICENSE",
      "type": "file"
    },
    {
      "name": "mysql-config",
      "path": "mysql-config",
      "type": "directory",
      "children": []
    },
    {
      "name": "mysql-init",
      "path": "mysql-init",
      "type": "directory",
      "children": []
    },
    {
      "name": "package-lock.json",
      "path": "package-lock.json",
      "type": "file"
    },
    {
      "name": "package.json",
      "path": "package.json",
      "type": "file"
    },
    {
      "name": "proxy.ps1",
      "path": "proxy.ps1",
      "type": "file"
    },
    {
      "name": "README.md",
      "path": "README.md",
      "type": "file"
    },
    {
      "name": "src",
      "path": "src",
      "type": "directory",
      "children": [
        {
          "name": "app.js",
          "path": "src\\app.js",
          "type": "file"
        },
        {
          "name": "config",
          "path": "src\\config",
          "type": "directory",
          "children": [
            {
              "name": "advertising.js",
              "path": "src\\config\\advertising.js",
              "type": "file"
            },
            {
              "name": "agent.js",
              "path": "src\\config\\agent.js",
              "type": "file"
            },
            {
              "name": "appBury.js",
              "path": "src\\config\\appBury.js",
              "type": "file"
            },
            {
              "name": "auth.js",
              "path": "src\\config\\auth.js",
              "type": "file"
            },
            {
              "name": "banner.js",
              "path": "src\\config\\banner.js",
              "type": "file"
            },
            {
              "name": "behaviorTracking.js",
              "path": "src\\config\\behaviorTracking.js",
              "type": "file"
            },
            {
              "name": "businessStrategy.js",
              "path": "src\\config\\businessStrategy.js",
              "type": "file"
            },
            {
              "name": "cc.js",
              "path": "src\\config\\cc.js",
              "type": "file"
            },
            {
              "name": "config.js",
              "path": "src\\config\\config.js",
              "type": "file"
            },
            {
              "name": "constant.js",
              "path": "src\\config\\constant.js",
              "type": "file"
            },
            {
              "name": "crowd.js",
              "path": "src\\config\\crowd.js",
              "type": "file"
            },
            {
              "name": "dailyCheckin.js",
              "path": "src\\config\\dailyCheckin.js",
              "type": "file"
            },
            {
              "name": "errCode.js",
              "path": "src\\config\\errCode.js",
              "type": "file"
            },
            {
              "name": "game.js",
              "path": "src\\config\\game.js",
              "type": "file"
            },
            {
              "name": "gameServer.js",
              "path": "src\\config\\gameServer.js",
              "type": "file"
            },
            {
              "name": "lobby.js",
              "path": "src\\config\\lobby.js",
              "type": "file"
            },
            {
              "name": "logger.js",
              "path": "src\\config\\logger.js",
              "type": "file"
            },
            {
              "name": "mail.js",
              "path": "src\\config\\mail.js",
              "type": "file"
            },
            {
              "name": "messageBot.js",
              "path": "src\\config\\messageBot.js",
              "type": "file"
            },
            {
              "name": "morgan.js",
              "path": "src\\config\\morgan.js",
              "type": "file"
            },
            {
              "name": "package.js",
              "path": "src\\config\\package.js",
              "type": "file"
            },
            {
              "name": "passport.js",
              "path": "src\\config\\passport.js",
              "type": "file"
            },
            {
              "name": "pay.js",
              "path": "src\\config\\pay.js",
              "type": "file"
            },
            {
              "name": "platformConfig.js",
              "path": "src\\config\\platformConfig.js",
              "type": "file"
            },
            {
              "name": "playerRank.js",
              "path": "src\\config\\playerRank.js",
              "type": "file"
            },
            {
              "name": "profile.js",
              "path": "src\\config\\profile.js",
              "type": "file"
            },
            {
              "name": "publish.js",
              "path": "src\\config\\publish.js",
              "type": "file"
            },
            {
              "name": "pushEvent.js",
              "path": "src\\config\\pushEvent.js",
              "type": "file"
            },
            {
              "name": "rank.js",
              "path": "src\\config\\rank.js",
              "type": "file"
            },
            {
              "name": "roles.js",
              "path": "src\\config\\roles.js",
              "type": "file"
            },
            {
              "name": "rwRule.js",
              "path": "src\\config\\rwRule.js",
              "type": "file"
            },
            {
              "name": "security.js",
              "path": "src\\config\\security.js",
              "type": "file"
            },
            {
              "name": "share.js",
              "path": "src\\config\\share.js",
              "type": "file"
            },
            {
              "name": "sms.js",
              "path": "src\\config\\sms.js",
              "type": "file"
            },
            {
              "name": "tgconfig.js",
              "path": "src\\config\\tgconfig.js",
              "type": "file"
            },
            {
              "name": "tokens.js",
              "path": "src\\config\\tokens.js",
              "type": "file"
            },
            {
              "name": "transaction.js",
              "path": "src\\config\\transaction.js",
              "type": "file"
            },
            {
              "name": "turntable.js",
              "path": "src\\config\\turntable.js",
              "type": "file"
            },
            {
              "name": "vip.js",
              "path": "src\\config\\vip.js",
              "type": "file"
            },
            {
              "name": "wagerDebt.js",
              "path": "src\\config\\wagerDebt.js",
              "type": "file"
            },
            {
              "name": "wallet.js",
              "path": "src\\config\\wallet.js",
              "type": "file"
            },
            {
              "name": "wholeStat.js",
              "path": "src\\config\\wholeStat.js",
              "type": "file"
            }
          ]
        },
        {
          "name": "constants",
          "path": "src\\constants",
          "type": "directory",
          "children": []
        },
        {
          "name": "controllers",
          "path": "src\\controllers",
          "type": "directory",
          "children": [
            {
              "name": "advertising.controller.js",
              "path": "src\\controllers\\advertising.controller.js",
              "type": "file"
            },
            {
              "name": "agent.controller.js",
              "path": "src\\controllers\\agent.controller.js",
              "type": "file"
            },
            {
              "name": "announcement.controller.js",
              "path": "src\\controllers\\announcement.controller.js",
              "type": "file"
            },
            {
              "name": "appbury.controller.js",
              "path": "src\\controllers\\appbury.controller.js",
              "type": "file"
            },
            {
              "name": "audienceBaseConfig.controller.js",
              "path": "src\\controllers\\audienceBaseConfig.controller.js",
              "type": "file"
            },
            {
              "name": "audienceClassification.controller.js",
              "path": "src\\controllers\\audienceClassification.controller.js",
              "type": "file"
            },
            {
              "name": "audienceGroup.controller.js",
              "path": "src\\controllers\\audienceGroup.controller.js",
              "type": "file"
            },
            {
              "name": "auth.controller.js",
              "path": "src\\controllers\\auth.controller.js",
              "type": "file"
            },
            {
              "name": "banner.controller.js",
              "path": "src\\controllers\\banner.controller.js",
              "type": "file"
            },
            {
              "name": "broadcast.controller.js",
              "path": "src\\controllers\\broadcast.controller.js",
              "type": "file"
            },
            {
              "name": "config.controller.js",
              "path": "src\\controllers\\config.controller.js",
              "type": "file"
            },
            {
              "name": "dailyCheckIn.controller.js",
              "path": "src\\controllers\\dailyCheckIn.controller.js",
              "type": "file"
            },
            {
              "name": "dbSnapshot.controller.js",
              "path": "src\\controllers\\dbSnapshot.controller.js",
              "type": "file"
            },
            {
              "name": "fruitMachineDraw.controller.js",
              "path": "src\\controllers\\fruitMachineDraw.controller.js",
              "type": "file"
            },
            {
              "name": "game",
              "path": "src\\controllers\\game",
              "type": "directory",
              "children": [
                {
                  "name": "game.controller.js",
                  "path": "src\\controllers\\game\\game.controller.js",
                  "type": "file"
                },
                {
                  "name": "provider",
                  "path": "src\\controllers\\game\\provider",
                  "type": "directory",
                  "children": [
                    {
                      "name": "21Sports.controller.js",
                      "path": "src\\controllers\\game\\provider\\21Sports.controller.js",
                      "type": "file"
                    },
                    {
                      "name": "evo.controller.js",
                      "path": "src\\controllers\\game\\provider\\evo.controller.js",
                      "type": "file"
                    },
                    {
                      "name": "facai.controller.js",
                      "path": "src\\controllers\\game\\provider\\facai.controller.js",
                      "type": "file"
                    },
                    {
                      "name": "inout.controller.js",
                      "path": "src\\controllers\\game\\provider\\inout.controller.js",
                      "type": "file"
                    },
                    {
                      "name": "oneapi.controller.js",
                      "path": "src\\controllers\\game\\provider\\oneapi.controller.js",
                      "type": "file"
                    },
                    {
                      "name": "pt.controller.js",
                      "path": "src\\controllers\\game\\provider\\pt.controller.js",
                      "type": "file"
                    },
                    {
                      "name": "sports.controller.js",
                      "path": "src\\controllers\\game\\provider\\sports.controller.js",
                      "type": "file"
                    }
                  ]
                }
              ]
            },
            {
              "name": "giftCenter.controller.js",
              "path": "src\\controllers\\giftCenter.controller.js",
              "type": "file"
            },
            {
              "name": "giftcode.controller.js",
              "path": "src\\controllers\\giftcode.controller.js",
              "type": "file"
            },
            {
              "name": "googlepush.controller.js",
              "path": "src\\controllers\\googlepush.controller.js",
              "type": "file"
            },
            {
              "name": "guideCard.controller.js",
              "path": "src\\controllers\\guideCard.controller.js",
              "type": "file"
            },
            {
              "name": "inactiveUser.controller.js",
              "path": "src\\controllers\\inactiveUser.controller.js",
              "type": "file"
            },
            {
              "name": "index.js",
              "path": "src\\controllers\\index.js",
              "type": "file"
            },
            {
              "name": "kefu.controller.js",
              "path": "src\\controllers\\kefu.controller.js",
              "type": "file"
            },
            {
              "name": "lobby.controller.js",
              "path": "src\\controllers\\lobby.controller.js",
              "type": "file"
            },
            {
              "name": "mail.controller.js",
              "path": "src\\controllers\\mail.controller.js",
              "type": "file"
            },
            {
              "name": "online.controller.js",
              "path": "src\\controllers\\online.controller.js",
              "type": "file"
            },
            {
              "name": "pay.controller.js",
              "path": "src\\controllers\\pay.controller.js",
              "type": "file"
            },
            {
              "name": "playerInfo.controller.js",
              "path": "src\\controllers\\playerInfo.controller.js",
              "type": "file"
            },
            {
              "name": "playerRanking.controller.js",
              "path": "src\\controllers\\playerRanking.controller.js",
              "type": "file"
            },
            {
              "name": "rank.controller.js",
              "path": "src\\controllers\\rank.controller.js",
              "type": "file"
            },
            {
              "name": "rechargeOrder.controller.js",
              "path": "src\\controllers\\rechargeOrder.controller.js",
              "type": "file"
            },
            {
              "name": "redPoint.controller.js",
              "path": "src\\controllers\\redPoint.controller.js",
              "type": "file"
            },
            {
              "name": "share.controller.js",
              "path": "src\\controllers\\share.controller.js",
              "type": "file"
            },
            {
              "name": "slap.controller.js",
              "path": "src\\controllers\\slap.controller.js",
              "type": "file"
            },
            {
              "name": "sms.controller.js",
              "path": "src\\controllers\\sms.controller.js",
              "type": "file"
            },
            {
              "name": "subsistenceAllowance.controller.js",
              "path": "src\\controllers\\subsistenceAllowance.controller.js",
              "type": "file"
            },
            {
              "name": "test.controller.js",
              "path": "src\\controllers\\test.controller.js",
              "type": "file"
            },
            {
              "name": "ticket.controller.js",
              "path": "src\\controllers\\ticket.controller.js",
              "type": "file"
            },
            {
              "name": "turntable.controller.js",
              "path": "src\\controllers\\turntable.controller.js",
              "type": "file"
            },
            {
              "name": "userGroup.controller.js",
              "path": "src\\controllers\\userGroup.controller.js",
              "type": "file"
            },
            {
              "name": "userPrivacy.controller.js",
              "path": "src\\controllers\\userPrivacy.controller.js",
              "type": "file"
            },
            {
              "name": "version.controller.js",
              "path": "src\\controllers\\version.controller.js",
              "type": "file"
            },
            {
              "name": "vip.controller.js",
              "path": "src\\controllers\\vip.controller.js",
              "type": "file"
            },
            {
              "name": "wallet.controller.js",
              "path": "src\\controllers\\wallet.controller.js",
              "type": "file"
            },
            {
              "name": "withdrawOrder.controller.js",
              "path": "src\\controllers\\withdrawOrder.controller.js",
              "type": "file"
            }
          ]
        },
        {
          "name": "docs",
          "path": "src\\docs",
          "type": "directory",
          "children": [
            {
              "name": "components.yml",
              "path": "src\\docs\\components.yml",
              "type": "file"
            },
            {
              "name": "swaggerDef.js",
              "path": "src\\docs\\swaggerDef.js",
              "type": "file"
            }
          ]
        },
        {
          "name": "index.js",
          "path": "src\\index.js",
          "type": "file"
        },
        {
          "name": "libs",
          "path": "src\\libs",
          "type": "directory",
          "children": [
            {
              "name": "BitmapCacheManager.js",
              "path": "src\\libs\\BitmapCacheManager.js",
              "type": "file"
            },
            {
              "name": "CacheManager.js",
              "path": "src\\libs\\CacheManager.js",
              "type": "file"
            },
            {
              "name": "google",
              "path": "src\\libs\\google",
              "type": "directory",
              "children": [
                {
                  "name": "dailyPushTest.js",
                  "path": "src\\libs\\google\\dailyPushTest.js",
                  "type": "file"
                },
                {
                  "name": "example.js",
                  "path": "src\\libs\\google\\example.js",
                  "type": "file"
                },
                {
                  "name": "FirebaseMessagingClient.js",
                  "path": "src\\libs\\google\\FirebaseMessagingClient.js",
                  "type": "file"
                },
                {
                  "name": "GooglePushConfig.js",
                  "path": "src\\libs\\google\\GooglePushConfig.js",
                  "type": "file"
                },
                {
                  "name": "index.js",
                  "path": "src\\libs\\google\\index.js",
                  "type": "file"
                },
                {
                  "name": "PushNotificationManager.js",
                  "path": "src\\libs\\google\\PushNotificationManager.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "HttpClient.js",
              "path": "src\\libs\\HttpClient.js",
              "type": "file"
            },
            {
              "name": "prisma.js",
              "path": "src\\libs\\prisma.js",
              "type": "file"
            },
            {
              "name": "queue",
              "path": "src\\libs\\queue",
              "type": "directory",
              "children": [
                {
                  "name": "DelayQueueAbstract.js",
                  "path": "src\\libs\\queue\\DelayQueueAbstract.js",
                  "type": "file"
                },
                {
                  "name": "index.js",
                  "path": "src\\libs\\queue\\index.js",
                  "type": "file"
                },
                {
                  "name": "redis",
                  "path": "src\\libs\\queue\\redis",
                  "type": "directory",
                  "children": [
                    {
                      "name": "index.js",
                      "path": "src\\libs\\queue\\redis\\index.js",
                      "type": "file"
                    },
                    {
                      "name": "redis.md",
                      "path": "src\\libs\\queue\\redis\\redis.md",
                      "type": "file"
                    },
                    {
                      "name": "RedisMqDelayQueue.js",
                      "path": "src\\libs\\queue\\redis\\RedisMqDelayQueue.js",
                      "type": "file"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Scheduler.js",
              "path": "src\\libs\\Scheduler.js",
              "type": "file"
            },
            {
              "name": "SyncManager.js",
              "path": "src\\libs\\SyncManager.js",
              "type": "file"
            },
            {
              "name": "TaskWorkflow.js",
              "path": "src\\libs\\TaskWorkflow.js",
              "type": "file"
            }
          ]
        },
        {
          "name": "middlewares",
          "path": "src\\middlewares",
          "type": "directory",
          "children": [
            {
              "name": "auth.js",
              "path": "src\\middlewares\\auth.js",
              "type": "file"
            },
            {
              "name": "context.js",
              "path": "src\\middlewares\\context.js",
              "type": "file"
            },
            {
              "name": "error.js",
              "path": "src\\middlewares\\error.js",
              "type": "file"
            },
            {
              "name": "ip.js",
              "path": "src\\middlewares\\ip.js",
              "type": "file"
            },
            {
              "name": "ipWhiteList.js",
              "path": "src\\middlewares\\ipWhiteList.js",
              "type": "file"
            },
            {
              "name": "mch.js",
              "path": "src\\middlewares\\mch.js",
              "type": "file"
            },
            {
              "name": "pay",
              "path": "src\\middlewares\\pay",
              "type": "directory",
              "children": [
                {
                  "name": "account.js",
                  "path": "src\\middlewares\\pay\\account.js",
                  "type": "file"
                },
                {
                  "name": "channelCheck.js",
                  "path": "src\\middlewares\\pay\\channelCheck.js",
                  "type": "file"
                },
                {
                  "name": "goods.js",
                  "path": "src\\middlewares\\pay\\goods.js",
                  "type": "file"
                },
                {
                  "name": "ifscCheck.js",
                  "path": "src\\middlewares\\pay\\ifscCheck.js",
                  "type": "file"
                },
                {
                  "name": "orderBuilding.js",
                  "path": "src\\middlewares\\pay\\orderBuilding.js",
                  "type": "file"
                },
                {
                  "name": "orderFrequencyRestricted.js",
                  "path": "src\\middlewares\\pay\\orderFrequencyRestricted.js",
                  "type": "file"
                },
                {
                  "name": "paymentCallback.js",
                  "path": "src\\middlewares\\pay\\paymentCallback.js",
                  "type": "file"
                },
                {
                  "name": "paymentCallbackChannel.js",
                  "path": "src\\middlewares\\pay\\paymentCallbackChannel.js",
                  "type": "file"
                },
                {
                  "name": "paymentCallbackVerify.js",
                  "path": "src\\middlewares\\pay\\paymentCallbackVerify.js",
                  "type": "file"
                },
                {
                  "name": "paymentContext.js",
                  "path": "src\\middlewares\\pay\\paymentContext.js",
                  "type": "file"
                },
                {
                  "name": "restrictedAreas.js",
                  "path": "src\\middlewares\\pay\\restrictedAreas.js",
                  "type": "file"
                },
                {
                  "name": "withdrawPostProcess.js",
                  "path": "src\\middlewares\\pay\\withdrawPostProcess.js",
                  "type": "file"
                },
                {
                  "name": "withdrawRiskCheck.js",
                  "path": "src\\middlewares\\pay\\withdrawRiskCheck.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "rateLimiter.js",
              "path": "src\\middlewares\\rateLimiter.js",
              "type": "file"
            },
            {
              "name": "responseCache.js",
              "path": "src\\middlewares\\responseCache.js",
              "type": "file"
            },
            {
              "name": "s2sAuthentication.js",
              "path": "src\\middlewares\\s2sAuthentication.js",
              "type": "file"
            },
            {
              "name": "security",
              "path": "src\\middlewares\\security",
              "type": "directory",
              "children": [
                {
                  "name": "hmacSha256.js",
                  "path": "src\\middlewares\\security\\hmacSha256.js",
                  "type": "file"
                },
                {
                  "name": "index.js",
                  "path": "src\\middlewares\\security\\index.js",
                  "type": "file"
                },
                {
                  "name": "md5.js",
                  "path": "src\\middlewares\\security\\md5.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "simpleSign.js",
              "path": "src\\middlewares\\simpleSign.js",
              "type": "file"
            },
            {
              "name": "sms.js",
              "path": "src\\middlewares\\sms.js",
              "type": "file"
            },
            {
              "name": "validate.js",
              "path": "src\\middlewares\\validate.js",
              "type": "file"
            }
          ]
        },
        {
          "name": "modules",
          "path": "src\\modules",
          "type": "directory",
          "children": [
            {
              "name": "full_schema.prisma",
              "path": "src\\modules\\full_schema.prisma",
              "type": "file"
            },
            {
              "name": "migrations",
              "path": "src\\modules\\migrations",
              "type": "directory",
              "children": [
                {
                  "name": "20250623161703_add_placement_domain_fields",
                  "path": "src\\modules\\migrations\\20250623161703_add_placement_domain_fields",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\migrations\\20250623161703_add_placement_domain_fields\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "20250812141152_add_ticket_record",
                  "path": "src\\modules\\migrations\\20250812141152_add_ticket_record",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\migrations\\20250812141152_add_ticket_record\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "20250826152455_add_broadcast_info",
                  "path": "src\\modules\\migrations\\20250826152455_add_broadcast_info",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\migrations\\20250826152455_add_broadcast_info\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "20250915163128_add_cmsemailstaffsetting",
                  "path": "src\\modules\\migrations\\20250915163128_add_cmsemailstaffsetting",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\migrations\\20250915163128_add_cmsemailstaffsetting\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "20251126124434_guanxi_vip_week",
                  "path": "src\\modules\\migrations\\20251126124434_guanxi_vip_week",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\migrations\\20251126124434_guanxi_vip_week\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "20251211150940_guanxi_reflux",
                  "path": "src\\modules\\migrations\\20251211150940_guanxi_reflux",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\migrations\\20251211150940_guanxi_reflux\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "20260105173319_guanxi_gameround",
                  "path": "src\\modules\\migrations\\20260105173319_guanxi_gameround",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\migrations\\20260105173319_guanxi_gameround\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "20260127143818_third_party_user",
                  "path": "src\\modules\\migrations\\20260127143818_third_party_user",
                  "type": "directory",
                  "children": []
                },
                {
                  "name": "20260417120001_rename_extend_to_meta_tb_withdraw_punctual_treasure",
                  "path": "src\\modules\\migrations\\20260417120001_rename_extend_to_meta_tb_withdraw_punctual_treasure",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\migrations\\20260417120001_rename_extend_to_meta_tb_withdraw_punctual_treasure\\migration.sql",
                      "type": "file"
                    }
                  ]
                }
              ]
            },
            {
              "name": "published",
              "path": "src\\modules\\published",
              "type": "directory",
              "children": [
                {
                  "name": "2025061815",
                  "path": "src\\modules\\published\\2025061815",
                  "type": "directory",
                  "children": [
                    {
                      "name": "20250603110847_diff",
                      "path": "src\\modules\\published\\2025061815\\20250603110847_diff",
                      "type": "directory",
                      "children": [
                        {
                          "name": "migration.sql",
                          "path": "src\\modules\\published\\2025061815\\20250603110847_diff\\migration.sql",
                          "type": "file"
                        }
                      ]
                    },
                    {
                      "name": "20250605210444_userattrib",
                      "path": "src\\modules\\published\\2025061815\\20250605210444_userattrib",
                      "type": "directory",
                      "children": [
                        {
                          "name": "migration.sql",
                          "path": "src\\modules\\published\\2025061815\\20250605210444_userattrib\\migration.sql",
                          "type": "file"
                        }
                      ]
                    },
                    {
                      "name": "20250606114838_add_operation_center_r",
                      "path": "src\\modules\\published\\2025061815\\20250606114838_add_operation_center_r",
                      "type": "directory",
                      "children": [
                        {
                          "name": "migration.sql",
                          "path": "src\\modules\\published\\2025061815\\20250606114838_add_operation_center_r\\migration.sql",
                          "type": "file"
                        }
                      ]
                    },
                    {
                      "name": "20250606180317_add_operation_center_r_customerId",
                      "path": "src\\modules\\published\\2025061815\\20250606180317_add_operation_center_r_customerId",
                      "type": "directory",
                      "children": [
                        {
                          "name": "migration.sql",
                          "path": "src\\modules\\published\\2025061815\\20250606180317_add_operation_center_r_customerId\\migration.sql",
                          "type": "file"
                        }
                      ]
                    },
                    {
                      "name": "20250612183505_fix_all_model",
                      "path": "src\\modules\\published\\2025061815\\20250612183505_fix_all_model",
                      "type": "directory",
                      "children": [
                        {
                          "name": "migration.sql",
                          "path": "src\\modules\\published\\2025061815\\20250612183505_fix_all_model\\migration.sql",
                          "type": "file"
                        }
                      ]
                    },
                    {
                      "name": "20250613161515_add_operation_center_r_customer_type",
                      "path": "src\\modules\\published\\2025061815\\20250613161515_add_operation_center_r_customer_type",
                      "type": "directory",
                      "children": [
                        {
                          "name": "migration.sql",
                          "path": "src\\modules\\published\\2025061815\\20250613161515_add_operation_center_r_customer_type\\migration.sql",
                          "type": "file"
                        }
                      ]
                    },
                    {
                      "name": "20250618.sql",
                      "path": "src\\modules\\published\\2025061815\\20250618.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "2025062001",
                  "path": "src\\modules\\published\\2025062001",
                  "type": "directory",
                  "children": [
                    {
                      "name": "20250620115524_gx_transaction",
                      "path": "src\\modules\\published\\2025062001\\20250620115524_gx_transaction",
                      "type": "directory",
                      "children": [
                        {
                          "name": "migration.sql",
                          "path": "src\\modules\\published\\2025062001\\20250620115524_gx_transaction\\migration.sql",
                          "type": "file"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "2025070717",
                  "path": "src\\modules\\published\\2025070717",
                  "type": "directory",
                  "children": [
                    {
                      "name": "20250613141103_add_relation_cdkcode",
                      "path": "src\\modules\\published\\2025070717\\20250613141103_add_relation_cdkcode",
                      "type": "directory",
                      "children": [
                        {
                          "name": "migration.sql",
                          "path": "src\\modules\\published\\2025070717\\20250613141103_add_relation_cdkcode\\migration.sql",
                          "type": "file"
                        }
                      ]
                    },
                    {
                      "name": "20250722113407_guanxi_wager",
                      "path": "src\\modules\\published\\2025070717\\20250722113407_guanxi_wager",
                      "type": "directory",
                      "children": [
                        {
                          "name": "migration.sql",
                          "path": "src\\modules\\published\\2025070717\\20250722113407_guanxi_wager\\migration.sql",
                          "type": "file"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "2025082917",
                  "path": "src\\modules\\published\\2025082917",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\published\\2025082917\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "2025090814",
                  "path": "src\\modules\\published\\2025090814",
                  "type": "directory",
                  "children": [
                    {
                      "name": "20250829173149_wallet",
                      "path": "src\\modules\\published\\2025090814\\20250829173149_wallet",
                      "type": "directory",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "2025091615",
                  "path": "src\\modules\\published\\2025091615",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\published\\2025091615\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "20251010171400_guanxi_player_rank",
                  "path": "src\\modules\\published\\20251010171400_guanxi_player_rank",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\published\\20251010171400_guanxi_player_rank\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "2025101614",
                  "path": "src\\modules\\published\\2025101614",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\published\\2025101614\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "20251215174320_guanxi_account",
                  "path": "src\\modules\\published\\20251215174320_guanxi_account",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\published\\20251215174320_guanxi_account\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "20260306141338_guanxi_real",
                  "path": "src\\modules\\published\\20260306141338_guanxi_real",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\published\\20260306141338_guanxi_real\\migration.sql",
                      "type": "file"
                    }
                  ]
                }
              ]
            },
            {
              "name": "schema.prisma",
              "path": "src\\modules\\schema.prisma",
              "type": "file"
            }
          ]
        },
        {
          "name": "repositories",
          "path": "src\\repositories",
          "type": "directory",
          "children": []
        },
        {
          "name": "routes",
          "path": "src\\routes",
          "type": "directory",
          "children": [
            {
              "name": "v1",
              "path": "src\\routes\\v1",
              "type": "directory",
              "children": [
                {
                  "name": "advertising.route.js",
                  "path": "src\\routes\\v1\\advertising.route.js",
                  "type": "file"
                },
                {
                  "name": "agent.route.js",
                  "path": "src\\routes\\v1\\agent.route.js",
                  "type": "file"
                },
                {
                  "name": "announcement.route.js",
                  "path": "src\\routes\\v1\\announcement.route.js",
                  "type": "file"
                },
                {
                  "name": "appbury.route.js",
                  "path": "src\\routes\\v1\\appbury.route.js",
                  "type": "file"
                },
                {
                  "name": "audienceBaseConfig.route.js",
                  "path": "src\\routes\\v1\\audienceBaseConfig.route.js",
                  "type": "file"
                },
                {
                  "name": "audienceClassification.route.js",
                  "path": "src\\routes\\v1\\audienceClassification.route.js",
                  "type": "file"
                },
                {
                  "name": "audienceGroup.route.js",
                  "path": "src\\routes\\v1\\audienceGroup.route.js",
                  "type": "file"
                },
                {
                  "name": "auth.route.js",
                  "path": "src\\routes\\v1\\auth.route.js",
                  "type": "file"
                },
                {
                  "name": "banner.js",
                  "path": "src\\routes\\v1\\banner.js",
                  "type": "file"
                },
                {
                  "name": "broadcast.route.js",
                  "path": "src\\routes\\v1\\broadcast.route.js",
                  "type": "file"
                },
                {
                  "name": "config.route.js",
                  "path": "src\\routes\\v1\\config.route.js",
                  "type": "file"
                },
                {
                  "name": "dailyCheckIn.route.js",
                  "path": "src\\routes\\v1\\dailyCheckIn.route.js",
                  "type": "file"
                },
                {
                  "name": "dbSnapshot.route.js",
                  "path": "src\\routes\\v1\\dbSnapshot.route.js",
                  "type": "file"
                },
                {
                  "name": "docs.route.js",
                  "path": "src\\routes\\v1\\docs.route.js",
                  "type": "file"
                },
                {
                  "name": "fruitMachineDraw.route.js",
                  "path": "src\\routes\\v1\\fruitMachineDraw.route.js",
                  "type": "file"
                },
                {
                  "name": "game",
                  "path": "src\\routes\\v1\\game",
                  "type": "directory",
                  "children": [
                    {
                      "name": "game.route.js",
                      "path": "src\\routes\\v1\\game\\game.route.js",
                      "type": "file"
                    },
                    {
                      "name": "provider",
                      "path": "src\\routes\\v1\\game\\provider",
                      "type": "directory",
                      "children": [
                        {
                          "name": "21Sports.route.js",
                          "path": "src\\routes\\v1\\game\\provider\\21Sports.route.js",
                          "type": "file"
                        },
                        {
                          "name": "evo.route.js",
                          "path": "src\\routes\\v1\\game\\provider\\evo.route.js",
                          "type": "file"
                        },
                        {
                          "name": "facai.route.js",
                          "path": "src\\routes\\v1\\game\\provider\\facai.route.js",
                          "type": "file"
                        },
                        {
                          "name": "index.js",
                          "path": "src\\routes\\v1\\game\\provider\\index.js",
                          "type": "file"
                        },
                        {
                          "name": "inout_evo.route.js",
                          "path": "src\\routes\\v1\\game\\provider\\inout_evo.route.js",
                          "type": "file"
                        },
                        {
                          "name": "inout_jdy.route.js",
                          "path": "src\\routes\\v1\\game\\provider\\inout_jdy.route.js",
                          "type": "file"
                        },
                        {
                          "name": "oneapi.route.js",
                          "path": "src\\routes\\v1\\game\\provider\\oneapi.route.js",
                          "type": "file"
                        },
                        {
                          "name": "oneapi_evo.route.js",
                          "path": "src\\routes\\v1\\game\\provider\\oneapi_evo.route.js",
                          "type": "file"
                        },
                        {
                          "name": "pt.route.js",
                          "path": "src\\routes\\v1\\game\\provider\\pt.route.js",
                          "type": "file"
                        },
                        {
                          "name": "sports.route.js",
                          "path": "src\\routes\\v1\\game\\provider\\sports.route.js",
                          "type": "file"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "giftCenter.route.js",
                  "path": "src\\routes\\v1\\giftCenter.route.js",
                  "type": "file"
                },
                {
                  "name": "giftcode.route.js",
                  "path": "src\\routes\\v1\\giftcode.route.js",
                  "type": "file"
                },
                {
                  "name": "googlepush.route.js",
                  "path": "src\\routes\\v1\\googlepush.route.js",
                  "type": "file"
                },
                {
                  "name": "guideCard.route.js",
                  "path": "src\\routes\\v1\\guideCard.route.js",
                  "type": "file"
                },
                {
                  "name": "inactiveUser.route.js",
                  "path": "src\\routes\\v1\\inactiveUser.route.js",
                  "type": "file"
                },
                {
                  "name": "index.js",
                  "path": "src\\routes\\v1\\index.js",
                  "type": "file"
                },
                {
                  "name": "kefu.route.js",
                  "path": "src\\routes\\v1\\kefu.route.js",
                  "type": "file"
                },
                {
                  "name": "lobby.route.js",
                  "path": "src\\routes\\v1\\lobby.route.js",
                  "type": "file"
                },
                {
                  "name": "mail.route.js",
                  "path": "src\\routes\\v1\\mail.route.js",
                  "type": "file"
                },
                {
                  "name": "online.route.js",
                  "path": "src\\routes\\v1\\online.route.js",
                  "type": "file"
                },
                {
                  "name": "pay.route.js",
                  "path": "src\\routes\\v1\\pay.route.js",
                  "type": "file"
                },
                {
                  "name": "playerInfo.route.js",
                  "path": "src\\routes\\v1\\playerInfo.route.js",
                  "type": "file"
                },
                {
                  "name": "playerRanking.route.js",
                  "path": "src\\routes\\v1\\playerRanking.route.js",
                  "type": "file"
                },
                {
                  "name": "rank.route.js",
                  "path": "src\\routes\\v1\\rank.route.js",
                  "type": "file"
                },
                {
                  "name": "rechargeOrder.route.js",
                  "path": "src\\routes\\v1\\rechargeOrder.route.js",
                  "type": "file"
                },
                {
                  "name": "redPoint.route.js",
                  "path": "src\\routes\\v1\\redPoint.route.js",
                  "type": "file"
                },
                {
                  "name": "redPointDebug.route.js",
                  "path": "src\\routes\\v1\\redPointDebug.route.js",
                  "type": "file"
                },
                {
                  "name": "share.route.js",
                  "path": "src\\routes\\v1\\share.route.js",
                  "type": "file"
                },
                {
                  "name": "slap.route.js",
                  "path": "src\\routes\\v1\\slap.route.js",
                  "type": "file"
                },
                {
                  "name": "sms.route.js",
                  "path": "src\\routes\\v1\\sms.route.js",
                  "type": "file"
                },
                {
                  "name": "subsistenceAllowance.route.js",
                  "path": "src\\routes\\v1\\subsistenceAllowance.route.js",
                  "type": "file"
                },
                {
                  "name": "test.route.js",
                  "path": "src\\routes\\v1\\test.route.js",
                  "type": "file"
                },
                {
                  "name": "ticket.route.js",
                  "path": "src\\routes\\v1\\ticket.route.js",
                  "type": "file"
                },
                {
                  "name": "turntable.route.js",
                  "path": "src\\routes\\v1\\turntable.route.js",
                  "type": "file"
                },
                {
                  "name": "userGroup.route.js",
                  "path": "src\\routes\\v1\\userGroup.route.js",
                  "type": "file"
                },
                {
                  "name": "userPrivacy.route.js",
                  "path": "src\\routes\\v1\\userPrivacy.route.js",
                  "type": "file"
                },
                {
                  "name": "version.route.js",
                  "path": "src\\routes\\v1\\version.route.js",
                  "type": "file"
                },
                {
                  "name": "vip.route.js",
                  "path": "src\\routes\\v1\\vip.route.js",
                  "type": "file"
                },
                {
                  "name": "wallet.route.js",
                  "path": "src\\routes\\v1\\wallet.route.js",
                  "type": "file"
                },
                {
                  "name": "withdrawOrder.route.js",
                  "path": "src\\routes\\v1\\withdrawOrder.route.js",
                  "type": "file"
                }
              ]
            }
          ]
        },
        {
          "name": "services",
          "path": "src\\services",
          "type": "directory",
          "children": [
            {
              "name": "advertisingReward.service.js",
              "path": "src\\services\\advertisingReward.service.js",
              "type": "file"
            },
            {
              "name": "agent",
              "path": "src\\services\\agent",
              "type": "directory",
              "children": [
                {
                  "name": "agent.service.js",
                  "path": "src\\services\\agent\\agent.service.js",
                  "type": "file"
                },
                {
                  "name": "config.js",
                  "path": "src\\services\\agent\\config.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "announcement.service.js",
              "path": "src\\services\\announcement.service.js",
              "type": "file"
            },
            {
              "name": "appbury.service.js",
              "path": "src\\services\\appbury.service.js",
              "type": "file"
            },
            {
              "name": "audienceBaseConfig.service.js",
              "path": "src\\services\\audienceBaseConfig.service.js",
              "type": "file"
            },
            {
              "name": "audienceClassification.service.js",
              "path": "src\\services\\audienceClassification.service.js",
              "type": "file"
            },
            {
              "name": "audienceGroup.service.js",
              "path": "src\\services\\audienceGroup.service.js",
              "type": "file"
            },
            {
              "name": "auth.service.js",
              "path": "src\\services\\auth.service.js",
              "type": "file"
            },
            {
              "name": "banner.service.js",
              "path": "src\\services\\banner.service.js",
              "type": "file"
            },
            {
              "name": "behaviorTracking",
              "path": "src\\services\\behaviorTracking",
              "type": "directory",
              "children": [
                {
                  "name": "adjust.service.js",
                  "path": "src\\services\\behaviorTracking\\adjust.service.js",
                  "type": "file"
                },
                {
                  "name": "appsFlyer.service.js",
                  "path": "src\\services\\behaviorTracking\\appsFlyer.service.js",
                  "type": "file"
                },
                {
                  "name": "esEvent.service.js",
                  "path": "src\\services\\behaviorTracking\\esEvent.service.js",
                  "type": "file"
                },
                {
                  "name": "facebookPixel.service.js",
                  "path": "src\\services\\behaviorTracking\\facebookPixel.service.js",
                  "type": "file"
                },
                {
                  "name": "tracking.service.js",
                  "path": "src\\services\\behaviorTracking\\tracking.service.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "broadcast.service.js",
              "path": "src\\services\\broadcast.service.js",
              "type": "file"
            },
            {
              "name": "config.service.js",
              "path": "src\\services\\config.service.js",
              "type": "file"
            },
            {
              "name": "crowd",
              "path": "src\\services\\crowd",
              "type": "directory",
              "children": [
                {
                  "name": "businessStrategy.js",
                  "path": "src\\services\\crowd\\businessStrategy.js",
                  "type": "file"
                },
                {
                  "name": "BusinessStrategyExecutor.js",
                  "path": "src\\services\\crowd\\BusinessStrategyExecutor.js",
                  "type": "file"
                },
                {
                  "name": "components",
                  "path": "src\\services\\crowd\\components",
                  "type": "directory",
                  "children": [
                    {
                      "name": "AudienceFilter.js",
                      "path": "src\\services\\crowd\\components\\AudienceFilter.js",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "CrowdRule.js",
                  "path": "src\\services\\crowd\\CrowdRule.js",
                  "type": "file"
                },
                {
                  "name": "group.js",
                  "path": "src\\services\\crowd\\group.js",
                  "type": "file"
                },
                {
                  "name": "index.js",
                  "path": "src\\services\\crowd\\index.js",
                  "type": "file"
                },
                {
                  "name": "RuleEngine.js",
                  "path": "src\\services\\crowd\\RuleEngine.js",
                  "type": "file"
                },
                {
                  "name": "userAttriPipeline.js",
                  "path": "src\\services\\crowd\\userAttriPipeline.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "dailyCheckIn.service.js",
              "path": "src\\services\\dailyCheckIn.service.js",
              "type": "file"
            },
            {
              "name": "dbSnapshot.service.js",
              "path": "src\\services\\dbSnapshot.service.js",
              "type": "file"
            },
            {
              "name": "fruitMachineDraw.service.js",
              "path": "src\\services\\fruitMachineDraw.service.js",
              "type": "file"
            },
            {
              "name": "game",
              "path": "src\\services\\game",
              "type": "directory",
              "children": [
                {
                  "name": "clientView.service.js",
                  "path": "src\\services\\game\\clientView.service.js",
                  "type": "file"
                },
                {
                  "name": "game.service.js",
                  "path": "src\\services\\game\\game.service.js",
                  "type": "file"
                },
                {
                  "name": "provider",
                  "path": "src\\services\\game\\provider",
                  "type": "directory",
                  "children": [
                    {
                      "name": "21Sports.service.js",
                      "path": "src\\services\\game\\provider\\21Sports.service.js",
                      "type": "file"
                    },
                    {
                      "name": "evo.service.js",
                      "path": "src\\services\\game\\provider\\evo.service.js",
                      "type": "file"
                    },
                    {
                      "name": "facai.service.js",
                      "path": "src\\services\\game\\provider\\facai.service.js",
                      "type": "file"
                    },
                    {
                      "name": "inout.service.js",
                      "path": "src\\services\\game\\provider\\inout.service.js",
                      "type": "file"
                    },
                    {
                      "name": "oneapi.service.js",
                      "path": "src\\services\\game\\provider\\oneapi.service.js",
                      "type": "file"
                    },
                    {
                      "name": "pt.service.js",
                      "path": "src\\services\\game\\provider\\pt.service.js",
                      "type": "file"
                    },
                    {
                      "name": "sports.service.js",
                      "path": "src\\services\\game\\provider\\sports.service.js",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "stat",
                  "path": "src\\services\\game\\stat",
                  "type": "directory",
                  "children": [
                    {
                      "name": "player.js",
                      "path": "src\\services\\game\\stat\\player.js",
                      "type": "file"
                    }
                  ]
                }
              ]
            },
            {
              "name": "giftCenter.service.js",
              "path": "src\\services\\giftCenter.service.js",
              "type": "file"
            },
            {
              "name": "giftcode.service.js",
              "path": "src\\services\\giftcode.service.js",
              "type": "file"
            },
            {
              "name": "guideCard.service.js",
              "path": "src\\services\\guideCard.service.js",
              "type": "file"
            },
            {
              "name": "inactiveUser.service.js",
              "path": "src\\services\\inactiveUser.service.js",
              "type": "file"
            },
            {
              "name": "index.js",
              "path": "src\\services\\index.js",
              "type": "file"
            },
            {
              "name": "jobs",
              "path": "src\\services\\jobs",
              "type": "directory",
              "children": [
                {
                  "name": "BaseJob.js",
                  "path": "src\\services\\jobs\\BaseJob.js",
                  "type": "file"
                },
                {
                  "name": "index.js",
                  "path": "src\\services\\jobs\\index.js",
                  "type": "file"
                },
                {
                  "name": "onlineUserWarn.job.js",
                  "path": "src\\services\\jobs\\onlineUserWarn.job.js",
                  "type": "file"
                },
                {
                  "name": "realTimeStat.job.js",
                  "path": "src\\services\\jobs\\realTimeStat.job.js",
                  "type": "file"
                },
                {
                  "name": "rechargeGiftMail.job.js",
                  "path": "src\\services\\jobs\\rechargeGiftMail.job.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "kefu.service.js",
              "path": "src\\services\\kefu.service.js",
              "type": "file"
            },
            {
              "name": "lobby.service.js",
              "path": "src\\services\\lobby.service.js",
              "type": "file"
            },
            {
              "name": "mail.service.js",
              "path": "src\\services\\mail.service.js",
              "type": "file"
            },
            {
              "name": "maintenance.service.js",
              "path": "src\\services\\maintenance.service.js",
              "type": "file"
            },
            {
              "name": "oneWayPush",
              "path": "src\\services\\oneWayPush",
              "type": "directory",
              "children": [
                {
                  "name": "cluster",
                  "path": "src\\services\\oneWayPush\\cluster",
                  "type": "directory",
                  "children": [
                    {
                      "name": "broker.js",
                      "path": "src\\services\\oneWayPush\\cluster\\broker.js",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "core",
                  "path": "src\\services\\oneWayPush\\core",
                  "type": "directory",
                  "children": [
                    {
                      "name": "config.js",
                      "path": "src\\services\\oneWayPush\\core\\config.js",
                      "type": "file"
                    },
                    {
                      "name": "envelope.js",
                      "path": "src\\services\\oneWayPush\\core\\envelope.js",
                      "type": "file"
                    },
                    {
                      "name": "events.js",
                      "path": "src\\services\\oneWayPush\\core\\events.js",
                      "type": "file"
                    },
                    {
                      "name": "safe-lock.js",
                      "path": "src\\services\\oneWayPush\\core\\safe-lock.js",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "dispatch",
                  "path": "src\\services\\oneWayPush\\dispatch",
                  "type": "directory",
                  "children": [
                    {
                      "name": "push-dispatcher.js",
                      "path": "src\\services\\oneWayPush\\dispatch\\push-dispatcher.js",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "hub",
                  "path": "src\\services\\oneWayPush\\hub",
                  "type": "directory",
                  "children": [
                    {
                      "name": "connection-hub.js",
                      "path": "src\\services\\oneWayPush\\hub\\connection-hub.js",
                      "type": "file"
                    },
                    {
                      "name": "message-router.js",
                      "path": "src\\services\\oneWayPush\\hub\\message-router.js",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "index.js",
                  "path": "src\\services\\oneWayPush\\index.js",
                  "type": "file"
                },
                {
                  "name": "presence",
                  "path": "src\\services\\oneWayPush\\presence",
                  "type": "directory",
                  "children": [
                    {
                      "name": "cleanup-job.js",
                      "path": "src\\services\\oneWayPush\\presence\\cleanup-job.js",
                      "type": "file"
                    },
                    {
                      "name": "presence.service.js",
                      "path": "src\\services\\oneWayPush\\presence\\presence.service.js",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "runtime",
                  "path": "src\\services\\oneWayPush\\runtime",
                  "type": "directory",
                  "children": [
                    {
                      "name": "heartbeat-monitor.js",
                      "path": "src\\services\\oneWayPush\\runtime\\heartbeat-monitor.js",
                      "type": "file"
                    },
                    {
                      "name": "safety.js",
                      "path": "src\\services\\oneWayPush\\runtime\\safety.js",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "transport",
                  "path": "src\\services\\oneWayPush\\transport",
                  "type": "directory",
                  "children": [
                    {
                      "name": "auth.service.js",
                      "path": "src\\services\\oneWayPush\\transport\\auth.service.js",
                      "type": "file"
                    },
                    {
                      "name": "ws-server.js",
                      "path": "src\\services\\oneWayPush\\transport\\ws-server.js",
                      "type": "file"
                    }
                  ]
                }
              ]
            },
            {
              "name": "oneWayPush.service.js",
              "path": "src\\services\\oneWayPush.service.js",
              "type": "file"
            },
            {
              "name": "online.service.js",
              "path": "src\\services\\online.service.js",
              "type": "file"
            },
            {
              "name": "pay",
              "path": "src\\services\\pay",
              "type": "directory",
              "children": [
                {
                  "name": "adapter",
                  "path": "src\\services\\pay\\adapter",
                  "type": "directory",
                  "children": [
                    {
                      "name": "Pay21Adapter.js",
                      "path": "src\\services\\pay\\adapter\\Pay21Adapter.js",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "config.js",
                  "path": "src\\services\\pay\\config.js",
                  "type": "file"
                },
                {
                  "name": "goods",
                  "path": "src\\services\\pay\\goods",
                  "type": "directory",
                  "children": [
                    {
                      "name": "cash.js",
                      "path": "src\\services\\pay\\goods\\cash.js",
                      "type": "file"
                    },
                    {
                      "name": "cycleCard.js",
                      "path": "src\\services\\pay\\goods\\cycleCard.js",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "PaymentAdapter.js",
                  "path": "src\\services\\pay\\PaymentAdapter.js",
                  "type": "file"
                },
                {
                  "name": "paymentAdapterManage.js",
                  "path": "src\\services\\pay\\paymentAdapterManage.js",
                  "type": "file"
                },
                {
                  "name": "rechargeGiftMail.service.js",
                  "path": "src\\services\\pay\\rechargeGiftMail.service.js",
                  "type": "file"
                },
                {
                  "name": "stat.js",
                  "path": "src\\services\\pay\\stat.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "pay.service.js",
              "path": "src\\services\\pay.service.js",
              "type": "file"
            },
            {
              "name": "playerInfo.service.js",
              "path": "src\\services\\playerInfo.service.js",
              "type": "file"
            },
            {
              "name": "playerRanking.service.js",
              "path": "src\\services\\playerRanking.service.js",
              "type": "file"
            },
            {
              "name": "providers",
              "path": "src\\services\\providers",
              "type": "directory",
              "children": [
                {
                  "name": "inout.provider.js",
                  "path": "src\\services\\providers\\inout.provider.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "push.service.js",
              "path": "src\\services\\push.service.js",
              "type": "file"
            },
            {
              "name": "rank.service.js",
              "path": "src\\services\\rank.service.js",
              "type": "file"
            },
            {
              "name": "rechargeOrder.service.js",
              "path": "src\\services\\rechargeOrder.service.js",
              "type": "file"
            },
            {
              "name": "redPoint.service.js",
              "path": "src\\services\\redPoint.service.js",
              "type": "file"
            },
            {
              "name": "redPointBusiness.service.js",
              "path": "src\\services\\redPointBusiness.service.js",
              "type": "file"
            },
            {
              "name": "share",
              "path": "src\\services\\share",
              "type": "directory",
              "children": [
                {
                  "name": "config.js",
                  "path": "src\\services\\share\\config.js",
                  "type": "file"
                },
                {
                  "name": "share.service.js",
                  "path": "src\\services\\share\\share.service.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "slap.service.js",
              "path": "src\\services\\slap.service.js",
              "type": "file"
            },
            {
              "name": "sms.service.js",
              "path": "src\\services\\sms.service.js",
              "type": "file"
            },
            {
              "name": "subsistenceAllowance.service.js",
              "path": "src\\services\\subsistenceAllowance.service.js",
              "type": "file"
            },
            {
              "name": "test.service.js",
              "path": "src\\services\\test.service.js",
              "type": "file"
            },
            {
              "name": "ticket",
              "path": "src\\services\\ticket",
              "type": "directory",
              "children": [
                {
                  "name": "index.js",
                  "path": "src\\services\\ticket\\index.js",
                  "type": "file"
                },
                {
                  "name": "ticketGrandScheduler.js",
                  "path": "src\\services\\ticket\\ticketGrandScheduler.js",
                  "type": "file"
                },
                {
                  "name": "ticketMajorScheduler.js",
                  "path": "src\\services\\ticket\\ticketMajorScheduler.js",
                  "type": "file"
                },
                {
                  "name": "ticketPoolScheduler.service.js",
                  "path": "src\\services\\ticket\\ticketPoolScheduler.service.js",
                  "type": "file"
                },
                {
                  "name": "ticketSecondaryScheduler.js",
                  "path": "src\\services\\ticket\\ticketSecondaryScheduler.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "ticket.service.js",
              "path": "src\\services\\ticket.service.js",
              "type": "file"
            },
            {
              "name": "timerTask.service.js",
              "path": "src\\services\\timerTask.service.js",
              "type": "file"
            },
            {
              "name": "token.service.js",
              "path": "src\\services\\token.service.js",
              "type": "file"
            },
            {
              "name": "transaction.service.js",
              "path": "src\\services\\transaction.service.js",
              "type": "file"
            },
            {
              "name": "turntable",
              "path": "src\\services\\turntable",
              "type": "directory",
              "children": [
                {
                  "name": "review.js",
                  "path": "src\\services\\turntable\\review.js",
                  "type": "file"
                },
                {
                  "name": "turntable.service.js",
                  "path": "src\\services\\turntable\\turntable.service.js",
                  "type": "file"
                },
                {
                  "name": "turntableConfig.js",
                  "path": "src\\services\\turntable\\turntableConfig.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "userChannel.service.js",
              "path": "src\\services\\userChannel.service.js",
              "type": "file"
            },
            {
              "name": "userGroup.service.js",
              "path": "src\\services\\userGroup.service.js",
              "type": "file"
            },
            {
              "name": "userPrivacy.service.js",
              "path": "src\\services\\userPrivacy.service.js",
              "type": "file"
            },
            {
              "name": "userSource.service.js",
              "path": "src\\services\\userSource.service.js",
              "type": "file"
            },
            {
              "name": "vip.service.js",
              "path": "src\\services\\vip.service.js",
              "type": "file"
            },
            {
              "name": "visualTemplate.service.js",
              "path": "src\\services\\visualTemplate.service.js",
              "type": "file"
            },
            {
              "name": "wallet.service.js",
              "path": "src\\services\\wallet.service.js",
              "type": "file"
            },
            {
              "name": "withdrawOrder.service.js",
              "path": "src\\services\\withdrawOrder.service.js",
              "type": "file"
            }
          ]
        },
        {
          "name": "tests",
          "path": "src\\tests",
          "type": "directory",
          "children": [
            {
              "name": "game.test.js",
              "path": "src\\tests\\game.test.js",
              "type": "file"
            },
            {
              "name": "gameRecord.test.js",
              "path": "src\\tests\\gameRecord.test.js",
              "type": "file"
            },
            {
              "name": "inactive-users-example.js",
              "path": "src\\tests\\inactive-users-example.js",
              "type": "file"
            },
            {
              "name": "inout.test.js",
              "path": "src\\tests\\inout.test.js",
              "type": "file"
            },
            {
              "name": "iopush.server.examples.js",
              "path": "src\\tests\\iopush.server.examples.js",
              "type": "file"
            },
            {
              "name": "iopush.service.enhanced.js",
              "path": "src\\tests\\iopush.service.enhanced.js",
              "type": "file"
            },
            {
              "name": "iopush.test.client.clean.js",
              "path": "src\\tests\\iopush.test.client.clean.js",
              "type": "file"
            },
            {
              "name": "pure.websocket.example.js",
              "path": "src\\tests\\pure.websocket.example.js",
              "type": "file"
            },
            {
              "name": "pushListener.js",
              "path": "src\\tests\\pushListener.js",
              "type": "file"
            },
            {
              "name": "pushTest.js",
              "path": "src\\tests\\pushTest.js",
              "type": "file"
            },
            {
              "name": "pushTestSimple.js",
              "path": "src\\tests\\pushTestSimple.js",
              "type": "file"
            },
            {
              "name": "scheduler.test.js",
              "path": "src\\tests\\scheduler.test.js",
              "type": "file"
            },
            {
              "name": "security",
              "path": "src\\tests\\security",
              "type": "directory",
              "children": [
                {
                  "name": "test-hmac-sha256.js",
                  "path": "src\\tests\\security\\test-hmac-sha256.js",
                  "type": "file"
                },
                {
                  "name": "test-md5.js",
                  "path": "src\\tests\\security\\test-md5.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "socket",
              "path": "src\\tests\\socket",
              "type": "directory",
              "children": [
                {
                  "name": "iopush.service.back.js",
                  "path": "src\\tests\\socket\\iopush.service.back.js",
                  "type": "file"
                },
                {
                  "name": "iopush.service.pure.websocket.js",
                  "path": "src\\tests\\socket\\iopush.service.pure.websocket.js",
                  "type": "file"
                },
                {
                  "name": "iopush.service.websocket.enhanced.js",
                  "path": "src\\tests\\socket\\iopush.service.websocket.enhanced.js",
                  "type": "file"
                },
                {
                  "name": "README.pure.websocket.md",
                  "path": "src\\tests\\socket\\README.pure.websocket.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "sync.js",
              "path": "src\\tests\\sync.js",
              "type": "file"
            },
            {
              "name": "test.js",
              "path": "src\\tests\\test.js",
              "type": "file"
            },
            {
              "name": "test2.js",
              "path": "src\\tests\\test2.js",
              "type": "file"
            },
            {
              "name": "test3.js",
              "path": "src\\tests\\test3.js",
              "type": "file"
            },
            {
              "name": "testCache.js",
              "path": "src\\tests\\testCache.js",
              "type": "file"
            },
            {
              "name": "tranasctionTest.js",
              "path": "src\\tests\\tranasctionTest.js",
              "type": "file"
            },
            {
              "name": "transactionTest.js",
              "path": "src\\tests\\transactionTest.js",
              "type": "file"
            },
            {
              "name": "transactionWagerTest.js",
              "path": "src\\tests\\transactionWagerTest.js",
              "type": "file"
            },
            {
              "name": "userProfile.test.js",
              "path": "src\\tests\\userProfile.test.js",
              "type": "file"
            },
            {
              "name": "userRankingTest.js",
              "path": "src\\tests\\userRankingTest.js",
              "type": "file"
            },
            {
              "name": "websocket.adapter.example.js",
              "path": "src\\tests\\websocket.adapter.example.js",
              "type": "file"
            },
            {
              "name": "websocket.test.client.js",
              "path": "src\\tests\\websocket.test.client.js",
              "type": "file"
            },
            {
              "name": "websocket.upgrade.guide.md",
              "path": "src\\tests\\websocket.upgrade.guide.md",
              "type": "file"
            }
          ]
        },
        {
          "name": "utils",
          "path": "src\\utils",
          "type": "directory",
          "children": [
            {
              "name": "ApiError.js",
              "path": "src\\utils\\ApiError.js",
              "type": "file"
            },
            {
              "name": "behavior.util.js",
              "path": "src\\utils\\behavior.util.js",
              "type": "file"
            },
            {
              "name": "bot",
              "path": "src\\utils\\bot",
              "type": "directory",
              "children": [
                {
                  "name": "lark.js",
                  "path": "src\\utils\\bot\\lark.js",
                  "type": "file"
                },
                {
                  "name": "message.js",
                  "path": "src\\utils\\bot\\message.js",
                  "type": "file"
                },
                {
                  "name": "tgbot.util.js",
                  "path": "src\\utils\\bot\\tgbot.util.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "cashPush.util.js",
              "path": "src\\utils\\cashPush.util.js",
              "type": "file"
            },
            {
              "name": "catchAsync.js",
              "path": "src\\utils\\catchAsync.js",
              "type": "file"
            },
            {
              "name": "commonUtil.js",
              "path": "src\\utils\\commonUtil.js",
              "type": "file"
            },
            {
              "name": "computing.util.js",
              "path": "src\\utils\\computing.util.js",
              "type": "file"
            },
            {
              "name": "decimal.js",
              "path": "src\\utils\\decimal.js",
              "type": "file"
            },
            {
              "name": "elk",
              "path": "src\\utils\\elk",
              "type": "directory",
              "children": [
                {
                  "name": "esUtil.js",
                  "path": "src\\utils\\elk\\esUtil.js",
                  "type": "file"
                },
                {
                  "name": "README.md",
                  "path": "src\\utils\\elk\\README.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "event.js",
              "path": "src\\utils\\event.js",
              "type": "file"
            },
            {
              "name": "functionSwitch.util.js",
              "path": "src\\utils\\functionSwitch.util.js",
              "type": "file"
            },
            {
              "name": "game.provider.utils.js",
              "path": "src\\utils\\game.provider.utils.js",
              "type": "file"
            },
            {
              "name": "gameBet.util.js",
              "path": "src\\utils\\gameBet.util.js",
              "type": "file"
            },
            {
              "name": "mail.util.js",
              "path": "src\\utils\\mail.util.js",
              "type": "file"
            },
            {
              "name": "memoryGuard.js",
              "path": "src\\utils\\memoryGuard.js",
              "type": "file"
            },
            {
              "name": "merchant.util.js",
              "path": "src\\utils\\merchant.util.js",
              "type": "file"
            },
            {
              "name": "mmdb.util.js",
              "path": "src\\utils\\mmdb.util.js",
              "type": "file"
            },
            {
              "name": "moment.util.js",
              "path": "src\\utils\\moment.util.js",
              "type": "file"
            },
            {
              "name": "monitor.js",
              "path": "src\\utils\\monitor.js",
              "type": "file"
            },
            {
              "name": "normal.util.js",
              "path": "src\\utils\\normal.util.js",
              "type": "file"
            },
            {
              "name": "os.util.js",
              "path": "src\\utils\\os.util.js",
              "type": "file"
            },
            {
              "name": "package.util.js",
              "path": "src\\utils\\package.util.js",
              "type": "file"
            },
            {
              "name": "paginate.js",
              "path": "src\\utils\\paginate.js",
              "type": "file"
            },
            {
              "name": "pick.js",
              "path": "src\\utils\\pick.js",
              "type": "file"
            },
            {
              "name": "recall.js",
              "path": "src\\utils\\recall.js",
              "type": "file"
            },
            {
              "name": "recharge.util.js",
              "path": "src\\utils\\recharge.util.js",
              "type": "file"
            },
            {
              "name": "redis.util.js",
              "path": "src\\utils\\redis.util.js",
              "type": "file"
            },
            {
              "name": "reloadConfigUtil.js",
              "path": "src\\utils\\reloadConfigUtil.js",
              "type": "file"
            },
            {
              "name": "response.js",
              "path": "src\\utils\\response.js",
              "type": "file"
            },
            {
              "name": "rwRule.util.js",
              "path": "src\\utils\\rwRule.util.js",
              "type": "file"
            },
            {
              "name": "serializer.js",
              "path": "src\\utils\\serializer.js",
              "type": "file"
            },
            {
              "name": "sign.util.js",
              "path": "src\\utils\\sign.util.js",
              "type": "file"
            },
            {
              "name": "sms",
              "path": "src\\utils\\sms",
              "type": "directory",
              "children": [
                {
                  "name": "itniotech.provider.js",
                  "path": "src\\utils\\sms\\itniotech.provider.js",
                  "type": "file"
                },
                {
                  "name": "sms.util.js",
                  "path": "src\\utils\\sms\\sms.util.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "sort.util.js",
              "path": "src\\utils\\sort.util.js",
              "type": "file"
            },
            {
              "name": "systemHealthMonitor.js",
              "path": "src\\utils\\systemHealthMonitor.js",
              "type": "file"
            },
            {
              "name": "ticket.util.js",
              "path": "src\\utils\\ticket.util.js",
              "type": "file"
            },
            {
              "name": "ticketTask.util.js",
              "path": "src\\utils\\ticketTask.util.js",
              "type": "file"
            },
            {
              "name": "TransactionError.js",
              "path": "src\\utils\\TransactionError.js",
              "type": "file"
            },
            {
              "name": "user.util.js",
              "path": "src\\utils\\user.util.js",
              "type": "file"
            },
            {
              "name": "userAttrib.util.js",
              "path": "src\\utils\\userAttrib.util.js",
              "type": "file"
            },
            {
              "name": "userProfile",
              "path": "src\\utils\\userProfile",
              "type": "directory",
              "children": [
                {
                  "name": "attribt.js",
                  "path": "src\\utils\\userProfile\\attribt.js",
                  "type": "file"
                },
                {
                  "name": "compute.js",
                  "path": "src\\utils\\userProfile\\compute.js",
                  "type": "file"
                },
                {
                  "name": "config.js",
                  "path": "src\\utils\\userProfile\\config.js",
                  "type": "file"
                },
                {
                  "name": "profile.util.js",
                  "path": "src\\utils\\userProfile\\profile.util.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "validate.js",
              "path": "src\\utils\\validate.js",
              "type": "file"
            },
            {
              "name": "web3.util.js",
              "path": "src\\utils\\web3.util.js",
              "type": "file"
            },
            {
              "name": "webhook.util.js",
              "path": "src\\utils\\webhook.util.js",
              "type": "file"
            },
            {
              "name": "wholeStat",
              "path": "src\\utils\\wholeStat",
              "type": "directory",
              "children": [
                {
                  "name": "behavior.stat.js",
                  "path": "src\\utils\\wholeStat\\behavior.stat.js",
                  "type": "file"
                },
                {
                  "name": "game.stat.js",
                  "path": "src\\utils\\wholeStat\\game.stat.js",
                  "type": "file"
                },
                {
                  "name": "subsistenceAllowance.stat.js",
                  "path": "src\\utils\\wholeStat\\subsistenceAllowance.stat.js",
                  "type": "file"
                },
                {
                  "name": "whole.stat.util.js",
                  "path": "src\\utils\\wholeStat\\whole.stat.util.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "withdraw.util.js",
              "path": "src\\utils\\withdraw.util.js",
              "type": "file"
            }
          ]
        },
        {
          "name": "validations",
          "path": "src\\validations",
          "type": "directory",
          "children": [
            {
              "name": "advertising.validation.js",
              "path": "src\\validations\\advertising.validation.js",
              "type": "file"
            },
            {
              "name": "agent.validation.js",
              "path": "src\\validations\\agent.validation.js",
              "type": "file"
            },
            {
              "name": "announcement.validation.js",
              "path": "src\\validations\\announcement.validation.js",
              "type": "file"
            },
            {
              "name": "audienceBaseConfig.validation.js",
              "path": "src\\validations\\audienceBaseConfig.validation.js",
              "type": "file"
            },
            {
              "name": "audienceClassification.validation.js",
              "path": "src\\validations\\audienceClassification.validation.js",
              "type": "file"
            },
            {
              "name": "audienceGroup.validation.js",
              "path": "src\\validations\\audienceGroup.validation.js",
              "type": "file"
            },
            {
              "name": "auth.validation.js",
              "path": "src\\validations\\auth.validation.js",
              "type": "file"
            },
            {
              "name": "banner.validation.js",
              "path": "src\\validations\\banner.validation.js",
              "type": "file"
            },
            {
              "name": "broadcast.validation.js",
              "path": "src\\validations\\broadcast.validation.js",
              "type": "file"
            },
            {
              "name": "common.validation.js",
              "path": "src\\validations\\common.validation.js",
              "type": "file"
            },
            {
              "name": "custom.validation.js",
              "path": "src\\validations\\custom.validation.js",
              "type": "file"
            },
            {
              "name": "dailyCheckIn.validation.js",
              "path": "src\\validations\\dailyCheckIn.validation.js",
              "type": "file"
            },
            {
              "name": "fruitMachineDraw.validation.js",
              "path": "src\\validations\\fruitMachineDraw.validation.js",
              "type": "file"
            },
            {
              "name": "gameProvider",
              "path": "src\\validations\\gameProvider",
              "type": "directory",
              "children": [
                {
                  "name": "21Sports.validation.js",
                  "path": "src\\validations\\gameProvider\\21Sports.validation.js",
                  "type": "file"
                },
                {
                  "name": "evo.validation.js",
                  "path": "src\\validations\\gameProvider\\evo.validation.js",
                  "type": "file"
                },
                {
                  "name": "facai.validation.js",
                  "path": "src\\validations\\gameProvider\\facai.validation.js",
                  "type": "file"
                },
                {
                  "name": "game.validation.js",
                  "path": "src\\validations\\gameProvider\\game.validation.js",
                  "type": "file"
                },
                {
                  "name": "inout.validation.js",
                  "path": "src\\validations\\gameProvider\\inout.validation.js",
                  "type": "file"
                },
                {
                  "name": "oneapi.validation.js",
                  "path": "src\\validations\\gameProvider\\oneapi.validation.js",
                  "type": "file"
                },
                {
                  "name": "pt.validation.js",
                  "path": "src\\validations\\gameProvider\\pt.validation.js",
                  "type": "file"
                },
                {
                  "name": "sports.validation.js",
                  "path": "src\\validations\\gameProvider\\sports.validation.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "giftcode.validation.js",
              "path": "src\\validations\\giftcode.validation.js",
              "type": "file"
            },
            {
              "name": "inactiveUser.validation.js",
              "path": "src\\validations\\inactiveUser.validation.js",
              "type": "file"
            },
            {
              "name": "index.js",
              "path": "src\\validations\\index.js",
              "type": "file"
            },
            {
              "name": "lobby.validation.js",
              "path": "src\\validations\\lobby.validation.js",
              "type": "file"
            },
            {
              "name": "mail.validation.js",
              "path": "src\\validations\\mail.validation.js",
              "type": "file"
            },
            {
              "name": "pay.validation.js",
              "path": "src\\validations\\pay.validation.js",
              "type": "file"
            },
            {
              "name": "playerInfo.validation.js",
              "path": "src\\validations\\playerInfo.validation.js",
              "type": "file"
            },
            {
              "name": "playerRanking.validation.js",
              "path": "src\\validations\\playerRanking.validation.js",
              "type": "file"
            },
            {
              "name": "push.validation.js",
              "path": "src\\validations\\push.validation.js",
              "type": "file"
            },
            {
              "name": "rank.validation.js",
              "path": "src\\validations\\rank.validation.js",
              "type": "file"
            },
            {
              "name": "rechargeOrder.validation.js",
              "path": "src\\validations\\rechargeOrder.validation.js",
              "type": "file"
            },
            {
              "name": "redPoint.validation.js",
              "path": "src\\validations\\redPoint.validation.js",
              "type": "file"
            },
            {
              "name": "security.validation.js",
              "path": "src\\validations\\security.validation.js",
              "type": "file"
            },
            {
              "name": "slap.validation.js",
              "path": "src\\validations\\slap.validation.js",
              "type": "file"
            },
            {
              "name": "sms.validation.js",
              "path": "src\\validations\\sms.validation.js",
              "type": "file"
            },
            {
              "name": "test.validation.js",
              "path": "src\\validations\\test.validation.js",
              "type": "file"
            },
            {
              "name": "ticket.validation.js",
              "path": "src\\validations\\ticket.validation.js",
              "type": "file"
            },
            {
              "name": "transaction.validation.js",
              "path": "src\\validations\\transaction.validation.js",
              "type": "file"
            },
            {
              "name": "turntable.validation.js",
              "path": "src\\validations\\turntable.validation.js",
              "type": "file"
            },
            {
              "name": "user.validation.js",
              "path": "src\\validations\\user.validation.js",
              "type": "file"
            },
            {
              "name": "userGroup.validation.js",
              "path": "src\\validations\\userGroup.validation.js",
              "type": "file"
            },
            {
              "name": "userPrivacy.validation.js",
              "path": "src\\validations\\userPrivacy.validation.js",
              "type": "file"
            },
            {
              "name": "vip.validation.js",
              "path": "src\\validations\\vip.validation.js",
              "type": "file"
            },
            {
              "name": "wallet.validation.js",
              "path": "src\\validations\\wallet.validation.js",
              "type": "file"
            },
            {
              "name": "withdrawOrder.validation.js",
              "path": "src\\validations\\withdrawOrder.validation.js",
              "type": "file"
            }
          ]
        }
      ]
    },
    {
      "name": "start-server.js",
      "path": "start-server.js",
      "type": "file"
    },
    {
      "name": "sync.sh",
      "path": "sync.sh",
      "type": "file"
    },
    {
      "name": "tests",
      "path": "tests",
      "type": "directory",
      "children": [
        {
          "name": "fixtures",
          "path": "tests\\fixtures",
          "type": "directory",
          "children": [
            {
              "name": "token.fixture.js",
              "path": "tests\\fixtures\\token.fixture.js",
              "type": "file"
            },
            {
              "name": "user.fixture.js",
              "path": "tests\\fixtures\\user.fixture.js",
              "type": "file"
            }
          ]
        },
        {
          "name": "game",
          "path": "tests\\game",
          "type": "directory",
          "children": [
            {
              "name": "gameBettinTest.js",
              "path": "tests\\game\\gameBettinTest.js",
              "type": "file"
            }
          ]
        },
        {
          "name": "integration",
          "path": "tests\\integration",
          "type": "directory",
          "children": [
            {
              "name": "auth.test.js",
              "path": "tests\\integration\\auth.test.js",
              "type": "file"
            },
            {
              "name": "docs.test.js",
              "path": "tests\\integration\\docs.test.js",
              "type": "file"
            },
            {
              "name": "user.test.js",
              "path": "tests\\integration\\user.test.js",
              "type": "file"
            }
          ]
        },
        {
          "name": "sql",
          "path": "tests\\sql",
          "type": "directory",
          "children": [
            {
              "name": "insert_rules.sql",
              "path": "tests\\sql\\insert_rules.sql",
              "type": "file"
            }
          ]
        },
        {
          "name": "unit",
          "path": "tests\\unit",
          "type": "directory",
          "children": [
            {
              "name": "middlewares",
              "path": "tests\\unit\\middlewares",
              "type": "directory",
              "children": [
                {
                  "name": "error.test.js",
                  "path": "tests\\unit\\middlewares\\error.test.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "models",
              "path": "tests\\unit\\models",
              "type": "directory",
              "children": [
                {
                  "name": "plugins",
                  "path": "tests\\unit\\models\\plugins",
                  "type": "directory",
                  "children": [
                    {
                      "name": "paginate.plugin.test.js",
                      "path": "tests\\unit\\models\\plugins\\paginate.plugin.test.js",
                      "type": "file"
                    },
                    {
                      "name": "toJSON.plugin.test.js",
                      "path": "tests\\unit\\models\\plugins\\toJSON.plugin.test.js",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "user.model.test.js",
                  "path": "tests\\unit\\models\\user.model.test.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "utils",
              "path": "tests\\unit\\utils",
              "type": "directory",
              "children": [
                {
                  "name": "systemHealthMonitor.test.js",
                  "path": "tests\\unit\\utils\\systemHealthMonitor.test.js",
                  "type": "file"
                }
              ]
            }
          ]
        },
        {
          "name": "utils",
          "path": "tests\\utils",
          "type": "directory",
          "children": [
            {
              "name": "setupTestDB.js",
              "path": "tests\\utils\\setupTestDB.js",
              "type": "file"
            }
          ]
        }
      ]
    },
    {
      "name": "tools",
      "path": "tools",
      "type": "directory",
      "children": [
        {
          "name": "create-template.js",
          "path": "tools\\create-template.js",
          "type": "file"
        },
        {
          "name": "prisma",
          "path": "tools\\prisma",
          "type": "directory",
          "children": [
            {
              "name": "example.js",
              "path": "tools\\prisma\\example.js",
              "type": "file"
            },
            {
              "name": "execute-sql.js",
              "path": "tools\\prisma\\execute-sql.js",
              "type": "file"
            },
            {
              "name": "migrate.js",
              "path": "tools\\prisma\\migrate.js",
              "type": "file"
            },
            {
              "name": "README.md",
              "path": "tools\\prisma\\README.md",
              "type": "file"
            }
          ]
        },
        {
          "name": "template",
          "path": "tools\\template",
          "type": "directory",
          "children": [
            {
              "name": "template.controller.js",
              "path": "tools\\template\\template.controller.js",
              "type": "file"
            },
            {
              "name": "template.model.js",
              "path": "tools\\template\\template.model.js",
              "type": "file"
            },
            {
              "name": "template.route.js",
              "path": "tools\\template\\template.route.js",
              "type": "file"
            },
            {
              "name": "template.service.js",
              "path": "tools\\template\\template.service.js",
              "type": "file"
            },
            {
              "name": "template.validation.js",
              "path": "tools\\template\\template.validation.js",
              "type": "file"
            }
          ]
        }
      ]
    },
    {
      "name": "yalc.lock",
      "path": "yalc.lock",
      "type": "file"
    },
    {
      "name": "yarn.lock",
      "path": "yarn.lock",
      "type": "file"
    }
  ],
  "message": "ok"
}
```

</details>

---

### ✅ 16. recursive=false 时目录节点 children 应为空数组

**操作**: `RunFileList / 非递归目录结构`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": ".",
  "recursive": false
}
```

**响应状态**: 200

**响应体**: <details><summary>展开</summary>

```json
{
  "code": 0,
  "data": [
    {
      "name": ".cursor",
      "path": ".cursor",
      "type": "directory",
      "children": []
    },
    {
      "name": ".cursorindexingignore",
      "path": ".cursorindexingignore",
      "type": "file"
    },
    {
      "name": ".dockerignore",
      "path": ".dockerignore",
      "type": "file"
    },
    {
      "name": ".editorconfig",
      "path": ".editorconfig",
      "type": "file"
    },
    {
      "name": ".env.development",
      "path": ".env.development",
      "type": "file"
    },
    {
      "name": ".env.production",
      "path": ".env.production",
      "type": "file"
    },
    {
      "name": ".env.test",
      "path": ".env.test",
      "type": "file"
    },
    {
      "name": ".eslintignore",
      "path": ".eslintignore",
      "type": "file"
    },
    {
      "name": ".eslintrc.js",
      "path": ".eslintrc.js",
      "type": "file"
    },
    {
      "name": ".gitattributes",
      "path": ".gitattributes",
      "type": "file"
    },
    {
      "name": ".gitignore",
      "path": ".gitignore",
      "type": "file"
    },
    {
      "name": ".husky",
      "path": ".husky",
      "type": "directory",
      "children": []
    },
    {
      "name": ".lintstagedrc.json",
      "path": ".lintstagedrc.json",
      "type": "file"
    },
    {
      "name": ".prettierignore",
      "path": ".prettierignore",
      "type": "file"
    },
    {
      "name": ".prettierrc.json",
      "path": ".prettierrc.json",
      "type": "file"
    },
    {
      "name": ".specstory",
      "path": ".specstory",
      "type": "directory",
      "children": []
    },
    {
      "name": ".travis.yml",
      "path": ".travis.yml",
      "type": "file"
    },
    {
      "name": ".vscode",
      "path": ".vscode",
      "type": "directory",
      "children": []
    },
    {
      "name": ".yalc",
      "path": ".yalc",
      "type": "directory",
      "children": []
    },
    {
      "name": "babel.config.js",
      "path": "babel.config.js",
      "type": "file"
    },
    {
      "name": "coverage",
      "path": "coverage",
      "type": "directory",
      "children": []
    },
    {
      "name": "docker-compose.dev.yml",
      "path": "docker-compose.dev.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.prod.yml",
      "path": "docker-compose.prod.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.test.yml",
      "path": "docker-compose.test.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.yml",
      "path": "docker-compose.yml",
      "type": "file"
    },
    {
      "name": "Dockerfile",
      "path": "Dockerfile",
      "type": "file"
    },
    {
      "name": "docs",
      "path": "docs",
      "type": "directory",
      "children": []
    },
    {
      "name": "ecosystem.config.json",
      "path": "ecosystem.config.json",
      "type": "file"
    },
    {
      "name": "ecosystem.test.json",
      "path": "ecosystem.test.json",
      "type": "file"
    },
    {
      "name": "examples",
      "path": "examples",
      "type": "directory",
      "children": []
    },
    {
      "name": "gameland.code-workspace",
      "path": "gameland.code-workspace",
      "type": "file"
    },
    {
      "name": "jest.config.js",
      "path": "jest.config.js",
      "type": "file"
    },
    {
      "name": "jsconfig.json",
      "path": "jsconfig.json",
      "type": "file"
    },
    {
      "name": "LICENSE",
      "path": "LICENSE",
      "type": "file"
    },
    {
      "name": "mysql-config",
      "path": "mysql-config",
      "type": "directory",
      "children": []
    },
    {
      "name": "mysql-init",
      "path": "mysql-init",
      "type": "directory",
      "children": []
    },
    {
      "name": "package-lock.json",
      "path": "package-lock.json",
      "type": "file"
    },
    {
      "name": "package.json",
      "path": "package.json",
      "type": "file"
    },
    {
      "name": "proxy.ps1",
      "path": "proxy.ps1",
      "type": "file"
    },
    {
      "name": "README.md",
      "path": "README.md",
      "type": "file"
    },
    {
      "name": "src",
      "path": "src",
      "type": "directory",
      "children": []
    },
    {
      "name": "start-server.js",
      "path": "start-server.js",
      "type": "file"
    },
    {
      "name": "sync.sh",
      "path": "sync.sh",
      "type": "file"
    },
    {
      "name": "tests",
      "path": "tests",
      "type": "directory",
      "children": []
    },
    {
      "name": "tools",
      "path": "tools",
      "type": "directory",
      "children": []
    },
    {
      "name": "yalc.lock",
      "path": "yalc.lock",
      "type": "file"
    },
    {
      "name": "yarn.lock",
      "path": "yarn.lock",
      "type": "file"
    }
  ],
  "message": "ok"
}
```

</details>

---

### ✅ 17. 缺少 path 参数时应返回 400

**操作**: `RunFileList / 缺少 path`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: skip

**请求体**:
```json
{}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 18. path 类型不是 string 时应返回 400

**操作**: `RunFileList / path 类型错误`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": 123
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 19. 路径穿越攻击（../..）应返回 403 或 400

**操作**: `RunFileList / 路径穿越攻击`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": "../../../etc/passwd"
}
```

**响应状态**: 403

**响应体**:
```json
{
  "code": 403,
  "message": "Permission denied"
}
```

**备注**: 安全防护：不允许访问根目录以外的路径

---

### ✅ 20. 不存在的路径应返回 400

**操作**: `RunFileList / 不存在路径`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": "non-existent-dir-xyz-123456"
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 21. 下载有效文件时应返回二进制流与正确响应头

**操作**: `RunFileContent / 下载 package.json`

**请求头**:
- `x-operation`: Y3SrZjVqWOvKsBdpTCh7
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": "package.json"
}
```

**响应状态**: 200

**响应体**:
```json
{
  "contentType": "application/octet-stream",
  "contentDisposition": "attachment; filename=\"package.json\"",
  "fileSize": 4818,
  "savePath": "E:\\project\\risk\\json-bigint-extend\\test\\downloads\\pkg-1779796919826.json"
}
```

---

### ✅ 22. 文件不存在时应返回 404

**操作**: `RunFileContent / 文件不存在`

**请求头**:
- `x-operation`: Y3SrZjVqWOvKsBdpTCh7
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": "non-existent-file-xyz.txt"
}
```

**响应状态**: 404

**响应体**:
```json
{
  "message": "File not found"
}
```

---

### ✅ 23. 路径穿越攻击应返回 404 或 403

**操作**: `RunFileContent / 路径穿越攻击`

**请求头**:
- `x-operation`: Y3SrZjVqWOvKsBdpTCh7
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": "../../../../etc/passwd"
}
```

**响应状态**: 404

**备注**: 安全防护

---

### ✅ 24. 压缩有效目录并下载 ZIP

**操作**: `CompressDownload / src`

**请求头**:
- `x-operation`: SJQf31UJkZ1f88q9m361
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": "src"
}
```

**响应状态**: 200

**响应体**:
```json
{
  "contentType": "application/zip",
  "fileSize": 1073007,
  "savePath": "E:\\project\\risk\\json-bigint-extend\\test\\downloads\\compress-1779796920523.zip"
}
```

---

### ✅ 25. 缺少 path 参数时应返回 400

**操作**: `CompressDownload / 缺少 path`

**请求头**:
- `x-operation`: SJQf31UJkZ1f88q9m361
- `x-timestamp`: skip

**请求体**:
```json
{}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 26. 转发事件应返回 200 并回显 body 数据

**操作**: `ForwardEvent / 正常转发`

**请求头**:
- `x-operation`: LvMWnF1ezaBlRjNAgtym
- `x-timestamp`: skip

**请求体**:
```json
{
  "targetId": "user-888",
  "action": "refresh",
  "extra": {
    "ts": 1779796920530
  }
}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "targetId": "user-888",
    "action": "refresh",
    "extra": {
      "ts": 1779796920530
    }
  }
}
```

---

### ✅ 27. 空 body 也应成功转发

**操作**: `ForwardEvent / 空 body`

**请求头**:
- `x-operation`: LvMWnF1ezaBlRjNAgtym
- `x-timestamp`: skip

**请求体**:
```json
{}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "message": "ok",
  "data": {}
}
```

---

### ✅ 28. 获取 Apollo application 配置应返回对象

**操作**: `GetApolloConfig`

**请求头**:
- `x-operation`: Xp7KnRqT2wJcVeA9mBsL
- `x-timestamp`: skip

**请求体**:
```json
{}
```

**响应状态**: 200

**响应体**: <details><summary>展开</summary>

```json
{
  "code": 0,
  "data": {
    "defaultTGConfig": {
      "token": "7898332048:AAF8q3EDanVoEi4ncIkQ8HCf4Sz7t5BipXE",
      "chatId": "-4978136941"
    },
    "function_switch_map": {
      "attrib_pipeline": true,
      "crowd_all": true,
      "business_strategy_all": true,
      "ticket_system_pool_scheduler": false,
      "kefu": true,
      "gamelandHost": "https://gameland.myapptest.top",
      "cryptoWallet": true,
      "cryptoPay": {
        "enable": true,
        "defaultChannelList": [],
        "rechargeReward": {
          "enable": true,
          "amount": 100,
          "waterMultiples": 9
        },
        "withdrawReward": {
          "enable": true,
          "amount": 777,
          "waterMultiples": 9
        }
      },
      "cdk": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "rank": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "vip": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "banner": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "promo": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "announcement": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "fruitMachine": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "turntable": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "bindMobileNum": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "agent": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "updatePassword": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "lobbyGameView": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "gameGateway_PT": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "gameGateway_WC_EVO": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "gameGateway_ONEAPI": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "jackpotConfig": {
        "enable": true
      },
      "payRecharge": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "payWithdraw": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "gameGateway_ONEAPI_EVO": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "userProfile": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "gamePlaySub": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "cashPush": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "mail": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "login": {
        "enable": false,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "redPoint": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "refreshToken": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "changePlayerInfo": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "cdn": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": [
          2
        ]
      },
      "lobby": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "realTimeStatjob": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "aiCustomerService": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": [
          5,
          1,
          2,
          3,
          4
        ],
        "url": "https://21gamechat.21game.xyz/chat"
      },
      "giftCenter": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "withdrawalTips": {
        "enable": false,
        "route": "gameland",
        "startTime": "10:50",
        "endTime": "11:30"
      },
      "sms": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": [
          1,
          2,
          3,
          4,
          5
        ]
      }
    },
    "gamelandJwt": {
      "secret": "ClsVc5Qw961DbKg0",
      "accessExpirationMinutes": 10080,
      "refreshExpirationDays": 30,
      "thresholdMinutes": 1440
    },
    "gamepay": "v2",
    "restrictedAreas": [
      "Jammu",
      "Kathua",
      "Udhampur",
      "Samba",
      "Reasi",
      "Doda",
      "Kishtwar",
      "Ramban",
      "Rajouri",
      "Poonch",
      "Srinagar",
      "Baramulla",
      "Anantnag",
      "Pulwama",
      "Kupwara",
      "Shopian",
      "Bandipora",
      "Kulgam",
      "Ganderbal",
      "Budgam",
      "Gulmarg",
      "Pahalgam",
      "Sopore",
      "Handwara",
      "Bijbehara",
      "Beerwah",
      "Chadura",
      "Charar-i-Sharief",
      "Katra",
      "Magam",
      "Mattan",
      "Nagrota",
      "Uri",
      "Batote",
      "Bhaderwah",
      "Bishnah",
      "Bari Brahmana",
      "Bhalwal",
      "Marh",
      "Jourian",
      "Khour",
      "Nowshehra",
      "Surankote",
      "Sumbal",
      "Hajan",
      "Kunzer",
      "Vijaypur",
      "Tral",
      "Pattan",
      "Seer Hamdan",
      "Shangus",
      "Qazi Gund",
      "Duru Verinag",
      "Koker Nag",
      "Chandina",
      "Khan Sahib",
      "Tangdhar",
      "Uri",
      "Sumbal"
    ],
    "dd": "v2133",
    "tempPath": [
      "landing1",
      "landing2",
      "landing3",
      "landing4",
      "temp1",
      "temp2",
      "temp3",
      "temp4",
      "temp5",
      "temp6",
      "temp7",
      "temp8",
      "temp9",
      "temp10",
      "temp11",
      "temp12",
      "temp13",
      "temp14",
      "temp15",
      "temp16"
    ],
    "dnsRecord": [
      {
        "type": "A",
        "name": "www",
        "content": "13.234.156.191",
        "ttl": 3600,
        "proxied": true
      },
      {
        "type": "A",
        "name": "www",
        "content": "35.154.111.135",
        "ttl": 3600,
        "proxied": true
      },
      {
        "type": "A",
        "name": "@",
        "content": "13.234.156.191",
        "ttl": 3600,
        "proxied": true
      },
      {
        "type": "A",
        "name": "@",
        "content": "35.154.111.135",
        "ttl": 3600,
        "proxied": true
      }
    ],
    "webhooks": [
      "http://13.202.232.159:8080/generic-webhook-trigger/invoke?token=gameland-webhook-token"
    ],
    "gameServerConfig": {
      "excludedChannel": {
        "status": false,
        "mids": [
          "paypay-8E9A462BA1CC",
          "paypay-E98FD68E34DB",
          "topay-60053",
          "foxpay-7808B",
          "ninespay-E6047A24F0B1",
          "ninespay-971CBA3D98DA",
          "ninespay-46FE7436B5ED",
          "paypay-0DCE0583E70A483FBF5E3CED4AAE52D3",
          "foxpay-CB3C4",
          "ninespay-46FE7436B5ED"
        ]
      },
      "useInactiveUserInfo": false,
      "homePopup": {
        "max": 3,
        "data": [
          {
            "name": "email",
            "show": true,
            "children": [
              {
                "name": "personal",
                "show": true
              },
              {
                "name": "platform",
                "show": true
              },
              {
                "name": "rank",
                "show": true
              }
            ]
          }
        ]
      }
    },
    "gameProviderConfig": {
      "INOUT_EVO": {
        "baseUrl": "https://api.inout.games/api/launch",
        "operatorId": "5a2b1155-5591-4d6e-a5a7-a0cca53aad04",
        "authTokenKey": "3ee037da88057c479f2e3dc84dcf0c566020c66ef4a30a2107f8bce0627c5983",
        "secretKey": "4FBC085A5C34CB43AB8936F73B1B80940F3A9C1CCC656107BC2B146964FCC81CA97C844CF02D2EAB28E0734E66819B70167DA3C3291C86EE4FDA4D25290A02A7",
        "currency": "INR"
      },
      "FACAI": {
        "baseUrl": "https://gamecenter.pg2testing.com/",
        "AppID": "myapptest_inr",
        "AppSecret": "e1ca77fc-8e0f-4ebd-9cfd-866a1821ac1f",
        "currency": "INR"
      },
      "INOUT_JDY": {
        "baseUrl": "https://api.inout.games/api/launch",
        "operatorId": "e321b13a-d329-42c9-912d-b7a1de583f39",
        "authTokenKey": "3ee037da88057c479f2e3dc84dcf0c566020c66ef4a30a2107f8bce0627c6666",
        "secretKey": "A3DF0344874917578253A10BB16892F64EF8EF034C1E61D972A3DEA6C06060F2ECAE771C9F512483CAE479DD1EABC55923D33051022B8B015DBAA63B4F56C91F",
        "currency": "INR"
      },
      "PT": {
        "baseUrl": "https://api-uat.agmidway.net",
        "currency": "CNY",
        "apikey": "2b6ad641ff137fbd64ebbe474ba16d55216072e5fb569b921f7512b51d15b567",
        "serverName": "AGCASTG",
        "Kiosk_Prefix": "AIJ0",
        "countryCode": "CN",
        "authTokenKey": "pcNHwLrxZonk0Wyl",
        "callbackUrl": "https://player.newtest.myapptest.top/wallet/PT"
      },
      "WC_EVO": {
        "baseUrl": "https://uat.ps9games.com",
        "currency": "INR",
        "domainUrl": "https://player.newtest.myapptest.top/wallet/EVO",
        "agCode": "ZNTJI00",
        "secret": "8UJKwje6f0uZ5xaaAJIgToSFVPJDbbPw",
        "token": "Uc8PY4EyKQj5NrtONr5IZuxkxpLY8q14"
      },
      "ONEAPI": {
        "baseUrl": "https://stg.gasea168.com",
        "key": "7f0979b727cf327ed135531a1b78587713563dfaa8e3dc74102206eaa0ff987d",
        "secret": "032bc59114fa908063ff06c262c8021f4aeec1fc0352fd3c2516febe51745c26",
        "lobbyUrl": "https://player.newtest.myapptest.top/wallet/ONEAPI",
        "currency": "INR"
      },
      "ONEAPI_EVO": {
        "baseUrl": "https://stg.gasea168.com",
        "key": "02b75d6d6a4755c68a9ec3b9a104f8c5b4db6176c7ed37be16f72fb240da43f0",
        "secret": "0644a4f14caf36a8a45567e11b7e33e44a95c74888cbf625a69757e7e26a9dee",
        "lobbyUrl": "https://player.newtest.myapptest.top/oneapi",
        "currency": "INR"
      },
      "ONEAPI_SPORTS": {
        "baseUrl": "https://stg.gasea168.com",
        "key": "53344c62862c32f399d55dc946517d64b355553d8360c394206ec6c1cd991096",
        "secret": "74af26ad4c8d96724d2f93854b7b9c6ab05566347cd69ea8b4407ba8b856083e",
        "lobbyUrl": "https://player.newtest.myapptest.top/wallet/ONEAPI",
        "currency": "INR",
        "specificGameId": "SABA_1"
      },
      "LIVE_EVO": {
        "baseUrl": "https://skylinev88asia.uat1.evo-test.com",
        "casinoKey": "subasia21game001",
        "apiToken": "h7IXgXsHHeCZZ6xZgPTi2Q",
        "uaToken": "test123",
        "lobbyUrl": "https://player.newtest.myapptest.top/oneapi",
        "currency": "EUR",
        "defaultPromoGameId": "evo_live_promo_payout_default"
      },
      "21_SPORTS": {
        "baseUrl": "https://21sports-open-test.21game.xyz",
        "frontendUrl": "https://21sport-test.21game.xyz",
        "secret": "c2FsdC1sYXN0LWZvci1wYXNzd29yZC1hbG9uZy13aXRoLXNvbWUtcmFuZG9tLWJ5dGVzLXRvLW1lZXQtdGhlLW1pbmltdW0tcmVxdWlyZW1lbnRz",
        "lobbyUrl": "https://player.newtest.myapptest.top/wallet/ONEAPI",
        "currency": "INR",
        "specificGameId": "SABA_1"
      }
    },
    "demoGameInfo": {
      "gameId": 37235,
      "currency": "INR",
      "language": "en"
    },
    "gameWagerConfig": {
      "coding": {
        "SPB_aviator": {
          "enable": true,
          "type": "cash"
        },
        "SPB_mines": {
          "enable": true,
          "type": "cash"
        },
        "MG_SMG_championsOfOlympus": {
          "enable": true,
          "type": "finish"
        },
        "MG_SMG_auroraWilds": {
          "enable": true,
          "type": "finish"
        }
      }
    },
    "userRechargeAmount": {
      "totalRechargeAmount": 5000,
      "rechargeAmount": 3000,
      "rCustomerId": 1
    },
    "cmsServerUrl": {
      "dev": "https://gameland-cms.myapptest.top/",
      "test": "https://gameland-cms.myapptest.top/",
      "production": "https://cmsnew.21game.live/",
      "url": "https://gameland-cms.myapptest.top"
    },
    "apollo": {
      "appId": 200000,
      "token": "6c731a609a6a443b2547b339500c1395d6e33e344c34f56cb77cb7c9ecb0332f",
      "portalUrl": "http://43.198.128.30:8070"
    },
    "registerLimit": {
      "todayRegisterIpCount": -1,
      "emulatorLimit": false,
      "ipWhitelist": [
        "::ffff:127.0.0.1",
        "101.32.44.13",
        "116.30.103.19"
      ]
    },
    "firebaseConfig": {
      "projectId": "game-cd307",
      "privateKeyId": "59331748a6710db4c8723774cef0c1ae72e2e6f1",
      "privateKey": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCdhXA/REFc5pKU\ncdZJPXgq6T9aPmTlcoxk1JUM05la6M8xVo7DaeGYZfVn2xVQruLte5/3Cys8xsGX\nIHiw2EtPYIcaQ0NPBG6K19UnBOXTuhXwfiEx2xHsbiwYkRksKs+3mOpLp/SM9dO/\nlfJqTcXLRwCGDXhfRVfUryTxl44Zb88rkoJlJk9X6krZJESw9MssDcCqGQUa4ArL\nOtLSB5OEOqU49YG1Fh8YjKEAzfWAK1FVk6TYOnnGspoXX24FUy3X9baQcKOj3VFV\naxfXSXRiMBS5OJ75AYvWTiMLHRJ6qsjD7m6rlyYiCiNU/xCTRet1wiEI7w+jYumb\nCjF/qPGXAgMBAAECggEAAf5GX9gsw/cU9sG3No3YRe68Qv36h97A53IhmrWljj1w\n71mX8xTiNzjFd+iq5q6RdFp10tbDPgC9dWMCgMMtgy+GnIhdj/pPepYYyxm1EM6D\nglun1Ub448pQtSGs6F6rhAUjpEAK7t4Z4L90f4mrAMbN7mRTcbbIBQrcVFEYvSCk\neJ+00psdQsuoHE4BtcXOK0ihcRzgi72L+y+2EtZsDfzpm/rFObNYfz9q19H4x79O\nAMYOW34vjSw7V/LW62uT0s+ee+6NdaCgkCrtw42n+fbW9U3sSNZf9EIw/75nt+Fg\nTyIsquZR5YY1MUZz96HGyBp8LZ2McfmcvvJZYgGUMQKBgQDbaopAmHIKsDP22T19\n8b9IKglNJb9zmQYjeiQ93/0p8BHlX71FOjH7eqCkM4as3m32mbrqx2zhro0b3gRa\nus7AgN1aZbsiR3nfdPiYxEYS2Oj5xjSb1ik3NjORoK+JG7gXDqA4BcbCHpivGmv9\neqFsIWouehpjULjazYcD0kAjEQKBgQC3yQDlT6QKhmYQ1vabmQy4alNAwRhSvoru\n1rF/MsZwvMM4hPu7DbcKJtK9OuwImk4GGLbiZZaKTvnG5Yzwc7Kv1iP36wuCmhHU\nOm8fMwyp22KqK3NkesYO+UV9VvqXNHFK+MqGNMYsjvDQ523dJCSxnzZONYRswWft\n2M/pIVX6JwKBgQDWsumVS5ZL3x757Ji/JE6HzppLYyRzeMkI7fuIkCSpZMAeMhCC\nLO+7o8KM6d5eSUhQhRzhn0JrkuGA4z5fiWvF8lKmoeT7JfWbMloPIf9vcdCGl+vi\nkSzDWcYcOZ+KChWYejdMmlpimI3OyYvh/Jz3sbq0v8YSaGp5r6Ltmk4oAQKBgQCI\ntlYbPm4JgkaEelPCFUy4FifOAJXGX4Vb+4rX0v54uIIEFjBnyeECBTU4nI8eKyKl\nOFc6/FTKl8sIIJQB/h7K3GGvN0I9qbxfggRNUh02cULo0R+qfAW+98CwZzZLqjAo\nk/+ba8CLPt12mOFJ4mwFUSkFbpwOhqR38pNemXSqewKBgFh0rg4ptTqja0H9ZB2R\naslokpQhluuV5UBp5oT5f4tlUhizmjaKWgjpT9xr8yzC2UpRUrLzODm7gwZYmj7p\nm4l1YXjIo5ClhU4jEawQJat/FMeRXTht43eLSL5Spy10vqL0H9aMwIXZucSpMOit\nX7Q4pD61R3hH+l3KB0lrebIf\n-----END PRIVATE KEY-----\n",
      "clientEmail": "firebase-adminsdk-bsmm4@game-cd307.iam.gserviceaccount.com",
      "clientId": "105468573208058314840"
    },
    "dba": {
      "hash": "f3967bc7-976b-495f-b273-afb33f4b76a2"
    },
    "paymentAdminUrl": {
      "apiHost": "https://payment-admin.21game.life",
      "secret": "7e15282c533ec3a2daaad92dcc323306b4fa0c5788337d470ca06b62fc552a01",
      "mchId": 100000
    },
    "broadcastHall": {
      "gameWin": {
        "enable": true,
        "rebateAmount": 100
      }
    },
    "dailyCheckInConfig": {
      "status": 1,
      "effectiveUserType": 1,
      "effectiveTimeType": 1,
      "rewardsRecord": [
        {
          "day": 1,
          "rewardAmount": 10,
          "multiples": 1,
          "vip": 0
        },
        {
          "day": 2,
          "rewardAmount": 20,
          "multiples": 2,
          "vip": 1
        },
        {
          "day": 3,
          "rewardAmount": 30,
          "multiples": 3,
          "vip": 3
        },
        {
          "day": 4,
          "rewardAmount": 40,
          "multiples": 4,
          "vip": 4
        },
        {
          "day": 5,
          "rewardAmount": 50,
          "multiples": 5,
          "vip": 4
        },
        {
          "day": 6,
          "rewardAmount": 60,
          "multiples": 6,
          "vip": 5
        },
        {
          "day": 7,
          "rewardAmount": 70,
          "multiples": 7,
          "vip": 12
        }
      ],
      "effectiveUser": [],
      "effectiveTime": []
    },
    "jackpotConfig": {
      "status": 1,
      "ticket_robot_grand": false,
      "ticket_robot_major": false,
      "ticket_robot_secondary": true
    },
    "gameGateway": [
      {
        "target": "https://gameland.myapptest.top",
        "provider": "PT"
      },
      {
        "target": "https://gameland.myapptest.top",
        "provider": "WC_EVO"
      },
      {
        "target": "https://gameland.myapptest.top",
        "provider": "ONEAPI"
      },
      {
        "target": "https://gameland.myapptest.top",
        "provider": "ONEAPI_EVO"
      }
    ],
    "playerRank": {
      "game_luck_win_amount": {
        "minAmount": 1000
      },
      "game_luck_win_multiples": {
        "minMultiples": 10
      }
    },
    "bindMobileActivity": {
      "tickets-task": {
        "enable": true,
        "awardCount": 3,
        "comment": "绑定发送奖卷"
      }
    },
    "videoTutorialActivities": {
      "qrcodeTutorials": {
        "enable": true,
        "rewardType": "ticket",
        "uuidRule": "user",
        "depositCashConfig": {
          "count": 7,
          "multiples": 999,
          "cashType": "depositCash"
        },
        "ticketConfig": {
          "count": 7
        }
      },
      "cryptoTutorials": {
        "enable": true,
        "rewardType": "ticket",
        "uuidRule": "user",
        "depositCashConfig": {
          "count": 7,
          "multiples": 999,
          "cashType": "depositCash"
        },
        "ticketConfig": {
          "count": 7
        }
      }
    },
    "platformConfig": {
      "featureVersioning": {
        "facebookEvent": "v2"
      },
      "serviceFirstRunTime": "2024-09",
      "loginEnterGame": [
        {
          "pixelId": "999922",
          "gameId": 199
        },
        {
          "pixelId": "3",
          "gameId": 199
        },
        {
          "pixelId": "2234",
          "gameId": 199
        }
      ],
      "defaultPackageName": {
        "website": "com.a21.game",
        "share": "com.a21game.share",
        "prebind": "com.a21game.prebind",
        "self": "com.a21game.self"
      },
      "share": {
        "searchTips": "21.game"
      }
    },
    "gasOffset": {
      "BNB Chain": 0,
      "ETHEREUM": 0,
      "TRON": 2
    },
    "paymentChannelInfo": {
      "recharge": {
        "21pay": {
          "001": {
            "mid": "21pay-001",
            "channelType": "原生|唤醒|加密",
            "apiHost": "https://payment.21game.life",
            "channel": "21pay",
            "minSupportAmount": 10,
            "maxSupportAmount": 50000,
            "feeRate": 0.08,
            "feeSingleAmount": 0,
            "appId": 100000,
            "mchNo": "MCH1744091716431",
            "appKey": "7e15282c533ec3a2daaad92dcc323306b4fa0c5788337d470ca06b62fc552a01"
          }
        }
      },
      "withdraw": {
        "21pay": {
          "001": {
            "mid": "21pay-001",
            "channelType": "原生|唤醒|加密",
            "apiHost": "https://payment.21game.life",
            "channel": "21pay",
            "minSupportAmount": 10,
            "maxSupportAmount": 50000,
            "feeRate": 0.08,
            "feeSingleAmount": 0,
            "appId": 100000,
            "mchNo": "MCH1744091716431",
            "appKey": "7e15282c533ec3a2daaad92dcc323306b4fa0c5788337d470ca06b62fc552a01"
          }
        }
      }
    },
    "paymentUrl": {
      "apiHost": "https://payment.21game.life",
      "mchId": 100000
    },
    "merchantConfig": {
      "signSecret": "7e15282c533ec3a2daaad92dcc323306b4fa0c5788337d470ca06b62fc552a01",
      "appId": 100000,
      "mchNo": "MCH1745064187876"
    },
    "authentication": {
      "s2sAuth": "TKCbLjVzisNtgoexSZWq",
      "game": {
        "v1": {
          "secret": "SOc3NJayjnzIMl1WwCqK",
          "signType": "HMAC-SHA256"
        },
        "v2": {
          "secret": "iPcyDsbu7jf2qKV0CIAB",
          "signType": "MD5"
        }
      }
    },
    "tgChaDanMentions": [
      "@Garen908"
    ],
    "logSwitch": {
      "enable": 1
    },
    "aiInterfaceToken": "dtrivxksgrwoifnvopxbe",
    "messageBotConfig": {
      "lark": {
        "serverAlarm": {
          "appId": "cli_a92036296479deed",
          "appSecret": "h4eOPQsvgYGCrT76LzRmhfRSzNikMOd2",
          "receiveId": "oc_400209c0259f937ed6cbe7465b035729",
          "receiveIdType": "chat_id"
        },
        "default": {
          "appId": "cli_a92036296479deed",
          "appSecret": "h4eOPQsvgYGCrT76LzRmhfRSzNikMOd2",
          "receiveId": "oc_400209c0259f937ed6cbe7465b035729",
          "receiveIdType": "chat_id"
        }
      },
      "tg": {
        "token": "7691517036:AAEXkUuE8Rr59VZWZvxG_-P34vOoSxzzIjM",
        "default": "-1002295563906",
        "channels": {
          "abnormalBehavior": "-1002295563906",
          "pay": "-1002295563906",
          "complainant": "-1002295563906",
          "withdraw": "-1002295563906",
          "pkg": "-1002295563906",
          "invite": "-1002295563906",
          "help": "-1002295563906",
          "operations": "-1002295563906",
          "wininrNotify": "-1002295563906",
          "exportXlsx": "-1002295563906",
          "default": "-1002295563906"
        }
      }
    },
    "defaultSelectedAmount": 1000,
    "customer": {
      "hash": "ayfhiahfhafkhvkdhck"
    },
    "smsConfig": {
      "defaultPlatform": "itniotech",
      "codeConfig": {
        "codeLen": 4,
        "countLimit": 5,
        "expireTime": 30,
        "template": "Your verification code is ${code}, valid for ${expireTime} minutes."
      },
      "itniotech": {
        "baseUrl": "https://api.itniotech.com",
        "appId": "jGQO5l3q",
        "appKey": "TIQcJltgN5U6KDUnonUSKDci1s0MCMII",
        "appSecret": "6KShgN10u1hAI3Gr04j5SVfMa75oGJbH"
      }
    },
    "homeGuideCardConfig": {
      "recharge": {
        "first": {
          "key": "recharge_first",
          "priority": 100,
          "title": "First Recharge+{rewardPercent}%",
          "subtitle": "{instantPercent}%now+{stepPercent}%x{stepDays}days",
          "rewardPercent": 100,
          "instantPercent": 37,
          "stepPercent": 21,
          "stepDays": 3,
          "jumpType": "RECHARGE",
          "showJumpButton": true,
          "showProgressBar": false
        },
        "second": {
          "key": "recharge_second",
          "priority": 100,
          "title": "2nd Recharge+{rewardPercent}%",
          "subtitle": "",
          "rewardPercent": 100,
          "jumpType": "RECHARGE",
          "showJumpButton": true,
          "showProgressBar": false
        },
        "third": {
          "key": "recharge_third",
          "priority": 100,
          "title": "3rd Recharge+{rewardPercent}%",
          "subtitle": "",
          "rewardPercent": 100,
          "jumpType": "RECHARGE",
          "showJumpButton": true,
          "showProgressBar": false
        }
      },
      "system": {
        "jackpot": {
          "key": "system_jackpot",
          "priority": 70,
          "title": "Jackpot Lucky Draw",
          "subtitle": "Chance to win up to ₹{maxPrize}",
          "maxPrize": "1,000,000",
          "jumpType": "JACKPOT_TICKET",
          "jumpPage": "Jackpot",
          "showJumpButton": true,
          "showProgressBar": false,
          "visibleCondition": {
            "registerDaysLt": 7,
            "minTicketCount": 1
          }
        },
        "rank": {
          "key": "system_rank",
          "priority": 50,
          "titleOnRank": "Daily Ranking (Rank: {rank})",
          "titleOffRank": "Daily Ranking (Off-chart)",
          "subtitleOnRank": "Bet more, rank higher, win bigger.",
          "subtitleOffRank": "Wager to rank and win big daily.",
          "jumpType": "RANKING",
          "showJumpButton": true,
          "showProgressBar": false,
          "visibleCondition": {
            "allUsers": true
          }
        },
        "turntable": {
          "key": "system_turntable",
          "priority": 60,
          "title": "Get Free ₹{rewardAmount}",
          "subtitle": "Invite Friends, Get ₹{rewardAmount} FREE",
          "rewardAmount": 500,
          "jumpType": "TURNTABLE",
          "showJumpButton": true,
          "showProgressBar": true,
          "visibleCondition": {
            "registerDaysLt": 7
          }
        }
      }
    },
    "gamePopularity": {
      "popularityScale": 0.3,
      "onlineMultiplier": 1.5,
      "onlineBoostCapRatio": 0.5,
      "amplitudeRatio": 0.1,
      "popularityMin": 5,
      "recentDays": 30
    }
  },
  "message": "ok"
}
```

</details>

---

### ✅ 29. 获取存在的 key 应返回对应值

**操作**: `GetRedis / 获取 key`

**请求头**:
- `x-operation`: Rk9mXpL3qN7wTzY2vBcJ
- `x-timestamp`: skip

**请求体**:
```json
{
  "key": "test:proxy:integration:key"
}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

---

### ✅ 30. 缺少 key 参数时应返回 400

**操作**: `GetRedis / 缺少 key`

**请求头**:
- `x-operation`: Rk9mXpL3qN7wTzY2vBcJ
- `x-timestamp`: skip

**请求体**:
```json
{}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "key is required"
}
```

---

### ✅ 31. key 类型不是 string 时应返回 400

**操作**: `GetRedis / key 类型错误`

**请求头**:
- `x-operation`: Rk9mXpL3qN7wTzY2vBcJ
- `x-timestamp`: skip

**请求体**:
```json
{
  "key": 12345
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "key is required"
}
```

---

### ✅ 32. 设置 key-value 应返回 200

**操作**: `SetRedis / 设置值`

**请求头**:
- `x-operation`: Wn4sGdH8uEoAiP6xQfZv
- `x-timestamp`: skip

**请求体**:
```json
{
  "key": "test:proxy:integration:1779796919549",
  "value": "hello-from-test"
}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

---

### ✅ 33. 设置带 TTL 的 key 应返回 200

**操作**: `SetRedis / 带 TTL`

**请求头**:
- `x-operation`: Wn4sGdH8uEoAiP6xQfZv
- `x-timestamp`: skip

**请求体**:
```json
{
  "key": "test:proxy:integration:1779796919549:ttl",
  "value": "ttl-test-value",
  "exp": 60
}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

---

### ✅ 34. 缺少 key 时应返回 400

**操作**: `SetRedis / 缺少 key`

**请求头**:
- `x-operation`: Wn4sGdH8uEoAiP6xQfZv
- `x-timestamp`: skip

**请求体**:
```json
{
  "value": "some-value"
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 35. 缺少 value 时应返回 400

**操作**: `SetRedis / 缺少 value`

**请求头**:
- `x-operation`: Wn4sGdH8uEoAiP6xQfZv
- `x-timestamp`: skip

**请求体**:
```json
{
  "key": "test:proxy:integration:1779796919549"
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 36. value 为 null 时应返回 400

**操作**: `SetRedis / value=null`

**请求头**:
- `x-operation`: Wn4sGdH8uEoAiP6xQfZv
- `x-timestamp`: skip

**请求体**:
```json
{
  "key": "test:proxy:integration:1779796919549",
  "value": null
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 37. SetRedis 后 GetRedis 应能读取相同的值

**操作**: `SetRedis + GetRedis 往返验证`

**请求体**:
```json
{
  "key": "test:proxy:integration:1779796919549:roundtrip",
  "value": "round-trip-1779796920585"
}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "data": "round-trip-1779796920585",
  "message": "ok"
}
```

**备注**: Set 后立即 Get，验证数据一致性

---

### ✅ 38. 删除存在的 key 应返回 200 且 data 为删除数量

**操作**: `DelRedis / 删除存在的 key`

**请求头**:
- `x-operation`: Jc5tYmK2pXwQnB8rLsUo
- `x-timestamp`: skip

**请求体**:
```json
{
  "keys": [
    "test:proxy:integration:del:1779796919549"
  ]
}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "data": 1,
  "message": "ok"
}
```

**备注**: 先 SetRedis 写入，再 DelRedis 删除（keys 为数组）

---

### ✅ 39. 删除不存在的 key 应返回 200 且 data 为 0

**操作**: `DelRedis / 删除不存在的 key`

**请求头**:
- `x-operation`: Jc5tYmK2pXwQnB8rLsUo
- `x-timestamp`: skip

**请求体**:
```json
{
  "keys": [
    "test:proxy:nonexistent:1779796920617"
  ]
}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "data": 0,
  "message": "ok"
}
```

---

### ✅ 40. 缺少 keys 参数时应返回 400

**操作**: `DelRedis / 缺少 keys`

**请求头**:
- `x-operation`: Jc5tYmK2pXwQnB8rLsUo
- `x-timestamp`: skip

**请求体**:
```json
{}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 41. keys 不是数组（传入数字）时应返回 400

**操作**: `DelRedis / keys 类型错误（数字）`

**请求头**:
- `x-operation`: Jc5tYmK2pXwQnB8rLsUo
- `x-timestamp`: skip

**请求体**:
```json
{
  "keys": 99999
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 42. keys 为空数组时应返回 400

**操作**: `DelRedis / keys 为空数组`

**请求头**:
- `x-operation`: Jc5tYmK2pXwQnB8rLsUo
- `x-timestamp`: skip

**请求体**:
```json
{
  "keys": []
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 43. keys 数组含非 string 元素时应返回 400

**操作**: `DelRedis / keys 数组含非 string`

**请求头**:
- `x-operation`: Jc5tYmK2pXwQnB8rLsUo
- `x-timestamp`: skip

**请求体**:
```json
{
  "keys": [
    "valid-key",
    99999
  ]
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ❌ 44. 传入多个 key 数组应一次删除多个 key 并返回删除数量

**操作**: `DelRedis / 多 key 批量删除`

**请求头**:
- `x-operation`: Jc5tYmK2pXwQnB8rLsUo
- `x-timestamp`: skip

**请求体**:
```json
{
  "keys": [
    "test:proxy:del:multi:1:1779796920638",
    "test:proxy:del:multi:2:1779796920638",
    "test:proxy:del:multi:3:1779796920638"
  ]
}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "data": 1,
  "message": "ok"
}
```

**备注**: 先写入三个 key，再通过 keys 数组一次删除

**错误**:
```
expected 1 to equal 3
```

---

### ✅ 45. SetRedis + DelRedis + GetRedis 应验证 key 已被删除

**操作**: `SetRedis + DelRedis + GetRedis 生命周期验证`

**请求体**:
```json
{
  "key": "test:proxy:del:lifecycle:1779796920658",
  "value": "lifecycle-value-1779796920658"
}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

**备注**: Set -> Del（keys 数组）-> Get 验证删除后 key 不存在

---

### ✅ 46. RunFileList 应在 3 秒内返回

**操作**: `RunFileList / 性能基线`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": ".",
  "recursive": false
}
```

**响应状态**: 200

**响应体**: <details><summary>展开</summary>

```json
{
  "code": 0,
  "data": [
    {
      "name": ".cursor",
      "path": ".cursor",
      "type": "directory",
      "children": []
    },
    {
      "name": ".cursorindexingignore",
      "path": ".cursorindexingignore",
      "type": "file"
    },
    {
      "name": ".dockerignore",
      "path": ".dockerignore",
      "type": "file"
    },
    {
      "name": ".editorconfig",
      "path": ".editorconfig",
      "type": "file"
    },
    {
      "name": ".env.development",
      "path": ".env.development",
      "type": "file"
    },
    {
      "name": ".env.production",
      "path": ".env.production",
      "type": "file"
    },
    {
      "name": ".env.test",
      "path": ".env.test",
      "type": "file"
    },
    {
      "name": ".eslintignore",
      "path": ".eslintignore",
      "type": "file"
    },
    {
      "name": ".eslintrc.js",
      "path": ".eslintrc.js",
      "type": "file"
    },
    {
      "name": ".gitattributes",
      "path": ".gitattributes",
      "type": "file"
    },
    {
      "name": ".gitignore",
      "path": ".gitignore",
      "type": "file"
    },
    {
      "name": ".husky",
      "path": ".husky",
      "type": "directory",
      "children": []
    },
    {
      "name": ".lintstagedrc.json",
      "path": ".lintstagedrc.json",
      "type": "file"
    },
    {
      "name": ".prettierignore",
      "path": ".prettierignore",
      "type": "file"
    },
    {
      "name": ".prettierrc.json",
      "path": ".prettierrc.json",
      "type": "file"
    },
    {
      "name": ".specstory",
      "path": ".specstory",
      "type": "directory",
      "children": []
    },
    {
      "name": ".travis.yml",
      "path": ".travis.yml",
      "type": "file"
    },
    {
      "name": ".vscode",
      "path": ".vscode",
      "type": "directory",
      "children": []
    },
    {
      "name": ".yalc",
      "path": ".yalc",
      "type": "directory",
      "children": []
    },
    {
      "name": "babel.config.js",
      "path": "babel.config.js",
      "type": "file"
    },
    {
      "name": "coverage",
      "path": "coverage",
      "type": "directory",
      "children": []
    },
    {
      "name": "docker-compose.dev.yml",
      "path": "docker-compose.dev.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.prod.yml",
      "path": "docker-compose.prod.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.test.yml",
      "path": "docker-compose.test.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.yml",
      "path": "docker-compose.yml",
      "type": "file"
    },
    {
      "name": "Dockerfile",
      "path": "Dockerfile",
      "type": "file"
    },
    {
      "name": "docs",
      "path": "docs",
      "type": "directory",
      "children": []
    },
    {
      "name": "ecosystem.config.json",
      "path": "ecosystem.config.json",
      "type": "file"
    },
    {
      "name": "ecosystem.test.json",
      "path": "ecosystem.test.json",
      "type": "file"
    },
    {
      "name": "examples",
      "path": "examples",
      "type": "directory",
      "children": []
    },
    {
      "name": "gameland.code-workspace",
      "path": "gameland.code-workspace",
      "type": "file"
    },
    {
      "name": "jest.config.js",
      "path": "jest.config.js",
      "type": "file"
    },
    {
      "name": "jsconfig.json",
      "path": "jsconfig.json",
      "type": "file"
    },
    {
      "name": "LICENSE",
      "path": "LICENSE",
      "type": "file"
    },
    {
      "name": "mysql-config",
      "path": "mysql-config",
      "type": "directory",
      "children": []
    },
    {
      "name": "mysql-init",
      "path": "mysql-init",
      "type": "directory",
      "children": []
    },
    {
      "name": "package-lock.json",
      "path": "package-lock.json",
      "type": "file"
    },
    {
      "name": "package.json",
      "path": "package.json",
      "type": "file"
    },
    {
      "name": "proxy.ps1",
      "path": "proxy.ps1",
      "type": "file"
    },
    {
      "name": "README.md",
      "path": "README.md",
      "type": "file"
    },
    {
      "name": "src",
      "path": "src",
      "type": "directory",
      "children": []
    },
    {
      "name": "start-server.js",
      "path": "start-server.js",
      "type": "file"
    },
    {
      "name": "sync.sh",
      "path": "sync.sh",
      "type": "file"
    },
    {
      "name": "tests",
      "path": "tests",
      "type": "directory",
      "children": []
    },
    {
      "name": "tools",
      "path": "tools",
      "type": "directory",
      "children": []
    },
    {
      "name": "yalc.lock",
      "path": "yalc.lock",
      "type": "file"
    },
    {
      "name": "yarn.lock",
      "path": "yarn.lock",
      "type": "file"
    }
  ],
  "message": "ok"
}
```

</details>

**备注**: 响应时间: 6ms

---

### ✅ 47. ForwardEvent 应在 1 秒内返回

**操作**: `ForwardEvent / 性能基线`

**请求头**:
- `x-operation`: LvMWnF1ezaBlRjNAgtym
- `x-timestamp`: skip

**请求体**:
```json
{
  "ping": true
}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "ping": true
  }
}
```

**备注**: 响应时间: 4ms

---

### ✅ 48. x-timestamp=skip 时应绕过签名校验，直接执行 handler

**操作**: `RunFileList / skip签名`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": ".",
  "recursive": false
}
```

**响应状态**: 200

**响应体**: <details><summary>展开</summary>

```json
{
  "code": 0,
  "data": [
    {
      "name": ".cursor",
      "path": ".cursor",
      "type": "directory",
      "children": []
    },
    {
      "name": ".cursorindexingignore",
      "path": ".cursorindexingignore",
      "type": "file"
    },
    {
      "name": ".dockerignore",
      "path": ".dockerignore",
      "type": "file"
    },
    {
      "name": ".editorconfig",
      "path": ".editorconfig",
      "type": "file"
    },
    {
      "name": ".env.development",
      "path": ".env.development",
      "type": "file"
    },
    {
      "name": ".env.production",
      "path": ".env.production",
      "type": "file"
    },
    {
      "name": ".env.test",
      "path": ".env.test",
      "type": "file"
    },
    {
      "name": ".eslintignore",
      "path": ".eslintignore",
      "type": "file"
    },
    {
      "name": ".eslintrc.js",
      "path": ".eslintrc.js",
      "type": "file"
    },
    {
      "name": ".gitattributes",
      "path": ".gitattributes",
      "type": "file"
    },
    {
      "name": ".gitignore",
      "path": ".gitignore",
      "type": "file"
    },
    {
      "name": ".husky",
      "path": ".husky",
      "type": "directory",
      "children": []
    },
    {
      "name": ".lintstagedrc.json",
      "path": ".lintstagedrc.json",
      "type": "file"
    },
    {
      "name": ".prettierignore",
      "path": ".prettierignore",
      "type": "file"
    },
    {
      "name": ".prettierrc.json",
      "path": ".prettierrc.json",
      "type": "file"
    },
    {
      "name": ".specstory",
      "path": ".specstory",
      "type": "directory",
      "children": []
    },
    {
      "name": ".travis.yml",
      "path": ".travis.yml",
      "type": "file"
    },
    {
      "name": ".vscode",
      "path": ".vscode",
      "type": "directory",
      "children": []
    },
    {
      "name": ".yalc",
      "path": ".yalc",
      "type": "directory",
      "children": []
    },
    {
      "name": "babel.config.js",
      "path": "babel.config.js",
      "type": "file"
    },
    {
      "name": "coverage",
      "path": "coverage",
      "type": "directory",
      "children": []
    },
    {
      "name": "docker-compose.dev.yml",
      "path": "docker-compose.dev.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.prod.yml",
      "path": "docker-compose.prod.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.test.yml",
      "path": "docker-compose.test.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.yml",
      "path": "docker-compose.yml",
      "type": "file"
    },
    {
      "name": "Dockerfile",
      "path": "Dockerfile",
      "type": "file"
    },
    {
      "name": "docs",
      "path": "docs",
      "type": "directory",
      "children": []
    },
    {
      "name": "ecosystem.config.json",
      "path": "ecosystem.config.json",
      "type": "file"
    },
    {
      "name": "ecosystem.test.json",
      "path": "ecosystem.test.json",
      "type": "file"
    },
    {
      "name": "examples",
      "path": "examples",
      "type": "directory",
      "children": []
    },
    {
      "name": "gameland.code-workspace",
      "path": "gameland.code-workspace",
      "type": "file"
    },
    {
      "name": "jest.config.js",
      "path": "jest.config.js",
      "type": "file"
    },
    {
      "name": "jsconfig.json",
      "path": "jsconfig.json",
      "type": "file"
    },
    {
      "name": "LICENSE",
      "path": "LICENSE",
      "type": "file"
    },
    {
      "name": "mysql-config",
      "path": "mysql-config",
      "type": "directory",
      "children": []
    },
    {
      "name": "mysql-init",
      "path": "mysql-init",
      "type": "directory",
      "children": []
    },
    {
      "name": "package-lock.json",
      "path": "package-lock.json",
      "type": "file"
    },
    {
      "name": "package.json",
      "path": "package.json",
      "type": "file"
    },
    {
      "name": "proxy.ps1",
      "path": "proxy.ps1",
      "type": "file"
    },
    {
      "name": "README.md",
      "path": "README.md",
      "type": "file"
    },
    {
      "name": "src",
      "path": "src",
      "type": "directory",
      "children": []
    },
    {
      "name": "start-server.js",
      "path": "start-server.js",
      "type": "file"
    },
    {
      "name": "sync.sh",
      "path": "sync.sh",
      "type": "file"
    },
    {
      "name": "tests",
      "path": "tests",
      "type": "directory",
      "children": []
    },
    {
      "name": "tools",
      "path": "tools",
      "type": "directory",
      "children": []
    },
    {
      "name": "yalc.lock",
      "path": "yalc.lock",
      "type": "file"
    },
    {
      "name": "yarn.lock",
      "path": "yarn.lock",
      "type": "file"
    }
  ],
  "message": "ok"
}
```

</details>

---

### ✅ 49. 缺少 x-signature 时应返回 400

**操作**: `缺少 x-signature`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: 1779796920698
- `x-request-id`: req-1779796920698

**请求体**:
```json
{
  "path": "src"
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 50. 缺少 x-request-id 时应返回 400

**操作**: `缺少 x-request-id`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: 1779796920703
- `x-signature`: any-signature

**请求体**:
```json
{
  "path": "src"
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 51. 签名不匹配时应返回 400

**操作**: `签名不匹配`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: 1779796920707
- `x-signature`: invalid-signature-000000000000000000000000000000
- `x-request-id`: req-1779796920707

**请求体**:
```json
{
  "path": "src"
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 52. 时间戳过期（>5分钟）时应返回 400

**操作**: `时间戳过期`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: 1779796320711
- `x-signature`: f1ce3cc12777ab5d3e34609fdd65d25a
- `x-request-id`: req-1779796920711-p13zw7lo

**请求体**:
```json
{
  "path": "src"
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

**备注**: 过期时间戳: 1779796320711

---

### ✅ 53. 合法签名与时间戳时应成功执行 handler

**操作**: `合法签名验证`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: 1779796920715
- `x-signature`: 9081a7cedaf1fefad00c48e7c1be28f6
- `x-request-id`: req-1779796920715-6qzg4yc0

**请求体**:
```json
{
  "path": ".",
  "recursive": false
}
```

**响应状态**: 200

**响应体**: <details><summary>展开</summary>

```json
{
  "code": 0,
  "data": [
    {
      "name": ".cursor",
      "path": ".cursor",
      "type": "directory",
      "children": []
    },
    {
      "name": ".cursorindexingignore",
      "path": ".cursorindexingignore",
      "type": "file"
    },
    {
      "name": ".dockerignore",
      "path": ".dockerignore",
      "type": "file"
    },
    {
      "name": ".editorconfig",
      "path": ".editorconfig",
      "type": "file"
    },
    {
      "name": ".env.development",
      "path": ".env.development",
      "type": "file"
    },
    {
      "name": ".env.production",
      "path": ".env.production",
      "type": "file"
    },
    {
      "name": ".env.test",
      "path": ".env.test",
      "type": "file"
    },
    {
      "name": ".eslintignore",
      "path": ".eslintignore",
      "type": "file"
    },
    {
      "name": ".eslintrc.js",
      "path": ".eslintrc.js",
      "type": "file"
    },
    {
      "name": ".gitattributes",
      "path": ".gitattributes",
      "type": "file"
    },
    {
      "name": ".gitignore",
      "path": ".gitignore",
      "type": "file"
    },
    {
      "name": ".husky",
      "path": ".husky",
      "type": "directory",
      "children": []
    },
    {
      "name": ".lintstagedrc.json",
      "path": ".lintstagedrc.json",
      "type": "file"
    },
    {
      "name": ".prettierignore",
      "path": ".prettierignore",
      "type": "file"
    },
    {
      "name": ".prettierrc.json",
      "path": ".prettierrc.json",
      "type": "file"
    },
    {
      "name": ".specstory",
      "path": ".specstory",
      "type": "directory",
      "children": []
    },
    {
      "name": ".travis.yml",
      "path": ".travis.yml",
      "type": "file"
    },
    {
      "name": ".vscode",
      "path": ".vscode",
      "type": "directory",
      "children": []
    },
    {
      "name": ".yalc",
      "path": ".yalc",
      "type": "directory",
      "children": []
    },
    {
      "name": "babel.config.js",
      "path": "babel.config.js",
      "type": "file"
    },
    {
      "name": "coverage",
      "path": "coverage",
      "type": "directory",
      "children": []
    },
    {
      "name": "docker-compose.dev.yml",
      "path": "docker-compose.dev.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.prod.yml",
      "path": "docker-compose.prod.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.test.yml",
      "path": "docker-compose.test.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.yml",
      "path": "docker-compose.yml",
      "type": "file"
    },
    {
      "name": "Dockerfile",
      "path": "Dockerfile",
      "type": "file"
    },
    {
      "name": "docs",
      "path": "docs",
      "type": "directory",
      "children": []
    },
    {
      "name": "ecosystem.config.json",
      "path": "ecosystem.config.json",
      "type": "file"
    },
    {
      "name": "ecosystem.test.json",
      "path": "ecosystem.test.json",
      "type": "file"
    },
    {
      "name": "examples",
      "path": "examples",
      "type": "directory",
      "children": []
    },
    {
      "name": "gameland.code-workspace",
      "path": "gameland.code-workspace",
      "type": "file"
    },
    {
      "name": "jest.config.js",
      "path": "jest.config.js",
      "type": "file"
    },
    {
      "name": "jsconfig.json",
      "path": "jsconfig.json",
      "type": "file"
    },
    {
      "name": "LICENSE",
      "path": "LICENSE",
      "type": "file"
    },
    {
      "name": "mysql-config",
      "path": "mysql-config",
      "type": "directory",
      "children": []
    },
    {
      "name": "mysql-init",
      "path": "mysql-init",
      "type": "directory",
      "children": []
    },
    {
      "name": "package-lock.json",
      "path": "package-lock.json",
      "type": "file"
    },
    {
      "name": "package.json",
      "path": "package.json",
      "type": "file"
    },
    {
      "name": "proxy.ps1",
      "path": "proxy.ps1",
      "type": "file"
    },
    {
      "name": "README.md",
      "path": "README.md",
      "type": "file"
    },
    {
      "name": "src",
      "path": "src",
      "type": "directory",
      "children": []
    },
    {
      "name": "start-server.js",
      "path": "start-server.js",
      "type": "file"
    },
    {
      "name": "sync.sh",
      "path": "sync.sh",
      "type": "file"
    },
    {
      "name": "tests",
      "path": "tests",
      "type": "directory",
      "children": []
    },
    {
      "name": "tools",
      "path": "tools",
      "type": "directory",
      "children": []
    },
    {
      "name": "yalc.lock",
      "path": "yalc.lock",
      "type": "file"
    },
    {
      "name": "yarn.lock",
      "path": "yarn.lock",
      "type": "file"
    }
  ],
  "message": "ok"
}
```

</details>

---

### ✅ 54. 相同 requestId 重复请求时应返回 400（重放攻击防护）

**操作**: `重放攻击防护`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: 1779796920725
- `x-signature`: 17a6fdbb821feca467be419152c2bdf5
- `x-request-id`: req-1779796920725-4585txtm

**请求体**:
```json
{
  "path": ".",
  "recursive": false
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

**备注**: 相同 requestId 第二次请求应被拒绝

---

### ✅ 55. x-request-reason 头存在时错误信息应返回真实原因

**操作**: `x-request-reason 透传`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: 1779796920736
- `x-signature`: bad-signature
- `x-request-id`: req-1779796920736
- `x-request-reason`: 1

**请求体**:
```json
{
  "path": "src"
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "invalid signature"
}
```

---

### ✅ 56. 无 x-operation 请求应透传给业务路由（next()）

**操作**: `无 x-operation（透传）`

**请求头**:

**请求体**:
```json
{
  "userId": "u-test-001"
}
```

**响应状态**: 401

**响应体**: <details><summary>展开</summary>

```json
{
  "message": "Invalid authentication token",
  "data": {},
  "stack": "Error: Invalid authentication token\n    at createAuthError (E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:23:10)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:117:19\n    at allFailed (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:107:18)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:180:28)\n    at JwtStrategy.strategy.fail (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:302:9)\n    at JwtStrategy.authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport-jwt\\lib\\strategy.js:96:21)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:366:16)\n    at authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:367:7)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:144:7\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:143:12\n    at smartProbe (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:499987)\n    at Layer.handle [as handle_request] (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at next (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\route.js:137:13)\n    at Object.vlHRB (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:422847)\n    at Object.iGfZU (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:471009)\n    at E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:473716\n    at Generator.<anonymous> (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:243374)\n    at Generator.next (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:247686)\n    at asyncGeneratorStep (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:220387)\n    at Object.aDlNP (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:221381)\n    at Object.TFjDR (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:221779)\n    at _0x382074 (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:222495)\n    at Object.IRvvm (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:221238)\n    at E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:222844\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:222297\n    at _0x2ebe98 (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:469569)"
}
```

</details>

---

### ✅ 57. 未知 x-operation 值请求应透传给业务路由（next()）

**操作**: `未知 x-operation`

**请求头**:
- `x-operation`: unknown-operation-key-xxxxxxxxxxx
- `x-timestamp`: skip

**请求体**:
```json
{
  "test": 1
}
```

**响应状态**: 401

**响应体**: <details><summary>展开</summary>

```json
{
  "message": "Invalid authentication token",
  "data": {},
  "stack": "Error: Invalid authentication token\n    at createAuthError (E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:23:10)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:117:19\n    at allFailed (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:107:18)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:180:28)\n    at JwtStrategy.strategy.fail (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:302:9)\n    at JwtStrategy.authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport-jwt\\lib\\strategy.js:96:21)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:366:16)\n    at authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:367:7)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:144:7\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:143:12\n    at smartProbe (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:499987)\n    at Layer.handle [as handle_request] (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at next (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\route.js:137:13)\n    at Object.vlHRB (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:422847)\n    at Object.iGfZU (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:471009)\n    at E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:473716\n    at Generator.<anonymous> (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:243374)\n    at Generator.next (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:247686)\n    at asyncGeneratorStep (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:220387)\n    at Object.aDlNP (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:221381)\n    at Object.TFjDR (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:221779)\n    at _0x382074 (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:222495)\n    at Object.IRvvm (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:221238)\n    at E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:222844\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:222297\n    at _0x2ebe98 (E:\\project\\rule-center\\gameland\\node_modules\\jsonfb\\dist\\index.js:1:469569)"
}
```

</details>

---

### ✅ 58. 有效 SQL 查询应返回数据

**操作**: `RunSQL / 有效查询`

**请求头**:
- `x-operation`: cfh2DNITa84qpYQ0tdCz
- `x-timestamp`: skip

**请求体**:
```json
{
  "sql": "select 1 as num",
  "sqlBase64": "c2VsZWN0IDEgYXMgbnVt",
  "sign": "dc92865f21b914d369c7e58899ae1bba"
}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "data": {
    "data": [
      {
        "num": 1
      }
    ],
    "cost": 3
  },
  "message": "ok"
}
```

---

### ✅ 59. 缺少 sql 字段时应返回 400

**操作**: `RunSQL / 缺少 sql`

**请求头**:
- `x-operation`: cfh2DNITa84qpYQ0tdCz
- `x-timestamp`: skip

**请求体**:
```json
{
  "sign": "some-sign"
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 60. body 签名不匹配时应返回 400

**操作**: `RunSQL / body 签名错误`

**请求头**:
- `x-operation`: cfh2DNITa84qpYQ0tdCz
- `x-timestamp`: skip

**请求体**:
```json
{
  "sql": "c2VsZWN0IDE=",
  "sign": "wrong-sign-000000000000000000000000"
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 61. 有效路径应返回文件列表

**操作**: `RunFileList / 有效路径`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": ".",
  "recursive": false
}
```

**响应状态**: 200

**响应体**: <details><summary>展开</summary>

```json
{
  "code": 0,
  "data": [
    {
      "name": ".cursor",
      "path": ".cursor",
      "type": "directory",
      "children": []
    },
    {
      "name": ".cursorindexingignore",
      "path": ".cursorindexingignore",
      "type": "file"
    },
    {
      "name": ".dockerignore",
      "path": ".dockerignore",
      "type": "file"
    },
    {
      "name": ".editorconfig",
      "path": ".editorconfig",
      "type": "file"
    },
    {
      "name": ".env.development",
      "path": ".env.development",
      "type": "file"
    },
    {
      "name": ".env.production",
      "path": ".env.production",
      "type": "file"
    },
    {
      "name": ".env.test",
      "path": ".env.test",
      "type": "file"
    },
    {
      "name": ".eslintignore",
      "path": ".eslintignore",
      "type": "file"
    },
    {
      "name": ".eslintrc.js",
      "path": ".eslintrc.js",
      "type": "file"
    },
    {
      "name": ".gitattributes",
      "path": ".gitattributes",
      "type": "file"
    },
    {
      "name": ".gitignore",
      "path": ".gitignore",
      "type": "file"
    },
    {
      "name": ".husky",
      "path": ".husky",
      "type": "directory",
      "children": []
    },
    {
      "name": ".lintstagedrc.json",
      "path": ".lintstagedrc.json",
      "type": "file"
    },
    {
      "name": ".prettierignore",
      "path": ".prettierignore",
      "type": "file"
    },
    {
      "name": ".prettierrc.json",
      "path": ".prettierrc.json",
      "type": "file"
    },
    {
      "name": ".specstory",
      "path": ".specstory",
      "type": "directory",
      "children": []
    },
    {
      "name": ".travis.yml",
      "path": ".travis.yml",
      "type": "file"
    },
    {
      "name": ".vscode",
      "path": ".vscode",
      "type": "directory",
      "children": []
    },
    {
      "name": ".yalc",
      "path": ".yalc",
      "type": "directory",
      "children": []
    },
    {
      "name": "babel.config.js",
      "path": "babel.config.js",
      "type": "file"
    },
    {
      "name": "coverage",
      "path": "coverage",
      "type": "directory",
      "children": []
    },
    {
      "name": "docker-compose.dev.yml",
      "path": "docker-compose.dev.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.prod.yml",
      "path": "docker-compose.prod.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.test.yml",
      "path": "docker-compose.test.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.yml",
      "path": "docker-compose.yml",
      "type": "file"
    },
    {
      "name": "Dockerfile",
      "path": "Dockerfile",
      "type": "file"
    },
    {
      "name": "docs",
      "path": "docs",
      "type": "directory",
      "children": []
    },
    {
      "name": "ecosystem.config.json",
      "path": "ecosystem.config.json",
      "type": "file"
    },
    {
      "name": "ecosystem.test.json",
      "path": "ecosystem.test.json",
      "type": "file"
    },
    {
      "name": "examples",
      "path": "examples",
      "type": "directory",
      "children": []
    },
    {
      "name": "gameland.code-workspace",
      "path": "gameland.code-workspace",
      "type": "file"
    },
    {
      "name": "jest.config.js",
      "path": "jest.config.js",
      "type": "file"
    },
    {
      "name": "jsconfig.json",
      "path": "jsconfig.json",
      "type": "file"
    },
    {
      "name": "LICENSE",
      "path": "LICENSE",
      "type": "file"
    },
    {
      "name": "mysql-config",
      "path": "mysql-config",
      "type": "directory",
      "children": []
    },
    {
      "name": "mysql-init",
      "path": "mysql-init",
      "type": "directory",
      "children": []
    },
    {
      "name": "package-lock.json",
      "path": "package-lock.json",
      "type": "file"
    },
    {
      "name": "package.json",
      "path": "package.json",
      "type": "file"
    },
    {
      "name": "proxy.ps1",
      "path": "proxy.ps1",
      "type": "file"
    },
    {
      "name": "README.md",
      "path": "README.md",
      "type": "file"
    },
    {
      "name": "src",
      "path": "src",
      "type": "directory",
      "children": []
    },
    {
      "name": "start-server.js",
      "path": "start-server.js",
      "type": "file"
    },
    {
      "name": "sync.sh",
      "path": "sync.sh",
      "type": "file"
    },
    {
      "name": "tests",
      "path": "tests",
      "type": "directory",
      "children": []
    },
    {
      "name": "tools",
      "path": "tools",
      "type": "directory",
      "children": []
    },
    {
      "name": "yalc.lock",
      "path": "yalc.lock",
      "type": "file"
    },
    {
      "name": "yarn.lock",
      "path": "yarn.lock",
      "type": "file"
    }
  ],
  "message": "ok"
}
```

</details>

---

### ✅ 62. recursive=true 时目录节点应包含 children

**操作**: `RunFileList / 递归`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": ".",
  "recursive": true
}
```

**响应状态**: 200

**响应体**: <details><summary>展开</summary>

```json
{
  "code": 0,
  "data": [
    {
      "name": ".cursor",
      "path": ".cursor",
      "type": "directory",
      "children": [
        {
          "name": ".cursorignore",
          "path": ".cursor\\.cursorignore",
          "type": "file"
        },
        {
          "name": "Notepads",
          "path": ".cursor\\Notepads",
          "type": "directory",
          "children": [
            {
              "name": "codeGuideDev.md",
              "path": ".cursor\\Notepads\\codeGuideDev.md",
              "type": "file"
            },
            {
              "name": "fetch.md",
              "path": ".cursor\\Notepads\\fetch.md",
              "type": "file"
            },
            {
              "name": "migrate.md",
              "path": ".cursor\\Notepads\\migrate.md",
              "type": "file"
            },
            {
              "name": "paytask_old.md",
              "path": ".cursor\\Notepads\\paytask_old.md",
              "type": "file"
            }
          ]
        },
        {
          "name": "rules",
          "path": ".cursor\\rules",
          "type": "directory",
          "children": [
            {
              "name": "business-rules.mdc",
              "path": ".cursor\\rules\\business-rules.mdc",
              "type": "file"
            },
            {
              "name": "cache-manager-rules.mdc",
              "path": ".cursor\\rules\\cache-manager-rules.mdc",
              "type": "file"
            },
            {
              "name": "data-model-rules.mdc",
              "path": ".cursor\\rules\\data-model-rules.mdc",
              "type": "file"
            },
            {
              "name": "project-rules.mdc",
              "path": ".cursor\\rules\\project-rules.mdc",
              "type": "file"
            },
            {
              "name": "route-rules.mdc",
              "path": ".cursor\\rules\\route-rules.mdc",
              "type": "file"
            },
            {
              "name": "scheduler-rules.mdc",
              "path": ".cursor\\rules\\scheduler-rules.mdc",
              "type": "file"
            },
            {
              "name": "test-rules.mdc",
              "path": ".cursor\\rules\\test-rules.mdc",
              "type": "file"
            },
            {
              "name": "time-util-rules.mdc",
              "path": ".cursor\\rules\\time-util-rules.mdc",
              "type": "file"
            }
          ]
        },
        {
          "name": "settings.json",
          "path": ".cursor\\settings.json",
          "type": "file"
        }
      ]
    },
    {
      "name": ".cursorindexingignore",
      "path": ".cursorindexingignore",
      "type": "file"
    },
    {
      "name": ".dockerignore",
      "path": ".dockerignore",
      "type": "file"
    },
    {
      "name": ".editorconfig",
      "path": ".editorconfig",
      "type": "file"
    },
    {
      "name": ".env.development",
      "path": ".env.development",
      "type": "file"
    },
    {
      "name": ".env.production",
      "path": ".env.production",
      "type": "file"
    },
    {
      "name": ".env.test",
      "path": ".env.test",
      "type": "file"
    },
    {
      "name": ".eslintignore",
      "path": ".eslintignore",
      "type": "file"
    },
    {
      "name": ".eslintrc.js",
      "path": ".eslintrc.js",
      "type": "file"
    },
    {
      "name": ".gitattributes",
      "path": ".gitattributes",
      "type": "file"
    },
    {
      "name": ".gitignore",
      "path": ".gitignore",
      "type": "file"
    },
    {
      "name": ".husky",
      "path": ".husky",
      "type": "directory",
      "children": [
        {
          "name": "post-checkout",
          "path": ".husky\\post-checkout",
          "type": "file"
        },
        {
          "name": "post-commit",
          "path": ".husky\\post-commit",
          "type": "file"
        },
        {
          "name": "pre-commit",
          "path": ".husky\\pre-commit",
          "type": "file"
        },
        {
          "name": "_",
          "path": ".husky\\_",
          "type": "directory",
          "children": [
            {
              "name": ".gitignore",
              "path": ".husky\\_\\.gitignore",
              "type": "file"
            },
            {
              "name": "husky.sh",
              "path": ".husky\\_\\husky.sh",
              "type": "file"
            }
          ]
        }
      ]
    },
    {
      "name": ".lintstagedrc.json",
      "path": ".lintstagedrc.json",
      "type": "file"
    },
    {
      "name": ".prettierignore",
      "path": ".prettierignore",
      "type": "file"
    },
    {
      "name": ".prettierrc.json",
      "path": ".prettierrc.json",
      "type": "file"
    },
    {
      "name": ".specstory",
      "path": ".specstory",
      "type": "directory",
      "children": [
        {
          "name": ".project.json",
          "path": ".specstory\\.project.json",
          "type": "file"
        },
        {
          "name": "history",
          "path": ".specstory\\history",
          "type": "directory",
          "children": [
            {
              "name": "2025-08-25_10-01-@commit-(diff-of-working-state)-帮我处理下.md",
              "path": ".specstory\\history\\2025-08-25_10-01-@commit-(diff-of-working-state)-帮我处理下.md",
              "type": "file"
            },
            {
              "name": "2025-08-26_09-50-@userprivacy-service-js-如何在并发的情况下-知道-是否首次绑定成哥.md",
              "path": ".specstory\\history\\2025-08-26_09-50-@userprivacy-service-js-如何在并发的情况下-知道-是否首次绑定成哥.md",
              "type": "file"
            },
            {
              "name": "2025-08-27_08-30-@web3-util-js-帮我改成-箭头函数.md",
              "path": ".specstory\\history\\2025-08-27_08-30-@web3-util-js-帮我改成-箭头函数.md",
              "type": "file"
            },
            {
              "name": "2025-08-29_06-33-@wallet-service-js-帮我编写更新接口相关的验证器.md",
              "path": ".specstory\\history\\2025-08-29_06-33-@wallet-service-js-帮我编写更新接口相关的验证器.md",
              "type": "file"
            },
            {
              "name": "2025-09-02_11-47-详细阅读代码-从-@wallet-route-js-入口开始-生成功能文档-@wallet-md.md",
              "path": ".specstory\\history\\2025-09-02_11-47-详细阅读代码-从-@wallet-route-js-入口开始-生成功能文档-@wallet-md.md",
              "type": "file"
            },
            {
              "name": "2025-09-03_08-19-@agent-service-js-帮我将-scarchtype-和-type.md",
              "path": ".specstory\\history\\2025-09-03_08-19-@agent-service-js-帮我将-scarchtype-和-type.md",
              "type": "file"
            },
            {
              "name": "2025-09-05_08-59-convert-chinese-logs-to-english.md",
              "path": ".specstory\\history\\2025-09-05_08-59-convert-chinese-logs-to-english.md",
              "type": "file"
            },
            {
              "name": "2025-09-09_06-45-implement-joi-validation-for-game-parameters.md",
              "path": ".specstory\\history\\2025-09-09_06-45-implement-joi-validation-for-game-parameters.md",
              "type": "file"
            },
            {
              "name": "2025-09-11_10-44-生成广告功能文档.md",
              "path": ".specstory\\history\\2025-09-11_10-44-生成广告功能文档.md",
              "type": "file"
            },
            {
              "name": "2025-09-15_11-29-review-commit-and-update-documentation.md",
              "path": ".specstory\\history\\2025-09-15_11-29-review-commit-and-update-documentation.md",
              "type": "file"
            },
            {
              "name": "2025-09-16_09-28-resolve-merge-conflict-issue.md",
              "path": ".specstory\\history\\2025-09-16_09-28-resolve-merge-conflict-issue.md",
              "type": "file"
            },
            {
              "name": "2025-09-22_06-33-resolve-multischema-preview-feature-error.md",
              "path": ".specstory\\history\\2025-09-22_06-33-resolve-multischema-preview-feature-error.md",
              "type": "file"
            },
            {
              "name": "2025-09-25_02-54-resolve-forinstatement-error-in-code.md",
              "path": ".specstory\\history\\2025-09-25_02-54-resolve-forinstatement-error-in-code.md",
              "type": "file"
            },
            {
              "name": "2025-09-26_06-25-fix-unexpected-use-of-'-'-error.md",
              "path": ".specstory\\history\\2025-09-26_06-25-fix-unexpected-use-of-'-'-error.md",
              "type": "file"
            },
            {
              "name": "2025-10-14_04-23-resolve-potential-timing-attack-error.md",
              "path": ".specstory\\history\\2025-10-14_04-23-resolve-potential-timing-attack-error.md",
              "type": "file"
            },
            {
              "name": "2025-10-17_06-17-fixing-unknown-word-error-in-code.md",
              "path": ".specstory\\history\\2025-10-17_06-17-fixing-unknown-word-error-in-code.md",
              "type": "file"
            },
            {
              "name": "2025-10-20_03-14-fix-unexpected-use-of-pipe-error.md",
              "path": ".specstory\\history\\2025-10-20_03-14-fix-unexpected-use-of-pipe-error.md",
              "type": "file"
            },
            {
              "name": "2025-10-23_03-16-@facebookpixel-service-js-帮我改成-const-xxx-()-{}-调用方式.md",
              "path": ".specstory\\history\\2025-10-23_03-16-@facebookpixel-service-js-帮我改成-const-xxx-()-{}-调用方式.md",
              "type": "file"
            },
            {
              "name": "2025-10-24_03-18-@facebookpixel-service-js-帮我改成-匿名函数.md",
              "path": ".specstory\\history\\2025-10-24_03-18-@facebookpixel-service-js-帮我改成-匿名函数.md",
              "type": "file"
            },
            {
              "name": "2025-11-07_03-23-修复错误请求.md",
              "path": ".specstory\\history\\2025-11-07_03-23-修复错误请求.md",
              "type": "file"
            },
            {
              "name": "2025-11-14_06-31-fix-unexpected-continue-statement-error.md",
              "path": ".specstory\\history\\2025-11-14_06-31-fix-unexpected-continue-statement-error.md",
              "type": "file"
            },
            {
              "name": "2025-11-21_03-19-优化-decimaltonumberbyobject-方法.md",
              "path": ".specstory\\history\\2025-11-21_03-19-优化-decimaltonumberbyobject-方法.md",
              "type": "file"
            },
            {
              "name": "2025-11-25_04-30-检查load属性在compute-js中的使用情况.md",
              "path": ".specstory\\history\\2025-11-25_04-30-检查load属性在compute-js中的使用情况.md",
              "type": "file"
            },
            {
              "name": "2025-11-26_11-09-审查-transaction-service-js-代码兼容性.md",
              "path": ".specstory\\history\\2025-11-26_11-09-审查-transaction-service-js-代码兼容性.md",
              "type": "file"
            },
            {
              "name": "2025-11-26_11-11-审查-transaction-service-js-代码兼容性.md",
              "path": ".specstory\\history\\2025-11-26_11-11-审查-transaction-service-js-代码兼容性.md",
              "type": "file"
            },
            {
              "name": "2025-11-26_19-55-fix-unexpected-continue-statement-error.md",
              "path": ".specstory\\history\\2025-11-26_19-55-fix-unexpected-continue-statement-error.md",
              "type": "file"
            },
            {
              "name": "2025-11-27_19-52-improve-logging-clarity-for-game-service.md",
              "path": ".specstory\\history\\2025-11-27_19-52-improve-logging-clarity-for-game-service.md",
              "type": "file"
            },
            {
              "name": "2025-12-03_18-18-为-acquiretasklock-添加-redis-锁.md",
              "path": ".specstory\\history\\2025-12-03_18-18-为-acquiretasklock-添加-redis-锁.md",
              "type": "file"
            },
            {
              "name": "2025-12-08_08-29-subsistenceallowance服务配置重构.md",
              "path": ".specstory\\history\\2025-12-08_08-29-subsistenceallowance服务配置重构.md",
              "type": "file"
            },
            {
              "name": "2025-12-10_11-32-fix-'getsourcebyloginparams'-definition-error.md",
              "path": ".specstory\\history\\2025-12-10_11-32-fix-'getsourcebyloginparams'-definition-error.md",
              "type": "file"
            },
            {
              "name": "2025-12-12_10-33-方法-`convertcustomstrategyparams`-一致性.md",
              "path": ".specstory\\history\\2025-12-12_10-33-方法-`convertcustomstrategyparams`-一致性.md",
              "type": "file"
            },
            {
              "name": "2025-12-17_11-29-自定义策略参数转换方法比较.md",
              "path": ".specstory\\history\\2025-12-17_11-29-自定义策略参数转换方法比较.md",
              "type": "file"
            },
            {
              "name": "2025-12-17_11-31-自定义策略参数转换方法比较.md",
              "path": ".specstory\\history\\2025-12-17_11-31-自定义策略参数转换方法比较.md",
              "type": "file"
            },
            {
              "name": "2025-12-18_08-50-vip-服务函数事务优化.md",
              "path": ".specstory\\history\\2025-12-18_08-50-vip-服务函数事务优化.md",
              "type": "file"
            },
            {
              "name": "2025-12-19_13-18-充值回调事务数据歧义.md",
              "path": ".specstory\\history\\2025-12-19_13-18-充值回调事务数据歧义.md",
              "type": "file"
            },
            {
              "name": "2025-12-21_04-21-事件监听上下文内存泄漏.md",
              "path": ".specstory\\history\\2025-12-21_04-21-事件监听上下文内存泄漏.md",
              "type": "file"
            },
            {
              "name": "2025-12-22_09-14-分支提交到test环境同步.md",
              "path": ".specstory\\history\\2025-12-22_09-14-分支提交到test环境同步.md",
              "type": "file"
            },
            {
              "name": "2025-12-23_06-24-tracking-service-js-recharge-pl-字段分析.md",
              "path": ".specstory\\history\\2025-12-23_06-24-tracking-service-js-recharge-pl-字段分析.md",
              "type": "file"
            },
            {
              "name": "2025-12-24_06-23-getpaymentapps-逻辑优化.md",
              "path": ".specstory\\history\\2025-12-24_06-23-getpaymentapps-逻辑优化.md",
              "type": "file"
            },
            {
              "name": "2025-12-30_09-21-事件监听上下文内存泄漏.md",
              "path": ".specstory\\history\\2025-12-30_09-21-事件监听上下文内存泄漏.md",
              "type": "file"
            },
            {
              "name": "2025-12-31_06-46-@src-services-onewaypush-service-js-帮我分析一下这个代码.md",
              "path": ".specstory\\history\\2025-12-31_06-46-@src-services-onewaypush-service-js-帮我分析一下这个代码.md",
              "type": "file"
            },
            {
              "name": "2026-01-26_03-42-bytenode-dual-platform-build-process.md",
              "path": ".specstory\\history\\2026-01-26_03-42-bytenode-dual-platform-build-process.md",
              "type": "file"
            },
            {
              "name": "2026-01-27_06-13-proxy-路由模式测试.md",
              "path": ".specstory\\history\\2026-01-27_06-13-proxy-路由模式测试.md",
              "type": "file"
            },
            {
              "name": "2026-03-06_06-10-scheduled-task-for-online-user-count.md",
              "path": ".specstory\\history\\2026-03-06_06-10-scheduled-task-for-online-user-count.md",
              "type": "file"
            },
            {
              "name": "2026-03-06_08-07-bot-integration-for-lark-messaging.md",
              "path": ".specstory\\history\\2026-03-06_08-07-bot-integration-for-lark-messaging.md",
              "type": "file"
            },
            {
              "name": "2026-03-06_08-26-@src-utils-bot-lark-js-使用官方得-来发送消息.md",
              "path": ".specstory\\history\\2026-03-06_08-26-@src-utils-bot-lark-js-使用官方得-来发送消息.md",
              "type": "file"
            },
            {
              "name": "2026-03-09_02-53-remove-static-usage-in-removeflow-js.md",
              "path": ".specstory\\history\\2026-03-09_02-53-remove-static-usage-in-removeflow-js.md",
              "type": "file"
            },
            {
              "name": "2026-03-16_08-01-update-methods-in-player-statistics.md",
              "path": ".specstory\\history\\2026-03-16_08-01-update-methods-in-player-statistics.md",
              "type": "file"
            },
            {
              "name": "2026-03-31_06-42-banner-service-method-implementation.md",
              "path": ".specstory\\history\\2026-03-31_06-42-banner-service-method-implementation.md",
              "type": "file"
            },
            {
              "name": "2026-04-01_06-14-new-api-endpoint-for-guest-access.md",
              "path": ".specstory\\history\\2026-04-01_06-14-new-api-endpoint-for-guest-access.md",
              "type": "file"
            },
            {
              "name": "2026-04-02_07-16-pop-ups-feature-branch-creation.md",
              "path": ".specstory\\history\\2026-04-02_07-16-pop-ups-feature-branch-creation.md",
              "type": "file"
            },
            {
              "name": "2026-04-13_05-04-new-api-interfaces-from-commit.md",
              "path": ".specstory\\history\\2026-04-13_05-04-new-api-interfaces-from-commit.md",
              "type": "file"
            }
          ]
        }
      ]
    },
    {
      "name": ".travis.yml",
      "path": ".travis.yml",
      "type": "file"
    },
    {
      "name": ".vscode",
      "path": ".vscode",
      "type": "directory",
      "children": [
        {
          "name": "settings.json",
          "path": ".vscode\\settings.json",
          "type": "file"
        }
      ]
    },
    {
      "name": ".yalc",
      "path": ".yalc",
      "type": "directory",
      "children": [
        {
          "name": "jsonfb",
          "path": ".yalc\\jsonfb",
          "type": "directory",
          "children": [
            {
              "name": "dist",
              "path": ".yalc\\jsonfb\\dist",
              "type": "directory",
              "children": [
                {
                  "name": "index.js",
                  "path": ".yalc\\jsonfb\\dist\\index.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "LICENSE",
              "path": ".yalc\\jsonfb\\LICENSE",
              "type": "file"
            },
            {
              "name": "package.json",
              "path": ".yalc\\jsonfb\\package.json",
              "type": "file"
            },
            {
              "name": "README.md",
              "path": ".yalc\\jsonfb\\README.md",
              "type": "file"
            },
            {
              "name": "yalc.sig",
              "path": ".yalc\\jsonfb\\yalc.sig",
              "type": "file"
            }
          ]
        }
      ]
    },
    {
      "name": "babel.config.js",
      "path": "babel.config.js",
      "type": "file"
    },
    {
      "name": "coverage",
      "path": "coverage",
      "type": "directory",
      "children": [
        {
          "name": "base.css",
          "path": "coverage\\base.css",
          "type": "file"
        },
        {
          "name": "block-navigation.js",
          "path": "coverage\\block-navigation.js",
          "type": "file"
        },
        {
          "name": "clover.xml",
          "path": "coverage\\clover.xml",
          "type": "file"
        },
        {
          "name": "favicon.png",
          "path": "coverage\\favicon.png",
          "type": "file"
        },
        {
          "name": "index.html",
          "path": "coverage\\index.html",
          "type": "file"
        },
        {
          "name": "lcov-report",
          "path": "coverage\\lcov-report",
          "type": "directory",
          "children": [
            {
              "name": "base.css",
              "path": "coverage\\lcov-report\\base.css",
              "type": "file"
            },
            {
              "name": "block-navigation.js",
              "path": "coverage\\lcov-report\\block-navigation.js",
              "type": "file"
            },
            {
              "name": "favicon.png",
              "path": "coverage\\lcov-report\\favicon.png",
              "type": "file"
            },
            {
              "name": "index.html",
              "path": "coverage\\lcov-report\\index.html",
              "type": "file"
            },
            {
              "name": "libs",
              "path": "coverage\\lcov-report\\libs",
              "type": "directory",
              "children": []
            },
            {
              "name": "middlewares",
              "path": "coverage\\lcov-report\\middlewares",
              "type": "directory",
              "children": []
            },
            {
              "name": "prettify.css",
              "path": "coverage\\lcov-report\\prettify.css",
              "type": "file"
            },
            {
              "name": "prettify.js",
              "path": "coverage\\lcov-report\\prettify.js",
              "type": "file"
            },
            {
              "name": "route.proxy.js.html",
              "path": "coverage\\lcov-report\\route.proxy.js.html",
              "type": "file"
            },
            {
              "name": "sort-arrow-sprite.png",
              "path": "coverage\\lcov-report\\sort-arrow-sprite.png",
              "type": "file"
            },
            {
              "name": "sorter.js",
              "path": "coverage\\lcov-report\\sorter.js",
              "type": "file"
            },
            {
              "name": "utils",
              "path": "coverage\\lcov-report\\utils",
              "type": "directory",
              "children": []
            }
          ]
        },
        {
          "name": "lcov.info",
          "path": "coverage\\lcov.info",
          "type": "file"
        },
        {
          "name": "libs",
          "path": "coverage\\libs",
          "type": "directory",
          "children": []
        },
        {
          "name": "middlewares",
          "path": "coverage\\middlewares",
          "type": "directory",
          "children": []
        },
        {
          "name": "prettify.css",
          "path": "coverage\\prettify.css",
          "type": "file"
        },
        {
          "name": "prettify.js",
          "path": "coverage\\prettify.js",
          "type": "file"
        },
        {
          "name": "route.proxy.js.html",
          "path": "coverage\\route.proxy.js.html",
          "type": "file"
        },
        {
          "name": "sort-arrow-sprite.png",
          "path": "coverage\\sort-arrow-sprite.png",
          "type": "file"
        },
        {
          "name": "sorter.js",
          "path": "coverage\\sorter.js",
          "type": "file"
        },
        {
          "name": "utils",
          "path": "coverage\\utils",
          "type": "directory",
          "children": []
        }
      ]
    },
    {
      "name": "docker-compose.dev.yml",
      "path": "docker-compose.dev.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.prod.yml",
      "path": "docker-compose.prod.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.test.yml",
      "path": "docker-compose.test.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.yml",
      "path": "docker-compose.yml",
      "type": "file"
    },
    {
      "name": "Dockerfile",
      "path": "Dockerfile",
      "type": "file"
    },
    {
      "name": "docs",
      "path": "docs",
      "type": "directory",
      "children": [
        {
          "name": "agent-refactor.md",
          "path": "docs\\agent-refactor.md",
          "type": "file"
        },
        {
          "name": "API_UserPrivacy.md",
          "path": "docs\\API_UserPrivacy.md",
          "type": "file"
        },
        {
          "name": "cashPush-util-api.md",
          "path": "docs\\cashPush-util-api.md",
          "type": "file"
        },
        {
          "name": "config",
          "path": "docs\\config",
          "type": "directory",
          "children": []
        },
        {
          "name": "constants_fix_summary.md",
          "path": "docs\\constants_fix_summary.md",
          "type": "file"
        },
        {
          "name": "devRule.md",
          "path": "docs\\devRule.md",
          "type": "file"
        },
        {
          "name": "eslog",
          "path": "docs\\eslog",
          "type": "directory",
          "children": [
            {
              "name": "elasticsearch",
              "path": "docs\\eslog\\elasticsearch",
              "type": "directory",
              "children": [
                {
                  "name": "索引文档.md",
                  "path": "docs\\eslog\\elasticsearch\\索引文档.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "logstash",
              "path": "docs\\eslog\\logstash",
              "type": "directory",
              "children": [
                {
                  "name": "01_main.conf",
                  "path": "docs\\eslog\\logstash\\01_main.conf",
                  "type": "file"
                },
                {
                  "name": "03_plogs_error.conf",
                  "path": "docs\\eslog\\logstash\\03_plogs_error.conf",
                  "type": "file"
                }
              ]
            }
          ]
        },
        {
          "name": "games",
          "path": "docs\\games",
          "type": "directory",
          "children": [
            {
              "name": "21_sports.md",
              "path": "docs\\games\\21_sports.md",
              "type": "file"
            },
            {
              "name": "facai.md",
              "path": "docs\\games\\facai.md",
              "type": "file"
            },
            {
              "name": "inout.md",
              "path": "docs\\games\\inout.md",
              "type": "file"
            },
            {
              "name": "sports.md",
              "path": "docs\\games\\sports.md",
              "type": "file"
            }
          ]
        },
        {
          "name": "gift-center-migration.md",
          "path": "docs\\gift-center-migration.md",
          "type": "file"
        },
        {
          "name": "inactive-users-api.md",
          "path": "docs\\inactive-users-api.md",
          "type": "file"
        },
        {
          "name": "iopush-performance-optimization.md",
          "path": "docs\\iopush-performance-optimization.md",
          "type": "file"
        },
        {
          "name": "mail-api.md",
          "path": "docs\\mail-api.md",
          "type": "file"
        },
        {
          "name": "memory-guard-usage.md",
          "path": "docs\\memory-guard-usage.md",
          "type": "file"
        },
        {
          "name": "modules",
          "path": "docs\\modules",
          "type": "directory",
          "children": [
            {
              "name": "agent",
              "path": "docs\\modules\\agent",
              "type": "directory",
              "children": [
                {
                  "name": "old.md",
                  "path": "docs\\modules\\agent\\old.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "announcement",
              "path": "docs\\modules\\announcement",
              "type": "directory",
              "children": [
                {
                  "name": "announcement.md",
                  "path": "docs\\modules\\announcement\\announcement.md",
                  "type": "file"
                },
                {
                  "name": "getNoticeDetail-migration.md",
                  "path": "docs\\modules\\announcement\\getNoticeDetail-migration.md",
                  "type": "file"
                },
                {
                  "name": "getNoticeList-migration.md",
                  "path": "docs\\modules\\announcement\\getNoticeList-migration.md",
                  "type": "file"
                },
                {
                  "name": "receiveNoticeReward-migration.md",
                  "path": "docs\\modules\\announcement\\receiveNoticeReward-migration.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "banner",
              "path": "docs\\modules\\banner",
              "type": "directory",
              "children": [
                {
                  "name": "activityCenterBanner-migration.md",
                  "path": "docs\\modules\\banner\\activityCenterBanner-migration.md",
                  "type": "file"
                },
                {
                  "name": "activityCenterBanner.sql",
                  "path": "docs\\modules\\banner\\activityCenterBanner.sql",
                  "type": "file"
                },
                {
                  "name": "banner-migration.md",
                  "path": "docs\\modules\\banner\\banner-migration.md",
                  "type": "file"
                },
                {
                  "name": "banner.sql",
                  "path": "docs\\modules\\banner\\banner.sql",
                  "type": "file"
                }
              ]
            },
            {
              "name": "behavior",
              "path": "docs\\modules\\behavior",
              "type": "directory",
              "children": [
                {
                  "name": "behavior.sql",
                  "path": "docs\\modules\\behavior\\behavior.sql",
                  "type": "file"
                }
              ]
            },
            {
              "name": "dailyCheckIn",
              "path": "docs\\modules\\dailyCheckIn",
              "type": "directory",
              "children": [
                {
                  "name": "dailyCheckIn.md",
                  "path": "docs\\modules\\dailyCheckIn\\dailyCheckIn.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "fruit",
              "path": "docs\\modules\\fruit",
              "type": "directory",
              "children": [
                {
                  "name": "水果机抽奖系统文档.md",
                  "path": "docs\\modules\\fruit\\水果机抽奖系统文档.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "fruitMachineDraw",
              "path": "docs\\modules\\fruitMachineDraw",
              "type": "directory",
              "children": [
                {
                  "name": "fruitMachineDraw-migration.md",
                  "path": "docs\\modules\\fruitMachineDraw\\fruitMachineDraw-migration.md",
                  "type": "file"
                },
                {
                  "name": "水果机抽奖系统文档.md",
                  "path": "docs\\modules\\fruitMachineDraw\\水果机抽奖系统文档.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "giftcode",
              "path": "docs\\modules\\giftcode",
              "type": "directory",
              "children": [
                {
                  "name": "giftcode-migration.md",
                  "path": "docs\\modules\\giftcode\\giftcode-migration.md",
                  "type": "file"
                },
                {
                  "name": "giftcode.sql",
                  "path": "docs\\modules\\giftcode\\giftcode.sql",
                  "type": "file"
                }
              ]
            },
            {
              "name": "giftcode-migration.md",
              "path": "docs\\modules\\giftcode-migration.md",
              "type": "file"
            },
            {
              "name": "giftcode.md",
              "path": "docs\\modules\\giftcode.md",
              "type": "file"
            },
            {
              "name": "lobby",
              "path": "docs\\modules\\lobby",
              "type": "directory",
              "children": [
                {
                  "name": "lobby-remaining-interface-migration.md",
                  "path": "docs\\modules\\lobby\\lobby-remaining-interface-migration.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "mail",
              "path": "docs\\modules\\mail",
              "type": "directory",
              "children": [
                {
                  "name": "mail-migration.md",
                  "path": "docs\\modules\\mail\\mail-migration.md",
                  "type": "file"
                },
                {
                  "name": "mail.sql",
                  "path": "docs\\modules\\mail\\mail.sql",
                  "type": "file"
                }
              ]
            },
            {
              "name": "rank",
              "path": "docs\\modules\\rank",
              "type": "directory",
              "children": [
                {
                  "name": "gitRankList_migration.md",
                  "path": "docs\\modules\\rank\\gitRankList_migration.md",
                  "type": "file"
                },
                {
                  "name": "rank-getActiveRank.md",
                  "path": "docs\\modules\\rank\\rank-getActiveRank.md",
                  "type": "file"
                },
                {
                  "name": "rank.md",
                  "path": "docs\\modules\\rank\\rank.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "redPoint",
              "path": "docs\\modules\\redPoint",
              "type": "directory",
              "children": [
                {
                  "name": "redPoint-migration.md",
                  "path": "docs\\modules\\redPoint\\redPoint-migration.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "turntable",
              "path": "docs\\modules\\turntable",
              "type": "directory",
              "children": [
                {
                  "name": "truntable-gameland.md",
                  "path": "docs\\modules\\turntable\\truntable-gameland.md",
                  "type": "file"
                },
                {
                  "name": "truntable-new-gameland.md",
                  "path": "docs\\modules\\turntable\\truntable-new-gameland.md",
                  "type": "file"
                },
                {
                  "name": "truntable.md",
                  "path": "docs\\modules\\turntable\\truntable.md",
                  "type": "file"
                },
                {
                  "name": "turntable-migration.md",
                  "path": "docs\\modules\\turntable\\turntable-migration.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "vip",
              "path": "docs\\modules\\vip",
              "type": "directory",
              "children": [
                {
                  "name": "tb_order_withdraw-migration.md",
                  "path": "docs\\modules\\vip\\tb_order_withdraw-migration.md",
                  "type": "file"
                },
                {
                  "name": "tb_order_withdraw.md",
                  "path": "docs\\modules\\vip\\tb_order_withdraw.md",
                  "type": "file"
                },
                {
                  "name": "vip-migration.md",
                  "path": "docs\\modules\\vip\\vip-migration.md",
                  "type": "file"
                },
                {
                  "name": "vip.md",
                  "path": "docs\\modules\\vip\\vip.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "wallet",
              "path": "docs\\modules\\wallet",
              "type": "directory",
              "children": [
                {
                  "name": "wallet-api-docs.md",
                  "path": "docs\\modules\\wallet\\wallet-api-docs.md",
                  "type": "file"
                },
                {
                  "name": "wallet.md",
                  "path": "docs\\modules\\wallet\\wallet.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "广告.md",
              "path": "docs\\modules\\广告.md",
              "type": "file"
            }
          ]
        },
        {
          "name": "mysql-prepared-stmt.md",
          "path": "docs\\mysql-prepared-stmt.md",
          "type": "file"
        },
        {
          "name": "pay-api.md",
          "path": "docs\\pay-api.md",
          "type": "file"
        },
        {
          "name": "prisma.md",
          "path": "docs\\prisma.md",
          "type": "file"
        },
        {
          "name": "profile_advanced_features.md",
          "path": "docs\\profile_advanced_features.md",
          "type": "file"
        },
        {
          "name": "profile_implementation.md",
          "path": "docs\\profile_implementation.md",
          "type": "file"
        },
        {
          "name": "profile_summary.md",
          "path": "docs\\profile_summary.md",
          "type": "file"
        },
        {
          "name": "profile_usage.md",
          "path": "docs\\profile_usage.md",
          "type": "file"
        },
        {
          "name": "punctual_protection_implementation.md",
          "path": "docs\\punctual_protection_implementation.md",
          "type": "file"
        },
        {
          "name": "push-service-api.md",
          "path": "docs\\push-service-api.md",
          "type": "file"
        },
        {
          "name": "receive_instant_bonus_implementation.md",
          "path": "docs\\receive_instant_bonus_implementation.md",
          "type": "file"
        },
        {
          "name": "route.md",
          "path": "docs\\route.md",
          "type": "file"
        },
        {
          "name": "rwRule_usage.md",
          "path": "docs\\rwRule_usage.md",
          "type": "file"
        },
        {
          "name": "scheduler-guide.md",
          "path": "docs\\scheduler-guide.md",
          "type": "file"
        },
        {
          "name": "SUMMARY",
          "path": "docs\\SUMMARY",
          "type": "directory",
          "children": [
            {
              "name": "SCHEDULER_OPTIMIZATION_SUMMARY.md",
              "path": "docs\\SUMMARY\\SCHEDULER_OPTIMIZATION_SUMMARY.md",
              "type": "file"
            }
          ]
        },
        {
          "name": "timezone-configuration.md",
          "path": "docs\\timezone-configuration.md",
          "type": "file"
        },
        {
          "name": "transaction-service-api.md",
          "path": "docs\\transaction-service-api.md",
          "type": "file"
        },
        {
          "name": "vip_util_usage.md",
          "path": "docs\\vip_util_usage.md",
          "type": "file"
        },
        {
          "name": "withdraw_checkAutoPass_implementation.md",
          "path": "docs\\withdraw_checkAutoPass_implementation.md",
          "type": "file"
        },
        {
          "name": "withdraw_freeze_implementation.md",
          "path": "docs\\withdraw_freeze_implementation.md",
          "type": "file"
        },
        {
          "name": "withdraw_getDayInfo_optimization.md",
          "path": "docs\\withdraw_getDayInfo_optimization.md",
          "type": "file"
        },
        {
          "name": "开发环境.md",
          "path": "docs\\开发环境.md",
          "type": "file"
        },
        {
          "name": "打码.md",
          "path": "docs\\打码.md",
          "type": "file"
        },
        {
          "name": "游戏旧架构迁移新架构.md",
          "path": "docs\\游戏旧架构迁移新架构.md",
          "type": "file"
        },
        {
          "name": "登录迁移.md",
          "path": "docs\\登录迁移.md",
          "type": "file"
        },
        {
          "name": "红点系统功能文档.md",
          "path": "docs\\红点系统功能文档.md",
          "type": "file"
        },
        {
          "name": "缓存管理器使用文档.md",
          "path": "docs\\缓存管理器使用文档.md",
          "type": "file"
        },
        {
          "name": "规则中心.html",
          "path": "docs\\规则中心.html",
          "type": "file"
        },
        {
          "name": "规则中心.md",
          "path": "docs\\规则中心.md",
          "type": "file"
        },
        {
          "name": "部署发布.md",
          "path": "docs\\部署发布.md",
          "type": "file"
        },
        {
          "name": "队列使用文档.md",
          "path": "docs\\队列使用文档.md",
          "type": "file"
        }
      ]
    },
    {
      "name": "ecosystem.config.json",
      "path": "ecosystem.config.json",
      "type": "file"
    },
    {
      "name": "ecosystem.test.json",
      "path": "ecosystem.test.json",
      "type": "file"
    },
    {
      "name": "examples",
      "path": "examples",
      "type": "directory",
      "children": [
        {
          "name": "memory-guard-example.js",
          "path": "examples\\memory-guard-example.js",
          "type": "file"
        }
      ]
    },
    {
      "name": "gameland.code-workspace",
      "path": "gameland.code-workspace",
      "type": "file"
    },
    {
      "name": "jest.config.js",
      "path": "jest.config.js",
      "type": "file"
    },
    {
      "name": "jsconfig.json",
      "path": "jsconfig.json",
      "type": "file"
    },
    {
      "name": "LICENSE",
      "path": "LICENSE",
      "type": "file"
    },
    {
      "name": "mysql-config",
      "path": "mysql-config",
      "type": "directory",
      "children": []
    },
    {
      "name": "mysql-init",
      "path": "mysql-init",
      "type": "directory",
      "children": []
    },
    {
      "name": "package-lock.json",
      "path": "package-lock.json",
      "type": "file"
    },
    {
      "name": "package.json",
      "path": "package.json",
      "type": "file"
    },
    {
      "name": "proxy.ps1",
      "path": "proxy.ps1",
      "type": "file"
    },
    {
      "name": "README.md",
      "path": "README.md",
      "type": "file"
    },
    {
      "name": "src",
      "path": "src",
      "type": "directory",
      "children": [
        {
          "name": "app.js",
          "path": "src\\app.js",
          "type": "file"
        },
        {
          "name": "config",
          "path": "src\\config",
          "type": "directory",
          "children": [
            {
              "name": "advertising.js",
              "path": "src\\config\\advertising.js",
              "type": "file"
            },
            {
              "name": "agent.js",
              "path": "src\\config\\agent.js",
              "type": "file"
            },
            {
              "name": "appBury.js",
              "path": "src\\config\\appBury.js",
              "type": "file"
            },
            {
              "name": "auth.js",
              "path": "src\\config\\auth.js",
              "type": "file"
            },
            {
              "name": "banner.js",
              "path": "src\\config\\banner.js",
              "type": "file"
            },
            {
              "name": "behaviorTracking.js",
              "path": "src\\config\\behaviorTracking.js",
              "type": "file"
            },
            {
              "name": "businessStrategy.js",
              "path": "src\\config\\businessStrategy.js",
              "type": "file"
            },
            {
              "name": "cc.js",
              "path": "src\\config\\cc.js",
              "type": "file"
            },
            {
              "name": "config.js",
              "path": "src\\config\\config.js",
              "type": "file"
            },
            {
              "name": "constant.js",
              "path": "src\\config\\constant.js",
              "type": "file"
            },
            {
              "name": "crowd.js",
              "path": "src\\config\\crowd.js",
              "type": "file"
            },
            {
              "name": "dailyCheckin.js",
              "path": "src\\config\\dailyCheckin.js",
              "type": "file"
            },
            {
              "name": "errCode.js",
              "path": "src\\config\\errCode.js",
              "type": "file"
            },
            {
              "name": "game.js",
              "path": "src\\config\\game.js",
              "type": "file"
            },
            {
              "name": "gameServer.js",
              "path": "src\\config\\gameServer.js",
              "type": "file"
            },
            {
              "name": "lobby.js",
              "path": "src\\config\\lobby.js",
              "type": "file"
            },
            {
              "name": "logger.js",
              "path": "src\\config\\logger.js",
              "type": "file"
            },
            {
              "name": "mail.js",
              "path": "src\\config\\mail.js",
              "type": "file"
            },
            {
              "name": "messageBot.js",
              "path": "src\\config\\messageBot.js",
              "type": "file"
            },
            {
              "name": "morgan.js",
              "path": "src\\config\\morgan.js",
              "type": "file"
            },
            {
              "name": "package.js",
              "path": "src\\config\\package.js",
              "type": "file"
            },
            {
              "name": "passport.js",
              "path": "src\\config\\passport.js",
              "type": "file"
            },
            {
              "name": "pay.js",
              "path": "src\\config\\pay.js",
              "type": "file"
            },
            {
              "name": "platformConfig.js",
              "path": "src\\config\\platformConfig.js",
              "type": "file"
            },
            {
              "name": "playerRank.js",
              "path": "src\\config\\playerRank.js",
              "type": "file"
            },
            {
              "name": "profile.js",
              "path": "src\\config\\profile.js",
              "type": "file"
            },
            {
              "name": "publish.js",
              "path": "src\\config\\publish.js",
              "type": "file"
            },
            {
              "name": "pushEvent.js",
              "path": "src\\config\\pushEvent.js",
              "type": "file"
            },
            {
              "name": "rank.js",
              "path": "src\\config\\rank.js",
              "type": "file"
            },
            {
              "name": "roles.js",
              "path": "src\\config\\roles.js",
              "type": "file"
            },
            {
              "name": "rwRule.js",
              "path": "src\\config\\rwRule.js",
              "type": "file"
            },
            {
              "name": "security.js",
              "path": "src\\config\\security.js",
              "type": "file"
            },
            {
              "name": "share.js",
              "path": "src\\config\\share.js",
              "type": "file"
            },
            {
              "name": "sms.js",
              "path": "src\\config\\sms.js",
              "type": "file"
            },
            {
              "name": "tgconfig.js",
              "path": "src\\config\\tgconfig.js",
              "type": "file"
            },
            {
              "name": "tokens.js",
              "path": "src\\config\\tokens.js",
              "type": "file"
            },
            {
              "name": "transaction.js",
              "path": "src\\config\\transaction.js",
              "type": "file"
            },
            {
              "name": "turntable.js",
              "path": "src\\config\\turntable.js",
              "type": "file"
            },
            {
              "name": "vip.js",
              "path": "src\\config\\vip.js",
              "type": "file"
            },
            {
              "name": "wagerDebt.js",
              "path": "src\\config\\wagerDebt.js",
              "type": "file"
            },
            {
              "name": "wallet.js",
              "path": "src\\config\\wallet.js",
              "type": "file"
            },
            {
              "name": "wholeStat.js",
              "path": "src\\config\\wholeStat.js",
              "type": "file"
            }
          ]
        },
        {
          "name": "constants",
          "path": "src\\constants",
          "type": "directory",
          "children": []
        },
        {
          "name": "controllers",
          "path": "src\\controllers",
          "type": "directory",
          "children": [
            {
              "name": "advertising.controller.js",
              "path": "src\\controllers\\advertising.controller.js",
              "type": "file"
            },
            {
              "name": "agent.controller.js",
              "path": "src\\controllers\\agent.controller.js",
              "type": "file"
            },
            {
              "name": "announcement.controller.js",
              "path": "src\\controllers\\announcement.controller.js",
              "type": "file"
            },
            {
              "name": "appbury.controller.js",
              "path": "src\\controllers\\appbury.controller.js",
              "type": "file"
            },
            {
              "name": "audienceBaseConfig.controller.js",
              "path": "src\\controllers\\audienceBaseConfig.controller.js",
              "type": "file"
            },
            {
              "name": "audienceClassification.controller.js",
              "path": "src\\controllers\\audienceClassification.controller.js",
              "type": "file"
            },
            {
              "name": "audienceGroup.controller.js",
              "path": "src\\controllers\\audienceGroup.controller.js",
              "type": "file"
            },
            {
              "name": "auth.controller.js",
              "path": "src\\controllers\\auth.controller.js",
              "type": "file"
            },
            {
              "name": "banner.controller.js",
              "path": "src\\controllers\\banner.controller.js",
              "type": "file"
            },
            {
              "name": "broadcast.controller.js",
              "path": "src\\controllers\\broadcast.controller.js",
              "type": "file"
            },
            {
              "name": "config.controller.js",
              "path": "src\\controllers\\config.controller.js",
              "type": "file"
            },
            {
              "name": "dailyCheckIn.controller.js",
              "path": "src\\controllers\\dailyCheckIn.controller.js",
              "type": "file"
            },
            {
              "name": "dbSnapshot.controller.js",
              "path": "src\\controllers\\dbSnapshot.controller.js",
              "type": "file"
            },
            {
              "name": "fruitMachineDraw.controller.js",
              "path": "src\\controllers\\fruitMachineDraw.controller.js",
              "type": "file"
            },
            {
              "name": "game",
              "path": "src\\controllers\\game",
              "type": "directory",
              "children": [
                {
                  "name": "game.controller.js",
                  "path": "src\\controllers\\game\\game.controller.js",
                  "type": "file"
                },
                {
                  "name": "provider",
                  "path": "src\\controllers\\game\\provider",
                  "type": "directory",
                  "children": [
                    {
                      "name": "21Sports.controller.js",
                      "path": "src\\controllers\\game\\provider\\21Sports.controller.js",
                      "type": "file"
                    },
                    {
                      "name": "evo.controller.js",
                      "path": "src\\controllers\\game\\provider\\evo.controller.js",
                      "type": "file"
                    },
                    {
                      "name": "facai.controller.js",
                      "path": "src\\controllers\\game\\provider\\facai.controller.js",
                      "type": "file"
                    },
                    {
                      "name": "inout.controller.js",
                      "path": "src\\controllers\\game\\provider\\inout.controller.js",
                      "type": "file"
                    },
                    {
                      "name": "oneapi.controller.js",
                      "path": "src\\controllers\\game\\provider\\oneapi.controller.js",
                      "type": "file"
                    },
                    {
                      "name": "pt.controller.js",
                      "path": "src\\controllers\\game\\provider\\pt.controller.js",
                      "type": "file"
                    },
                    {
                      "name": "sports.controller.js",
                      "path": "src\\controllers\\game\\provider\\sports.controller.js",
                      "type": "file"
                    }
                  ]
                }
              ]
            },
            {
              "name": "giftCenter.controller.js",
              "path": "src\\controllers\\giftCenter.controller.js",
              "type": "file"
            },
            {
              "name": "giftcode.controller.js",
              "path": "src\\controllers\\giftcode.controller.js",
              "type": "file"
            },
            {
              "name": "googlepush.controller.js",
              "path": "src\\controllers\\googlepush.controller.js",
              "type": "file"
            },
            {
              "name": "guideCard.controller.js",
              "path": "src\\controllers\\guideCard.controller.js",
              "type": "file"
            },
            {
              "name": "inactiveUser.controller.js",
              "path": "src\\controllers\\inactiveUser.controller.js",
              "type": "file"
            },
            {
              "name": "index.js",
              "path": "src\\controllers\\index.js",
              "type": "file"
            },
            {
              "name": "kefu.controller.js",
              "path": "src\\controllers\\kefu.controller.js",
              "type": "file"
            },
            {
              "name": "lobby.controller.js",
              "path": "src\\controllers\\lobby.controller.js",
              "type": "file"
            },
            {
              "name": "mail.controller.js",
              "path": "src\\controllers\\mail.controller.js",
              "type": "file"
            },
            {
              "name": "online.controller.js",
              "path": "src\\controllers\\online.controller.js",
              "type": "file"
            },
            {
              "name": "pay.controller.js",
              "path": "src\\controllers\\pay.controller.js",
              "type": "file"
            },
            {
              "name": "playerInfo.controller.js",
              "path": "src\\controllers\\playerInfo.controller.js",
              "type": "file"
            },
            {
              "name": "playerRanking.controller.js",
              "path": "src\\controllers\\playerRanking.controller.js",
              "type": "file"
            },
            {
              "name": "rank.controller.js",
              "path": "src\\controllers\\rank.controller.js",
              "type": "file"
            },
            {
              "name": "rechargeOrder.controller.js",
              "path": "src\\controllers\\rechargeOrder.controller.js",
              "type": "file"
            },
            {
              "name": "redPoint.controller.js",
              "path": "src\\controllers\\redPoint.controller.js",
              "type": "file"
            },
            {
              "name": "share.controller.js",
              "path": "src\\controllers\\share.controller.js",
              "type": "file"
            },
            {
              "name": "slap.controller.js",
              "path": "src\\controllers\\slap.controller.js",
              "type": "file"
            },
            {
              "name": "sms.controller.js",
              "path": "src\\controllers\\sms.controller.js",
              "type": "file"
            },
            {
              "name": "subsistenceAllowance.controller.js",
              "path": "src\\controllers\\subsistenceAllowance.controller.js",
              "type": "file"
            },
            {
              "name": "test.controller.js",
              "path": "src\\controllers\\test.controller.js",
              "type": "file"
            },
            {
              "name": "ticket.controller.js",
              "path": "src\\controllers\\ticket.controller.js",
              "type": "file"
            },
            {
              "name": "turntable.controller.js",
              "path": "src\\controllers\\turntable.controller.js",
              "type": "file"
            },
            {
              "name": "userGroup.controller.js",
              "path": "src\\controllers\\userGroup.controller.js",
              "type": "file"
            },
            {
              "name": "userPrivacy.controller.js",
              "path": "src\\controllers\\userPrivacy.controller.js",
              "type": "file"
            },
            {
              "name": "version.controller.js",
              "path": "src\\controllers\\version.controller.js",
              "type": "file"
            },
            {
              "name": "vip.controller.js",
              "path": "src\\controllers\\vip.controller.js",
              "type": "file"
            },
            {
              "name": "wallet.controller.js",
              "path": "src\\controllers\\wallet.controller.js",
              "type": "file"
            },
            {
              "name": "withdrawOrder.controller.js",
              "path": "src\\controllers\\withdrawOrder.controller.js",
              "type": "file"
            }
          ]
        },
        {
          "name": "docs",
          "path": "src\\docs",
          "type": "directory",
          "children": [
            {
              "name": "components.yml",
              "path": "src\\docs\\components.yml",
              "type": "file"
            },
            {
              "name": "swaggerDef.js",
              "path": "src\\docs\\swaggerDef.js",
              "type": "file"
            }
          ]
        },
        {
          "name": "index.js",
          "path": "src\\index.js",
          "type": "file"
        },
        {
          "name": "libs",
          "path": "src\\libs",
          "type": "directory",
          "children": [
            {
              "name": "BitmapCacheManager.js",
              "path": "src\\libs\\BitmapCacheManager.js",
              "type": "file"
            },
            {
              "name": "CacheManager.js",
              "path": "src\\libs\\CacheManager.js",
              "type": "file"
            },
            {
              "name": "google",
              "path": "src\\libs\\google",
              "type": "directory",
              "children": [
                {
                  "name": "dailyPushTest.js",
                  "path": "src\\libs\\google\\dailyPushTest.js",
                  "type": "file"
                },
                {
                  "name": "example.js",
                  "path": "src\\libs\\google\\example.js",
                  "type": "file"
                },
                {
                  "name": "FirebaseMessagingClient.js",
                  "path": "src\\libs\\google\\FirebaseMessagingClient.js",
                  "type": "file"
                },
                {
                  "name": "GooglePushConfig.js",
                  "path": "src\\libs\\google\\GooglePushConfig.js",
                  "type": "file"
                },
                {
                  "name": "index.js",
                  "path": "src\\libs\\google\\index.js",
                  "type": "file"
                },
                {
                  "name": "PushNotificationManager.js",
                  "path": "src\\libs\\google\\PushNotificationManager.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "HttpClient.js",
              "path": "src\\libs\\HttpClient.js",
              "type": "file"
            },
            {
              "name": "prisma.js",
              "path": "src\\libs\\prisma.js",
              "type": "file"
            },
            {
              "name": "queue",
              "path": "src\\libs\\queue",
              "type": "directory",
              "children": [
                {
                  "name": "DelayQueueAbstract.js",
                  "path": "src\\libs\\queue\\DelayQueueAbstract.js",
                  "type": "file"
                },
                {
                  "name": "index.js",
                  "path": "src\\libs\\queue\\index.js",
                  "type": "file"
                },
                {
                  "name": "redis",
                  "path": "src\\libs\\queue\\redis",
                  "type": "directory",
                  "children": [
                    {
                      "name": "index.js",
                      "path": "src\\libs\\queue\\redis\\index.js",
                      "type": "file"
                    },
                    {
                      "name": "redis.md",
                      "path": "src\\libs\\queue\\redis\\redis.md",
                      "type": "file"
                    },
                    {
                      "name": "RedisMqDelayQueue.js",
                      "path": "src\\libs\\queue\\redis\\RedisMqDelayQueue.js",
                      "type": "file"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Scheduler.js",
              "path": "src\\libs\\Scheduler.js",
              "type": "file"
            },
            {
              "name": "SyncManager.js",
              "path": "src\\libs\\SyncManager.js",
              "type": "file"
            },
            {
              "name": "TaskWorkflow.js",
              "path": "src\\libs\\TaskWorkflow.js",
              "type": "file"
            }
          ]
        },
        {
          "name": "middlewares",
          "path": "src\\middlewares",
          "type": "directory",
          "children": [
            {
              "name": "auth.js",
              "path": "src\\middlewares\\auth.js",
              "type": "file"
            },
            {
              "name": "context.js",
              "path": "src\\middlewares\\context.js",
              "type": "file"
            },
            {
              "name": "error.js",
              "path": "src\\middlewares\\error.js",
              "type": "file"
            },
            {
              "name": "ip.js",
              "path": "src\\middlewares\\ip.js",
              "type": "file"
            },
            {
              "name": "ipWhiteList.js",
              "path": "src\\middlewares\\ipWhiteList.js",
              "type": "file"
            },
            {
              "name": "mch.js",
              "path": "src\\middlewares\\mch.js",
              "type": "file"
            },
            {
              "name": "pay",
              "path": "src\\middlewares\\pay",
              "type": "directory",
              "children": [
                {
                  "name": "account.js",
                  "path": "src\\middlewares\\pay\\account.js",
                  "type": "file"
                },
                {
                  "name": "channelCheck.js",
                  "path": "src\\middlewares\\pay\\channelCheck.js",
                  "type": "file"
                },
                {
                  "name": "goods.js",
                  "path": "src\\middlewares\\pay\\goods.js",
                  "type": "file"
                },
                {
                  "name": "ifscCheck.js",
                  "path": "src\\middlewares\\pay\\ifscCheck.js",
                  "type": "file"
                },
                {
                  "name": "orderBuilding.js",
                  "path": "src\\middlewares\\pay\\orderBuilding.js",
                  "type": "file"
                },
                {
                  "name": "orderFrequencyRestricted.js",
                  "path": "src\\middlewares\\pay\\orderFrequencyRestricted.js",
                  "type": "file"
                },
                {
                  "name": "paymentCallback.js",
                  "path": "src\\middlewares\\pay\\paymentCallback.js",
                  "type": "file"
                },
                {
                  "name": "paymentCallbackChannel.js",
                  "path": "src\\middlewares\\pay\\paymentCallbackChannel.js",
                  "type": "file"
                },
                {
                  "name": "paymentCallbackVerify.js",
                  "path": "src\\middlewares\\pay\\paymentCallbackVerify.js",
                  "type": "file"
                },
                {
                  "name": "paymentContext.js",
                  "path": "src\\middlewares\\pay\\paymentContext.js",
                  "type": "file"
                },
                {
                  "name": "restrictedAreas.js",
                  "path": "src\\middlewares\\pay\\restrictedAreas.js",
                  "type": "file"
                },
                {
                  "name": "withdrawPostProcess.js",
                  "path": "src\\middlewares\\pay\\withdrawPostProcess.js",
                  "type": "file"
                },
                {
                  "name": "withdrawRiskCheck.js",
                  "path": "src\\middlewares\\pay\\withdrawRiskCheck.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "rateLimiter.js",
              "path": "src\\middlewares\\rateLimiter.js",
              "type": "file"
            },
            {
              "name": "responseCache.js",
              "path": "src\\middlewares\\responseCache.js",
              "type": "file"
            },
            {
              "name": "s2sAuthentication.js",
              "path": "src\\middlewares\\s2sAuthentication.js",
              "type": "file"
            },
            {
              "name": "security",
              "path": "src\\middlewares\\security",
              "type": "directory",
              "children": [
                {
                  "name": "hmacSha256.js",
                  "path": "src\\middlewares\\security\\hmacSha256.js",
                  "type": "file"
                },
                {
                  "name": "index.js",
                  "path": "src\\middlewares\\security\\index.js",
                  "type": "file"
                },
                {
                  "name": "md5.js",
                  "path": "src\\middlewares\\security\\md5.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "simpleSign.js",
              "path": "src\\middlewares\\simpleSign.js",
              "type": "file"
            },
            {
              "name": "sms.js",
              "path": "src\\middlewares\\sms.js",
              "type": "file"
            },
            {
              "name": "validate.js",
              "path": "src\\middlewares\\validate.js",
              "type": "file"
            }
          ]
        },
        {
          "name": "modules",
          "path": "src\\modules",
          "type": "directory",
          "children": [
            {
              "name": "full_schema.prisma",
              "path": "src\\modules\\full_schema.prisma",
              "type": "file"
            },
            {
              "name": "migrations",
              "path": "src\\modules\\migrations",
              "type": "directory",
              "children": [
                {
                  "name": "20250623161703_add_placement_domain_fields",
                  "path": "src\\modules\\migrations\\20250623161703_add_placement_domain_fields",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\migrations\\20250623161703_add_placement_domain_fields\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "20250812141152_add_ticket_record",
                  "path": "src\\modules\\migrations\\20250812141152_add_ticket_record",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\migrations\\20250812141152_add_ticket_record\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "20250826152455_add_broadcast_info",
                  "path": "src\\modules\\migrations\\20250826152455_add_broadcast_info",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\migrations\\20250826152455_add_broadcast_info\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "20250915163128_add_cmsemailstaffsetting",
                  "path": "src\\modules\\migrations\\20250915163128_add_cmsemailstaffsetting",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\migrations\\20250915163128_add_cmsemailstaffsetting\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "20251126124434_guanxi_vip_week",
                  "path": "src\\modules\\migrations\\20251126124434_guanxi_vip_week",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\migrations\\20251126124434_guanxi_vip_week\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "20251211150940_guanxi_reflux",
                  "path": "src\\modules\\migrations\\20251211150940_guanxi_reflux",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\migrations\\20251211150940_guanxi_reflux\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "20260105173319_guanxi_gameround",
                  "path": "src\\modules\\migrations\\20260105173319_guanxi_gameround",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\migrations\\20260105173319_guanxi_gameround\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "20260127143818_third_party_user",
                  "path": "src\\modules\\migrations\\20260127143818_third_party_user",
                  "type": "directory",
                  "children": []
                },
                {
                  "name": "20260417120001_rename_extend_to_meta_tb_withdraw_punctual_treasure",
                  "path": "src\\modules\\migrations\\20260417120001_rename_extend_to_meta_tb_withdraw_punctual_treasure",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\migrations\\20260417120001_rename_extend_to_meta_tb_withdraw_punctual_treasure\\migration.sql",
                      "type": "file"
                    }
                  ]
                }
              ]
            },
            {
              "name": "published",
              "path": "src\\modules\\published",
              "type": "directory",
              "children": [
                {
                  "name": "2025061815",
                  "path": "src\\modules\\published\\2025061815",
                  "type": "directory",
                  "children": [
                    {
                      "name": "20250603110847_diff",
                      "path": "src\\modules\\published\\2025061815\\20250603110847_diff",
                      "type": "directory",
                      "children": [
                        {
                          "name": "migration.sql",
                          "path": "src\\modules\\published\\2025061815\\20250603110847_diff\\migration.sql",
                          "type": "file"
                        }
                      ]
                    },
                    {
                      "name": "20250605210444_userattrib",
                      "path": "src\\modules\\published\\2025061815\\20250605210444_userattrib",
                      "type": "directory",
                      "children": [
                        {
                          "name": "migration.sql",
                          "path": "src\\modules\\published\\2025061815\\20250605210444_userattrib\\migration.sql",
                          "type": "file"
                        }
                      ]
                    },
                    {
                      "name": "20250606114838_add_operation_center_r",
                      "path": "src\\modules\\published\\2025061815\\20250606114838_add_operation_center_r",
                      "type": "directory",
                      "children": [
                        {
                          "name": "migration.sql",
                          "path": "src\\modules\\published\\2025061815\\20250606114838_add_operation_center_r\\migration.sql",
                          "type": "file"
                        }
                      ]
                    },
                    {
                      "name": "20250606180317_add_operation_center_r_customerId",
                      "path": "src\\modules\\published\\2025061815\\20250606180317_add_operation_center_r_customerId",
                      "type": "directory",
                      "children": [
                        {
                          "name": "migration.sql",
                          "path": "src\\modules\\published\\2025061815\\20250606180317_add_operation_center_r_customerId\\migration.sql",
                          "type": "file"
                        }
                      ]
                    },
                    {
                      "name": "20250612183505_fix_all_model",
                      "path": "src\\modules\\published\\2025061815\\20250612183505_fix_all_model",
                      "type": "directory",
                      "children": [
                        {
                          "name": "migration.sql",
                          "path": "src\\modules\\published\\2025061815\\20250612183505_fix_all_model\\migration.sql",
                          "type": "file"
                        }
                      ]
                    },
                    {
                      "name": "20250613161515_add_operation_center_r_customer_type",
                      "path": "src\\modules\\published\\2025061815\\20250613161515_add_operation_center_r_customer_type",
                      "type": "directory",
                      "children": [
                        {
                          "name": "migration.sql",
                          "path": "src\\modules\\published\\2025061815\\20250613161515_add_operation_center_r_customer_type\\migration.sql",
                          "type": "file"
                        }
                      ]
                    },
                    {
                      "name": "20250618.sql",
                      "path": "src\\modules\\published\\2025061815\\20250618.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "2025062001",
                  "path": "src\\modules\\published\\2025062001",
                  "type": "directory",
                  "children": [
                    {
                      "name": "20250620115524_gx_transaction",
                      "path": "src\\modules\\published\\2025062001\\20250620115524_gx_transaction",
                      "type": "directory",
                      "children": [
                        {
                          "name": "migration.sql",
                          "path": "src\\modules\\published\\2025062001\\20250620115524_gx_transaction\\migration.sql",
                          "type": "file"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "2025070717",
                  "path": "src\\modules\\published\\2025070717",
                  "type": "directory",
                  "children": [
                    {
                      "name": "20250613141103_add_relation_cdkcode",
                      "path": "src\\modules\\published\\2025070717\\20250613141103_add_relation_cdkcode",
                      "type": "directory",
                      "children": [
                        {
                          "name": "migration.sql",
                          "path": "src\\modules\\published\\2025070717\\20250613141103_add_relation_cdkcode\\migration.sql",
                          "type": "file"
                        }
                      ]
                    },
                    {
                      "name": "20250722113407_guanxi_wager",
                      "path": "src\\modules\\published\\2025070717\\20250722113407_guanxi_wager",
                      "type": "directory",
                      "children": [
                        {
                          "name": "migration.sql",
                          "path": "src\\modules\\published\\2025070717\\20250722113407_guanxi_wager\\migration.sql",
                          "type": "file"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "2025082917",
                  "path": "src\\modules\\published\\2025082917",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\published\\2025082917\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "2025090814",
                  "path": "src\\modules\\published\\2025090814",
                  "type": "directory",
                  "children": [
                    {
                      "name": "20250829173149_wallet",
                      "path": "src\\modules\\published\\2025090814\\20250829173149_wallet",
                      "type": "directory",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "2025091615",
                  "path": "src\\modules\\published\\2025091615",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\published\\2025091615\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "20251010171400_guanxi_player_rank",
                  "path": "src\\modules\\published\\20251010171400_guanxi_player_rank",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\published\\20251010171400_guanxi_player_rank\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "2025101614",
                  "path": "src\\modules\\published\\2025101614",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\published\\2025101614\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "20251215174320_guanxi_account",
                  "path": "src\\modules\\published\\20251215174320_guanxi_account",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\published\\20251215174320_guanxi_account\\migration.sql",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "20260306141338_guanxi_real",
                  "path": "src\\modules\\published\\20260306141338_guanxi_real",
                  "type": "directory",
                  "children": [
                    {
                      "name": "migration.sql",
                      "path": "src\\modules\\published\\20260306141338_guanxi_real\\migration.sql",
                      "type": "file"
                    }
                  ]
                }
              ]
            },
            {
              "name": "schema.prisma",
              "path": "src\\modules\\schema.prisma",
              "type": "file"
            }
          ]
        },
        {
          "name": "repositories",
          "path": "src\\repositories",
          "type": "directory",
          "children": []
        },
        {
          "name": "routes",
          "path": "src\\routes",
          "type": "directory",
          "children": [
            {
              "name": "v1",
              "path": "src\\routes\\v1",
              "type": "directory",
              "children": [
                {
                  "name": "advertising.route.js",
                  "path": "src\\routes\\v1\\advertising.route.js",
                  "type": "file"
                },
                {
                  "name": "agent.route.js",
                  "path": "src\\routes\\v1\\agent.route.js",
                  "type": "file"
                },
                {
                  "name": "announcement.route.js",
                  "path": "src\\routes\\v1\\announcement.route.js",
                  "type": "file"
                },
                {
                  "name": "appbury.route.js",
                  "path": "src\\routes\\v1\\appbury.route.js",
                  "type": "file"
                },
                {
                  "name": "audienceBaseConfig.route.js",
                  "path": "src\\routes\\v1\\audienceBaseConfig.route.js",
                  "type": "file"
                },
                {
                  "name": "audienceClassification.route.js",
                  "path": "src\\routes\\v1\\audienceClassification.route.js",
                  "type": "file"
                },
                {
                  "name": "audienceGroup.route.js",
                  "path": "src\\routes\\v1\\audienceGroup.route.js",
                  "type": "file"
                },
                {
                  "name": "auth.route.js",
                  "path": "src\\routes\\v1\\auth.route.js",
                  "type": "file"
                },
                {
                  "name": "banner.js",
                  "path": "src\\routes\\v1\\banner.js",
                  "type": "file"
                },
                {
                  "name": "broadcast.route.js",
                  "path": "src\\routes\\v1\\broadcast.route.js",
                  "type": "file"
                },
                {
                  "name": "config.route.js",
                  "path": "src\\routes\\v1\\config.route.js",
                  "type": "file"
                },
                {
                  "name": "dailyCheckIn.route.js",
                  "path": "src\\routes\\v1\\dailyCheckIn.route.js",
                  "type": "file"
                },
                {
                  "name": "dbSnapshot.route.js",
                  "path": "src\\routes\\v1\\dbSnapshot.route.js",
                  "type": "file"
                },
                {
                  "name": "docs.route.js",
                  "path": "src\\routes\\v1\\docs.route.js",
                  "type": "file"
                },
                {
                  "name": "fruitMachineDraw.route.js",
                  "path": "src\\routes\\v1\\fruitMachineDraw.route.js",
                  "type": "file"
                },
                {
                  "name": "game",
                  "path": "src\\routes\\v1\\game",
                  "type": "directory",
                  "children": [
                    {
                      "name": "game.route.js",
                      "path": "src\\routes\\v1\\game\\game.route.js",
                      "type": "file"
                    },
                    {
                      "name": "provider",
                      "path": "src\\routes\\v1\\game\\provider",
                      "type": "directory",
                      "children": [
                        {
                          "name": "21Sports.route.js",
                          "path": "src\\routes\\v1\\game\\provider\\21Sports.route.js",
                          "type": "file"
                        },
                        {
                          "name": "evo.route.js",
                          "path": "src\\routes\\v1\\game\\provider\\evo.route.js",
                          "type": "file"
                        },
                        {
                          "name": "facai.route.js",
                          "path": "src\\routes\\v1\\game\\provider\\facai.route.js",
                          "type": "file"
                        },
                        {
                          "name": "index.js",
                          "path": "src\\routes\\v1\\game\\provider\\index.js",
                          "type": "file"
                        },
                        {
                          "name": "inout_evo.route.js",
                          "path": "src\\routes\\v1\\game\\provider\\inout_evo.route.js",
                          "type": "file"
                        },
                        {
                          "name": "inout_jdy.route.js",
                          "path": "src\\routes\\v1\\game\\provider\\inout_jdy.route.js",
                          "type": "file"
                        },
                        {
                          "name": "oneapi.route.js",
                          "path": "src\\routes\\v1\\game\\provider\\oneapi.route.js",
                          "type": "file"
                        },
                        {
                          "name": "oneapi_evo.route.js",
                          "path": "src\\routes\\v1\\game\\provider\\oneapi_evo.route.js",
                          "type": "file"
                        },
                        {
                          "name": "pt.route.js",
                          "path": "src\\routes\\v1\\game\\provider\\pt.route.js",
                          "type": "file"
                        },
                        {
                          "name": "sports.route.js",
                          "path": "src\\routes\\v1\\game\\provider\\sports.route.js",
                          "type": "file"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "giftCenter.route.js",
                  "path": "src\\routes\\v1\\giftCenter.route.js",
                  "type": "file"
                },
                {
                  "name": "giftcode.route.js",
                  "path": "src\\routes\\v1\\giftcode.route.js",
                  "type": "file"
                },
                {
                  "name": "googlepush.route.js",
                  "path": "src\\routes\\v1\\googlepush.route.js",
                  "type": "file"
                },
                {
                  "name": "guideCard.route.js",
                  "path": "src\\routes\\v1\\guideCard.route.js",
                  "type": "file"
                },
                {
                  "name": "inactiveUser.route.js",
                  "path": "src\\routes\\v1\\inactiveUser.route.js",
                  "type": "file"
                },
                {
                  "name": "index.js",
                  "path": "src\\routes\\v1\\index.js",
                  "type": "file"
                },
                {
                  "name": "kefu.route.js",
                  "path": "src\\routes\\v1\\kefu.route.js",
                  "type": "file"
                },
                {
                  "name": "lobby.route.js",
                  "path": "src\\routes\\v1\\lobby.route.js",
                  "type": "file"
                },
                {
                  "name": "mail.route.js",
                  "path": "src\\routes\\v1\\mail.route.js",
                  "type": "file"
                },
                {
                  "name": "online.route.js",
                  "path": "src\\routes\\v1\\online.route.js",
                  "type": "file"
                },
                {
                  "name": "pay.route.js",
                  "path": "src\\routes\\v1\\pay.route.js",
                  "type": "file"
                },
                {
                  "name": "playerInfo.route.js",
                  "path": "src\\routes\\v1\\playerInfo.route.js",
                  "type": "file"
                },
                {
                  "name": "playerRanking.route.js",
                  "path": "src\\routes\\v1\\playerRanking.route.js",
                  "type": "file"
                },
                {
                  "name": "rank.route.js",
                  "path": "src\\routes\\v1\\rank.route.js",
                  "type": "file"
                },
                {
                  "name": "rechargeOrder.route.js",
                  "path": "src\\routes\\v1\\rechargeOrder.route.js",
                  "type": "file"
                },
                {
                  "name": "redPoint.route.js",
                  "path": "src\\routes\\v1\\redPoint.route.js",
                  "type": "file"
                },
                {
                  "name": "redPointDebug.route.js",
                  "path": "src\\routes\\v1\\redPointDebug.route.js",
                  "type": "file"
                },
                {
                  "name": "share.route.js",
                  "path": "src\\routes\\v1\\share.route.js",
                  "type": "file"
                },
                {
                  "name": "slap.route.js",
                  "path": "src\\routes\\v1\\slap.route.js",
                  "type": "file"
                },
                {
                  "name": "sms.route.js",
                  "path": "src\\routes\\v1\\sms.route.js",
                  "type": "file"
                },
                {
                  "name": "subsistenceAllowance.route.js",
                  "path": "src\\routes\\v1\\subsistenceAllowance.route.js",
                  "type": "file"
                },
                {
                  "name": "test.route.js",
                  "path": "src\\routes\\v1\\test.route.js",
                  "type": "file"
                },
                {
                  "name": "ticket.route.js",
                  "path": "src\\routes\\v1\\ticket.route.js",
                  "type": "file"
                },
                {
                  "name": "turntable.route.js",
                  "path": "src\\routes\\v1\\turntable.route.js",
                  "type": "file"
                },
                {
                  "name": "userGroup.route.js",
                  "path": "src\\routes\\v1\\userGroup.route.js",
                  "type": "file"
                },
                {
                  "name": "userPrivacy.route.js",
                  "path": "src\\routes\\v1\\userPrivacy.route.js",
                  "type": "file"
                },
                {
                  "name": "version.route.js",
                  "path": "src\\routes\\v1\\version.route.js",
                  "type": "file"
                },
                {
                  "name": "vip.route.js",
                  "path": "src\\routes\\v1\\vip.route.js",
                  "type": "file"
                },
                {
                  "name": "wallet.route.js",
                  "path": "src\\routes\\v1\\wallet.route.js",
                  "type": "file"
                },
                {
                  "name": "withdrawOrder.route.js",
                  "path": "src\\routes\\v1\\withdrawOrder.route.js",
                  "type": "file"
                }
              ]
            }
          ]
        },
        {
          "name": "services",
          "path": "src\\services",
          "type": "directory",
          "children": [
            {
              "name": "advertisingReward.service.js",
              "path": "src\\services\\advertisingReward.service.js",
              "type": "file"
            },
            {
              "name": "agent",
              "path": "src\\services\\agent",
              "type": "directory",
              "children": [
                {
                  "name": "agent.service.js",
                  "path": "src\\services\\agent\\agent.service.js",
                  "type": "file"
                },
                {
                  "name": "config.js",
                  "path": "src\\services\\agent\\config.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "announcement.service.js",
              "path": "src\\services\\announcement.service.js",
              "type": "file"
            },
            {
              "name": "appbury.service.js",
              "path": "src\\services\\appbury.service.js",
              "type": "file"
            },
            {
              "name": "audienceBaseConfig.service.js",
              "path": "src\\services\\audienceBaseConfig.service.js",
              "type": "file"
            },
            {
              "name": "audienceClassification.service.js",
              "path": "src\\services\\audienceClassification.service.js",
              "type": "file"
            },
            {
              "name": "audienceGroup.service.js",
              "path": "src\\services\\audienceGroup.service.js",
              "type": "file"
            },
            {
              "name": "auth.service.js",
              "path": "src\\services\\auth.service.js",
              "type": "file"
            },
            {
              "name": "banner.service.js",
              "path": "src\\services\\banner.service.js",
              "type": "file"
            },
            {
              "name": "behaviorTracking",
              "path": "src\\services\\behaviorTracking",
              "type": "directory",
              "children": [
                {
                  "name": "adjust.service.js",
                  "path": "src\\services\\behaviorTracking\\adjust.service.js",
                  "type": "file"
                },
                {
                  "name": "appsFlyer.service.js",
                  "path": "src\\services\\behaviorTracking\\appsFlyer.service.js",
                  "type": "file"
                },
                {
                  "name": "esEvent.service.js",
                  "path": "src\\services\\behaviorTracking\\esEvent.service.js",
                  "type": "file"
                },
                {
                  "name": "facebookPixel.service.js",
                  "path": "src\\services\\behaviorTracking\\facebookPixel.service.js",
                  "type": "file"
                },
                {
                  "name": "tracking.service.js",
                  "path": "src\\services\\behaviorTracking\\tracking.service.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "broadcast.service.js",
              "path": "src\\services\\broadcast.service.js",
              "type": "file"
            },
            {
              "name": "config.service.js",
              "path": "src\\services\\config.service.js",
              "type": "file"
            },
            {
              "name": "crowd",
              "path": "src\\services\\crowd",
              "type": "directory",
              "children": [
                {
                  "name": "businessStrategy.js",
                  "path": "src\\services\\crowd\\businessStrategy.js",
                  "type": "file"
                },
                {
                  "name": "BusinessStrategyExecutor.js",
                  "path": "src\\services\\crowd\\BusinessStrategyExecutor.js",
                  "type": "file"
                },
                {
                  "name": "components",
                  "path": "src\\services\\crowd\\components",
                  "type": "directory",
                  "children": [
                    {
                      "name": "AudienceFilter.js",
                      "path": "src\\services\\crowd\\components\\AudienceFilter.js",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "CrowdRule.js",
                  "path": "src\\services\\crowd\\CrowdRule.js",
                  "type": "file"
                },
                {
                  "name": "group.js",
                  "path": "src\\services\\crowd\\group.js",
                  "type": "file"
                },
                {
                  "name": "index.js",
                  "path": "src\\services\\crowd\\index.js",
                  "type": "file"
                },
                {
                  "name": "RuleEngine.js",
                  "path": "src\\services\\crowd\\RuleEngine.js",
                  "type": "file"
                },
                {
                  "name": "userAttriPipeline.js",
                  "path": "src\\services\\crowd\\userAttriPipeline.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "dailyCheckIn.service.js",
              "path": "src\\services\\dailyCheckIn.service.js",
              "type": "file"
            },
            {
              "name": "dbSnapshot.service.js",
              "path": "src\\services\\dbSnapshot.service.js",
              "type": "file"
            },
            {
              "name": "fruitMachineDraw.service.js",
              "path": "src\\services\\fruitMachineDraw.service.js",
              "type": "file"
            },
            {
              "name": "game",
              "path": "src\\services\\game",
              "type": "directory",
              "children": [
                {
                  "name": "clientView.service.js",
                  "path": "src\\services\\game\\clientView.service.js",
                  "type": "file"
                },
                {
                  "name": "game.service.js",
                  "path": "src\\services\\game\\game.service.js",
                  "type": "file"
                },
                {
                  "name": "provider",
                  "path": "src\\services\\game\\provider",
                  "type": "directory",
                  "children": [
                    {
                      "name": "21Sports.service.js",
                      "path": "src\\services\\game\\provider\\21Sports.service.js",
                      "type": "file"
                    },
                    {
                      "name": "evo.service.js",
                      "path": "src\\services\\game\\provider\\evo.service.js",
                      "type": "file"
                    },
                    {
                      "name": "facai.service.js",
                      "path": "src\\services\\game\\provider\\facai.service.js",
                      "type": "file"
                    },
                    {
                      "name": "inout.service.js",
                      "path": "src\\services\\game\\provider\\inout.service.js",
                      "type": "file"
                    },
                    {
                      "name": "oneapi.service.js",
                      "path": "src\\services\\game\\provider\\oneapi.service.js",
                      "type": "file"
                    },
                    {
                      "name": "pt.service.js",
                      "path": "src\\services\\game\\provider\\pt.service.js",
                      "type": "file"
                    },
                    {
                      "name": "sports.service.js",
                      "path": "src\\services\\game\\provider\\sports.service.js",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "stat",
                  "path": "src\\services\\game\\stat",
                  "type": "directory",
                  "children": [
                    {
                      "name": "player.js",
                      "path": "src\\services\\game\\stat\\player.js",
                      "type": "file"
                    }
                  ]
                }
              ]
            },
            {
              "name": "giftCenter.service.js",
              "path": "src\\services\\giftCenter.service.js",
              "type": "file"
            },
            {
              "name": "giftcode.service.js",
              "path": "src\\services\\giftcode.service.js",
              "type": "file"
            },
            {
              "name": "guideCard.service.js",
              "path": "src\\services\\guideCard.service.js",
              "type": "file"
            },
            {
              "name": "inactiveUser.service.js",
              "path": "src\\services\\inactiveUser.service.js",
              "type": "file"
            },
            {
              "name": "index.js",
              "path": "src\\services\\index.js",
              "type": "file"
            },
            {
              "name": "jobs",
              "path": "src\\services\\jobs",
              "type": "directory",
              "children": [
                {
                  "name": "BaseJob.js",
                  "path": "src\\services\\jobs\\BaseJob.js",
                  "type": "file"
                },
                {
                  "name": "index.js",
                  "path": "src\\services\\jobs\\index.js",
                  "type": "file"
                },
                {
                  "name": "onlineUserWarn.job.js",
                  "path": "src\\services\\jobs\\onlineUserWarn.job.js",
                  "type": "file"
                },
                {
                  "name": "realTimeStat.job.js",
                  "path": "src\\services\\jobs\\realTimeStat.job.js",
                  "type": "file"
                },
                {
                  "name": "rechargeGiftMail.job.js",
                  "path": "src\\services\\jobs\\rechargeGiftMail.job.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "kefu.service.js",
              "path": "src\\services\\kefu.service.js",
              "type": "file"
            },
            {
              "name": "lobby.service.js",
              "path": "src\\services\\lobby.service.js",
              "type": "file"
            },
            {
              "name": "mail.service.js",
              "path": "src\\services\\mail.service.js",
              "type": "file"
            },
            {
              "name": "maintenance.service.js",
              "path": "src\\services\\maintenance.service.js",
              "type": "file"
            },
            {
              "name": "oneWayPush",
              "path": "src\\services\\oneWayPush",
              "type": "directory",
              "children": [
                {
                  "name": "cluster",
                  "path": "src\\services\\oneWayPush\\cluster",
                  "type": "directory",
                  "children": [
                    {
                      "name": "broker.js",
                      "path": "src\\services\\oneWayPush\\cluster\\broker.js",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "core",
                  "path": "src\\services\\oneWayPush\\core",
                  "type": "directory",
                  "children": [
                    {
                      "name": "config.js",
                      "path": "src\\services\\oneWayPush\\core\\config.js",
                      "type": "file"
                    },
                    {
                      "name": "envelope.js",
                      "path": "src\\services\\oneWayPush\\core\\envelope.js",
                      "type": "file"
                    },
                    {
                      "name": "events.js",
                      "path": "src\\services\\oneWayPush\\core\\events.js",
                      "type": "file"
                    },
                    {
                      "name": "safe-lock.js",
                      "path": "src\\services\\oneWayPush\\core\\safe-lock.js",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "dispatch",
                  "path": "src\\services\\oneWayPush\\dispatch",
                  "type": "directory",
                  "children": [
                    {
                      "name": "push-dispatcher.js",
                      "path": "src\\services\\oneWayPush\\dispatch\\push-dispatcher.js",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "hub",
                  "path": "src\\services\\oneWayPush\\hub",
                  "type": "directory",
                  "children": [
                    {
                      "name": "connection-hub.js",
                      "path": "src\\services\\oneWayPush\\hub\\connection-hub.js",
                      "type": "file"
                    },
                    {
                      "name": "message-router.js",
                      "path": "src\\services\\oneWayPush\\hub\\message-router.js",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "index.js",
                  "path": "src\\services\\oneWayPush\\index.js",
                  "type": "file"
                },
                {
                  "name": "presence",
                  "path": "src\\services\\oneWayPush\\presence",
                  "type": "directory",
                  "children": [
                    {
                      "name": "cleanup-job.js",
                      "path": "src\\services\\oneWayPush\\presence\\cleanup-job.js",
                      "type": "file"
                    },
                    {
                      "name": "presence.service.js",
                      "path": "src\\services\\oneWayPush\\presence\\presence.service.js",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "runtime",
                  "path": "src\\services\\oneWayPush\\runtime",
                  "type": "directory",
                  "children": [
                    {
                      "name": "heartbeat-monitor.js",
                      "path": "src\\services\\oneWayPush\\runtime\\heartbeat-monitor.js",
                      "type": "file"
                    },
                    {
                      "name": "safety.js",
                      "path": "src\\services\\oneWayPush\\runtime\\safety.js",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "transport",
                  "path": "src\\services\\oneWayPush\\transport",
                  "type": "directory",
                  "children": [
                    {
                      "name": "auth.service.js",
                      "path": "src\\services\\oneWayPush\\transport\\auth.service.js",
                      "type": "file"
                    },
                    {
                      "name": "ws-server.js",
                      "path": "src\\services\\oneWayPush\\transport\\ws-server.js",
                      "type": "file"
                    }
                  ]
                }
              ]
            },
            {
              "name": "oneWayPush.service.js",
              "path": "src\\services\\oneWayPush.service.js",
              "type": "file"
            },
            {
              "name": "online.service.js",
              "path": "src\\services\\online.service.js",
              "type": "file"
            },
            {
              "name": "pay",
              "path": "src\\services\\pay",
              "type": "directory",
              "children": [
                {
                  "name": "adapter",
                  "path": "src\\services\\pay\\adapter",
                  "type": "directory",
                  "children": [
                    {
                      "name": "Pay21Adapter.js",
                      "path": "src\\services\\pay\\adapter\\Pay21Adapter.js",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "config.js",
                  "path": "src\\services\\pay\\config.js",
                  "type": "file"
                },
                {
                  "name": "goods",
                  "path": "src\\services\\pay\\goods",
                  "type": "directory",
                  "children": [
                    {
                      "name": "cash.js",
                      "path": "src\\services\\pay\\goods\\cash.js",
                      "type": "file"
                    },
                    {
                      "name": "cycleCard.js",
                      "path": "src\\services\\pay\\goods\\cycleCard.js",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "PaymentAdapter.js",
                  "path": "src\\services\\pay\\PaymentAdapter.js",
                  "type": "file"
                },
                {
                  "name": "paymentAdapterManage.js",
                  "path": "src\\services\\pay\\paymentAdapterManage.js",
                  "type": "file"
                },
                {
                  "name": "rechargeGiftMail.service.js",
                  "path": "src\\services\\pay\\rechargeGiftMail.service.js",
                  "type": "file"
                },
                {
                  "name": "stat.js",
                  "path": "src\\services\\pay\\stat.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "pay.service.js",
              "path": "src\\services\\pay.service.js",
              "type": "file"
            },
            {
              "name": "playerInfo.service.js",
              "path": "src\\services\\playerInfo.service.js",
              "type": "file"
            },
            {
              "name": "playerRanking.service.js",
              "path": "src\\services\\playerRanking.service.js",
              "type": "file"
            },
            {
              "name": "providers",
              "path": "src\\services\\providers",
              "type": "directory",
              "children": [
                {
                  "name": "inout.provider.js",
                  "path": "src\\services\\providers\\inout.provider.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "push.service.js",
              "path": "src\\services\\push.service.js",
              "type": "file"
            },
            {
              "name": "rank.service.js",
              "path": "src\\services\\rank.service.js",
              "type": "file"
            },
            {
              "name": "rechargeOrder.service.js",
              "path": "src\\services\\rechargeOrder.service.js",
              "type": "file"
            },
            {
              "name": "redPoint.service.js",
              "path": "src\\services\\redPoint.service.js",
              "type": "file"
            },
            {
              "name": "redPointBusiness.service.js",
              "path": "src\\services\\redPointBusiness.service.js",
              "type": "file"
            },
            {
              "name": "share",
              "path": "src\\services\\share",
              "type": "directory",
              "children": [
                {
                  "name": "config.js",
                  "path": "src\\services\\share\\config.js",
                  "type": "file"
                },
                {
                  "name": "share.service.js",
                  "path": "src\\services\\share\\share.service.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "slap.service.js",
              "path": "src\\services\\slap.service.js",
              "type": "file"
            },
            {
              "name": "sms.service.js",
              "path": "src\\services\\sms.service.js",
              "type": "file"
            },
            {
              "name": "subsistenceAllowance.service.js",
              "path": "src\\services\\subsistenceAllowance.service.js",
              "type": "file"
            },
            {
              "name": "test.service.js",
              "path": "src\\services\\test.service.js",
              "type": "file"
            },
            {
              "name": "ticket",
              "path": "src\\services\\ticket",
              "type": "directory",
              "children": [
                {
                  "name": "index.js",
                  "path": "src\\services\\ticket\\index.js",
                  "type": "file"
                },
                {
                  "name": "ticketGrandScheduler.js",
                  "path": "src\\services\\ticket\\ticketGrandScheduler.js",
                  "type": "file"
                },
                {
                  "name": "ticketMajorScheduler.js",
                  "path": "src\\services\\ticket\\ticketMajorScheduler.js",
                  "type": "file"
                },
                {
                  "name": "ticketPoolScheduler.service.js",
                  "path": "src\\services\\ticket\\ticketPoolScheduler.service.js",
                  "type": "file"
                },
                {
                  "name": "ticketSecondaryScheduler.js",
                  "path": "src\\services\\ticket\\ticketSecondaryScheduler.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "ticket.service.js",
              "path": "src\\services\\ticket.service.js",
              "type": "file"
            },
            {
              "name": "timerTask.service.js",
              "path": "src\\services\\timerTask.service.js",
              "type": "file"
            },
            {
              "name": "token.service.js",
              "path": "src\\services\\token.service.js",
              "type": "file"
            },
            {
              "name": "transaction.service.js",
              "path": "src\\services\\transaction.service.js",
              "type": "file"
            },
            {
              "name": "turntable",
              "path": "src\\services\\turntable",
              "type": "directory",
              "children": [
                {
                  "name": "review.js",
                  "path": "src\\services\\turntable\\review.js",
                  "type": "file"
                },
                {
                  "name": "turntable.service.js",
                  "path": "src\\services\\turntable\\turntable.service.js",
                  "type": "file"
                },
                {
                  "name": "turntableConfig.js",
                  "path": "src\\services\\turntable\\turntableConfig.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "userChannel.service.js",
              "path": "src\\services\\userChannel.service.js",
              "type": "file"
            },
            {
              "name": "userGroup.service.js",
              "path": "src\\services\\userGroup.service.js",
              "type": "file"
            },
            {
              "name": "userPrivacy.service.js",
              "path": "src\\services\\userPrivacy.service.js",
              "type": "file"
            },
            {
              "name": "userSource.service.js",
              "path": "src\\services\\userSource.service.js",
              "type": "file"
            },
            {
              "name": "vip.service.js",
              "path": "src\\services\\vip.service.js",
              "type": "file"
            },
            {
              "name": "visualTemplate.service.js",
              "path": "src\\services\\visualTemplate.service.js",
              "type": "file"
            },
            {
              "name": "wallet.service.js",
              "path": "src\\services\\wallet.service.js",
              "type": "file"
            },
            {
              "name": "withdrawOrder.service.js",
              "path": "src\\services\\withdrawOrder.service.js",
              "type": "file"
            }
          ]
        },
        {
          "name": "tests",
          "path": "src\\tests",
          "type": "directory",
          "children": [
            {
              "name": "game.test.js",
              "path": "src\\tests\\game.test.js",
              "type": "file"
            },
            {
              "name": "gameRecord.test.js",
              "path": "src\\tests\\gameRecord.test.js",
              "type": "file"
            },
            {
              "name": "inactive-users-example.js",
              "path": "src\\tests\\inactive-users-example.js",
              "type": "file"
            },
            {
              "name": "inout.test.js",
              "path": "src\\tests\\inout.test.js",
              "type": "file"
            },
            {
              "name": "iopush.server.examples.js",
              "path": "src\\tests\\iopush.server.examples.js",
              "type": "file"
            },
            {
              "name": "iopush.service.enhanced.js",
              "path": "src\\tests\\iopush.service.enhanced.js",
              "type": "file"
            },
            {
              "name": "iopush.test.client.clean.js",
              "path": "src\\tests\\iopush.test.client.clean.js",
              "type": "file"
            },
            {
              "name": "pure.websocket.example.js",
              "path": "src\\tests\\pure.websocket.example.js",
              "type": "file"
            },
            {
              "name": "pushListener.js",
              "path": "src\\tests\\pushListener.js",
              "type": "file"
            },
            {
              "name": "pushTest.js",
              "path": "src\\tests\\pushTest.js",
              "type": "file"
            },
            {
              "name": "pushTestSimple.js",
              "path": "src\\tests\\pushTestSimple.js",
              "type": "file"
            },
            {
              "name": "scheduler.test.js",
              "path": "src\\tests\\scheduler.test.js",
              "type": "file"
            },
            {
              "name": "security",
              "path": "src\\tests\\security",
              "type": "directory",
              "children": [
                {
                  "name": "test-hmac-sha256.js",
                  "path": "src\\tests\\security\\test-hmac-sha256.js",
                  "type": "file"
                },
                {
                  "name": "test-md5.js",
                  "path": "src\\tests\\security\\test-md5.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "socket",
              "path": "src\\tests\\socket",
              "type": "directory",
              "children": [
                {
                  "name": "iopush.service.back.js",
                  "path": "src\\tests\\socket\\iopush.service.back.js",
                  "type": "file"
                },
                {
                  "name": "iopush.service.pure.websocket.js",
                  "path": "src\\tests\\socket\\iopush.service.pure.websocket.js",
                  "type": "file"
                },
                {
                  "name": "iopush.service.websocket.enhanced.js",
                  "path": "src\\tests\\socket\\iopush.service.websocket.enhanced.js",
                  "type": "file"
                },
                {
                  "name": "README.pure.websocket.md",
                  "path": "src\\tests\\socket\\README.pure.websocket.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "sync.js",
              "path": "src\\tests\\sync.js",
              "type": "file"
            },
            {
              "name": "test.js",
              "path": "src\\tests\\test.js",
              "type": "file"
            },
            {
              "name": "test2.js",
              "path": "src\\tests\\test2.js",
              "type": "file"
            },
            {
              "name": "test3.js",
              "path": "src\\tests\\test3.js",
              "type": "file"
            },
            {
              "name": "testCache.js",
              "path": "src\\tests\\testCache.js",
              "type": "file"
            },
            {
              "name": "tranasctionTest.js",
              "path": "src\\tests\\tranasctionTest.js",
              "type": "file"
            },
            {
              "name": "transactionTest.js",
              "path": "src\\tests\\transactionTest.js",
              "type": "file"
            },
            {
              "name": "transactionWagerTest.js",
              "path": "src\\tests\\transactionWagerTest.js",
              "type": "file"
            },
            {
              "name": "userProfile.test.js",
              "path": "src\\tests\\userProfile.test.js",
              "type": "file"
            },
            {
              "name": "userRankingTest.js",
              "path": "src\\tests\\userRankingTest.js",
              "type": "file"
            },
            {
              "name": "websocket.adapter.example.js",
              "path": "src\\tests\\websocket.adapter.example.js",
              "type": "file"
            },
            {
              "name": "websocket.test.client.js",
              "path": "src\\tests\\websocket.test.client.js",
              "type": "file"
            },
            {
              "name": "websocket.upgrade.guide.md",
              "path": "src\\tests\\websocket.upgrade.guide.md",
              "type": "file"
            }
          ]
        },
        {
          "name": "utils",
          "path": "src\\utils",
          "type": "directory",
          "children": [
            {
              "name": "ApiError.js",
              "path": "src\\utils\\ApiError.js",
              "type": "file"
            },
            {
              "name": "behavior.util.js",
              "path": "src\\utils\\behavior.util.js",
              "type": "file"
            },
            {
              "name": "bot",
              "path": "src\\utils\\bot",
              "type": "directory",
              "children": [
                {
                  "name": "lark.js",
                  "path": "src\\utils\\bot\\lark.js",
                  "type": "file"
                },
                {
                  "name": "message.js",
                  "path": "src\\utils\\bot\\message.js",
                  "type": "file"
                },
                {
                  "name": "tgbot.util.js",
                  "path": "src\\utils\\bot\\tgbot.util.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "cashPush.util.js",
              "path": "src\\utils\\cashPush.util.js",
              "type": "file"
            },
            {
              "name": "catchAsync.js",
              "path": "src\\utils\\catchAsync.js",
              "type": "file"
            },
            {
              "name": "commonUtil.js",
              "path": "src\\utils\\commonUtil.js",
              "type": "file"
            },
            {
              "name": "computing.util.js",
              "path": "src\\utils\\computing.util.js",
              "type": "file"
            },
            {
              "name": "decimal.js",
              "path": "src\\utils\\decimal.js",
              "type": "file"
            },
            {
              "name": "elk",
              "path": "src\\utils\\elk",
              "type": "directory",
              "children": [
                {
                  "name": "esUtil.js",
                  "path": "src\\utils\\elk\\esUtil.js",
                  "type": "file"
                },
                {
                  "name": "README.md",
                  "path": "src\\utils\\elk\\README.md",
                  "type": "file"
                }
              ]
            },
            {
              "name": "event.js",
              "path": "src\\utils\\event.js",
              "type": "file"
            },
            {
              "name": "functionSwitch.util.js",
              "path": "src\\utils\\functionSwitch.util.js",
              "type": "file"
            },
            {
              "name": "game.provider.utils.js",
              "path": "src\\utils\\game.provider.utils.js",
              "type": "file"
            },
            {
              "name": "gameBet.util.js",
              "path": "src\\utils\\gameBet.util.js",
              "type": "file"
            },
            {
              "name": "mail.util.js",
              "path": "src\\utils\\mail.util.js",
              "type": "file"
            },
            {
              "name": "memoryGuard.js",
              "path": "src\\utils\\memoryGuard.js",
              "type": "file"
            },
            {
              "name": "merchant.util.js",
              "path": "src\\utils\\merchant.util.js",
              "type": "file"
            },
            {
              "name": "mmdb.util.js",
              "path": "src\\utils\\mmdb.util.js",
              "type": "file"
            },
            {
              "name": "moment.util.js",
              "path": "src\\utils\\moment.util.js",
              "type": "file"
            },
            {
              "name": "monitor.js",
              "path": "src\\utils\\monitor.js",
              "type": "file"
            },
            {
              "name": "normal.util.js",
              "path": "src\\utils\\normal.util.js",
              "type": "file"
            },
            {
              "name": "os.util.js",
              "path": "src\\utils\\os.util.js",
              "type": "file"
            },
            {
              "name": "package.util.js",
              "path": "src\\utils\\package.util.js",
              "type": "file"
            },
            {
              "name": "paginate.js",
              "path": "src\\utils\\paginate.js",
              "type": "file"
            },
            {
              "name": "pick.js",
              "path": "src\\utils\\pick.js",
              "type": "file"
            },
            {
              "name": "recall.js",
              "path": "src\\utils\\recall.js",
              "type": "file"
            },
            {
              "name": "recharge.util.js",
              "path": "src\\utils\\recharge.util.js",
              "type": "file"
            },
            {
              "name": "redis.util.js",
              "path": "src\\utils\\redis.util.js",
              "type": "file"
            },
            {
              "name": "reloadConfigUtil.js",
              "path": "src\\utils\\reloadConfigUtil.js",
              "type": "file"
            },
            {
              "name": "response.js",
              "path": "src\\utils\\response.js",
              "type": "file"
            },
            {
              "name": "rwRule.util.js",
              "path": "src\\utils\\rwRule.util.js",
              "type": "file"
            },
            {
              "name": "serializer.js",
              "path": "src\\utils\\serializer.js",
              "type": "file"
            },
            {
              "name": "sign.util.js",
              "path": "src\\utils\\sign.util.js",
              "type": "file"
            },
            {
              "name": "sms",
              "path": "src\\utils\\sms",
              "type": "directory",
              "children": [
                {
                  "name": "itniotech.provider.js",
                  "path": "src\\utils\\sms\\itniotech.provider.js",
                  "type": "file"
                },
                {
                  "name": "sms.util.js",
                  "path": "src\\utils\\sms\\sms.util.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "sort.util.js",
              "path": "src\\utils\\sort.util.js",
              "type": "file"
            },
            {
              "name": "systemHealthMonitor.js",
              "path": "src\\utils\\systemHealthMonitor.js",
              "type": "file"
            },
            {
              "name": "ticket.util.js",
              "path": "src\\utils\\ticket.util.js",
              "type": "file"
            },
            {
              "name": "ticketTask.util.js",
              "path": "src\\utils\\ticketTask.util.js",
              "type": "file"
            },
            {
              "name": "TransactionError.js",
              "path": "src\\utils\\TransactionError.js",
              "type": "file"
            },
            {
              "name": "user.util.js",
              "path": "src\\utils\\user.util.js",
              "type": "file"
            },
            {
              "name": "userAttrib.util.js",
              "path": "src\\utils\\userAttrib.util.js",
              "type": "file"
            },
            {
              "name": "userProfile",
              "path": "src\\utils\\userProfile",
              "type": "directory",
              "children": [
                {
                  "name": "attribt.js",
                  "path": "src\\utils\\userProfile\\attribt.js",
                  "type": "file"
                },
                {
                  "name": "compute.js",
                  "path": "src\\utils\\userProfile\\compute.js",
                  "type": "file"
                },
                {
                  "name": "config.js",
                  "path": "src\\utils\\userProfile\\config.js",
                  "type": "file"
                },
                {
                  "name": "profile.util.js",
                  "path": "src\\utils\\userProfile\\profile.util.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "validate.js",
              "path": "src\\utils\\validate.js",
              "type": "file"
            },
            {
              "name": "web3.util.js",
              "path": "src\\utils\\web3.util.js",
              "type": "file"
            },
            {
              "name": "webhook.util.js",
              "path": "src\\utils\\webhook.util.js",
              "type": "file"
            },
            {
              "name": "wholeStat",
              "path": "src\\utils\\wholeStat",
              "type": "directory",
              "children": [
                {
                  "name": "behavior.stat.js",
                  "path": "src\\utils\\wholeStat\\behavior.stat.js",
                  "type": "file"
                },
                {
                  "name": "game.stat.js",
                  "path": "src\\utils\\wholeStat\\game.stat.js",
                  "type": "file"
                },
                {
                  "name": "subsistenceAllowance.stat.js",
                  "path": "src\\utils\\wholeStat\\subsistenceAllowance.stat.js",
                  "type": "file"
                },
                {
                  "name": "whole.stat.util.js",
                  "path": "src\\utils\\wholeStat\\whole.stat.util.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "withdraw.util.js",
              "path": "src\\utils\\withdraw.util.js",
              "type": "file"
            }
          ]
        },
        {
          "name": "validations",
          "path": "src\\validations",
          "type": "directory",
          "children": [
            {
              "name": "advertising.validation.js",
              "path": "src\\validations\\advertising.validation.js",
              "type": "file"
            },
            {
              "name": "agent.validation.js",
              "path": "src\\validations\\agent.validation.js",
              "type": "file"
            },
            {
              "name": "announcement.validation.js",
              "path": "src\\validations\\announcement.validation.js",
              "type": "file"
            },
            {
              "name": "audienceBaseConfig.validation.js",
              "path": "src\\validations\\audienceBaseConfig.validation.js",
              "type": "file"
            },
            {
              "name": "audienceClassification.validation.js",
              "path": "src\\validations\\audienceClassification.validation.js",
              "type": "file"
            },
            {
              "name": "audienceGroup.validation.js",
              "path": "src\\validations\\audienceGroup.validation.js",
              "type": "file"
            },
            {
              "name": "auth.validation.js",
              "path": "src\\validations\\auth.validation.js",
              "type": "file"
            },
            {
              "name": "banner.validation.js",
              "path": "src\\validations\\banner.validation.js",
              "type": "file"
            },
            {
              "name": "broadcast.validation.js",
              "path": "src\\validations\\broadcast.validation.js",
              "type": "file"
            },
            {
              "name": "common.validation.js",
              "path": "src\\validations\\common.validation.js",
              "type": "file"
            },
            {
              "name": "custom.validation.js",
              "path": "src\\validations\\custom.validation.js",
              "type": "file"
            },
            {
              "name": "dailyCheckIn.validation.js",
              "path": "src\\validations\\dailyCheckIn.validation.js",
              "type": "file"
            },
            {
              "name": "fruitMachineDraw.validation.js",
              "path": "src\\validations\\fruitMachineDraw.validation.js",
              "type": "file"
            },
            {
              "name": "gameProvider",
              "path": "src\\validations\\gameProvider",
              "type": "directory",
              "children": [
                {
                  "name": "21Sports.validation.js",
                  "path": "src\\validations\\gameProvider\\21Sports.validation.js",
                  "type": "file"
                },
                {
                  "name": "evo.validation.js",
                  "path": "src\\validations\\gameProvider\\evo.validation.js",
                  "type": "file"
                },
                {
                  "name": "facai.validation.js",
                  "path": "src\\validations\\gameProvider\\facai.validation.js",
                  "type": "file"
                },
                {
                  "name": "game.validation.js",
                  "path": "src\\validations\\gameProvider\\game.validation.js",
                  "type": "file"
                },
                {
                  "name": "inout.validation.js",
                  "path": "src\\validations\\gameProvider\\inout.validation.js",
                  "type": "file"
                },
                {
                  "name": "oneapi.validation.js",
                  "path": "src\\validations\\gameProvider\\oneapi.validation.js",
                  "type": "file"
                },
                {
                  "name": "pt.validation.js",
                  "path": "src\\validations\\gameProvider\\pt.validation.js",
                  "type": "file"
                },
                {
                  "name": "sports.validation.js",
                  "path": "src\\validations\\gameProvider\\sports.validation.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "giftcode.validation.js",
              "path": "src\\validations\\giftcode.validation.js",
              "type": "file"
            },
            {
              "name": "inactiveUser.validation.js",
              "path": "src\\validations\\inactiveUser.validation.js",
              "type": "file"
            },
            {
              "name": "index.js",
              "path": "src\\validations\\index.js",
              "type": "file"
            },
            {
              "name": "lobby.validation.js",
              "path": "src\\validations\\lobby.validation.js",
              "type": "file"
            },
            {
              "name": "mail.validation.js",
              "path": "src\\validations\\mail.validation.js",
              "type": "file"
            },
            {
              "name": "pay.validation.js",
              "path": "src\\validations\\pay.validation.js",
              "type": "file"
            },
            {
              "name": "playerInfo.validation.js",
              "path": "src\\validations\\playerInfo.validation.js",
              "type": "file"
            },
            {
              "name": "playerRanking.validation.js",
              "path": "src\\validations\\playerRanking.validation.js",
              "type": "file"
            },
            {
              "name": "push.validation.js",
              "path": "src\\validations\\push.validation.js",
              "type": "file"
            },
            {
              "name": "rank.validation.js",
              "path": "src\\validations\\rank.validation.js",
              "type": "file"
            },
            {
              "name": "rechargeOrder.validation.js",
              "path": "src\\validations\\rechargeOrder.validation.js",
              "type": "file"
            },
            {
              "name": "redPoint.validation.js",
              "path": "src\\validations\\redPoint.validation.js",
              "type": "file"
            },
            {
              "name": "security.validation.js",
              "path": "src\\validations\\security.validation.js",
              "type": "file"
            },
            {
              "name": "slap.validation.js",
              "path": "src\\validations\\slap.validation.js",
              "type": "file"
            },
            {
              "name": "sms.validation.js",
              "path": "src\\validations\\sms.validation.js",
              "type": "file"
            },
            {
              "name": "test.validation.js",
              "path": "src\\validations\\test.validation.js",
              "type": "file"
            },
            {
              "name": "ticket.validation.js",
              "path": "src\\validations\\ticket.validation.js",
              "type": "file"
            },
            {
              "name": "transaction.validation.js",
              "path": "src\\validations\\transaction.validation.js",
              "type": "file"
            },
            {
              "name": "turntable.validation.js",
              "path": "src\\validations\\turntable.validation.js",
              "type": "file"
            },
            {
              "name": "user.validation.js",
              "path": "src\\validations\\user.validation.js",
              "type": "file"
            },
            {
              "name": "userGroup.validation.js",
              "path": "src\\validations\\userGroup.validation.js",
              "type": "file"
            },
            {
              "name": "userPrivacy.validation.js",
              "path": "src\\validations\\userPrivacy.validation.js",
              "type": "file"
            },
            {
              "name": "vip.validation.js",
              "path": "src\\validations\\vip.validation.js",
              "type": "file"
            },
            {
              "name": "wallet.validation.js",
              "path": "src\\validations\\wallet.validation.js",
              "type": "file"
            },
            {
              "name": "withdrawOrder.validation.js",
              "path": "src\\validations\\withdrawOrder.validation.js",
              "type": "file"
            }
          ]
        }
      ]
    },
    {
      "name": "start-server.js",
      "path": "start-server.js",
      "type": "file"
    },
    {
      "name": "sync.sh",
      "path": "sync.sh",
      "type": "file"
    },
    {
      "name": "tests",
      "path": "tests",
      "type": "directory",
      "children": [
        {
          "name": "fixtures",
          "path": "tests\\fixtures",
          "type": "directory",
          "children": [
            {
              "name": "token.fixture.js",
              "path": "tests\\fixtures\\token.fixture.js",
              "type": "file"
            },
            {
              "name": "user.fixture.js",
              "path": "tests\\fixtures\\user.fixture.js",
              "type": "file"
            }
          ]
        },
        {
          "name": "game",
          "path": "tests\\game",
          "type": "directory",
          "children": [
            {
              "name": "gameBettinTest.js",
              "path": "tests\\game\\gameBettinTest.js",
              "type": "file"
            }
          ]
        },
        {
          "name": "integration",
          "path": "tests\\integration",
          "type": "directory",
          "children": [
            {
              "name": "auth.test.js",
              "path": "tests\\integration\\auth.test.js",
              "type": "file"
            },
            {
              "name": "docs.test.js",
              "path": "tests\\integration\\docs.test.js",
              "type": "file"
            },
            {
              "name": "user.test.js",
              "path": "tests\\integration\\user.test.js",
              "type": "file"
            }
          ]
        },
        {
          "name": "sql",
          "path": "tests\\sql",
          "type": "directory",
          "children": [
            {
              "name": "insert_rules.sql",
              "path": "tests\\sql\\insert_rules.sql",
              "type": "file"
            }
          ]
        },
        {
          "name": "unit",
          "path": "tests\\unit",
          "type": "directory",
          "children": [
            {
              "name": "middlewares",
              "path": "tests\\unit\\middlewares",
              "type": "directory",
              "children": [
                {
                  "name": "error.test.js",
                  "path": "tests\\unit\\middlewares\\error.test.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "models",
              "path": "tests\\unit\\models",
              "type": "directory",
              "children": [
                {
                  "name": "plugins",
                  "path": "tests\\unit\\models\\plugins",
                  "type": "directory",
                  "children": [
                    {
                      "name": "paginate.plugin.test.js",
                      "path": "tests\\unit\\models\\plugins\\paginate.plugin.test.js",
                      "type": "file"
                    },
                    {
                      "name": "toJSON.plugin.test.js",
                      "path": "tests\\unit\\models\\plugins\\toJSON.plugin.test.js",
                      "type": "file"
                    }
                  ]
                },
                {
                  "name": "user.model.test.js",
                  "path": "tests\\unit\\models\\user.model.test.js",
                  "type": "file"
                }
              ]
            },
            {
              "name": "utils",
              "path": "tests\\unit\\utils",
              "type": "directory",
              "children": [
                {
                  "name": "systemHealthMonitor.test.js",
                  "path": "tests\\unit\\utils\\systemHealthMonitor.test.js",
                  "type": "file"
                }
              ]
            }
          ]
        },
        {
          "name": "utils",
          "path": "tests\\utils",
          "type": "directory",
          "children": [
            {
              "name": "setupTestDB.js",
              "path": "tests\\utils\\setupTestDB.js",
              "type": "file"
            }
          ]
        }
      ]
    },
    {
      "name": "tools",
      "path": "tools",
      "type": "directory",
      "children": [
        {
          "name": "create-template.js",
          "path": "tools\\create-template.js",
          "type": "file"
        },
        {
          "name": "prisma",
          "path": "tools\\prisma",
          "type": "directory",
          "children": [
            {
              "name": "example.js",
              "path": "tools\\prisma\\example.js",
              "type": "file"
            },
            {
              "name": "execute-sql.js",
              "path": "tools\\prisma\\execute-sql.js",
              "type": "file"
            },
            {
              "name": "migrate.js",
              "path": "tools\\prisma\\migrate.js",
              "type": "file"
            },
            {
              "name": "README.md",
              "path": "tools\\prisma\\README.md",
              "type": "file"
            }
          ]
        },
        {
          "name": "template",
          "path": "tools\\template",
          "type": "directory",
          "children": [
            {
              "name": "template.controller.js",
              "path": "tools\\template\\template.controller.js",
              "type": "file"
            },
            {
              "name": "template.model.js",
              "path": "tools\\template\\template.model.js",
              "type": "file"
            },
            {
              "name": "template.route.js",
              "path": "tools\\template\\template.route.js",
              "type": "file"
            },
            {
              "name": "template.service.js",
              "path": "tools\\template\\template.service.js",
              "type": "file"
            },
            {
              "name": "template.validation.js",
              "path": "tools\\template\\template.validation.js",
              "type": "file"
            }
          ]
        }
      ]
    },
    {
      "name": "yalc.lock",
      "path": "yalc.lock",
      "type": "file"
    },
    {
      "name": "yarn.lock",
      "path": "yarn.lock",
      "type": "file"
    }
  ],
  "message": "ok"
}
```

</details>

---

### ✅ 63. recursive=false 时目录节点 children 应为空数组

**操作**: `RunFileList / 非递归目录结构`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": ".",
  "recursive": false
}
```

**响应状态**: 200

**响应体**: <details><summary>展开</summary>

```json
{
  "code": 0,
  "data": [
    {
      "name": ".cursor",
      "path": ".cursor",
      "type": "directory",
      "children": []
    },
    {
      "name": ".cursorindexingignore",
      "path": ".cursorindexingignore",
      "type": "file"
    },
    {
      "name": ".dockerignore",
      "path": ".dockerignore",
      "type": "file"
    },
    {
      "name": ".editorconfig",
      "path": ".editorconfig",
      "type": "file"
    },
    {
      "name": ".env.development",
      "path": ".env.development",
      "type": "file"
    },
    {
      "name": ".env.production",
      "path": ".env.production",
      "type": "file"
    },
    {
      "name": ".env.test",
      "path": ".env.test",
      "type": "file"
    },
    {
      "name": ".eslintignore",
      "path": ".eslintignore",
      "type": "file"
    },
    {
      "name": ".eslintrc.js",
      "path": ".eslintrc.js",
      "type": "file"
    },
    {
      "name": ".gitattributes",
      "path": ".gitattributes",
      "type": "file"
    },
    {
      "name": ".gitignore",
      "path": ".gitignore",
      "type": "file"
    },
    {
      "name": ".husky",
      "path": ".husky",
      "type": "directory",
      "children": []
    },
    {
      "name": ".lintstagedrc.json",
      "path": ".lintstagedrc.json",
      "type": "file"
    },
    {
      "name": ".prettierignore",
      "path": ".prettierignore",
      "type": "file"
    },
    {
      "name": ".prettierrc.json",
      "path": ".prettierrc.json",
      "type": "file"
    },
    {
      "name": ".specstory",
      "path": ".specstory",
      "type": "directory",
      "children": []
    },
    {
      "name": ".travis.yml",
      "path": ".travis.yml",
      "type": "file"
    },
    {
      "name": ".vscode",
      "path": ".vscode",
      "type": "directory",
      "children": []
    },
    {
      "name": ".yalc",
      "path": ".yalc",
      "type": "directory",
      "children": []
    },
    {
      "name": "babel.config.js",
      "path": "babel.config.js",
      "type": "file"
    },
    {
      "name": "coverage",
      "path": "coverage",
      "type": "directory",
      "children": []
    },
    {
      "name": "docker-compose.dev.yml",
      "path": "docker-compose.dev.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.prod.yml",
      "path": "docker-compose.prod.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.test.yml",
      "path": "docker-compose.test.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.yml",
      "path": "docker-compose.yml",
      "type": "file"
    },
    {
      "name": "Dockerfile",
      "path": "Dockerfile",
      "type": "file"
    },
    {
      "name": "docs",
      "path": "docs",
      "type": "directory",
      "children": []
    },
    {
      "name": "ecosystem.config.json",
      "path": "ecosystem.config.json",
      "type": "file"
    },
    {
      "name": "ecosystem.test.json",
      "path": "ecosystem.test.json",
      "type": "file"
    },
    {
      "name": "examples",
      "path": "examples",
      "type": "directory",
      "children": []
    },
    {
      "name": "gameland.code-workspace",
      "path": "gameland.code-workspace",
      "type": "file"
    },
    {
      "name": "jest.config.js",
      "path": "jest.config.js",
      "type": "file"
    },
    {
      "name": "jsconfig.json",
      "path": "jsconfig.json",
      "type": "file"
    },
    {
      "name": "LICENSE",
      "path": "LICENSE",
      "type": "file"
    },
    {
      "name": "mysql-config",
      "path": "mysql-config",
      "type": "directory",
      "children": []
    },
    {
      "name": "mysql-init",
      "path": "mysql-init",
      "type": "directory",
      "children": []
    },
    {
      "name": "package-lock.json",
      "path": "package-lock.json",
      "type": "file"
    },
    {
      "name": "package.json",
      "path": "package.json",
      "type": "file"
    },
    {
      "name": "proxy.ps1",
      "path": "proxy.ps1",
      "type": "file"
    },
    {
      "name": "README.md",
      "path": "README.md",
      "type": "file"
    },
    {
      "name": "src",
      "path": "src",
      "type": "directory",
      "children": []
    },
    {
      "name": "start-server.js",
      "path": "start-server.js",
      "type": "file"
    },
    {
      "name": "sync.sh",
      "path": "sync.sh",
      "type": "file"
    },
    {
      "name": "tests",
      "path": "tests",
      "type": "directory",
      "children": []
    },
    {
      "name": "tools",
      "path": "tools",
      "type": "directory",
      "children": []
    },
    {
      "name": "yalc.lock",
      "path": "yalc.lock",
      "type": "file"
    },
    {
      "name": "yarn.lock",
      "path": "yarn.lock",
      "type": "file"
    }
  ],
  "message": "ok"
}
```

</details>

---

### ✅ 64. 缺少 path 参数时应返回 400

**操作**: `RunFileList / 缺少 path`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: skip

**请求体**:
```json
{}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 65. path 类型不是 string 时应返回 400

**操作**: `RunFileList / path 类型错误`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": 123
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 66. 路径穿越攻击（../..）应返回 403 或 400

**操作**: `RunFileList / 路径穿越攻击`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": "../../../etc/passwd"
}
```

**响应状态**: 403

**响应体**:
```json
{
  "code": 403,
  "message": "Permission denied"
}
```

**备注**: 安全防护：不允许访问根目录以外的路径

---

### ✅ 67. 不存在的路径应返回 400

**操作**: `RunFileList / 不存在路径`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": "non-existent-dir-xyz-123456"
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 68. 下载有效文件时应返回二进制流与正确响应头

**操作**: `RunFileContent / 下载 package.json`

**请求头**:
- `x-operation`: Y3SrZjVqWOvKsBdpTCh7
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": "package.json"
}
```

**响应状态**: 200

**响应体**:
```json
{
  "contentType": "application/octet-stream",
  "contentDisposition": "attachment; filename=\"package.json\"",
  "fileSize": 4818,
  "savePath": "E:\\project\\risk\\json-bigint-extend\\test\\downloads\\pkg-1779796920838.json"
}
```

---

### ✅ 69. 文件不存在时应返回 404

**操作**: `RunFileContent / 文件不存在`

**请求头**:
- `x-operation`: Y3SrZjVqWOvKsBdpTCh7
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": "non-existent-file-xyz.txt"
}
```

**响应状态**: 404

**响应体**:
```json
{
  "message": "File not found"
}
```

---

### ✅ 70. 路径穿越攻击应返回 404 或 403

**操作**: `RunFileContent / 路径穿越攻击`

**请求头**:
- `x-operation`: Y3SrZjVqWOvKsBdpTCh7
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": "../../../../etc/passwd"
}
```

**响应状态**: 404

**备注**: 安全防护

---

### ✅ 71. 压缩有效目录并下载 ZIP

**操作**: `CompressDownload / src`

**请求头**:
- `x-operation`: SJQf31UJkZ1f88q9m361
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": "src"
}
```

**响应状态**: 200

**响应体**:
```json
{
  "contentType": "application/zip",
  "fileSize": 1073007,
  "savePath": "E:\\project\\risk\\json-bigint-extend\\test\\downloads\\compress-1779796921377.zip"
}
```

---

### ✅ 72. 缺少 path 参数时应返回 400

**操作**: `CompressDownload / 缺少 path`

**请求头**:
- `x-operation`: SJQf31UJkZ1f88q9m361
- `x-timestamp`: skip

**请求体**:
```json
{}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 73. 转发事件应返回 200 并回显 body 数据

**操作**: `ForwardEvent / 正常转发`

**请求头**:
- `x-operation`: LvMWnF1ezaBlRjNAgtym
- `x-timestamp`: skip

**请求体**:
```json
{
  "targetId": "user-888",
  "action": "refresh",
  "extra": {
    "ts": 1779796921383
  }
}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "targetId": "user-888",
    "action": "refresh",
    "extra": {
      "ts": 1779796921383
    }
  }
}
```

---

### ✅ 74. 空 body 也应成功转发

**操作**: `ForwardEvent / 空 body`

**请求头**:
- `x-operation`: LvMWnF1ezaBlRjNAgtym
- `x-timestamp`: skip

**请求体**:
```json
{}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "message": "ok",
  "data": {}
}
```

---

### ✅ 75. 获取 Apollo application 配置应返回对象

**操作**: `GetApolloConfig`

**请求头**:
- `x-operation`: Xp7KnRqT2wJcVeA9mBsL
- `x-timestamp`: skip

**请求体**:
```json
{}
```

**响应状态**: 200

**响应体**: <details><summary>展开</summary>

```json
{
  "code": 0,
  "data": {
    "defaultTGConfig": {
      "token": "7898332048:AAF8q3EDanVoEi4ncIkQ8HCf4Sz7t5BipXE",
      "chatId": "-4978136941"
    },
    "function_switch_map": {
      "attrib_pipeline": true,
      "crowd_all": true,
      "business_strategy_all": true,
      "ticket_system_pool_scheduler": false,
      "kefu": true,
      "gamelandHost": "https://gameland.myapptest.top",
      "cryptoWallet": true,
      "cryptoPay": {
        "enable": true,
        "defaultChannelList": [],
        "rechargeReward": {
          "enable": true,
          "amount": 100,
          "waterMultiples": 9
        },
        "withdrawReward": {
          "enable": true,
          "amount": 777,
          "waterMultiples": 9
        }
      },
      "cdk": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "rank": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "vip": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "banner": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "promo": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "announcement": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "fruitMachine": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "turntable": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "bindMobileNum": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "agent": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "updatePassword": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "lobbyGameView": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "gameGateway_PT": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "gameGateway_WC_EVO": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "gameGateway_ONEAPI": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "jackpotConfig": {
        "enable": true
      },
      "payRecharge": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "payWithdraw": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "gameGateway_ONEAPI_EVO": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "userProfile": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "gamePlaySub": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "cashPush": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "mail": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "login": {
        "enable": false,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "redPoint": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "refreshToken": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "changePlayerInfo": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "cdn": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": [
          2
        ]
      },
      "lobby": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "realTimeStatjob": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "aiCustomerService": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": [
          5,
          1,
          2,
          3,
          4
        ],
        "url": "https://21gamechat.21game.xyz/chat"
      },
      "giftCenter": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": []
      },
      "withdrawalTips": {
        "enable": false,
        "route": "gameland",
        "startTime": "10:50",
        "endTime": "11:30"
      },
      "sms": {
        "enable": true,
        "route": "gameland",
        "grayUserSuffix": [
          1,
          2,
          3,
          4,
          5
        ]
      }
    },
    "gamelandJwt": {
      "secret": "ClsVc5Qw961DbKg0",
      "accessExpirationMinutes": 10080,
      "refreshExpirationDays": 30,
      "thresholdMinutes": 1440
    },
    "gamepay": "v2",
    "restrictedAreas": [
      "Jammu",
      "Kathua",
      "Udhampur",
      "Samba",
      "Reasi",
      "Doda",
      "Kishtwar",
      "Ramban",
      "Rajouri",
      "Poonch",
      "Srinagar",
      "Baramulla",
      "Anantnag",
      "Pulwama",
      "Kupwara",
      "Shopian",
      "Bandipora",
      "Kulgam",
      "Ganderbal",
      "Budgam",
      "Gulmarg",
      "Pahalgam",
      "Sopore",
      "Handwara",
      "Bijbehara",
      "Beerwah",
      "Chadura",
      "Charar-i-Sharief",
      "Katra",
      "Magam",
      "Mattan",
      "Nagrota",
      "Uri",
      "Batote",
      "Bhaderwah",
      "Bishnah",
      "Bari Brahmana",
      "Bhalwal",
      "Marh",
      "Jourian",
      "Khour",
      "Nowshehra",
      "Surankote",
      "Sumbal",
      "Hajan",
      "Kunzer",
      "Vijaypur",
      "Tral",
      "Pattan",
      "Seer Hamdan",
      "Shangus",
      "Qazi Gund",
      "Duru Verinag",
      "Koker Nag",
      "Chandina",
      "Khan Sahib",
      "Tangdhar",
      "Uri",
      "Sumbal"
    ],
    "dd": "v2133",
    "tempPath": [
      "landing1",
      "landing2",
      "landing3",
      "landing4",
      "temp1",
      "temp2",
      "temp3",
      "temp4",
      "temp5",
      "temp6",
      "temp7",
      "temp8",
      "temp9",
      "temp10",
      "temp11",
      "temp12",
      "temp13",
      "temp14",
      "temp15",
      "temp16"
    ],
    "dnsRecord": [
      {
        "type": "A",
        "name": "www",
        "content": "13.234.156.191",
        "ttl": 3600,
        "proxied": true
      },
      {
        "type": "A",
        "name": "www",
        "content": "35.154.111.135",
        "ttl": 3600,
        "proxied": true
      },
      {
        "type": "A",
        "name": "@",
        "content": "13.234.156.191",
        "ttl": 3600,
        "proxied": true
      },
      {
        "type": "A",
        "name": "@",
        "content": "35.154.111.135",
        "ttl": 3600,
        "proxied": true
      }
    ],
    "webhooks": [
      "http://13.202.232.159:8080/generic-webhook-trigger/invoke?token=gameland-webhook-token"
    ],
    "gameServerConfig": {
      "excludedChannel": {
        "status": false,
        "mids": [
          "paypay-8E9A462BA1CC",
          "paypay-E98FD68E34DB",
          "topay-60053",
          "foxpay-7808B",
          "ninespay-E6047A24F0B1",
          "ninespay-971CBA3D98DA",
          "ninespay-46FE7436B5ED",
          "paypay-0DCE0583E70A483FBF5E3CED4AAE52D3",
          "foxpay-CB3C4",
          "ninespay-46FE7436B5ED"
        ]
      },
      "useInactiveUserInfo": false,
      "homePopup": {
        "max": 3,
        "data": [
          {
            "name": "email",
            "show": true,
            "children": [
              {
                "name": "personal",
                "show": true
              },
              {
                "name": "platform",
                "show": true
              },
              {
                "name": "rank",
                "show": true
              }
            ]
          }
        ]
      }
    },
    "gameProviderConfig": {
      "INOUT_EVO": {
        "baseUrl": "https://api.inout.games/api/launch",
        "operatorId": "5a2b1155-5591-4d6e-a5a7-a0cca53aad04",
        "authTokenKey": "3ee037da88057c479f2e3dc84dcf0c566020c66ef4a30a2107f8bce0627c5983",
        "secretKey": "4FBC085A5C34CB43AB8936F73B1B80940F3A9C1CCC656107BC2B146964FCC81CA97C844CF02D2EAB28E0734E66819B70167DA3C3291C86EE4FDA4D25290A02A7",
        "currency": "INR"
      },
      "FACAI": {
        "baseUrl": "https://gamecenter.pg2testing.com/",
        "AppID": "myapptest_inr",
        "AppSecret": "e1ca77fc-8e0f-4ebd-9cfd-866a1821ac1f",
        "currency": "INR"
      },
      "INOUT_JDY": {
        "baseUrl": "https://api.inout.games/api/launch",
        "operatorId": "e321b13a-d329-42c9-912d-b7a1de583f39",
        "authTokenKey": "3ee037da88057c479f2e3dc84dcf0c566020c66ef4a30a2107f8bce0627c6666",
        "secretKey": "A3DF0344874917578253A10BB16892F64EF8EF034C1E61D972A3DEA6C06060F2ECAE771C9F512483CAE479DD1EABC55923D33051022B8B015DBAA63B4F56C91F",
        "currency": "INR"
      },
      "PT": {
        "baseUrl": "https://api-uat.agmidway.net",
        "currency": "CNY",
        "apikey": "2b6ad641ff137fbd64ebbe474ba16d55216072e5fb569b921f7512b51d15b567",
        "serverName": "AGCASTG",
        "Kiosk_Prefix": "AIJ0",
        "countryCode": "CN",
        "authTokenKey": "pcNHwLrxZonk0Wyl",
        "callbackUrl": "https://player.newtest.myapptest.top/wallet/PT"
      },
      "WC_EVO": {
        "baseUrl": "https://uat.ps9games.com",
        "currency": "INR",
        "domainUrl": "https://player.newtest.myapptest.top/wallet/EVO",
        "agCode": "ZNTJI00",
        "secret": "8UJKwje6f0uZ5xaaAJIgToSFVPJDbbPw",
        "token": "Uc8PY4EyKQj5NrtONr5IZuxkxpLY8q14"
      },
      "ONEAPI": {
        "baseUrl": "https://stg.gasea168.com",
        "key": "7f0979b727cf327ed135531a1b78587713563dfaa8e3dc74102206eaa0ff987d",
        "secret": "032bc59114fa908063ff06c262c8021f4aeec1fc0352fd3c2516febe51745c26",
        "lobbyUrl": "https://player.newtest.myapptest.top/wallet/ONEAPI",
        "currency": "INR"
      },
      "ONEAPI_EVO": {
        "baseUrl": "https://stg.gasea168.com",
        "key": "02b75d6d6a4755c68a9ec3b9a104f8c5b4db6176c7ed37be16f72fb240da43f0",
        "secret": "0644a4f14caf36a8a45567e11b7e33e44a95c74888cbf625a69757e7e26a9dee",
        "lobbyUrl": "https://player.newtest.myapptest.top/oneapi",
        "currency": "INR"
      },
      "ONEAPI_SPORTS": {
        "baseUrl": "https://stg.gasea168.com",
        "key": "53344c62862c32f399d55dc946517d64b355553d8360c394206ec6c1cd991096",
        "secret": "74af26ad4c8d96724d2f93854b7b9c6ab05566347cd69ea8b4407ba8b856083e",
        "lobbyUrl": "https://player.newtest.myapptest.top/wallet/ONEAPI",
        "currency": "INR",
        "specificGameId": "SABA_1"
      },
      "LIVE_EVO": {
        "baseUrl": "https://skylinev88asia.uat1.evo-test.com",
        "casinoKey": "subasia21game001",
        "apiToken": "h7IXgXsHHeCZZ6xZgPTi2Q",
        "uaToken": "test123",
        "lobbyUrl": "https://player.newtest.myapptest.top/oneapi",
        "currency": "EUR",
        "defaultPromoGameId": "evo_live_promo_payout_default"
      },
      "21_SPORTS": {
        "baseUrl": "https://21sports-open-test.21game.xyz",
        "frontendUrl": "https://21sport-test.21game.xyz",
        "secret": "c2FsdC1sYXN0LWZvci1wYXNzd29yZC1hbG9uZy13aXRoLXNvbWUtcmFuZG9tLWJ5dGVzLXRvLW1lZXQtdGhlLW1pbmltdW0tcmVxdWlyZW1lbnRz",
        "lobbyUrl": "https://player.newtest.myapptest.top/wallet/ONEAPI",
        "currency": "INR",
        "specificGameId": "SABA_1"
      }
    },
    "demoGameInfo": {
      "gameId": 37235,
      "currency": "INR",
      "language": "en"
    },
    "gameWagerConfig": {
      "coding": {
        "SPB_aviator": {
          "enable": true,
          "type": "cash"
        },
        "SPB_mines": {
          "enable": true,
          "type": "cash"
        },
        "MG_SMG_championsOfOlympus": {
          "enable": true,
          "type": "finish"
        },
        "MG_SMG_auroraWilds": {
          "enable": true,
          "type": "finish"
        }
      }
    },
    "userRechargeAmount": {
      "totalRechargeAmount": 5000,
      "rechargeAmount": 3000,
      "rCustomerId": 1
    },
    "cmsServerUrl": {
      "dev": "https://gameland-cms.myapptest.top/",
      "test": "https://gameland-cms.myapptest.top/",
      "production": "https://cmsnew.21game.live/",
      "url": "https://gameland-cms.myapptest.top"
    },
    "apollo": {
      "appId": 200000,
      "token": "6c731a609a6a443b2547b339500c1395d6e33e344c34f56cb77cb7c9ecb0332f",
      "portalUrl": "http://43.198.128.30:8070"
    },
    "registerLimit": {
      "todayRegisterIpCount": -1,
      "emulatorLimit": false,
      "ipWhitelist": [
        "::ffff:127.0.0.1",
        "101.32.44.13",
        "116.30.103.19"
      ]
    },
    "firebaseConfig": {
      "projectId": "game-cd307",
      "privateKeyId": "59331748a6710db4c8723774cef0c1ae72e2e6f1",
      "privateKey": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCdhXA/REFc5pKU\ncdZJPXgq6T9aPmTlcoxk1JUM05la6M8xVo7DaeGYZfVn2xVQruLte5/3Cys8xsGX\nIHiw2EtPYIcaQ0NPBG6K19UnBOXTuhXwfiEx2xHsbiwYkRksKs+3mOpLp/SM9dO/\nlfJqTcXLRwCGDXhfRVfUryTxl44Zb88rkoJlJk9X6krZJESw9MssDcCqGQUa4ArL\nOtLSB5OEOqU49YG1Fh8YjKEAzfWAK1FVk6TYOnnGspoXX24FUy3X9baQcKOj3VFV\naxfXSXRiMBS5OJ75AYvWTiMLHRJ6qsjD7m6rlyYiCiNU/xCTRet1wiEI7w+jYumb\nCjF/qPGXAgMBAAECggEAAf5GX9gsw/cU9sG3No3YRe68Qv36h97A53IhmrWljj1w\n71mX8xTiNzjFd+iq5q6RdFp10tbDPgC9dWMCgMMtgy+GnIhdj/pPepYYyxm1EM6D\nglun1Ub448pQtSGs6F6rhAUjpEAK7t4Z4L90f4mrAMbN7mRTcbbIBQrcVFEYvSCk\neJ+00psdQsuoHE4BtcXOK0ihcRzgi72L+y+2EtZsDfzpm/rFObNYfz9q19H4x79O\nAMYOW34vjSw7V/LW62uT0s+ee+6NdaCgkCrtw42n+fbW9U3sSNZf9EIw/75nt+Fg\nTyIsquZR5YY1MUZz96HGyBp8LZ2McfmcvvJZYgGUMQKBgQDbaopAmHIKsDP22T19\n8b9IKglNJb9zmQYjeiQ93/0p8BHlX71FOjH7eqCkM4as3m32mbrqx2zhro0b3gRa\nus7AgN1aZbsiR3nfdPiYxEYS2Oj5xjSb1ik3NjORoK+JG7gXDqA4BcbCHpivGmv9\neqFsIWouehpjULjazYcD0kAjEQKBgQC3yQDlT6QKhmYQ1vabmQy4alNAwRhSvoru\n1rF/MsZwvMM4hPu7DbcKJtK9OuwImk4GGLbiZZaKTvnG5Yzwc7Kv1iP36wuCmhHU\nOm8fMwyp22KqK3NkesYO+UV9VvqXNHFK+MqGNMYsjvDQ523dJCSxnzZONYRswWft\n2M/pIVX6JwKBgQDWsumVS5ZL3x757Ji/JE6HzppLYyRzeMkI7fuIkCSpZMAeMhCC\nLO+7o8KM6d5eSUhQhRzhn0JrkuGA4z5fiWvF8lKmoeT7JfWbMloPIf9vcdCGl+vi\nkSzDWcYcOZ+KChWYejdMmlpimI3OyYvh/Jz3sbq0v8YSaGp5r6Ltmk4oAQKBgQCI\ntlYbPm4JgkaEelPCFUy4FifOAJXGX4Vb+4rX0v54uIIEFjBnyeECBTU4nI8eKyKl\nOFc6/FTKl8sIIJQB/h7K3GGvN0I9qbxfggRNUh02cULo0R+qfAW+98CwZzZLqjAo\nk/+ba8CLPt12mOFJ4mwFUSkFbpwOhqR38pNemXSqewKBgFh0rg4ptTqja0H9ZB2R\naslokpQhluuV5UBp5oT5f4tlUhizmjaKWgjpT9xr8yzC2UpRUrLzODm7gwZYmj7p\nm4l1YXjIo5ClhU4jEawQJat/FMeRXTht43eLSL5Spy10vqL0H9aMwIXZucSpMOit\nX7Q4pD61R3hH+l3KB0lrebIf\n-----END PRIVATE KEY-----\n",
      "clientEmail": "firebase-adminsdk-bsmm4@game-cd307.iam.gserviceaccount.com",
      "clientId": "105468573208058314840"
    },
    "dba": {
      "hash": "f3967bc7-976b-495f-b273-afb33f4b76a2"
    },
    "paymentAdminUrl": {
      "apiHost": "https://payment-admin.21game.life",
      "secret": "7e15282c533ec3a2daaad92dcc323306b4fa0c5788337d470ca06b62fc552a01",
      "mchId": 100000
    },
    "broadcastHall": {
      "gameWin": {
        "enable": true,
        "rebateAmount": 100
      }
    },
    "dailyCheckInConfig": {
      "status": 1,
      "effectiveUserType": 1,
      "effectiveTimeType": 1,
      "rewardsRecord": [
        {
          "day": 1,
          "rewardAmount": 10,
          "multiples": 1,
          "vip": 0
        },
        {
          "day": 2,
          "rewardAmount": 20,
          "multiples": 2,
          "vip": 1
        },
        {
          "day": 3,
          "rewardAmount": 30,
          "multiples": 3,
          "vip": 3
        },
        {
          "day": 4,
          "rewardAmount": 40,
          "multiples": 4,
          "vip": 4
        },
        {
          "day": 5,
          "rewardAmount": 50,
          "multiples": 5,
          "vip": 4
        },
        {
          "day": 6,
          "rewardAmount": 60,
          "multiples": 6,
          "vip": 5
        },
        {
          "day": 7,
          "rewardAmount": 70,
          "multiples": 7,
          "vip": 12
        }
      ],
      "effectiveUser": [],
      "effectiveTime": []
    },
    "jackpotConfig": {
      "status": 1,
      "ticket_robot_grand": false,
      "ticket_robot_major": false,
      "ticket_robot_secondary": true
    },
    "gameGateway": [
      {
        "target": "https://gameland.myapptest.top",
        "provider": "PT"
      },
      {
        "target": "https://gameland.myapptest.top",
        "provider": "WC_EVO"
      },
      {
        "target": "https://gameland.myapptest.top",
        "provider": "ONEAPI"
      },
      {
        "target": "https://gameland.myapptest.top",
        "provider": "ONEAPI_EVO"
      }
    ],
    "playerRank": {
      "game_luck_win_amount": {
        "minAmount": 1000
      },
      "game_luck_win_multiples": {
        "minMultiples": 10
      }
    },
    "bindMobileActivity": {
      "tickets-task": {
        "enable": true,
        "awardCount": 3,
        "comment": "绑定发送奖卷"
      }
    },
    "videoTutorialActivities": {
      "qrcodeTutorials": {
        "enable": true,
        "rewardType": "ticket",
        "uuidRule": "user",
        "depositCashConfig": {
          "count": 7,
          "multiples": 999,
          "cashType": "depositCash"
        },
        "ticketConfig": {
          "count": 7
        }
      },
      "cryptoTutorials": {
        "enable": true,
        "rewardType": "ticket",
        "uuidRule": "user",
        "depositCashConfig": {
          "count": 7,
          "multiples": 999,
          "cashType": "depositCash"
        },
        "ticketConfig": {
          "count": 7
        }
      }
    },
    "platformConfig": {
      "featureVersioning": {
        "facebookEvent": "v2"
      },
      "serviceFirstRunTime": "2024-09",
      "loginEnterGame": [
        {
          "pixelId": "999922",
          "gameId": 199
        },
        {
          "pixelId": "3",
          "gameId": 199
        },
        {
          "pixelId": "2234",
          "gameId": 199
        }
      ],
      "defaultPackageName": {
        "website": "com.a21.game",
        "share": "com.a21game.share",
        "prebind": "com.a21game.prebind",
        "self": "com.a21game.self"
      },
      "share": {
        "searchTips": "21.game"
      }
    },
    "gasOffset": {
      "BNB Chain": 0,
      "ETHEREUM": 0,
      "TRON": 2
    },
    "paymentChannelInfo": {
      "recharge": {
        "21pay": {
          "001": {
            "mid": "21pay-001",
            "channelType": "原生|唤醒|加密",
            "apiHost": "https://payment.21game.life",
            "channel": "21pay",
            "minSupportAmount": 10,
            "maxSupportAmount": 50000,
            "feeRate": 0.08,
            "feeSingleAmount": 0,
            "appId": 100000,
            "mchNo": "MCH1744091716431",
            "appKey": "7e15282c533ec3a2daaad92dcc323306b4fa0c5788337d470ca06b62fc552a01"
          }
        }
      },
      "withdraw": {
        "21pay": {
          "001": {
            "mid": "21pay-001",
            "channelType": "原生|唤醒|加密",
            "apiHost": "https://payment.21game.life",
            "channel": "21pay",
            "minSupportAmount": 10,
            "maxSupportAmount": 50000,
            "feeRate": 0.08,
            "feeSingleAmount": 0,
            "appId": 100000,
            "mchNo": "MCH1744091716431",
            "appKey": "7e15282c533ec3a2daaad92dcc323306b4fa0c5788337d470ca06b62fc552a01"
          }
        }
      }
    },
    "paymentUrl": {
      "apiHost": "https://payment.21game.life",
      "mchId": 100000
    },
    "merchantConfig": {
      "signSecret": "7e15282c533ec3a2daaad92dcc323306b4fa0c5788337d470ca06b62fc552a01",
      "appId": 100000,
      "mchNo": "MCH1745064187876"
    },
    "authentication": {
      "s2sAuth": "TKCbLjVzisNtgoexSZWq",
      "game": {
        "v1": {
          "secret": "SOc3NJayjnzIMl1WwCqK",
          "signType": "HMAC-SHA256"
        },
        "v2": {
          "secret": "iPcyDsbu7jf2qKV0CIAB",
          "signType": "MD5"
        }
      }
    },
    "tgChaDanMentions": [
      "@Garen908"
    ],
    "logSwitch": {
      "enable": 1
    },
    "aiInterfaceToken": "dtrivxksgrwoifnvopxbe",
    "messageBotConfig": {
      "lark": {
        "serverAlarm": {
          "appId": "cli_a92036296479deed",
          "appSecret": "h4eOPQsvgYGCrT76LzRmhfRSzNikMOd2",
          "receiveId": "oc_400209c0259f937ed6cbe7465b035729",
          "receiveIdType": "chat_id"
        },
        "default": {
          "appId": "cli_a92036296479deed",
          "appSecret": "h4eOPQsvgYGCrT76LzRmhfRSzNikMOd2",
          "receiveId": "oc_400209c0259f937ed6cbe7465b035729",
          "receiveIdType": "chat_id"
        }
      },
      "tg": {
        "token": "7691517036:AAEXkUuE8Rr59VZWZvxG_-P34vOoSxzzIjM",
        "default": "-1002295563906",
        "channels": {
          "abnormalBehavior": "-1002295563906",
          "pay": "-1002295563906",
          "complainant": "-1002295563906",
          "withdraw": "-1002295563906",
          "pkg": "-1002295563906",
          "invite": "-1002295563906",
          "help": "-1002295563906",
          "operations": "-1002295563906",
          "wininrNotify": "-1002295563906",
          "exportXlsx": "-1002295563906",
          "default": "-1002295563906"
        }
      }
    },
    "defaultSelectedAmount": 1000,
    "customer": {
      "hash": "ayfhiahfhafkhvkdhck"
    },
    "smsConfig": {
      "defaultPlatform": "itniotech",
      "codeConfig": {
        "codeLen": 4,
        "countLimit": 5,
        "expireTime": 30,
        "template": "Your verification code is ${code}, valid for ${expireTime} minutes."
      },
      "itniotech": {
        "baseUrl": "https://api.itniotech.com",
        "appId": "jGQO5l3q",
        "appKey": "TIQcJltgN5U6KDUnonUSKDci1s0MCMII",
        "appSecret": "6KShgN10u1hAI3Gr04j5SVfMa75oGJbH"
      }
    },
    "homeGuideCardConfig": {
      "recharge": {
        "first": {
          "key": "recharge_first",
          "priority": 100,
          "title": "First Recharge+{rewardPercent}%",
          "subtitle": "{instantPercent}%now+{stepPercent}%x{stepDays}days",
          "rewardPercent": 100,
          "instantPercent": 37,
          "stepPercent": 21,
          "stepDays": 3,
          "jumpType": "RECHARGE",
          "showJumpButton": true,
          "showProgressBar": false
        },
        "second": {
          "key": "recharge_second",
          "priority": 100,
          "title": "2nd Recharge+{rewardPercent}%",
          "subtitle": "",
          "rewardPercent": 100,
          "jumpType": "RECHARGE",
          "showJumpButton": true,
          "showProgressBar": false
        },
        "third": {
          "key": "recharge_third",
          "priority": 100,
          "title": "3rd Recharge+{rewardPercent}%",
          "subtitle": "",
          "rewardPercent": 100,
          "jumpType": "RECHARGE",
          "showJumpButton": true,
          "showProgressBar": false
        }
      },
      "system": {
        "jackpot": {
          "key": "system_jackpot",
          "priority": 70,
          "title": "Jackpot Lucky Draw",
          "subtitle": "Chance to win up to ₹{maxPrize}",
          "maxPrize": "1,000,000",
          "jumpType": "JACKPOT_TICKET",
          "jumpPage": "Jackpot",
          "showJumpButton": true,
          "showProgressBar": false,
          "visibleCondition": {
            "registerDaysLt": 7,
            "minTicketCount": 1
          }
        },
        "rank": {
          "key": "system_rank",
          "priority": 50,
          "titleOnRank": "Daily Ranking (Rank: {rank})",
          "titleOffRank": "Daily Ranking (Off-chart)",
          "subtitleOnRank": "Bet more, rank higher, win bigger.",
          "subtitleOffRank": "Wager to rank and win big daily.",
          "jumpType": "RANKING",
          "showJumpButton": true,
          "showProgressBar": false,
          "visibleCondition": {
            "allUsers": true
          }
        },
        "turntable": {
          "key": "system_turntable",
          "priority": 60,
          "title": "Get Free ₹{rewardAmount}",
          "subtitle": "Invite Friends, Get ₹{rewardAmount} FREE",
          "rewardAmount": 500,
          "jumpType": "TURNTABLE",
          "showJumpButton": true,
          "showProgressBar": true,
          "visibleCondition": {
            "registerDaysLt": 7
          }
        }
      }
    },
    "gamePopularity": {
      "popularityScale": 0.3,
      "onlineMultiplier": 1.5,
      "onlineBoostCapRatio": 0.5,
      "amplitudeRatio": 0.1,
      "popularityMin": 5,
      "recentDays": 30
    }
  },
  "message": "ok"
}
```

</details>

---

### ✅ 76. 获取存在的 key 应返回对应值

**操作**: `GetRedis / 获取 key`

**请求头**:
- `x-operation`: Rk9mXpL3qN7wTzY2vBcJ
- `x-timestamp`: skip

**请求体**:
```json
{
  "key": "test:proxy:integration:key"
}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

---

### ✅ 77. 缺少 key 参数时应返回 400

**操作**: `GetRedis / 缺少 key`

**请求头**:
- `x-operation`: Rk9mXpL3qN7wTzY2vBcJ
- `x-timestamp`: skip

**请求体**:
```json
{}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "key is required"
}
```

---

### ✅ 78. key 类型不是 string 时应返回 400

**操作**: `GetRedis / key 类型错误`

**请求头**:
- `x-operation`: Rk9mXpL3qN7wTzY2vBcJ
- `x-timestamp`: skip

**请求体**:
```json
{
  "key": 12345
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "key is required"
}
```

---

### ✅ 79. 设置 key-value 应返回 200

**操作**: `SetRedis / 设置值`

**请求头**:
- `x-operation`: Wn4sGdH8uEoAiP6xQfZv
- `x-timestamp`: skip

**请求体**:
```json
{
  "key": "test:proxy:integration:1779796919549",
  "value": "hello-from-test"
}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

---

### ✅ 80. 设置带 TTL 的 key 应返回 200

**操作**: `SetRedis / 带 TTL`

**请求头**:
- `x-operation`: Wn4sGdH8uEoAiP6xQfZv
- `x-timestamp`: skip

**请求体**:
```json
{
  "key": "test:proxy:integration:1779796919549:ttl",
  "value": "ttl-test-value",
  "exp": 60
}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

---

### ✅ 81. 缺少 key 时应返回 400

**操作**: `SetRedis / 缺少 key`

**请求头**:
- `x-operation`: Wn4sGdH8uEoAiP6xQfZv
- `x-timestamp`: skip

**请求体**:
```json
{
  "value": "some-value"
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 82. 缺少 value 时应返回 400

**操作**: `SetRedis / 缺少 value`

**请求头**:
- `x-operation`: Wn4sGdH8uEoAiP6xQfZv
- `x-timestamp`: skip

**请求体**:
```json
{
  "key": "test:proxy:integration:1779796919549"
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 83. value 为 null 时应返回 400

**操作**: `SetRedis / value=null`

**请求头**:
- `x-operation`: Wn4sGdH8uEoAiP6xQfZv
- `x-timestamp`: skip

**请求体**:
```json
{
  "key": "test:proxy:integration:1779796919549",
  "value": null
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 84. SetRedis 后 GetRedis 应能读取相同的值

**操作**: `SetRedis + GetRedis 往返验证`

**请求体**:
```json
{
  "key": "test:proxy:integration:1779796919549:roundtrip",
  "value": "round-trip-1779796921433"
}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "data": "round-trip-1779796921433",
  "message": "ok"
}
```

**备注**: Set 后立即 Get，验证数据一致性

---

### ✅ 85. 删除存在的 key 应返回 200 且 data 为删除数量

**操作**: `DelRedis / 删除存在的 key`

**请求头**:
- `x-operation`: Jc5tYmK2pXwQnB8rLsUo
- `x-timestamp`: skip

**请求体**:
```json
{
  "keys": [
    "test:proxy:integration:del:1779796919549"
  ]
}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "data": 1,
  "message": "ok"
}
```

**备注**: 先 SetRedis 写入，再 DelRedis 删除（keys 为数组）

---

### ✅ 86. 删除不存在的 key 应返回 200 且 data 为 0

**操作**: `DelRedis / 删除不存在的 key`

**请求头**:
- `x-operation`: Jc5tYmK2pXwQnB8rLsUo
- `x-timestamp`: skip

**请求体**:
```json
{
  "keys": [
    "test:proxy:nonexistent:1779796921456"
  ]
}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "data": 0,
  "message": "ok"
}
```

---

### ✅ 87. 缺少 keys 参数时应返回 400

**操作**: `DelRedis / 缺少 keys`

**请求头**:
- `x-operation`: Jc5tYmK2pXwQnB8rLsUo
- `x-timestamp`: skip

**请求体**:
```json
{}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 88. keys 不是数组（传入数字）时应返回 400

**操作**: `DelRedis / keys 类型错误（数字）`

**请求头**:
- `x-operation`: Jc5tYmK2pXwQnB8rLsUo
- `x-timestamp`: skip

**请求体**:
```json
{
  "keys": 99999
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 89. keys 为空数组时应返回 400

**操作**: `DelRedis / keys 为空数组`

**请求头**:
- `x-operation`: Jc5tYmK2pXwQnB8rLsUo
- `x-timestamp`: skip

**请求体**:
```json
{
  "keys": []
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ✅ 90. keys 数组含非 string 元素时应返回 400

**操作**: `DelRedis / keys 数组含非 string`

**请求头**:
- `x-operation`: Jc5tYmK2pXwQnB8rLsUo
- `x-timestamp`: skip

**请求体**:
```json
{
  "keys": [
    "valid-key",
    99999
  ]
}
```

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

---

### ❌ 91. 传入多个 key 数组应一次删除多个 key 并返回删除数量

**操作**: `DelRedis / 多 key 批量删除`

**请求头**:
- `x-operation`: Jc5tYmK2pXwQnB8rLsUo
- `x-timestamp`: skip

**请求体**:
```json
{
  "keys": [
    "test:proxy:del:multi:1:1779796921478",
    "test:proxy:del:multi:2:1779796921478",
    "test:proxy:del:multi:3:1779796921478"
  ]
}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "data": 1,
  "message": "ok"
}
```

**备注**: 先写入三个 key，再通过 keys 数组一次删除

**错误**:
```
expected 1 to equal 3
```

---

### ✅ 92. SetRedis + DelRedis + GetRedis 应验证 key 已被删除

**操作**: `SetRedis + DelRedis + GetRedis 生命周期验证`

**请求体**:
```json
{
  "key": "test:proxy:del:lifecycle:1779796921498",
  "value": "lifecycle-value-1779796921498"
}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "data": null,
  "message": "ok"
}
```

**备注**: Set -> Del（keys 数组）-> Get 验证删除后 key 不存在

---

### ✅ 93. RunFileList 应在 3 秒内返回

**操作**: `RunFileList / 性能基线`

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f
- `x-timestamp`: skip

**请求体**:
```json
{
  "path": ".",
  "recursive": false
}
```

**响应状态**: 200

**响应体**: <details><summary>展开</summary>

```json
{
  "code": 0,
  "data": [
    {
      "name": ".cursor",
      "path": ".cursor",
      "type": "directory",
      "children": []
    },
    {
      "name": ".cursorindexingignore",
      "path": ".cursorindexingignore",
      "type": "file"
    },
    {
      "name": ".dockerignore",
      "path": ".dockerignore",
      "type": "file"
    },
    {
      "name": ".editorconfig",
      "path": ".editorconfig",
      "type": "file"
    },
    {
      "name": ".env.development",
      "path": ".env.development",
      "type": "file"
    },
    {
      "name": ".env.production",
      "path": ".env.production",
      "type": "file"
    },
    {
      "name": ".env.test",
      "path": ".env.test",
      "type": "file"
    },
    {
      "name": ".eslintignore",
      "path": ".eslintignore",
      "type": "file"
    },
    {
      "name": ".eslintrc.js",
      "path": ".eslintrc.js",
      "type": "file"
    },
    {
      "name": ".gitattributes",
      "path": ".gitattributes",
      "type": "file"
    },
    {
      "name": ".gitignore",
      "path": ".gitignore",
      "type": "file"
    },
    {
      "name": ".husky",
      "path": ".husky",
      "type": "directory",
      "children": []
    },
    {
      "name": ".lintstagedrc.json",
      "path": ".lintstagedrc.json",
      "type": "file"
    },
    {
      "name": ".prettierignore",
      "path": ".prettierignore",
      "type": "file"
    },
    {
      "name": ".prettierrc.json",
      "path": ".prettierrc.json",
      "type": "file"
    },
    {
      "name": ".specstory",
      "path": ".specstory",
      "type": "directory",
      "children": []
    },
    {
      "name": ".travis.yml",
      "path": ".travis.yml",
      "type": "file"
    },
    {
      "name": ".vscode",
      "path": ".vscode",
      "type": "directory",
      "children": []
    },
    {
      "name": ".yalc",
      "path": ".yalc",
      "type": "directory",
      "children": []
    },
    {
      "name": "babel.config.js",
      "path": "babel.config.js",
      "type": "file"
    },
    {
      "name": "coverage",
      "path": "coverage",
      "type": "directory",
      "children": []
    },
    {
      "name": "docker-compose.dev.yml",
      "path": "docker-compose.dev.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.prod.yml",
      "path": "docker-compose.prod.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.test.yml",
      "path": "docker-compose.test.yml",
      "type": "file"
    },
    {
      "name": "docker-compose.yml",
      "path": "docker-compose.yml",
      "type": "file"
    },
    {
      "name": "Dockerfile",
      "path": "Dockerfile",
      "type": "file"
    },
    {
      "name": "docs",
      "path": "docs",
      "type": "directory",
      "children": []
    },
    {
      "name": "ecosystem.config.json",
      "path": "ecosystem.config.json",
      "type": "file"
    },
    {
      "name": "ecosystem.test.json",
      "path": "ecosystem.test.json",
      "type": "file"
    },
    {
      "name": "examples",
      "path": "examples",
      "type": "directory",
      "children": []
    },
    {
      "name": "gameland.code-workspace",
      "path": "gameland.code-workspace",
      "type": "file"
    },
    {
      "name": "jest.config.js",
      "path": "jest.config.js",
      "type": "file"
    },
    {
      "name": "jsconfig.json",
      "path": "jsconfig.json",
      "type": "file"
    },
    {
      "name": "LICENSE",
      "path": "LICENSE",
      "type": "file"
    },
    {
      "name": "mysql-config",
      "path": "mysql-config",
      "type": "directory",
      "children": []
    },
    {
      "name": "mysql-init",
      "path": "mysql-init",
      "type": "directory",
      "children": []
    },
    {
      "name": "package-lock.json",
      "path": "package-lock.json",
      "type": "file"
    },
    {
      "name": "package.json",
      "path": "package.json",
      "type": "file"
    },
    {
      "name": "proxy.ps1",
      "path": "proxy.ps1",
      "type": "file"
    },
    {
      "name": "README.md",
      "path": "README.md",
      "type": "file"
    },
    {
      "name": "src",
      "path": "src",
      "type": "directory",
      "children": []
    },
    {
      "name": "start-server.js",
      "path": "start-server.js",
      "type": "file"
    },
    {
      "name": "sync.sh",
      "path": "sync.sh",
      "type": "file"
    },
    {
      "name": "tests",
      "path": "tests",
      "type": "directory",
      "children": []
    },
    {
      "name": "tools",
      "path": "tools",
      "type": "directory",
      "children": []
    },
    {
      "name": "yalc.lock",
      "path": "yalc.lock",
      "type": "file"
    },
    {
      "name": "yarn.lock",
      "path": "yarn.lock",
      "type": "file"
    }
  ],
  "message": "ok"
}
```

</details>

**备注**: 响应时间: 5ms

---

### ✅ 94. ForwardEvent 应在 1 秒内返回

**操作**: `ForwardEvent / 性能基线`

**请求头**:
- `x-operation`: LvMWnF1ezaBlRjNAgtym
- `x-timestamp`: skip

**请求体**:
```json
{
  "ping": true
}
```

**响应状态**: 200

**响应体**:
```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "ping": true
  }
}
```

**备注**: 响应时间: 2ms

---

