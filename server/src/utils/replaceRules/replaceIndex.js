import replaceWordMap from "./replaceWord.js"
import replaceKeyWordMap from "./replaceKeyWord.js"

//先进行错误处理
const errorReplace = function (code, eslintRes) {
    let temp = code.split('\n');
    eslintRes.forEach((item) => {
        let value = errorType ? errorType.get(item.ruleld) : "A_1"//默认的错误输出音
        if (item.line === item.endLine) {//错误同一行
            temp[item.line - 1].split("").splice(item.column - 1, item.endColumn - 1,value).join("")
        } else {//错误不同行
            for (let i = item.line - 1; i <= item.endLine - 1; i++) {
                if(i===item.line-1){
                   temp[i]=temp[i].slice(0,item.column-1)
                }else if(i===item.endLine-1){
                    temp[i]=temp[i].slice(item.endLine-1,)
                }else{
                    temp[i]=value
                }
            }   
        }
    })
    return temp.join("")
}
//拿到经过错误处理后的代码字符串，返回最终拼接后的代码数字
const replaceIndex = function (code) {
    let codeArr=errorReplace(code).split(" ")
    for(let i=0;i<codeArr.length;i++){
        if(replaceKeyWordMap.has(codeArr[i])){
            codeArr[i]=replaceKeyWordMap.get(codeArr[i])
        }else{
            for(let j=0;i<codeArr[i].length;j++){
                codeArr[i]=codeArr[i].split("")
                codeArr[i][j]=replaceWordMap.get(codeArr[i][j])
                codeArr[i]=codeArr[i].join(" ")
            }
        }
    }
    return codeArr.join(" ")
}
// 下面是根据不同错误做不同替换，甚至唢呐声，目前不考虑
// const errorType=new Map([
//     ["max-nested-callbacks",1111]
// ])