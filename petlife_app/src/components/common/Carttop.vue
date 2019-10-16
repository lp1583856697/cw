<!--购物车顶部-->
<template>
  <div class="container">
    <h4>购物车</h4>
    <div class="topbg">
      <img :src="require('../../assets/empcar.png')" alt="">
      <h3 id="p1">购物车空空如也</h3>
      <p>再忙，也要记得买点什么犒赏您的爱宠</p>
      <a href="">
        <mt-button>去逛逛</mt-button>
      </a>
    </div>
  </div>
</template>
<style scoped>
  .container{
    display: flex;
    background:#ffd028;
    border-radius:0 0 35% 35%;
    text-align: center;
    flex-direction: column;
    }
    h4{
     text-align: center;
    } 
    
</style>