<template>
  <div>
    <carttop></carttop>
    <cartguess></cartguess>
  </div>
</template>
<script>
import Carttop from '../common/Carttop.vue'
import CartGuess from '../common/CartGuess.vue'
export default {
  data(){
    return{}
  },
  components:{
    "carttop":Carttop,
    "cartguess":CartGuess
  }
}
</script>