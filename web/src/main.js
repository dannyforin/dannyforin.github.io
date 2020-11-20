import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

import './utils/antd'

new Vue({
  router,
  render: h => h(App),
  mounted() {
    setTimeout(() => {
      document.dispatchEvent(new Event('render-event'))
    }, 20000)
  }
}).$mount('#app')
