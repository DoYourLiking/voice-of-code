// 在这里统一处理错误
const createResponse = require('../utils/createResponse')
const errorHandler = async (ctx, next) => {
  try {
    await next()
    // TODO: 统一处理其它的异常
    if (parseInt(ctx.status) === 404) {
      ctx.status = 404
      ctx.body = createResponse('A0001', '找不到所需资源~')
    }
  } catch (err) {
    // err 可以拿到异常的具体信息，可以来决定返回的 message
    // console.log(err)
    return ctx.body = createResponse('A0001', err.message)
  }
}


module.exports = errorHandler