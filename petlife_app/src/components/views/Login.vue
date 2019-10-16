<template>
<!-- 登录页面 -->
  <div>
    <mylogin1></mylogin1>
    <mylogin2></mylogin2>
  </div>
</template>
<script>
// 引入子组件
import Mylogin1 from "../common/Mylogin1"
import Mylogin2 from "../common/Mylogin2"
export default {
  data(){
    return{}
  },
  components:{
    "mylogin1":Mylogin1,
    "mylogin2":Mylogin2,
  }
}
</script>