<template>
<!-- 导航四:"我的"页面中工具部分 -->
  <div class="nav">
    <div class="floor3">
      <span class="order">我的工具</span>
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
        {pic:"img5.jpg",text:"健康"},
        {pic:"img6.jpg",text:"我的拼团"},
        {pic:"img7.jpg",text:"他秀"},
        {pic:"img8.jpg",text:"知识库"},
        {pic:"img9.jpg",text:"宠友帮"},
        {pic:"img10.jpg",text:"我的宠物"},
        {pic:"img11.jpg",text:"宠物宝典"},
        {pic:"img12.jpg",text:"收货地址"}
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
    /* margin:0 auto; */
    padding:15px 0;
    position:relative;
    top:60px;
    margin:0 15px 65px 15px;
    
  }
  .floor3{
    display: flex;
    justify-content: space-between;
    margin: 0 15px;
  }
  .order{
    color: #000;
    font-size: 16px;
    font-weight: bold;
  }
  ul{
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  li a{
    display:flex;
    flex-direction: column;
    align-items: center;
  }
  img{
    width: 60px;
    height: 60px;
    padding: 0 12px;
    margin-bottom:4px; 
    border-radius: 100%;  
  }
  .text{
    color: #333;
    font-size: 12px;
  }
</style>