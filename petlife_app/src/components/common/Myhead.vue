<template>
<!-- "我的"页面的头部分 -->
  <div class="rootStyle">
    <div>
      <img :src="imgurl1" class="setting">
      <div class="leftimgandlablestyle">
        <!-- <img :src="imgurl" alt="" class="imgStyle"> -->
        <!-- 使用vant Image 图片中的圆形图片 -->
        <van-image round width="60px" height="60px" :src="imgurl" />
        <div class="rightOfImg">
          <span class="titleable">萌萌</span>
          <span class="subtitle">这个人很懒,什么都没留下</span>
        </div>
      </div> 
    </div>
    <van-button size="large" class="myButton">0 收藏 | 0 关注 | 0 粉丝</van-button>
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
    imgurl:{default:""}
  }
}
</script>
<style scoped>
  .rootStyle{
    display: flex;
    background-color: #ffd028;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .setting{
    position: absolute;
    top:30px;
    right:20px;
    width:30px;
    height:30px
  }
  .leftimgandlablestyle{
    display: flex;
    padding: 50px 0 40px 20px;
  }
  .imgStyle{
    display: flex;
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
  .myButton{
    position: absolute;
    top: 175px;
  }
</style>