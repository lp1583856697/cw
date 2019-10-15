<template>
  <div>
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