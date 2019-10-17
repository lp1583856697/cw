<template>
  <div class="container" >
    <div class="item" v-for="(item,i) of list" :key="i">
      <!-- 商品复选框-->
      <div class="checkbox">
        <van-checkbox @change="itemSelect" v-model="checked" checked-color="#ddd"></van-checkbox>
      </div>
      <!-- 图片 -->
      <img :src="require('../../assets/images/'+list[i].pic+'.jpg')" alt="">
      <!-- 右侧文字 -->
      <div class="rightcontent"> 
        <div class="name">
          {{item.name}}
        </div>
        <div class="subname">{{item.subname}}</div>
        <div><mt-button>普通</mt-button></div>
        <div class="price">
          <span>¥{{item.price}}</span>
          <van-stepper v-model="value" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      checked:false,//全选按钮状态
      value:1,
      //购物车列表
      list:[
        {pic:"goods2",name:"【luscious/路斯】猫用小鱼干50g*3盒",subname:"公鱼原味,50g*3盒",price:"45.90"},
        {pic:"goods2",name:"【luscious/路斯】猫用小鱼干50g*3盒",subname:"公鱼原味,50g*3盒",price:"45.90"},
        {pic:"goods2",name:"【luscious/路斯】猫用小鱼干50g*3盒",subname:"公鱼原味,50g*3盒",price:"45.90"}
      ]
    }
  }
}
</script>
<style scoped>
.container{
  background:#f9f7f9;
}
.item{
  width:357px;
  height:138px;
  display: flex;
  margin:8px auto;
  border-radius: 12px;
  background:white;
  z-index:1; 
  
}
/* 复选框样式 */
.item .checkbox{
  margin:58px 5px;
}
.item img{
  height:7rem;
  margin:10px 14px;
}
/* 右侧div文本内容 */
.rightcontent{
  text-align: left;
  box-sizing: border-box;
  padding:12px 5px 5px 20px;
}
/* 右侧标题 */
 .rightcontent .name{
  font-size: 14px;
  padding-right: 10px;
  margin-bottom: 3px;
  position: relative;
} 
/* 右侧副标题 */
.rightcontent .subname{
  font-size:8px;
  color:#ccc;
  margin-bottom:5px;
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