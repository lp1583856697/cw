<template>
  <div class="container">
    <div class="leftline"></div>
    <div class="text">
      <img :src="require('../../assets/like.png')" alt="">
      <span>猜你喜欢</span>
    </div>
    <div class="rightline"></div>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  }
}
</script>
<style scoped>
  .container{
    display: flex;
    margin-top:18px;
    margin-bottom:12px;
  }
  .leftline{
    display: flex;
    width:85px;
    border-bottom:1px solid #ccc;
    margin:0 8px 20px 35px;
    padding:5px;
  }
  .rightline{
    display: flex;
    width:85px;
    border-bottom:1px solid #ccc;
    margin:5px 8px 20px 35px;
  }
   .text{
    align-items: center;
    box-sizing: border-box;
  } 
  img{
    width:1.5rem;
  }
  .text span{
    text-align:center;
    margin-bottom:2px;
  }
</style>