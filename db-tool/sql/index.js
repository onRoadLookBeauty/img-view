// 引入mysql数据库
var mysql = require('mysql')
// 数据库连接池的配置
var pool = mysql.createPool({
  connectionLimit: 10,  // 连接池的大小
  host: 'localhost', // 主机名
  user: 'db-tool',  // 用户名
  password: '123456', // 密码
  database: 'my-tool' // 数据库名称 在数据库里面建立了一个my-tool数据库，里面有很多表格
});
// 暴露连接池
module.exports = pool
