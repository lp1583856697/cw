<template>
  <div class="Mygaimi">
    <van-icon name="arrow-left" class="v1"  @click="exit"/>
    <div class="d1">忘记密码</div>
    <van-cell-group>
      <van-field v-model="phone" :attr="{autofocus:true}" required clearable label="手机号" placeholder="请输入您的手机号" />
      <van-cell-group>
        <van-field v-model="sms" center clearable label="短信验证" placeholder="请输入短信验证码" >
          <van-button slot="button" size="small" type="info">发送验证码</van-button>
        </van-field>
      </van-cell-group>
      <van-field v-model="upwd" type="password" label="密码" placeholder="6~18位数字/字母/下划线" required />
    </van-cell-group>
    <div class="d2">语音验证码</div>
    <mt-button size="large" @click="gaimi">确定</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      phone:"",
      sms:"",
      upwd:""
    }
  },
  methods:{
    exit() {
      this.$router.push("/Login1");
    },
    gaimi(){
      var p=this.phone;
      var preg=/^1[3-9]\d{9}$/;
      // var s=this.sms;
      // var sreg=/^\d{4}$/;
      var u=this.upwd;
      var ureg=/^\w{6,18}$/;
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
      //4.发送ajax请求
      var url="Mygaimi";
      var obj={phone:p,upwd:u};
      //5.获取服务器返回结果
      this.axios.get(
        url,
        {params:obj}
      ).then(res=>{
        console.log(res.data.code);
        if(res.data.code<0){
          //6.更改失败提示消息
          sessionStorage.setItem("isGaimi",false);
          this.$messagebox("请确认您输入的内容");
        }else{
          // sessionStorage里面第二个参数保存之后都会变成字符串""
          sessionStorage.setItem("isGaimi",true);
          //跳转登录组件
          this.$router.push("/Login1");
        }
      })
    }
  }
}
</script>
<style scoped>
  .Mygaimi{ 
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
  .mint-button{
    color:#fff;
    background-color: #ddd;
    letter-spacing: 2px;
    border-radius: 10px;
    font-weight: 600;
    height: 45px;
  }
</style>