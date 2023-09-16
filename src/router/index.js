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
    component: () => import('../view/databaseSearch.vue')
  },
  {
    path: '/software',
    name: 'software',
    component: () => import( '../view/databaseSearch.vue')
  },
  {
    path: '/databaseResult',
    name: 'databaseResult',
    component: () => import( '../view/databaseResult.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
