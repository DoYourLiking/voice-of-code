const codeUpload = async (ctx, next) => {
  // 文件上传
  console.log('文件上传处理~')
  if (ctx.request.rawBody) {
    ctx.request.body['code'] = ctx.request.rawBody
  }
  await next()
}

module.exports = {
  codeUpload
}