<template>
<!-- 在该页面下选择登录方式 -->
  <div class="rootStyle">
    <van-icon name="arrow-left" class="v1"/>
    <span class="s1">选择登录方式</span> 
    <van-button type="primary" size="large">微信登录</van-button> 
    <span class="s2">使用其他方式登录</span>
    <span class="s3">已阅读并同意服务协议与隐私政策</span>
  </div>
</template>
<script>
export default {
  data(){
    return{
    }
  },
  props:{
  }  
}
</script>
<style scoped>
  .rootStyle{
    display: flex; 
    position: relative;
    justify-content:space-between;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
  }
  .v1{
    position: fixed;
    top:40px;
    left:20px;
  }
  .s1{
    color: #000;
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: bold;
  }
  .van-button{
    margin: 45px;
    font-size: 15px;
  }
  .van-button--large {
    width: 75%;
    height: 45px;
    line-height: 42px;
    letter-spacing: 1px;
    border-radius: 5px;
  }
  .s2{
    color: #1571FA;
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: bold;
    margin-top: 65px;
  }
  .s3{
    color: #ccc;
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: bold;
    margin-top: 150px;
  }
</style>