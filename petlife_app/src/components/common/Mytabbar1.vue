<template>
<!-- 15px -->
  <div class="nav">
    <ul class="a1">
      <li>{{count1}} 收藏</li>|
      <li>{{count2}} 关注</li>|
      <li>{{count3}} 粉丝</li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  props:{
    count1:{default:""},
    count2:{default:""},
    count3:{default:""}
  }
}
</script>
<style scoped>
.nav{
  width:21.5rem;
  background-color: #fff;
  border-radius: 2px;
  margin:0 auto;
  padding:10px 0;
  position:relative;
  top:15px;
} 
.nav .a1{
  display:flex;
  justify-content: space-around;
  padding: 0 15px;
}
</style>