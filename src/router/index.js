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
    component: () => import('../view/databaseResult.vue')//稍后自行修改！！
  },
  {
    path: '/software',
    name: 'software',
    component: () => import( '../view/softwareSearch.vue')
  },
  {
    path: '/databaseResult',
    name: 'databaseResult',
    component: () => import( '../view/databaseResult.vue')
  },
  {
    path: '/databaseCard',
    name: 'databaseCard',
    component: () => import( '../view/databaseCard.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
