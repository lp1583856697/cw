<template>
  <div class="container">
    <div class="checkbox">
      <van-checkbox v-model="checked"></van-checkbox>
    </div>
      <img :src="require('../../assets/images/goods2.jpg')" alt="">
      <!-- 右侧文字 -->
    <div class="rightcontent"> 
      <div class="name">
        【luscious/路斯】猫用小鱼干50g*3盒
      </div>
      <div class="subname">公鱼原味,50g*3盒</div>
      <div><mt-button>普通</mt-button></div>
      <div class="price">
        <span>¥45.90</span>
        <van-stepper v-model="value" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      checked:false,
      value:1
    }
  }
}
</script>
<style scoped>
.container{
  width:357px;
  height:138px;
  display: flex;
  margin:0 auto;
  border-radius: 12px; 
  background:darkkhaki;
}
/* 复选框样式 */
.container .checkbox{
  margin:58px 5px;
}
.van-checkbox__icon--checked .van-icon {
    color: #fff;
    background-color: #f9f7f9;
    border-color: #f9f7f9;
}
.container img{
  height:7rem;
  margin:10px 14px;
}
.rightcontent{
  text-align: left;
  box-sizing: border-box;
  padding:12px 5px 5px 20px;
}
 .rightcontent .name{
  font-size: 14px;
  padding-right: 10px;
  margin-bottom: 3px;
  position: relative;
  /* text-align: left; */
} 
.rightcontent .subname{
  font-size:8px;
  color:#ccc;
  margin-bottom:5px;
  /* text-align: left; */
}
.rightcontent .mint-button {
  width:48px;
  height:22px;
  font-size:7px;
  color:white;
  background: #ffd028;
  border-radius: 12px;
}
.container .rightcontent .price{
  display:flex;
  color:#ff333f;
  font-size:16px;
  margin-top:10px;
  justify-content: space-between;
} 
.rightcontent .van-stepper{
  border-radius: 8px;
  background: #f9f7f9;
  margin:-8px 5px 5px 0;
}

</style>