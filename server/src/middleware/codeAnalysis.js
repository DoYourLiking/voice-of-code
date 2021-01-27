const { upperCaseConstName, noMixQuotes } = require('../utils/rules')
const { CodeAnalysis } = require('../utils/analysis')


// 代码分析中间件，在下一个中间件中，可以从 ctx.analysisResult 拿到分析结果
const codeAnalysis = async (ctx, next) => {
  // 代码分析
  const code = ctx.request.body['code']

  // 传入用户代码，获取分析结果
  const analysis = new CodeAnalysis(code)
  analysis
    .registerRules('no-mixed-quotes', noMixQuotes)
    .registerRules('upper-case-const-name', upperCaseConstName)
    .startLint()

  ctx.analysisResult = analysis.getResult()
  await next()
}

module.exports = {
  codeAnalysis
}