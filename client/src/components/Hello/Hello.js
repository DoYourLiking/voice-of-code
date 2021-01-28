import React, { useState } from 'react'
import style from './hello.module.scss'
import axios from 'axios'
const api = "http://localhost:8000/"
const Hello = (props) => {
  let [musicStr, setMusicStr] = useState("")
  let [file, setFile] = useState(null)
  let [result, setResult] = useState("")
  function uploadFile(file) {
    let req = file ? file : musicStr
    if (!req) { alert("播放了空空如也") }
    else {
      const formData = new FormData();
      formData.append('code', req);
      formData.forEach((value, key) => {
        console.log(`key ${key}: value ${value}`);
      })
      axios.post(api, req).then((res) => {
        console.log(res); setResult(res);
      })
    }
  }
  return (
    <div className={style.hello}>
      <textarea className={style.main_input} value={musicStr} onChange={(e) => {
        setMusicStr(e.target.value);
      }}></textarea>
      <div></div>
      <div className={style.footer}><input onChange={(e) => { setFile(e.target.files[0]) }} type="file" name="fileName" size="40000" multiple /><button onClick={() => {
        uploadFile(file)
      }} >提交</button></div>

    </div>
  )
}

export default Hello