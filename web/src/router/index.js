import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home')
  },
  {
    path: '/detail/:id',
    name: 'home',
    component: () => import('../views/detail')
  },
  {
    hello
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
