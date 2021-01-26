# 开发者 docs

## 前端(客户端)部分

### 目录结构介绍

```
client                         
├─ public                        // 公共目录，网站一些基础配置、可以存放图片等资源，这部分代码不会被 webpack 处理（建议不要直接保存图片，走 CDN 链接最好）          
│  ├─ index.html                
│  ├─ manifest.json            
│  └─ robots.txt               
├─ src                           // 代码区        
│  ├─ components                 // 需要单独抽离的组件需要存放在这里，一个组件一个文件夹，文件名大写
│  │  └─ Hello                   // 案例组件，可删除            
│  │     ├─ Hello.js           
│  │     └─ hello.module.scss    // 我们使用 css module + sass，用法很简单，看看 Hello 组件示例就可以了
│  ├─ pages                      // 页面文件存放在这里  我们暂时先搞两个页面（欢迎页 -- Landing + 首页 -- Home）
│  │  ├─ Home                    // 一个页面一个文件夹，文件名大写          
│  │  │  └─ Home.js     
│  │  ├─ Landing               
│  │  │  └─ Landing.js         
│  │  └─ index.js               // 页面组件出口          
│  ├─ router                    // 路由配置，已经配好，无需额外操作。 其中 / 对于 Landing（欢迎页） 页面组件  /home 对应首页       
│  │  ├─ index.js              
│  │  └─ MainRouter.js         
│  ├─ utils                     //  一些工具方法，如数学计算、字符串处理函数 可以在这个文件夹里面创建
│  ├─ App.js                    //  App 组件，不用管          
│  └─ index.js                  //  根组件，不用管          
├─ package.json                
├─ README.md                   
└─ yarn.lock                   
```

### 要实现的功能

见 issue 部分

### TIPS

只要在对应的页面创建组件、写逻辑即可。

## 后端部分

### 目录结构

```
server                      
├─ src                      
│  ├─ common                    // 一些常量存放在这里
│  │  └─ config.js          
│  ├─ core                      
│  │  └─ errorHandler.js        // 全局错误处理
│  ├─ middleware                // 保存中间件，实现业务逻辑的核心
│  │  ├─ codeAnalysis.js        // 代码分析的业务逻辑在这个模块实现
│  │  ├─ codeUpload.js          // 代码上传处理业务逻辑在这个模块实现
│  │  └─ musicGenerate.js       // 生成音乐（谱子）的业务逻辑在这个模块实现
│  ├─ router                    // 路由，路由的处理下面再提
│  │  ├─ index.js               
│  │  └─ music.js             
│  ├─ utils                     // 一些工具方法，如数学计算、字符串处理函数 可以在这个文件夹里面创建
│  │  └─ createResponse.js      // 统一响应处理
│  ├─ app.js                    // app 对象在这里生成
│  └─ index.js                  // 项目入口
├─ package.json             
└─ yarn.lock                
```

### 要实现的功能

见 issue 部分

### TIPS

- 在 router 目录下新建 `xxx.js`
- 导入 `const Router = require('koa-router')`
- 初始化 Router，可自定义名称，下面的 music 表示基础前缀，常用来给接口分类：

```javascript
const musicRouter = new Router({ prefix: '/music' })
```

- 那么如果要达到前端调用 `localhost:8000/get_by_upload` 实现上传代码文件并生成音乐、调用 `localhost:8000/get_by_code` 实现直接 post 代码上传音乐，则可以这样写：

```javascript
// 上传方式分析代码 && 生成音乐
musicRouter.post('/get_by_upload', codeUpload, codeAnalysis, musicGenerate)

// 直接 post 代码 && 生成音乐
musicRouter.post('/get_by_code', codeAnalysis, musicGenerate)
```

- 其中第二个参数开始为中间件函数，它们会被顺序执行，例如第一行，在用户调用该接口时，会执行：
    - codeUpload 中间件
    - codeAnalysis 中间件
    - musicGenerate 中间件

其中中间件的代码如下所示，中间件全部采用异步函数，调用下一个中间件使用 `await next()` 即可：

```javascript
const codeUpload = async (ctx, next) => {
  // 文件上传
  console.log('在这里写文件上传处理的逻辑')
  await next()
}

module.exports = {
  codeUpload
}
```

在恰当的时候给 `ctx.body` 赋值，基于 `createResponse` 函数来构造返回内容（第一个参数为错误代码 -- code 字段，第二个参数为返回信息 -- message 字段，第三个参数为数据 -- data 字段）：

```javascript
const codeUpload = async (ctx, next) => {
  // 文件上传
  ctx.body = createResponse(
    null,
    '生成成功~', {
      'music': '11 55 66 5 44 33 22 1'
    })
  await next()
}
```

客户端将会接收到如下的数据：

```json
{
  "code": "00000",
  "message": "生成成功~",
  "data": {
    "music": "11 55 66 5 44 33 22 1"
  }
}
```

- 最后导出 musicRouter（上面的例子）即可，项目会自动帮你注册该路由：

```javascript
module.exports = musicRouter
```