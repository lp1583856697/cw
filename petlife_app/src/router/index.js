import Vue from 'vue'
import Router from 'vue-router'
// 禁止全局路由错误处理打印，这个也是vue-router开发者给出的解决方案：
// https://www.cnblogs.com/rever/p/11577322.html
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
};

//1.功能:引入组件XXX.vue
//将vue文件引入当前router下的index.js
import Cart from '../components/views/Cart.vue'
import Me from '../components/views/Me.vue'
import Login from '../components/views/Login.vue'
import Community from "../components/views/Community.vue"
import Shopping from "../components/common/Shopping.vue"
import Login1 from "../components/common/Login1.vue"
import CartItem from '../components/common/CartItem.vue'
import Myreg from "../components/common/Myreg.vue"
import Myset from "../components/common/Myset.vue"
import Mygaimi from '../components/common/Mygaimi.vue'
import Mygaimi2 from '../components/common/Mygaimi2.vue'
import Release from "../components/views/Release.vue"
import ReleaseTwo from "../components/common/ReleaseTwo.vue"
import ReleaseThree from "../components/common/ReleaseThree.vue"
import ReleaseFour from "../components/common/ReleaseFour.vue"
import ReleaseFive from "../components/common/ReleaseFive.vue"
import ReleaseOne from "../components/common/ReleaseOne.vue"
import Details from "../components/views/Details.vue"

//2.为组件指定访问路径
Vue.use(Router)
export default new Router({
  routes: [
	{path:"/ReleaseFive",component:ReleaseFive},
    {path:"/ReleaseOne",component:ReleaseOne},
    {path:"/ReleaseTwo",component:ReleaseTwo},
    {path:"/ReleaseThree",component:ReleaseThree},
    {path:"/ReleaseFour",component:ReleaseFour},
    {path:"/Release",component:Release},
    {path:"/Mygaim2",component:Mygaimi2},
    {path:"/Mygaimi",component:Mygaimi},
    {path:"/Myset",component:Myset},
    {path:"/Myreg",component:Myreg},
    {path:"/Login1",component:Login1},
    {path:"/Login",component:Login},
    {path:"/Me",component:Me},
    {path:"/Shopping",component:Shopping},
    {path:"/cart",component:Cart},
    {path:"/community",component:Community},
    {path:"/",component:Community},
    {path:"/cartitem",component:CartItem},
    {path:"/Details",component:Details}
  ]
})
