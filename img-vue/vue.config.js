// 引入依赖
module.exports = {
  outputDir: "dist", //build输出目录
  assetsDir: "static", //静态资源目录（js, css, img）
  lintOnSave: false, //是否开启eslint
  devServer: {
    open: false,
    host: "0.0.0.0",
    port: 9876,
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: "http://localhost:5600/", //后端服务的接口
        changeOrigin: false, // 虚拟的站点需要更管origin
        pathRewrite: {
          "/api": "" // 路径重写清空
        }
      }
    }
  }
};
