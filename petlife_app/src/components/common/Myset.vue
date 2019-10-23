<template>
  <div class="Myset">
    <van-icon name="arrow-left" class="v1"/>
    <div class="d1">设置</div>
    <div class="d2">
        <div>修改登录密码</div>
        <div>
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
        <div>
          <van-icon name="arrow" />
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
        <div>
          <van-icon name="arrow" />
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
    <van-button type="warning" size="large">退出当前登录账户</van-button>
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
    line-height: 30px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .v1{
    position: fixed;
    top:40px;
    left:20px;
  }
  .van-button{
    margin-top: 100px;
  }
</style>