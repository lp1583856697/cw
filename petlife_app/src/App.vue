<template>
  <div id="app">
    <router-view />
    <!--3:底部导航条 start-->
    <div v-if="hideArr.indexOf($route.path) === -1">
      <van-divider />
      <!-- 用户点击了tabbar之后，选中的tabbar-item的id就会赋值给selected变量，通过watch监听selected的变化，当selected变化时，自动触发定义的selected函数-->
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item :id="item.id" v-for="(item,i) of tablist" :key="i">
          <img :src="require('./assets/'+tablist[i].pic)" />
          <div>{{item.title}}</div>
        </mt-tab-item>
      </mt-tabbar>
    </div>
    <!--3:底部导航条 end-->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      hideArr: [
        "/Login",
        "/Login1",
        "/Details",
        "/login",
        "/login1",
        "/details",
        "/Myreg",
        "/myreg",
        "/Myset",
        "/myset",
        "/Mygaimi",
        "/mygaimi",
        "/Mygaimi2",
        "/mygaimi2"
      ],
      //给selected了一个初始值，这时selected的值发生了变化(model)，页面上的视图也会相应变化
      selected: this.$route.path.substring(1) || "community",
      tablist: [
        {
          pic: "community.svg",
          title: "社区",
          id: "community"
        },
        {
          pic: "store.svg",
          title: "商城",
          id: "shopping"
        },
        {
          pic: "camera.svg",
          title: "它秀",
          id: "Release"
        },
        {
          pic: "cart.svg",
          title: "购物车",
          id: "cart"
        },
        {
          pic: "my.svg",
          title: "我的",
          id: "Me"
        }
      ]
    };
  },
  created() {
    this.init();
  }, 
  methods:{
    // 如果用户从地址栏输入url,也判断是否登录
    init:function(){
      console.log(this.$route);
      switch (this.$route.path) {
        case "/Me":
        case "/me":
          if (sessionStorage.isLogin == "true"){
            this.$router.push("/Me");
          }else{
            this.$router.push("/Login");
          }
      }
    }
  },
  watch: {
            // selectedId是当前选中的tabbar-item的id
            // oldselectedId 上一次选中的tabbar-item的id
            //selected函数不是自己调用，是selected的值发生变化后自动触发函数
    selected: function(selectedId, oldselectedId) {
      // console.log(selectedId, oldselectedId);
      switch (selectedId) {
        case "community":  //case后面的是可选的id,选中项变化之后，意味着url变了，当前页面跳转
        case "shopping":
        case "Release":
          this.$router.push("/" + selectedId);
          break;
        case "cart":
        case "Me":
          //如果用户点底部导航栏进购物车或me,判断是否登录
          if (sessionStorage.isLogin == "true") {
            this.$router.push("/" + selectedId);
          } else {
            sessionStorage.setItem("oldPath","/"+selectedId);
            // console.log(sessionStorage.oldPath);
            this.$router.push({
              path: "/Login",
              //oldPath是为了解决登陆之后还要再跳回到原来页面，把oldPath传到Login1组件里面，判断登陆成功后跳转
              // query: { oldPath: "/" + selectedId }
            });
          }
          break;
      }
    },
    //$route: 等效于BOM中的location，指代地址栏中的url信息
    //当url变化的时候，取到url的信息，加工处理后赋值给了selected变量，从而引起页面上tabbar选中项的变化
    $route: function(new$route,old$route){
      this.selected = new$route.path.substring(1) || "community";
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 3rem;
  /*把页面最后的内容挤上来*/
}
img {
  height: 1.3rem;
  margin-bottom: 0.2rem;
}
.mint-tabbar > .mint-tab-item {
  color: #818181;
}
.mint-tabbar {
  background: #fff;
}
.van-divider {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 101;
  bottom: 46.8px;
  border-color: #cfd0d1;
  margin: 0;
}
</style>
