import A_1 from "../piano/A_1.mp3"
const { default: sound } = require('./Hello/sound')

const audio = new Audio()
const sing = function(soundMap = sound, res, time = 1000) {
  res = Array.isArray(res) ? res : res.split(' ')
  let index = 0
  let timer = function() {
    setTimeout(() => {
      audio.src = A_1
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