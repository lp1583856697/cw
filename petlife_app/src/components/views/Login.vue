<template>
<!-- 登录页面 -->
  <div>
    <mylogin1></mylogin1>
  </div>
</template>
<script>
// 引入子组件
import Mylogin1 from "../common/Mylogin1"
export default {
  data(){
    return{}
  },
  components:{
    "mylogin1":Mylogin1
  }
}
</script>