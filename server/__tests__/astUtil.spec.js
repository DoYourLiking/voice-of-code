const {
  isSurroundByCharacter,
  isStringDividedByUpperCase
} = require('../src/utils/ast')


describe('ast 工具函数测试', () => {
  test('字符串是否以某个字符开头或结尾', () => {
    const str = 'hello world'
    expect(isSurroundByCharacter(str, 'h')).toBeFalsy()
    const str2 = 'asa'
    expect(isSurroundByCharacter(str2, 'a')).toBeTruthy()
    const str3 = '\"hello world\"'
    expect(isSurroundByCharacter(str3, '"')).toBeTruthy()
    expect(isSurroundByCharacter(null, 'a')).toBeFalsy()
  })

  test('判断单词是否全部大写', () => {
    const str = 'SERVER_PORT'
    expect(isStringDividedByUpperCase(str)).toBeTruthy()
    const str2 = 'asa'
    expect(isStringDividedByUpperCase(str2)).toBeFalsy()
    expect(isStringDividedByUpperCase(null)).toBeTruthy()
  })
})


