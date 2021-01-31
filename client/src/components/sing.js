const { default: sound } = require('./Hello/sound')

const audio = new Audio()
const sing = function(soundMap = sound, res, time = 1000) {
  res = Array.isArray(res) ? res : res.split(' ')
  let index = 0
  let timer = function() {
    setTimeout(() => {
      audio.src = soundMap[res[index++]]
      audio.play()
      if (index === res.length) {
        return null
      }
      timer()
    }, time)
  }
  timer()
}
export default sing