const analysis = require('../src/utils/analysis')
const fs = require('fs')
const path = require('path')
const { getExamplePath } = require('../src/utils/path')
const { describe } = require('@jest/globals')



describe('基于 eslint 的代码分析', () => {
  test('test 之后完善', () => {
    const f = fs.readFileSync(path.resolve(getExamplePath('demo')))
    analysis(f.toString())
  })


  test('禁止用户以注释的方式屏蔽 eslint 代码分析', () => {
    const f = fs.readFileSync(getExamplePath('blockLint'))
    const result = analysis(f.toString())
    expect(result.detail.length).toBeGreaterThan(0)
  })
})