<template>
  <div class="bgcolor">
    <carttop></carttop>
    <cartitem></cartitem>
    <cartcard></cartcard>
    <!-- <cartbutton></cartbutton>    -->
  </div>
</template>
<script>
import Carttop from '../common/Carttop.vue'
import CartCard from '../common/CartCard.vue'
import CartItem from '../common/CartItem.vue'
import CartButton from '../common/CartButton.vue'
export default {
  data(){
    return{}
  },
  created() {
    //cartitem数据请求
    axios.get("community/cartitem").then(res=>{
      console.log(result)
    })
    .catch(err=>{
      console.log(err)
    })
  },
  components:{
    "carttop":Carttop,
    "cartcard":CartCard,
    "cartitem":CartItem,
    "cartbutton":CartButton 
  }
}
</script>
<style scoped>
.bgcolor{
  background-color:#f9f7f9;
}
</style>