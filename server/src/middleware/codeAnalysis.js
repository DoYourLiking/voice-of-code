const codeAnalysis = async (ctx, next) => {
  // 代码分析
  console.log('开始代码分析~')
  await next()
}

module.exports = {
  codeAnalysis
}