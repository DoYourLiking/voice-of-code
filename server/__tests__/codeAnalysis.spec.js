const { CodeAnalysis } = require('../src/utils/analysis')
const fs = require('fs')
const path = require('path')
const { upperCaseConstName } = require('../src/utils/rules')
const { noMixQuotes } = require('../src/utils/rules')
const { getExamplePath } = require('../src/utils/path')
const { describe } = require('@jest/globals')


describe('基于 eslint 的代码分析', () => {
  test('demo 案例，包含两个自定义规则', () => {
    const f = fs.readFileSync(path.resolve(getExamplePath('demo')))
    const result = new CodeAnalysis(f.toString())
      .registerRules('no-mixed-quotes', noMixQuotes)
      .registerRules('upper-case-const-name', upperCaseConstName)
      .startLint()
      .getResult()
    expect(result.detail.length).toStrictEqual(12)
    expect(result.detail[10].ruleId).toStrictEqual('upper-case-const-name')
    expect(result.detail[11].ruleId).toStrictEqual('no-mixed-quotes')
  })


  test('禁止用户以注释的方式屏蔽 eslint 代码分析', () => {
    const f = fs.readFileSync(getExamplePath('blockLint'))
    const result = new CodeAnalysis(f.toString())
      .startLint()
      .getResult()
    expect(result.detail.length).toBeGreaterThan(0)
  })

  test('typescript 案例，包含自定义规则', () => {
    const f = fs.readFileSync(path.resolve(getExamplePath('demoTypescript', 'ts')))
    const result = new CodeAnalysis(f.toString(), 'typescript')
      .registerRules('no-mixed-quotes', noMixQuotes)
      .registerRules('upper-case-const-name', upperCaseConstName)
      .startLint()
      .getResult()
    expect(result.detail.length).toStrictEqual(2)
  })
})