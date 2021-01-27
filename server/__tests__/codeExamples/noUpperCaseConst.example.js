// 检测常量命名全部大写，单词间用下划线隔开

const SERVER_PORT = 8080

const VALUE = false

const foo = 213213

const breakRule = 8080

const bar = () => {
  // 下面的语句不会被检测
  const obj = new Array(10)
  const obj2 = () => 'hello world'
}