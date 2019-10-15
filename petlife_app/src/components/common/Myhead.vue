<template>
  <div class="rootStyle">
    <img :src="imgurl" alt="" class="imgStyle">
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  props:{
    imgurl:{default:""}
  }
}
</script>
<style scoped>
  .rootStyle{
    display: flex;
    background-color: #ffd028;
  }
  .imgStyle{
    /* display: flex; */
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
</style>