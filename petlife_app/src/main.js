// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//引入Mint-UI组件库
import MintUI from "mint-ui"
//引入mint-ui库中样式文件
import "mint-ui/lib/style.css"
//将mint-ui注册vue实例
Vue.use(MintUI)

//引入Vant组件库中轮播图组件
import { Swipe, SwipeItem } from 'vant';
//引入vant库中所有样式文件
import "vant/lib/index.css"
//将Swipe/SwipeItem注册vue实例
Vue.use(Swipe).use(SwipeItem);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
