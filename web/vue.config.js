const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(
        // 預渲染插件配置
        new PrerenderSpaPlugin({
          // 靜態資源路徑
          staticDir: path.join(__dirname, 'dist'),
          // 預渲染路由
          routes: ['/home']
        })
      )
    }
  }
}
