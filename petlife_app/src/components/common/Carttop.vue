<!--购物车顶部-->
<template>
  <div class="container">
    <div class="headcart">
      <!-- 顶部固定栏-->
      <div class="flexcart">
        <h3>购物车</h3>
      </div>
    </div>
    <div class="cart">
      <img :src="require('../../assets/empcar.png')" alt="">
      <h4 id="p1">购物车空空如也</h4>
      <p>再忙，也要记得买点什么犒赏您的爱宠</p>
      <a href="">
        <mt-button>去逛逛</mt-button>
      </a>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
  .container{
    display: flex;
    text-align: center;
    flex-direction: column;
    background:#f9f7f9;
    }
    /* 顶部黄色背景 */
    .headcart{
      height:134px;
      background:#ffd028;
      border-radius:0 0 300px 300px/0 0 20px 20px;
    }
    .container .headcart .flexcart{
      background:#ffd028;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
    }
    h3{
      margin:42px 0 30px;
      text-align: center;
      font-size:20px;
    }
    
    /* 购物车图片 */
    .cart img{
      width:6rem;
      margin:5px 0 -5px 0;
    }
    .cart p{
      font-size:14px;
      color:#ccc;
    }
    .mint-button{
      border-radius: 30px;
      font-size: 14px;
      width:88px;
      height: 30px;
      background:#ffd028;
      color:white;
      margin-bottom:15px;
    }
</style>