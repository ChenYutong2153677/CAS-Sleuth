import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../view/HomePage.vue')
  },
  {
    path: '/databaseSearch',
    name: 'databaseSearch',
    component: () => import('../view/databaseSearch.vue')
  },
  {
    path: '/database',
    name: 'database',
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
