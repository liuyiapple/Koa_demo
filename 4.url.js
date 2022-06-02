let koa = require("koa")
let _router = require("koa-router")()
let app = new koa()
// 同样可以限制传递参数的长度
_router.get("/:id([0-9]{5})",async (ctx) => {
    ctx.body='当前传递的ID为' + ctx.params.id
})
app.use(_router.routes())
app.listen(3001)