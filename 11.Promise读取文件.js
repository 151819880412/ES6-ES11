const { rejects } = require('assert')
// 1.引入fs模块
const fs = require('fs')
const { resolve } = require('path')

// 2.调用方法读取文件
// fs.readFile('./README.md',(err,data)=>{
//   // 如果失败，抛出错误
//   if(err) throw err
//   // 如果没有错，输出内容
//   console.log(data.toString())
// })

// 3.使用promise封装
const p = new Promise((resolve,reject)=>{
  fs.readFile('./README.md',(err,data)=>{
    // 如果失败
    if(err) reject(err)
    // 如果成功
    resolve(data)
  })
})

p.then((value)=>{
  console.log(value.toString())
},(reason)=>{
  console.log('读取失败')
})