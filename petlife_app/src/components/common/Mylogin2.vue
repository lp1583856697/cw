<template>
  <div class="login1">
    <van-icon name="arrow-left" class="v1"/>
    <img src="../../assets/img13.jpg" alt="" class="i1">
    <van-cell-group>
      <van-field v-model="phone"  :attr="{autofocus:true}" required clearable label="手机号" placeholder="请输入您的手机号" />
      <van-field v-model="upwd" type="password" label="密码" placeholder="请输入登录密码" required />
    </van-cell-group>
    <div class="floor1">
      <span>忘记密码?</span>
      <span>注册账户</span>
    </div>
    <mt-button size="large" @click="login">登录</mt-button>
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
      var url="login";
      var obj={phone:p,upwd:u};
      //5.获取服务器返回结果
      this.axios.get(
        url,
        {params:obj}
      ).then(res=>{
        console.log(res.data.code);
        if(res.data.code<0){
          //6.登录失败提示消息
          this.$messagebox("消息","手机号或密码错误");
        }else{
          //跳转Product组件
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
    top:65px;
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
    margin-bottom: 35px;
  }
  .van-cell{
    font-size: 14px;
    letter-spacing: 2px;
    line-height: 28px;
  }
  .floor1{
    display: flex;
    justify-content: space-between;
    margin: 20px 35px 20px 35px;
  }
  span{
    color: #999;
    font-size: 14px;
  }
  .mint-button{
    color:#fff;
    background-color: #ccc;
    letter-spacing: 2px;
    font-weight: 600;
    height: 45px;
  }
</style>