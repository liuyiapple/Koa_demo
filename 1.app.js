var koa = require('koa');
var app = new koa();
app.use(function*() {
    this.body = "Hello Koa"
})

app.listen(3001,function() {
    console.log("server running on http://localhost:3001");
})

// generator 生成器允许代码停止执行
var generator_func =  function* () {
    yield 1;
    yield 2;
}
var itr = generator_func();
console.log(itr.next()); // 1
console.log(itr.next()); // 2
console.log(itr.next()); // 代码执行完毕 done: true