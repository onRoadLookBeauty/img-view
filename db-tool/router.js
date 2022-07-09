const express = require('express')
const route = express.Router() // 实例化一个路由对象


// 引入连接池
const pool = require('./sql/index')

// 引入工具包
const util = require('./util/index')

route.get('/test', (req, res) => {
  res.send('测试')
})
// 分页排序接口（带有模糊搜索查询）
route.get('/getTableData', (req, res) => {

  // console.log('请求参数', req.query);
  /* 一般的分页参数一共有四个:排序字段、排序方式、第几页、每页几条 */
  // 分页查询格式： select * from table limit (start-1)*limit,limit;
  // let sql = "select * from people_table ORDER BY age ASC LIMIT 0,2"
  // let sql = "select * from people_table"
  // 又因为这个接口带有模糊查询，所以使用like模糊查询searchWord

  let sql = `SELECT id,url FROM yellow_images WHERE id > ${(req.query.pageIndex - 1) * (req.query.pageSize)} ORDER BY id  LIMIT ${req.query.pageSize}` // 拼接sql语句

  console.log('拼接好的sql语句',sql);

  pool.getConnection(function (err, connection) {
    if (err) { throw err }
    connection.query(sql, function (error, results, fields) {
      connection.release()
      let apiRes = {
        code: 0,
        msg: "成功",
        data: results
      }
      res.send(apiRes)
    })
  })
})

// 查询总条目数接口
route.get("/getTotalCount", (req, res) => {
  // pool.getConnection(function (err, connection) {
  //   if (err) { throw err }
  //   connection.query(`select count(*) as total from yellow_images`, function (error, results, fields) {
  //     connection.release()
  //     let apiRes = {
  //       code: 0,
  //       msg: "成功",
  //       data: results[0]
  //     }
  //     res.send(apiRes)
  //   })
  // })
  // 固定数目 索性写死
  let apiRes = {
    code: 0,
    msg: "成功",
    data: 2821776
  }
  res.send(apiRes)
})



module.exports = route // 暴露出去方便管理
