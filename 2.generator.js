var koa = require('koa')
var app = new koa()
app.use(function*(next) {
    console.log("1");
    yield next;
    console.log("2");
})

app.use(function*(next) {
    console.log("3");
    yield next;
    console.log("4");
})

app.use(function*(next) {
    console.log("5");
    this.body = "Hello Koa"
    console.log("6");
})

// 执行结果 135642

app.listen(3001)
