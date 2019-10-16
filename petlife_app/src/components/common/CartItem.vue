<template>
  <div class="container">
    <van-checkbox v-model="checked">复选框</van-checkbox>
    
  </div>
</template>
<script>
export default {
  data(){
    return{
      checked:false
    }
  }
}
</script>