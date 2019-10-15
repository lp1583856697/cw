<!--购物车顶部-->
<template>
  <div class="container">
    <h3>购物车</h3>
    <div class="topbg">
      <img :src="require('../../assets/empcar.png')" alt="">
      <p id="p1">购物车空空如也</p>
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
    justify-content: center;
    align-items: center;
    border-radius:0 0 35% 35%;
    }
    h3{
      z-index: 5;
    }
</style>