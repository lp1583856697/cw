import Vue from 'vue'
import Router from 'vue-router'
//1.功能:引入组件XXX.vue
//将vue文件引入当前router下的index.js
import Cart from '../components/views/Cart.vue'
import Me from '../components/views/Me.vue'
import Login from '../components/views/Login.vue'
import Community from "../components/views/Community.vue"
import Shopping from "../components/common/Shopping.vue"
import Login1 from "../components/common/Login1.vue"
import CartItem from '../components/common/CartItem.vue'

//2.为组件指定访问路径
Vue.use(Router)
export default new Router({
  routes: [
    {path:"/Login1",component:Login1},
    {path:"/Login",component:Login},
    {path:"/Me",component:Me},
    {path:"/Shopping",component:Shopping},
    {path:"/cart",component:Cart},
    {path:"/community",component:Community},
    {path:"/cartitem",component:CartItem}
  ]
})
