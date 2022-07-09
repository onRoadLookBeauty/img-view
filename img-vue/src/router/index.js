import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // 注册路由

const router = new VueRouter({
    mode: 'history', // hash
    routes: [
        {
            path: "/",
            // redirect: "/homepage",
            component: resolve => require(['@/views/login.vue'], resolve)
        },
        {
            path: "/pc",
            component: resolve => require(['@/views/pc-view.vue'], resolve),
            meta: {
                name: "pc"
            }
        },
        {
            path: "/phone",
            component: resolve => require(['@/views/phone-view.vue'], resolve),
            meta: {
                name: "phone"
            }
        },
        {
            // 会匹配所有路径，这里定义一个404页面
            path: '*',
            component: resolve => require(['@/views/404.vue'], resolve),
            meta: {
                name: "404"
            },
            // redirect: "/homepage",  // 当然，也可以重定向到主页页面
        }
    ]
})
export default router
