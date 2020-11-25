import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入Home组件
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  // 路由配置
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 路由的懒加载
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  // base: process.env.BASE_URL,
  routes
})

export default router