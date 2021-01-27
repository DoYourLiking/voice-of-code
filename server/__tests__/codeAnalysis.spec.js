const analysis = require('../src/utils/analysis')
const fs = require('fs')
const path = require('path')
const { CODE_EXAMPLE_DIR_NAME } = require('../src/common/config')
const { describe } = require('@jest/globals')


const getExample = (name) => {
  // 没有 js 后缀 补充上去
  if (name.endsWith('.example')) {
    name += '.js'

    // 有 example.js 后缀
  } else if (!name.endsWith('.example.js')) {
    name += '.example.js'
  }

  return path.resolve(__dirname, CODE_EXAMPLE_DIR_NAME, name)
}

describe('基于 eslint 的代码分析', () => {
  test('test 之后完善', () => {
    const f = fs.readFileSync(path.resolve(getExample('demo')))
    analysis(f.toString())
  })


  test('禁止用户以注释的方式屏蔽 eslint 代码分析', () => {
    const f = fs.readFileSync(getExample('blockLint'))
    const result = analysis(f.toString())
    expect(result.detail.length).toBeGreaterThan(0)
  })
})