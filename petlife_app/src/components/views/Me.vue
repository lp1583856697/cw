<template>
  <div>
    <div>
      <myhead
      :imgurl1="require('../../assets/setting.png')" :imgurl="require('../../assets/mm.jpg')" :name="name" :speak="speak"></myhead>
      <mytabbar1 :count1="count1" :count2="count2" :count3="count3"></mytabbar1>
      <mytabbar2></mytabbar2>
      <mytabbar3></mytabbar3>
      <mytabbar4></mytabbar4>
    </div>
  </div>
</template>
<script>
//负责引入子组件
import Mytabbar4 from "../common/Mytabbar4"
import Mytabbar3 from "../common/Mytabbar3"
import Mytabbar2 from "../common/Mytabbar2"
import Mytabbar1 from "../common/Mytabbar1"
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
    "mytabbar1":Mytabbar1,
    "mytabbar2":Mytabbar2,
    "mytabbar3":Mytabbar3,
    "mytabbar4":Mytabbar4,
  }
}
</script>
<style>
  body{ background:#f9f7f9 }
</style>