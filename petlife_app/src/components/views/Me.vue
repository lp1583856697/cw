<template>
  <div>
    <div>
      <myhead
      :imgurl1="require('../../assets/setting.png')" 
      :imgurl="require('../../assets/mm.jpg')" :name="name" :speak="speak"></myhead>
      <mytabbar :count1="count1" :count2="count2" :count3="count3"></mytabbar>
    </div>
  </div>
</template>
<script>
//负责引入子组件
import Mytabbar from "../common/Mytabbar"
import Myhead from "../common/Myhead"
export default {
  data(){
    return{
      name:"萌萌",
      speak:"这个人很懒,什么也没留下",
      count1:90,
      count2:6,
      count3:888
    }
  },
  components:{
    "myhead":Myhead,
    "mytabbar":Mytabbar,
  }
}
</script>
<style>
  body{ background:#f9f7f9 }
</style>