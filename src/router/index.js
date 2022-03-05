import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../view/login/indexL')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
