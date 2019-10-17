<template>
  <div id="app">
    <router-view/>
      <!--3:底部导航条 start-->
      <van-divider />
      <mt-tabbar fixed >
        <mt-tab-item id="tab[i]" @click.native="changeState(i)" v-for="(item,i) of tablist" :key="i">
          <img :src="require('./assets/'+tablist[i].pic)"/>
          <!-- :normalImage="require('./assets/community-ed.png')" -->
          <div><router-link :to="item.path">{{tablist[i].title}}</router-link></div>
        </mt-tab-item>
      </mt-tabbar>
      <!--3:底部导航条 end-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      tablist:[
        {
          pic:"community.png",
          title:"社区",
          path:"/community"
        },
        {
          pic:"community.png",
          title:"商城",
          path:"/shopping"
        },
        {
          pic:"community.png",
          title:"它秀",
          path:"/shopping"
        },
        {
          pic:"community.png",
          title:"购物车",
          path:"/cart"
        },
        {
          pic:"community.png",
          title:"我的",
          path:"/Me"
        }
      ]
    }
  },
  methods: {
    changeState(index){
      console.log("index:", index)
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom:2.6rem; /*把页面最后的内容挤上来*/
}
img{
  width:1.2rem;
  height:1rem;
  margin-bottom:.2rem;
}
.mint-tabbar>.mint-tab-item{
   color:#818181;
 } 
.mint-tabbar{
  background: #fff;
 }
.van-divider{
  position: fixed;
  left: 0;
  right: 0;
  z-index: 101;
  bottom: 46.8px;
  border-color: #cfd0d1;
  margin: 0;
}
</style>
