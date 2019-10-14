import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 1.进入组件XXX.vue
// 将vue文件引入当前router下的index.js
import Me from "../components/Me.vue"
// 2.为组件指定访问路径
Vue.use(Router)
export default new Router({
  routes: [
    {path: '/Me',component: Me},
    {path: '/',component: HelloWorld}
  ]
})
