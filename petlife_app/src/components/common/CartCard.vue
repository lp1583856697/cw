<template>
  <div class="container">
    <!-- 一、上面的猜你喜欢 -->
    <div class="like">
      <div class="leftline"></div>
      <div class="text">
        <img :src="require('../../assets/like.png')" alt="">
        <span>猜你喜欢</span>
      </div>
      <div class="rightline"></div>
    </div>
    <!-- 下面的商品推荐 -->
    <div class="recommend">
      <div class="card" v-for="(item,i) of list" :key="i">
      <!-- 二、商品图片 -->
        <img :src="require('../../assets/'+list[i].pic)" alt="">
        <!-- 商品名称 -->
        <div class="title">{{item.title}}</div>  
        <!-- 价格 -->
        <div class="bottom">
          <span id="price">¥{{item.price}}</span>
          <span id="sale">已售{{item.sale}}件</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:[
        {title:"【Pure&Natural/伯纳天纯】伯纳天纯猫粮6.8kg*2袋",pic:"06.jpg",price:598,sale:0},
        {title:"【Hoopet/华元宠具】hoopet猫头猫砂垫米猫用品",pic:"03.jpg",price:46.9,sale:0},
        {title:"【Pure&Natural/伯纳天纯】伯纳天纯猫粮6.8kg*2袋",pic:"04.jpg",price:598,sale:0},
        {title:"【Hoopet/华元宠具】hoopet猫头猫砂垫米猫用品",pic:"05.jpg",price:46.9,sale:0}
      ]
    }
  }
}
</script>
<style scoped>
.container{
  background:#f9f7f9;
}
/* --猜你喜欢-- */
.like{
    display: flex;
    margin-top:-1px;
    margin-bottom:12px;
  }
  .like .leftline{
    display: flex;
    width:85px;
    border-bottom:1px solid #ccc;
    margin:0 16px 12px 35px;
    padding:5px;
  }
  .like .rightline{
    display: flex;
    width:85px;
    border-bottom:1px solid #ccc;
    margin:5px 16px 12px 18px;
  }
  /* 猜你喜欢文本 */
  .text{
    display: flex;
    align-items: center;
  }
  .like img{
    width:1.5rem;
  }
  .like .text span{
    font-size:12px;
    /* margin-bottom:2px;
    margin-left:5px; */
    margin:1px 0 5px 5px;
  } 
  /* 下面的推荐商品 */
  .recommend{
    display: flex;
    flex-wrap: nowrap;
  }
  .card{
    display: flex;
    width:12rem;height:15rem;
    border-radius: 10px;
    box-sizing: border-box;
    background:white;
    padding:15px;
    flex-direction: column;
    margin:0 3px 6px 3px;
  }
   .card img{
    width:9rem;
    height:9rem;
    margin:3px;
  }
  .card .title{
    margin:12px 0 5px;
    font-size:12px;
    line-height: 18px;
    height:36px;
  }
  .card #price{
    margin:0 40px 0 -10px;
    color:#ff8928;
    font-size:16px;
  }
  .card #sale{
    font-size:10px;
    color:#ccc;
  }
</style>