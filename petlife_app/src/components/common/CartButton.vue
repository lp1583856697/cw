<template>
  <div>
    <!-- 底部的结算按钮 -->
    <van-submit-bar
      :price="0.00"
      button-text="结算(0)"
      @submit="onSubmit">
      <van-checkbox v-model="checkedAll" @change="selectAll" checked-color="#ff8928">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>
<script>
export default {
  data(){
    return{checked:false}
  },
  methods:{
    seleceAll(event){
      var all=event.target.checked;
      console.log(all)
    }
  }
}
</script>