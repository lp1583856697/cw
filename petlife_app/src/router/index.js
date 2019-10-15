import Vue from 'vue'
import Router from 'vue-router'
import Cart from '../components/views/Cart.vue'
import Community from "../components/views/Community.vue"

import Shopping from "../components/common/Shopping.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/Shopping",component:Shopping},
    {path:"/cart",component:Cart},
    {path:"/community",component:Community}
  ]
})
