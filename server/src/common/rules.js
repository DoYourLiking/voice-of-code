// 默认配置的一些额外规则

const BASE_RULES = {
  // 单个函数 代码行数超过 80
  'max-lines-per-function': [
    'error', {
      'max': 80,
      'skipComments': true,
      'skipBlankLines': true
    }
  ],

  // 禁止变量删除
  'no-delete-var': 'error',

  // 禁止变量声明覆盖外层作用域的变量
  'no-shadow': [
    'error', {
      'builtinGlobals': true
    }
  ],

  // 禁止回调地狱
  'max-nested-callbacks': [
    'error', 1
  ],

  // 单行最大长度限制
  'max-len': [
    'error', {
      'code': 80
    }
  ],

  // 构造函数首字母大写
  'new-cap': 'error',

  // 拒绝操作符的混合
  'no-mixed-operators': 'error',

  // 拒绝多余空行
  'no-multiple-empty-lines': 'error',

  // 嵌套三元表达式
  'no-nested-ternary': 'error',

  // 操作符周围应该有空格
  'space-infix-ops': 'error',

  // 禁止属性前的空白
  'no-whitespace-before-property': 'error',

  // 对象属性分散，可以带来更好的可读性
  'object-property-newline': 'error',

  // 如果可以给 import 排序的话，那会更好
  'sort-imports': 'error',

  // 为 Symbol 添加描述
  'symbol-description': 'error'
}


module.exports = {
  BASE_RULES
}