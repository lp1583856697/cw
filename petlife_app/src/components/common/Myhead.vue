<template>
<!-- "我的"页面的头部分 包含头像/昵称/个性签名以及设置 -->
  <div class="rootStyle">
    <img :src="imgurl1" class="setting">
    <div class="leftimgandlablestyle">
      <!-- <img :src="imgurl" alt="" class="imgStyle"> -->
      <!-- 使用vant Image 图片中的圆形图片 -->
      <van-image round width="60px" height="60px" :src="imgurl" />
      <div class="rightOfImg">
        <span class="titleable">{{name}}</span>
        <span class="subtitle">{{speak}}</span>
      </div>
    </div> 
  </div>
</template>
<script>
export default {
  data(){
    return{
    }
  },
  props:{
    imgurl1:{default:""},
    imgurl:{default:""},
    name:{default:""},
    speak:{default:""}
  }
}
</script>
<style scoped>
  body{
    position: relative;
  }
  .rootStyle{
    display: flex;
    background-color: #ffd028;
    border-radius: 0 0 300px 300px/0 0 20px 20px; 
    justify-content: space-between;
    align-items: center;
  }
  .setting{
    position: absolute;
    top:40px;
    right:20px;
    width:30px;
    height:30px
  }
  .leftimgandlablestyle{
    display: flex;
    padding: 50px 0 40px 20px;
  }
  .rightOfImg{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left:15px;
  }
  .titleable{
    color: #000;
    font-size: 15px;
    font-weight: bold;
    text-align:left;
  }
  .subtitle{
    color:#333;
    font-size: 4px;
    margin-top:10px;
    text-align:left;
  }
</style>