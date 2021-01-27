const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const useRoutes = require('./router')
const errorHandler = require('./core/errorHandler')
const cors = require('koa-cors');


const app = new Koa()

app.useRoutes = useRoutes
//设置跨域
app.use(cors());
// 处理异常
app.use(errorHandler)

// bodyParser
app.use(bodyParser())

// 注册路由
app.useRoutes()


module.exports = app
