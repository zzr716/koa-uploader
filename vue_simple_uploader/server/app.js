const os = require('os')
const fs = require('fs')
const Koa = require('koa')
const path = require('path')
const koaBody = require('koa-body')
const cors = require('koa2-cors')
const app = new Koa()
// cross domain http head Allow-origin-access 跨域问题
const main = async function (ctx) {
    // ctx.body = 'uploader file'
    const tmpdir = os.tmpdir()
    const filePaths = []
    const files = ctx.request.body.files || {}
    // console.log(tmpdir)
    // console.log(files)
    for (let key in files) {
        // console.log(file)
        // 保存文件 saveFile是异步的
        // 文件上传快慢不一 
        // 让所有文件上传完成再返回结果？ 让异步变成同步
        const file = files[key]
        const filePath = path.join(tmpdir, file.name)
        console.log(filePath)
        console.log(file.path)
        // 里面有内容 读取流打开
        const reader = fs.createReadStream(file.path)
        // filepath 目的地有了 等内容
        const writer = fs.createWriteStream(filePath)
        reader.pipe(writer)
        filePaths.push(filePath)
        console.log(filePaths)
    }
    ctx.body = filePaths
}
app.use(cors({
    // localhost://8080/upload 检验域名
    origin: function (ctx) {
        if (ctx.url === '/test') {
            return false
        }
        return '*'
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))
app.use(koaBody({
    multipart: true
}))
app.use(main)
app.listen(3000)