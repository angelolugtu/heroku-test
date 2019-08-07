const Router = require('koa-router')
const appVersion = require('../package.json').version

const router = new Router()

router.get('/', async (ctx, next) => {
    ctx.body = appVersion
})

router.post('/sample', async (ctx, next) => {
    ctx.body = 'Hello World'
})

module.exports = router