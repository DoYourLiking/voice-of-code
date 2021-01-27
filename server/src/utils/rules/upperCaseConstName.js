// 自定义规则：常量命名全部大写，单词间用下划线隔开

// examples
// const aaa = "21321321"  ×
// const SERVER_PORT = 8080 √

// 检测的标准是 1.必须以 const 定义 2. 值必须为 Literal
// Literal: 一种字母或符号，代表其本身，而不是与之相关联的编程语言中的特性、函数或实体
// 也就是说，下面的表达式不应该被检测 -- value 为某个引用类型
// const FOO = new Object()
// const BAR = () => {}

const { isStringDividedByUpperCase } = require('../ast')

module.exports = {
  meta: {
    docs: {
      description: '常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚，不要嫌名字长',
      recommended: false
    },
    messages: {
      lowCaseInConst: '常量命名应该全部大写，单词间用下划线隔开'
    }
  },

  create: (context) => {
    return {
      // 变量声明
      VariableDeclaration(node) {
        // 1. 是 const 声明
        if (node.kind === 'const') {
          const declarations = node.declarations
          if (declarations && declarations.length > 0) {
            const init = declarations[0].init
            const id = declarations[0].id

            // Literal 类型，这是我们需要判断的内容
            if (init && init.type === 'Literal') {
              // 拿到变量名
              if (!isStringDividedByUpperCase(id.name)) {
                context.report({
                  node,
                  messageId: 'lowCaseInConst'
                })
              }
            }
          }
        }
      }
    }
  }
}