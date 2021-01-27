const analysis = require('../utils/analysis')

// 代码分析中间件，在下一个中间件中，可以从 ctx.analysisResult 拿到分析结果
const codeAnalysis = async (ctx, next) => {
  // 代码分析
  const code = ctx.request.body['code']
  // 传入用户代码，获取分析结果
  ctx.analysisResult = analysis(code)
  await next()
}

module.exports = {
  codeAnalysis
}