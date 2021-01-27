const { BASE_RULES } = require('../common/rules')
const { Linter } = require('eslint')

class CodeAnalysis {
  constructor(code, type = 'javascript', rules = BASE_RULES) {
    this.linter = new Linter()
    this.code = code
    this.type = type
    this.rules = rules
    this.setParser()
  }

  registerRules(name, ruleModule, level = 'error') {
    this.linter.defineRule(name, ruleModule)
    this.rules[name] = level
    return this
  }

  setParser() {
    const mapper = {
      'javascript': undefined,
      'typescript': '@typescript-eslint/parser'
    }
    const psName = mapper[this.type]
    if (psName) {
      this.linter.defineParser('@typescript-eslint/parser', require(psName))
      this.parser = '@typescript-eslint/parser'
    }
  }

  getPlugin() {
    const plugins = []
    if (this.type === 'typescript') {
      plugins.push('@typescript-eslint')
    }
    return plugins
  }

  startLint() {
    this.results = this.linter.verify(
      this.code,
      {
        extends: 'eslint:recommended',
        rules: this.rules,
        parserOptions: {
          ecmaVersion: 6,
          sourceType: 'module',
          ecmaFeatures: {
            jsx: true
          }
        },
        plugins: this.getPlugin(),
        parser: this.parser
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