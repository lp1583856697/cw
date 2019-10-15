<template>
  <div class="rootStyle">
    <div class="leftimgandlablestyle">
      <img :src="imgurl" alt="" class="imgStyle">
      <div class="rightOfImg">
        <span class="titleable">萌萌</span>
        <span class="subtitle">这个人很懒,什么都没留下</span>
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
  .leftimgandlablestyle{
    display: flex;
    padding-top: 40px;
    padding-left: 15px;
  }
  .imgStyle{
    /* display: flex; */
    width: 60px;
    height: 60px;
    border-radius: 50%;
    /* padding:30px; */
  }
  .rightOfImg{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left:10px;
  }
  .titleable{
    color: #000;
    font-size: 17px;
    font-weight: bold;
    text-align:left;
  }
  .subtitle{
    color:#333;
    margin-top:4px;
    text-align:left;
  }
</style>