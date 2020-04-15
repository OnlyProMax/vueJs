import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/services',
    name:'services',
    component: () => import(/* webpackChunkName: "services" */ '../views/Service.vue')
  },
  {
    path:'/fotos/:id',
    name:'fotos',
    component: () => import(/* webpackChunkName: "fotos" */ '../views/Fotos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
