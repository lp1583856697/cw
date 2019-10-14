import Vue from 'vue'
import Router from 'vue-router'
// 1.进入组件XXX.vue
// 将vue文件引入当前router下的index.js
import Me from "../components/views/Me.vue"
import Cart from '../components/views/Cart.vue'
// 2.为组件指定访问路径
Vue.use(Router)
export default new Router({
  routes: [
    {path:"/Me",component:Me},
    {path:"/cart",component:Cart}
  ]
})
