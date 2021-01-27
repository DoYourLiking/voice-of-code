// ast 处理相关工具

// 是否被某个字符包裹，例如 '23133' 被 ' 包裹
const isSurroundByCharacter = (raw, target) => {
  const beginAccept = raw[0] === target
  const endAccept = raw[raw.length - 1] === target
  return beginAccept && endAccept
}


module.exports = {
  isSurroundByCharacter
}