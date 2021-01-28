const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const useRoutes = require('./router')
const errorHandler = require('./core/errorHandler')
const cors = require('koa2-cors');


const app = new Koa()
//设置跨域
app.use(cors());
app.useRoutes = useRoutes

// 处理异常
app.use(errorHandler)

// bodyParser
app.use(bodyParser())

// 注册路由
app.useRoutes()


module.exports = app
