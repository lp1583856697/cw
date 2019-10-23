<template>
  <div class="container">
    <!-- 一、上面的猜你喜欢 -->
    <div class="like">
        <van-divider :style="{ color: 'black', borderColor: '#ccc', padding: '0 16px' }">
          <img :src="require('../../assets/like.png')" alt="">
          猜你喜欢
        </van-divider>  
    </div>
    <!-- 下面的商品推荐 -->
    <div class="recommend">
      <div class="card" v-for="(item,i) of list" :key="i">
      <!-- 二、商品图片 -->
        <img :src="require('../../assets/images/'+list[i].pic)" alt="">
        <!-- 商品名称 -->
        <div class="title">{{item.title}}</div>  
        <!-- 价格 -->
        <div class="bottom">
          <span id="price">¥{{item.price}}</span>
          <span id="sale">已售{{item.sale}}件</span>
        </div>
      </div>
    </div>
    <!-- 底部的结算按钮 -->
    <van-submit-bar
      :price="0.00"
      button-text="结算(0)"
      @submit="onSubmit">
      <van-checkbox v-model="checkedAll" @change="selectAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>
<script>
export default {
  data(){
    return{
      checkedAll:false,
      list:[
        {title:"【Pure&Natural/伯纳天纯】伯纳天纯猫粮6.8kg*2袋",pic:"06.jpg",price:598,sale:0},
        {title:"【Hoopet/华元宠具】hoopet猫头猫砂垫米猫用品",pic:"03.jpg",price:46.9,sale:0},
        {title:"【Pure&Natural/伯纳天纯】伯纳天纯猫粮6.8kg*2袋",pic:"04.jpg",price:598,sale:0},
        {title:"【Hoopet/华元宠具】hoopet猫头猫砂垫米猫用品",pic:"05.jpg",price:46.9,sale:0},
        {title:"【Pure&Natural/伯纳天纯】伯纳天纯猫粮6.8kg*2袋",pic:"06.jpg",price:598,sale:0},
        {title:"【Hoopet/华元宠具】hoopet猫头猫砂垫米猫用品",pic:"03.jpg",price:46.9,sale:0},
        {title:"【Pure&Natural/伯纳天纯】伯纳天纯猫粮6.8kg*2袋",pic:"04.jpg",price:598,sale:0},
        {title:"【Hoopet/华元宠具】hoopet猫头猫砂垫米猫用品",pic:"05.jpg",price:46.9,sale:0}
      ]
    }
  },
  methods:{
    //1找到全选按钮的状态
      selectAll(event){
        //获取当前参数
        //2.获取当前全选按钮的状态
        var all=event.target.checked;
        console.log(all)
      }
  }
}
</script>
<style scoped>
.container{
  background:#f9f7f9;
  margin-bottom:7rem;
}
.like img{
    width:1.5rem;
}
  /* 下面的推荐商品 */
  /* 最外层元素 */
  .recommend{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .card{
    display: flex;
    width:48%;
    border-radius: 10px;
    margin:0 3px 6px 3px;
    box-sizing: border-box;
    background:white;
    padding:15px;
    flex-direction: column;
    min-height:225px;
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
  /* 底部复选框样式 */

  .van-submit-bar__price{
    color:#ff8928;
    font-size:14px;
  }
  .van-submit-bar__button {
    width:88px;height:30px;
    border-radius: 22px;
    background: #ffd028;
    color:black;
    font-size:14px;
    border:1px solid #ffd028;
  }
  .van-button--large{
    line-height: 30px;
  }
  .van-submit-bar__bar{
    padding:9px 11px;
  }
  .van-submit-bar {
    bottom: 46px;
  }
  /* .van-checkbox__icon .van-checkbox__icon--round .van-checkbox__icon--checked{
    color: #ccc;
    background-color: white;
    border-color: #ccc
  } */
 
</style>