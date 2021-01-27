// 禁止用户以注释的方式屏蔽 eslint 操作

/* eslint-disable */

// 回调地狱
foo(function() {
  bar(function() {
    baz(function() {
      qux(function() {
      })
    })
  })
})


