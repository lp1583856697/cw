import Vue from 'vue'
import Router from 'vue-router'
//1.功能:引入组件XXX.vue
//将vue文件引入当前router下的index.js
import Cart from '../components/views/Cart.vue'
import Community from "../components/views/Community.vue"

import Shopping from "../components/common/Shopping.vue"

//2.为组件指定访问路径
Vue.use(Router)
export default new Router({
  routes: [
    {path:"/Shopping",component:Shopping},
    {path:"/cart",component:Cart},
    {path:"/community",component:Community}
  ]
})
