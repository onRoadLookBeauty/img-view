// 引入express插件包并生成一个实例app
const express = require('express')
const app = express()

// 使用body-parser中间件解析post请求主体
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const Router = require('./router') // 引入分模块管理的路由

// 路由分模块
app.use(Router)

// 在9999端口上启动后端服务
app.listen(5600, (req,res) => {
    console.log('后端服务端口地址为：localhost:5600');
})
