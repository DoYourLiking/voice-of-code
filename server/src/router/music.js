const Router = require('koa-router')
const { musicGenerate } = require('../middleware/musicGenerate')
const { codeAnalysis } = require('../middleware/codeAnalysis')
const { codeUpload } = require('../middleware/codeUpload')

const musicRouter = new Router({ prefix: '/music' })

// 分析代码 && 生成音乐
musicRouter.post('/', codeUpload, codeAnalysis, musicGenerate)

module.exports = musicRouter