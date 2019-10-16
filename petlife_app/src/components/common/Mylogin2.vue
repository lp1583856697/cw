<template>
  <div>
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