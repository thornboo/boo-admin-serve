import {createRouter, createWebHistory} from 'vue-router'

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/home',
            name: 'HomePage',
            component: () => import('@/views/home/index.vue')
        },
        {
            path: '/login',
            name: 'LoginPage',
            component: () => import('@/views/login/index.vue'),
            meta: {
                showNav: true
            }
        }
    ]
})

export default router