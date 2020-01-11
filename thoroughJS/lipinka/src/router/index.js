import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/pages/Home') // 首页路由
const login = () => import('@/pages/login') // 首页路由
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  ],
  // mode: 'hash'
})
