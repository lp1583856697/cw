<template>
<!-- 导航二:"我的"页面中订单部分 -->
  <div class="nav">
    <div class="floor1">
      <span class="order">我的订单</span>
      <span class="all">查看全部
        <van-icon name="arrow" />
      </span>
    </div>
    <ul>
      <li v-for="(item,i) of navlist" :key="i">
        <router-link to="">
        <img :src="require('../../assets/'+navlist[i].pic)">
        <span class="text">{{navlist[i].text}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      navlist:[
        {pic:"pay1.png",text:"待付款"},
        {pic:"pay2.png",text:"待发货"},
        {pic:"pay3.png",text:"待收货"},
        {pic:"pay4.png",text:"已完成"},
        {pic:"pay5.png",text:"退款/售后"}
        ]
    }
  },
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
    top:30px;
  }
  .floor1{
    display: flex;
    justify-content: space-between;
    margin: 0 15px 10px 15px;
  }
  .order{
    color: #000;
    font-size: 15px;
    font-weight: bold;
  }
  .all{
    color: #666;
    font-size: 10px;
  }
  ul{
    display:flex;
    justify-content: space-around;
  }
  li a{
    display:flex;
    flex-direction: column;
    align-items: center;
  }
  img{
    width: 20px;
    height: 20px;
    margin-bottom:5px;   
  }
  .text{
    color: #333;
    font-size: 10px;
  }
</style>