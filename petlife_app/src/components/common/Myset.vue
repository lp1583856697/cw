<template>
  <div class="Myset">
    <van-icon name="arrow-left" class="v1" @click="exit"/>
    <div class="d1">设置</div>
    <div class="d2">
        <div>修改登录密码</div>
        <div>
          <img src="../../assets/gm.png" alt="">
          <van-icon name="arrow" />
        </div>
    </div>
    <van-divider />
    <div class="d2">
        <div>关于我们</div>
        <div>
          <van-icon name="arrow" />
        </div>
    </div>
    <van-divider />
    <div class="d2">
        <div>客服电话</div>
        <div class="d3">
          <div>
            <img src="../../assets/kf.png" alt="">
          </div>
          <span class="s1">19906815936</span>
        </div>
    </div>
    <van-divider />
    <div class="d2">
        <div>常见问题</div>
        <div>
          <van-icon name="arrow" />
        </div>
    </div>
    <van-divider />
    <div class="d2">
        <div>清除缓存</div>
        <div style="color:#aaa;font-size:14px;">
          1.60MB
        </div>
    </div>
    <van-divider />
    <div class="d2">
        <div>已拉黑账号</div>
        <div>
          <van-icon name="arrow" />
        </div>
    </div>
    <van-divider />
    <van-button type="warning" size="large" @click="leave">退出当前登录账户</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    exit() {
      this.$router.push("/Me");
    },
    leave() {
      // 创建交互确认提示框
      this.$messagebox.confirm("确定要退出该登录账户吗?")
      if(this.$messagebox.confirm("确定要退出该登录账户吗?")==false){
        return false;
      }else{
        console.log("退出成功")
      }
    },
    showPopup() {
      this.show = true;
    }
  }
}
</script>
<style scoped>
  .Myset{ 
    position: relative;
    justify-content:space-between;
    flex-direction: column;
    top:45px;
    margin:0 10px;
  }
  .d1{
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 50px;
  }
  .d2{
    display: flex;
    justify-content: space-between;
    line-height: 32px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .v1{
    position: fixed;
    top:40px;
    left:20px;
  }
  .d3{
    display: flex;
    justify-content: space-between;
  }
  .s1{
    font-size: 14px;
    padding-left: 5px;
    color: #FD8D65;
    font-weight: normal;
  }
  .van-button{
    margin-top: 97px;
    font-size: 18px;
    letter-spacing: 1px;
    color: #fff;
    font-weight: bold;
  }
</style>