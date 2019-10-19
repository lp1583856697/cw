<template>
  <div class="Myreg1">
    <van-icon name="arrow-left" class="v1"/>
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
    reg(){}
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