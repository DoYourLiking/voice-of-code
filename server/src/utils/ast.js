// ast 处理相关工具

// 是否被某个字符包裹，例如 '23133' 被 ' 包裹
const isSurroundByCharacter = (raw, target) => {
  if (typeof raw !== 'string') {
    return false
  }
  const beginAccept = raw[0] === target
  const endAccept = raw[raw.length - 1] === target
  return beginAccept && endAccept
}

// 判断单词是否全部大写
const isStringDividedByUpperCase = (str) => {
  if (!str) {
    return true
  }
  const strArr = str.split('')


  const hasLowerCase = strArr.some(res => {
    return res.charCodeAt(0) >= 97 && res.charCodeAt(0) <= 122
  })
  return !hasLowerCase
}


module.exports = {
  isSurroundByCharacter,
  isStringDividedByUpperCase
}