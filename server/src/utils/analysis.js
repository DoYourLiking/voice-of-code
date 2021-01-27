const { BASE_RULES } = require('../common/rules')
const { Linter } = require('eslint')

class CodeAnalysis {
  constructor(code, type = 'javaScript', rules = BASE_RULES) {
    this.linter = new Linter()
    this.code = code
    this.type = type
    this.rules = rules
  }

  registerRules(name, ruleModule, level = 'error') {
    this.linter.defineRule(name, ruleModule)
    this.rules[name] = level
    return this
  }

  startLint() {
    this.results = this.linter.verify(
      this.code,
      {
        extends: 'eslint:recommended',
        rules: this.rules,
        parserOptions: {
          ecmaVersion: 6
        }
      },
      {
        // 禁止以注释的方式屏蔽 eslint
        allowInlineConfig: false
      }
    )
    return this
  }

  getResult() {
    return {
      detail: this.results
    }
  }
}


module.exports = {
  CodeAnalysis
}