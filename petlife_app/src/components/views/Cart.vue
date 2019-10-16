<template>
  <div>
    <carttop></carttop>
    <cartcard></cartcard>
    <!-- <cartitem></cartitem>   -->
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
  components:{
    "carttop":Carttop,
    "cartcard":CartCard,
    "cartitem":CartItem
  }
}
</script>