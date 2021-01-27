const { CODE_EXAMPLE_DIR_NAME } = require('../common/config')
const path = require('path')


const codeExampleRootPath = path.resolve(__dirname, '../../__tests__', CODE_EXAMPLE_DIR_NAME)

const getExamplePath = (exampleName, extension = 'js') => {
  // 没有后缀 补充上去
  exampleName = exampleName + '.example.' + extension

  return path.resolve(codeExampleRootPath, exampleName)
}

module.exports = {
  getExamplePath
}