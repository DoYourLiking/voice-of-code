const { CODE_EXAMPLE_DIR_NAME } = require('../common/config')
const path = require('path')


const codeExampleRootPath = path.resolve(__dirname, '../../__tests__', CODE_EXAMPLE_DIR_NAME)

const getExamplePath = (exampleName) => {
  // 没有 js 后缀 补充上去
  if (exampleName.endsWith('.example')) {
    exampleName += '.js'

    // 有 example.js 后缀
  } else if (!exampleName.endsWith('.example.js')) {
    exampleName += '.example.js'
  }

  return path.resolve(codeExampleRootPath, exampleName)
}

module.exports = {
  getExamplePath
}