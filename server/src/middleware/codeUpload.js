const codeUpload = async (ctx, next) => {
  // 文件上传
  console.log('文件上传处理~')
  // 执行 下面的代码，我们就可以进行统一异常处理
  // throw  Error('bad1')
  await next()
}

module.exports = {
  codeUpload
}