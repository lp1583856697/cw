<template>
  <div>
    <carttop></carttop>
    <cartitem></cartitem>
    <cartcard></cartcard>   
  </div>
</template>
<script>
import Carttop from '../common/Carttop.vue'
import CartCard from '../common/CartCard.vue'
import CartItem from '../common/CartItem.vue'
export default {
  data(){
    return{}
  },
  created() {
    //创建成功添加生命周期
  },
  components:{
    "carttop":Carttop,
    "cartcard":CartCard,
    "cartitem":CartItem
  }
}
</script>