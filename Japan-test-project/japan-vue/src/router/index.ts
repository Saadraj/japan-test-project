import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/modeltype',
    name: 'ModelType',
    component: () => import(/* webpackChunkName: "about" */ '../views/modeltype.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/modeldata',
    name: 'ModelData',
    component: () => import(/* webpackChunkName: "about" */ '../views/modeldata.vue')
  },
  {
    path: '/devicemodel',
    name: 'DeviceModel',
    component: () => import(/* webpackChunkName: "about" */ '../views/devicemodel.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
