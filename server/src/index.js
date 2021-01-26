const app = require('./app')
const config = require('./common/config')


app.listen(config.APP_PORT, () => {
  console.log(`the server is running successfully on port ${config.APP_PORT}~`)
})
