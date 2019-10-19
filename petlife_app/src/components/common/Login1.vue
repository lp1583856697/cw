<template>
  <div class="login1">
    <van-icon name="arrow-left" class="v1"/>
    <img src="../../assets/img13.jpg" alt="" class="i1">
    <van-cell-group>
      <van-field v-model="phone"  :attr="{autofocus:true}" required clearable label="手机号" placeholder="请输入您的手机号" />
      <van-field v-model="upwd" type="password" label="密码" placeholder="请输入登录密码" required />
    </van-cell-group>
    <div class="d1">
      <span>忘记密码?</span>
      <span>注册账户</span>
    </div>
    <mt-button size="large" @click="login">登录</mt-button>
    <p>
      <img src="../../assets/img14.png" style="width:16px;height:16px;" alt="">
      手机验证码登录
    </p>
    <div class="d2">更多登录方式</div>
    <div class="d3">
      <img src="../../assets/wx.png" style="width:40px;height:40px;" alt="">
      <img src="../../assets/qq.png" style="width:40px;height:40px;" alt="">
      <img src="../../assets/zfb.png" style="width:40px;height:40px;" alt="">
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      phone:"",
      upwd:""
    }
  },
  methods:{
    login(){
      var p=this.phone;
      var preg=/^1[3-9]\d{9}$/;
      var u=this.upwd;
      var ureg=/^\w{6,18}$/;
      if(preg.test(p)==false){
        this.$messagebox("消息","手机号输入有误,请再次确认!");
        return;
      }
      if(ureg.test(u)==false){
        this.$messagebox("消息","密码输入有误,请再次确认!");
        return;
      }
    //4.发送ajax请求
      var url="login1";
      var obj={phone:p,upwd:u};
      //5.获取服务器返回结果
      this.axios.get(
        url,
        {params:obj}
      ).then(res=>{
        console.log(res.data.code);
        if(res.data.code<0){
          //6.登录失败提示消息
          this.$router.push("/Myreg");
        }else{
          //跳转Me组件
          this.$router.push("/Me");
        }
      })
    },
  }
}
</script>
<style scoped>
  .login1{ 
    position: relative;
    justify-content:space-between;
    flex-direction: column;
    align-items: center;
    top:70px;
    margin:0 40px;
  }
  .v1{
    position: fixed;
    top:40px;
    left:20px;
  }
  .i1{
    width: 70px;
    height: 70px;
    border-radius: 100%;
    margin-bottom: 40px;
  }
  .van-cell{
    font-size: 16px;
    letter-spacing: 2px;
    line-height: 30px;
    background-color: #F8F6F8; 
  }
  .d1{
    display: flex;
    justify-content: space-between;
    margin: 25px 35px 25px 35px;
  }
  span{
    color: #999;
    font-size: 16px;
  }
  .mint-button{
    color:#fff;
    background-color: #ddd;
    letter-spacing: 2px;
    border-radius: 10px;
    font-weight: 600;
    height: 45px;
  }
  p{
    font-size: 16px;
    color:#000;
    letter-spacing: 1px;
    margin-top:25px;
    font-weight: 500;
  }
  .d2{
    display: flex;
    justify-content: center;
    margin: 60px auto 25px;
    border-radius: 15px;
    background-color: #eee;
    font-size: 13px;
    color:#000;
    width: 130px;
    height: 24px;
    line-height: 24px;
  }
  .d3{
    display: flex;
    justify-content: space-around;
  }
</style>