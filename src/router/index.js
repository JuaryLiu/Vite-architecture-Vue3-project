import {createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path:'/home',
        name:'home',
        mate:{
            title: '登录',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@view/Home.vue')
    }
]

const router = createRouter({
    history:createWebHistory(), //import.meta.env.ENV_BASE_URL 当前的环境的请求地址
    routes,
})

export default router