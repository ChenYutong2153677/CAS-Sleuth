import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../view/databaseSearch.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/database',
    name: 'database',
    component: () => import('../view/databaseResult.vue')
  },
  {
    path: '/virus/detail',
    name: 'virusDetail',
    component: () => import('../view/databaseResult.vue')
  },
  {
    path: '/software',
    name: 'software',
    component: () => import( '../view/softwareSearch.vue')
  },
  {
    path: '/databaseCard',
    name: 'databaseCard',
    component: () => import( '../view/databaseCard.vue')
  },
  {
    path: '/softwareProcess',
    name: 'softwareProcess',
    component: () => import( '../view/softwareProcess.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
