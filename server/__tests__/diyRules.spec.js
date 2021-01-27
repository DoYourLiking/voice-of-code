const fs = require('fs')
const { Linter } = require('eslint')
const { describe } = require('@jest/globals')
const noMixedQuoteRule = require('../src/utils/rules/noMixedQuotes')
const { getExamplePath } = require('../src/utils/path')


describe('自定义规则测试', () => {
  test('自定义规则：不允许单双引号混用', () => {

    const f = fs.readFileSync(getExamplePath('quoteMixIn'))
    const linter = new Linter()

    const config = {
      rules: {
        'no-mixed-quotes': 'error'
      },
      parserOptions: {
        ecmaVersion: 6
      }
    }
    linter.defineRule('no-mixed-quotes', noMixedQuoteRule)

    // 错误
    const messages = linter.verify(f.toString(), config)
    expect(Array.isArray(messages)).toBeTruthy()
    expect(messages.length).toBeGreaterThan(0)
    expect(messages.some((element) => element.ruleId === 'no-mixed-quotes')).toBeTruthy()

    // 正确
    const passMessage = linter.verify('const a = \'1111\';const b = \'2222\'', config)

    expect(Array.isArray(passMessage)).toBeTruthy()
    expect(passMessage.length).toStrictEqual(0)
  })
})