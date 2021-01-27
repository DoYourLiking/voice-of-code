const createResponse = require('../utils/createResponse')
const musicGenerate = async (ctx, next) => {
  // 代码分析
  console.log('开始音乐生成~')

  ctx.body = createResponse(
    null,
    '生成成功~', {
      'music': '11 55 66 5 44 33 22 1'
    })
  await next()
}

module.exports = {
  musicGenerate
}