const os = require('os')
const Koa = require('koa')
const koaBody = require('koa-body')
const app = new Koa()
const main = async function (ctx) {
    // ctx.body = 'uploader file'
    const tmpdir = os.tmpdir()
    const files = ctx.request.body.files || {}
    console.log(files)
}
app.use(main)
app.listen(3000)