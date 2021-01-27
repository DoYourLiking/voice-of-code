const { TS_PARSER_NAME } = require('../common/config')
const { BASE_RULES } = require('../common/rules')
const { Linter } = require('eslint')

class CodeAnalysis {
  /**
   * 代码分析构造函数
   *
   * @param code 代码字符串
   * @param type 代码类型，默认为 JavaScript
   * @param rules 默认规则
   * @author yuzhanglong
   * @date 2021-1-28 00:00:40
   */
  constructor(code, type = 'javascript', rules = BASE_RULES) {
    this.linter = new Linter()
    this.code = code
    this.type = type
    this.rules = rules
    this.setParser()
  }

  /**
   * 注册一个规则
   *
   * @param name 规则名称
   * @param ruleModule 规则 js 模块
   * @param level 规则级别
   * @author yuzhanglong
   * @date 2021-1-28 00:00:43
   */
  registerRules(name, ruleModule, level = 'error') {
    this.linter.defineRule(name, ruleModule)
    this.rules[name] = level
    return this
  }

  /**
   * 根据传入的代码类型配置解析器
   *
   * @author yuzhanglong
   * @date 2021-1-27 23:57:28
   */
  setParser() {
    const mapper = {
      'javascript': undefined,
      'typescript': TS_PARSER_NAME
    }
    const psName = mapper[this.type]
    if (psName) {
      this.linter.defineParser(TS_PARSER_NAME, require(psName))
      this.parser = TS_PARSER_NAME
    }
  }

  /**
   * 执行 eslint 分析代码
   *
   * @author yuzhanglong
   * @date 2021-1-27 23:57:25
   */
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
        parser: this.parser
      },
      {
        // 禁止以注释的方式屏蔽 eslint
        allowInlineConfig: false
      }
    )
    return this
  }

  /**
   * 获取代码分析结果，返回值字段解释如下：
   * hasError 是否发生解析错误（例如 ts 代码选择了 js 的解析器）
   * message 附加信息
   * detail 解析具体信息
   *
   * @author yuzhanglong
   * @date 2021-1-18 18:27:46
   */
  getResult() {
    const isError = this.results.length === 1 && this.results[0].fatal
    return {
      hasError: isError,
      message: isError ? this.results[0].message : 'analysis success',
      detail: this.results
    }
  }
}


module.exports = {
  CodeAnalysis
}