<template>
  <div class="Myreg1">
    <van-icon name="arrow-left" class="v1"  @click="exit"/>
    <div class="d1">注册</div>
    <van-cell-group>
      <van-field v-model="phone"  :attr="{autofocus:true}" required clearable label="手机号" placeholder="请输入您的手机号" />
      <van-cell-group>
        <van-field v-model="sms" center clearable label="短信验证" placeholder="请输入短信验证码" >
          <van-button slot="button" size="small" type="info">发送验证码</van-button>
        </van-field>
      </van-cell-group>
      <van-field v-model="upwd" type="password" label="密码" placeholder="6~18位数字/字母/下划线" required />
      <van-field v-model="ic" label="邀请码" placeholder="请输入邀请码 ( 选填 )" />
    </van-cell-group>
    <div class="d2">语音验证码</div>
    <van-checkbox v-model="checked" shape="square">   我已阅读并同意
      <a href="#">《它嗅宠物用户协议》</a>
    </van-checkbox>
    <mt-button size="large" @click="reg">立即注册</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      phone:"",
      sms:"",
      upwd:"",
      ic:"",
      checked:""
    }
  },
  methods:{
    exit:function () {
      this.$router.push("/Login1");
    },
    reg(){
      var p=this.phone;
      var preg=/^1[3-9]\d{9}$/;
      // var s=this.sms;
      // var sreg=/^\d{4}$/;
      var u=this.upwd;
      var ureg=/^\w{6,18}$/;
      var i=this.ic;
      var ireg=/^\w{10}$/;
      if(preg.test(p)==false){
        this.$messagebox("消息","手机号输入有误,请再次确认!");
        return;
      }
      // if(sreg.test(s)==false){
      //   this.$messagebox("消息","验证码输入有误,请再次确认!");
      //   return;
      // }
      if(ureg.test(u)==false){
        this.$messagebox("消息","密码输入有误,请再次确认!");
        return;
      }
      if(ireg.test(i)==true||ireg.test(i)==""){
        return;
      }
      //4.发送ajax请求
      var url="Myreg";
      var obj={phone:p,upwd:u,ic:i};
      //5.获取服务器返回结果
      this.axios.get(
        url,
        {params:obj}
      ).then(res=>{
        console.log(res.data.code);
        if(res.data.code<0){
          //6.注册失败提示消息
          sessionStorage.setItem("isReg",false);
          this.$router.push("/Myreg");
        }else{
          // sessionStorage里面第二个参数保存之后都会变成字符串""
          sessionStorage.setItem("isReg",true);
          this.$messagebox("消息","注册成功，请登录！");
          //跳转登录组件
          this.$router.push("/Login1");
        }
      })
    }
  }
}
</script>
<style scoped>
  .Myreg1{ 
    position: relative;
    justify-content:space-between;
    flex-direction: column;
    top:45px;
    margin:0 40px;
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
    line-height: 50px;
    /* background-color: #F8F6F8;  */
  }
  .van-button--small{
    border-radius: 15px;
    height: 30px;
    line-height: 30px;
  }
  .d2{
    font-size: 15px;
    color: #1571FA;
    font-weight: 600;
    margin:30px;
    text-align: end;
  }
  .van-checkbox{
    font-size: 13px;
    margin-bottom: 40px;
  }
  a{
    color: #1571FA;
  }
  .mint-button{
    color:#fff;
    background-color: #ddd;
    letter-spacing: 2px;
    border-radius: 10px;
    font-weight: 600;
    height: 45px;
  }
</style>