<template>
<!-- 导航三:"我的"页面中钱包部分 -->
  <div class="nav">
    <div class="floor2">
      <span class="order">我的钱包</span>
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
        {pic:"img1.jpg",text:"账户余额"},
        {pic:"img2.jpg",text:"邀请有礼"},
        {pic:"img3.jpg",text:"我的优惠券"},
        {pic:"img4.jpg",text:"积分"}
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
    padding:15px 0;
    position:relative;
    top:45px;
  }
  .floor2{
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
  }
  li a{
    display:flex;
    flex-direction: column;
    align-items: center;
  }
  img{
    width: 45px;
    height: 45px;
    margin-bottom:5px;
    border-radius: 100%;   
  }
  .text{
    color: #333;
    font-size: 12px;
  }
</style>