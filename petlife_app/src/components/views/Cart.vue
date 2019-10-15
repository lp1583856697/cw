<template>
  <div>
    <carttop></carttop>
    <cartguess></cartguess>
    <cartcard></cartcard>
  </div>
</template>
<script>
import Carttop from '../common/Carttop.vue'
import CartGuess from '../common/CartGuess.vue'
import CartCard from '../common/CartCard.vue'
export default {
  data(){
    return{}
  },
  components:{
    "carttop":Carttop,
    "cartguess":CartGuess,
    "cartcard":CartCard
  }
}
</script>