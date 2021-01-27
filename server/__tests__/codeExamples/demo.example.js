// 测试 代码
const aa = () => {
  console.log('hello world')
}
// 拒绝多余空行

// 回调地狱
foo(function() {
  bar(function() {
    baz(function() {
      qux(function() {
      })
    })
  })
})


// 嵌套三元表达式
foo > bar ? (baz > qux ? value1 : value2) : value3

// 小写构造函数
const friend = new person()

// 混合操作符
var foo = a && b < 0 || c > 0 || d + 1 === 0

// 操作符周围应该有空格
var sum = 1 + 2

// 禁止属性前的空白
foo. bar .baz . quz

// 属性并没有分散
const newObject = {a: 1, b: [2, {a: 3, b: 4}]};

