// 自定义规则：不允许单双引号混用

// 例如下面的代码

// const aa = "1313";
//
// const bb = '231321'

const { isSurroundByCharacter } = require('../ast')


const QUOTE_SETTINGS = {
  double: {
    quote: '"',
    alternateQuote: '\''
  },
  single: {
    quote: '\'',
    alternateQuote: '"'
  }
}

module.exports = {
  meta: {
    docs: {
      description: '不允许包裹字符串的单引号双引号在代码中混用',
      recommended: false
    },
    messages: {
      quoteMixIn: '不允许包裹字符串的单引号双引号在代码中混用'
    }
  },

  create: (context) => {
    let isDoubleQuoteAppear = false
    let isSingleQuoteAppear = false

    return {
      Literal(node) {
        const val = node.value
        const rawVal = node.raw
        if (typeof val === 'string') {
          if (isSurroundByCharacter(rawVal, QUOTE_SETTINGS.double.quote)) {
            isDoubleQuoteAppear = true
          }

          if (isSurroundByCharacter(rawVal, QUOTE_SETTINGS.single.quote)) {
            isSingleQuoteAppear = true
          }
        }
        // 当两种类型的括号全部出现，则发生括号混用
        if (isSingleQuoteAppear && isDoubleQuoteAppear) {
          context.report({
            node,
            messageId: 'quoteMixIn'
          })
        }
      }
    }
  }
}