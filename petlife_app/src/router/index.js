import Vue from 'vue'
import Router from 'vue-router'
import Cart from '../components/views/Cart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/cart",component:Cart}
  ]
})
