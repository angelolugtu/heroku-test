const Koa = require('koa')
const routes = require('./routes')
const http = require('http')
const app = new Koa()

app.use(routes.routes())

const server = http.createServer(app.callback())

server.listen(process.env.PORT || 3000)