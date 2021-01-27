const Router = require('koa-router')
const { musicGenerate } = require('../middleware/musicGenerate')
const { codeAnalysis } = require('../middleware/codeAnalysis')
const { codeUpload } = require('../middleware/codeUpload')

const musicRouter = new Router({ prefix: '/music' })

// 上传方式分析代码 && 生成音乐
musicRouter.post('/get_by_upload', codeUpload, codeAnalysis, musicGenerate)

// 直接 post 代码 && 生成音乐
musicRouter.post('/get_by_code', codeAnalysis, musicGenerate)


module.exports = musicRouter