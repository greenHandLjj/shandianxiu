module.exports = {
  configureWebpack: {
    resolve: {
      // 配置别名
      alias: {
        "assets": "@/assets",
        "components": "@/components",
        "router": "@/router",
        "store": "@/store",
        "views": "@/views",
      }
    }
  }
}