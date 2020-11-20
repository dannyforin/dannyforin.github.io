const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const path = require('path')
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return
    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: ['/', '/home'],
          renderer: new Renderer({
            inject: {
              foo: 'bar'
            },
            headless: false,
            renderAfterTime: 20000,
            renderAfterDocumentEvent: 'render-event'
          })
        })
      ]
    }
  }
}
