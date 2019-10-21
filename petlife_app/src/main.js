// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";

axios.defaults.baseURL="http://127.0.0.1:4006/";//请求服务器的基础路径
axios.defaults.withCredentials=true;//保存session信息
Vue.prototype.axios=axios;

//引入第三方组件库mint-ui
//完整引入所有组件
import MintUI from "mint-ui"
//单独引入样式文件
import "mint-ui/lib/style.css"
//将mint-ui注册vue实例
Vue.use(MintUI)

import Vant from "vant"
import "vant/lib/index.css"
Vue.use(Vant)

Vue.config.productionTip = false

// //引入Tab标签页
// import { Tab, Tabs } from 'vant';
// Vue.use(Tab).use(Tabs);
// // Grid 宫格
// import { Grid, GridItem } from 'vant';
// Vue.use(Grid).use(GridItem);
// //搜索框
// import { Search } from 'vant';
// Vue.use(Search);
// //轮播图
// import { Swipe, SwipeItem } from 'vant';
// Vue.use(Swipe).use(SwipeItem);
// Vue.config.productionTip = false
// //Icon图片
// import { Icon } from 'vant';
// Vue.use(Icon);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
