import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

import './utils/antd'

new Vue({
  router,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
