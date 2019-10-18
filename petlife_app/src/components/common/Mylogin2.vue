<template>
  <div class="rootStyle">
    <van-icon name="arrow-left" class="v1"/>
    <img src="../../assets/img13.jpg" alt="" class="i1">
    <van-cell-group>
      <van-field
        v-model="username" required clearable label="用户名"
        right-icon="question-o"
        placeholder="请输入手机号"
        @click-right-icon="$toast('question')"
      />

      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入登录密码"
        required
      />
    </van-cell-group>
  </div>
</template>
<script>
export default {
  
  }
</script>
<style scoped>
.rootStyle{
    display: flex; 
    position: relative;
    justify-content:space-between;
    flex-direction: column;
    align-items: center;
    top:65px;
  }
  .v1{
    position: fixed;
    top:40px;
    left:20px;
  }
  .i1{
    width: 70px;
    height: 70px;
  }
</style>