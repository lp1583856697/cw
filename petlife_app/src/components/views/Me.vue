<template>
  <div>
    <h3>我的页面</h3>
    <div>
      <myhead :imgurl="require('../../assets/mm.jpg')"></myhead>
    </div>
  </div>
</template>
<script>
//负责引入Myhead子组件
import Myhead from "../common/Myhead"
export default {
  data(){
    return{
      
    }
  },
  components:{
    "myhead":Myhead
  }
}
</script>