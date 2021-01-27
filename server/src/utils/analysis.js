const { BASE_RULES } = require('../common/rules')
const { Linter } = require('eslint')

const analysis = (code, fileName, rules = BASE_RULES) => {
  const linter = new Linter()
  const messages = linter.verify(
    code,
    {
      extends: 'eslint:recommended',
      rules: rules,
      parserOptions: {
        ecmaVersion: 6
      }
    },
    {
      filename: fileName,
      // 禁止以注释的方式屏蔽 eslint
      allowInlineConfig: false
    }
  )

  return {
    detail: messages
  }
}

module.exports = analysis