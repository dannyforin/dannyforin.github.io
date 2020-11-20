import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home')
  }
]

export default new Router({
  routes: routes,
  mode: history
})
