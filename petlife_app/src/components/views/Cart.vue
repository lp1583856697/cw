<template>
  <div>
    <carttop></carttop>
    <cartcard></cartcard>
  </div>
</template>
<script>
import Carttop from '../common/Carttop.vue'
import CartCard from '../common/CartCard.vue'
export default {
  data(){
    return{}
  },
  components:{
    "carttop":Carttop,
    "cartcard":CartCard
  }
}
</script>