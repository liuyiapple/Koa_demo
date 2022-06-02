var koa = require('koa');
var app = new koa()
var router = require("koa-router")
var _router = router()
_router.get("/hello",async(ctx) => {
    // 定义路由
    ctx.body = "Hello Koa"
})
_router.post("/hello",async(ctx) => {
    ctx.body = "你刚刚访问了'/hello'调用了post方法"
})
_router.all("/test",async (ctx)=>{
    ctx.body = "所有的Http调用都会走这里"
})
app.use(_router.routes()) // 使用路由器定义路由
app.listen(3001)