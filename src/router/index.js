import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
