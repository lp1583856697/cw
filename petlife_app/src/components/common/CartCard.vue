<template>
  <div >
    <!-- 一、上面的猜你喜欢 -->
    <div class="like">
      <div class="leftline"></div>
      <div class="text">
        <img :src="require('../../assets/like.png')" alt="">
        <span>猜你喜欢</span>
      </div>
      <div class="rightline"></div>
    </div >
    <!-- 下面的商品推荐 -->
    <div class="card" >
      <!-- 二、商品图片 -->
      <img :src="require('../../assets/06.jpg')" alt="">
      <!-- 商品名称 -->
      <div>【Pure&Natural/伯纳天纯】伯纳天纯猫粮6.8kg*2袋</div>
      <!-- 价格 -->
      <div class="bottom">
        <span id="price">¥550.00</span>
        <span id="sale">已售0件</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:[
        
      ]
    }
  }
}
</script>
<style scoped>
.like{
    display: flex;
    margin-top:18px;
    margin-bottom:12px;
  }
  .like .leftline{
    display: flex;
    width:85px;
    border-bottom:1px solid #ccc;
    margin:0 8px 20px 35px;
    padding:5px;
  }
  .like .rightline{
    display: flex;
    width:85px;
    border-bottom:1px solid #ccc;
    margin:5px 8px 20px 35px;
  }
   .like .text{
    vertical-align:top;
    box-sizing: border-box;
  } 
  .like img{
    width:1.5rem;
  }
  .like .text {
    text-align:center;
    margin-bottom:2px;
  }
  .card{
    width:12rem;height:18rem;
    border-radius: 5px;
    box-sizing: border-box;
    background:#ccc;
    border:1px solid #ccc;
    padding:2px;
  }
   .card img{
    width:11rem;
    margin-bottom:3px;
  }
  .card #price{
    margin:0 40px 0 -10px;
  }
</style>