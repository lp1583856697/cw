<template>
  <div id="app">
    <router-view/>
      <!--3:底部导航条 start-->
      <div v-if="hideArr.indexOf($route.path) === -1">
        <van-divider />
        <mt-tabbar v-model="selected" fixed>
          <mt-tab-item :id="item.id" v-for="(item,i) of tablist" :key="i">
            <img :src="require('./assets/'+tablist[i].pic)"/>
            <div>{{item.title}}</div>
          </mt-tab-item>
        </mt-tabbar>
      </div>
      <!--3:底部导航条 end-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    // console.log("this.$route.path", this.$route.path)
    return {
      // 如果this.$route.path为community或shopping...其中一个,则this.$route.path.substring(1)都为true,选中当前为true的id。如果this.$route.path为"/",则this.$route.path.substring(1)为false,执行第二个条件语句,选中community
      hideArr: ["/Login", "/Login1", "/Details", "/login", "/login1", "/details"],
      selected:this.$route.path.substring(1) || "community",
      tablist:[
        {
          pic:"community.png",
          title:"社区",
          id:"community"
        },
        {
          pic:"community.png",
          title:"商城",
          id:"shopping"
        },
        {
          pic:"community.png",
          title:"它秀",
          id:"Release"
        },
        {
          pic:"community.png",
          title:"购物车",
          id:"cart"
        },
        {
          pic:"community.png",
          title:"我的",
          id:"Me"
        }
      ]
    }
  },
  created(){
    
  },
  watch: {
    selected:function(val,oldVal){
      // 这里就可以通过 val 的值变更来确定去向
      // console.log("点了");
      switch (val){
        case "community":
        case "shopping":
        case "Release":
          this.$router.push("/"+val);
          break;
        case "cart":
        case "Me":
          if(sessionStorage.isLogin=="true"){
            this.$router.push("/"+val);
          }else{
            this.$router.push({
              path: "/Login1",
              query: {oldPath : "/"+val } 
            });
          }
          break;
      }
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
  margin-bottom:2.6rem; 
  /*把页面最后的内容挤上来*/
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
