const { CodeAnalysis } = require('../src/utils/analysis')
const fs = require('fs')
const path = require('path')
const { upperCaseConstName } = require('../src/utils/rules')
const { noMixQuotes } = require('../src/utils/rules')
const { getExamplePath } = require('../src/utils/path')
const { describe } = require('@jest/globals')


describe('基于 eslint 的代码分析', () => {
  test('esModule 语法不报错', () => {
    const result = new CodeAnalysis('import React from \'react\'')
      .startLint()
      .getResult()
    expect(result.detail.length).toStrictEqual(0)
  })

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

  test('tsx 案例，包含自定义规则', () => {
    const f = fs.readFileSync(path.resolve(getExamplePath('demoTsx', 'tsx')))
    const result = new CodeAnalysis(f.toString(), 'typescript')
      .registerRules('no-mixed-quotes', noMixQuotes)
      .registerRules('upper-case-const-name', upperCaseConstName)
      .startLint()
      .getResult()
    expect(result.detail.length).toStrictEqual(2)
  })

  test('jsx 案例，包含自定义规则', () => {
    const f = fs.readFileSync(path.resolve(getExamplePath('demoJsx', 'jsx')))
    const result = new CodeAnalysis(f.toString(), 'javascript')
      .registerRules('no-mixed-quotes', noMixQuotes)
      .registerRules('upper-case-const-name', upperCaseConstName)
      .startLint()
      .getResult()
    expect(result.detail.length).toStrictEqual(2)
  })

  test('选择错误的代码类型(ts--js)造成解析错误', () => {
    const f = fs.readFileSync(path.resolve(getExamplePath('demoTypescript', 'ts')))
    // ts 但选择了 js
    const result = new CodeAnalysis(f.toString(), 'javascript')
      .startLint()
      .getResult()
    expect(result.detail.length).toStrictEqual(1)
    expect(result.hasError).toBeTruthy()
    expect(result.message).toStrictEqual('Parsing error: Unexpected token :')
  })
})