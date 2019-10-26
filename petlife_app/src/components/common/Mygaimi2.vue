<template>
  <div class="Mygaimi2">
    <van-icon name="arrow-left" class="v1"  @click="exit"/>
    <div class="d1">修改登录密码</div>
     <van-field type="password" label="原密码:" placeholder="请输入原登录密码" />
     <van-field type="password" label="新密码:" placeholder="请输入新登录密码" />
     <van-field type="password" label="请确认:" placeholder="请确认新登录密码" />
    <van-button round type="info">确认</van-button>
  </div>
</template>
<script>
export default {
  data(){
    return{
    }
  },
  methods:{
    exit() {
      this.$router.push("/Myset");
    }
  }
}
</script>
<style scoped>
  .Mygaimi2{ 
    position: relative;
    justify-content:space-between;
    flex-direction: column;
    align-items: center;
    top:45px;
  }
  .d1{
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 50px;
  }
  .v1{
    position: fixed;
    top:40px;
    left:20px;
  }
  .van-cell{
    display: flex;
    font-size: 16px;
    line-height: 30px;
    padding-left: 0;
  }
  .van-button{
    height: 30px;
    background:#ffd028;
    font-size: 16px;
    line-height: 32px;
    font-weight: 600; 
    border: 0;
    margin-top: 30px;
    padding: 0 150px;
  }
</style>