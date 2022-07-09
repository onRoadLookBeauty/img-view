import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false // 关闭提示

import "./assets/css/reset.css"; //引入重置样式表

import ElementUI from 'element-ui'; //引入饿了么包
import 'element-ui/lib/theme-chalk/index.css'; //引入饿了么样式
Vue.use(ElementUI); // 使用饿了么UI

import router from './router/index' // 引入路由

import api from "./api/index" // 将封装的axios函数注册到原型链上
Vue.prototype.$api = api

new Vue({
    render: h => h(App),
    router // 挂载路由
}).$mount('#app')