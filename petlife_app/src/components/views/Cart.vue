<template>
  <div class="bgcolor">
    <carttop></carttop>
    <cartitem :itemlist=itemlist></cartitem>
    <cartcard :cardlist=cardlist></cartcard>
    <!-- <cartbutton></cartbutton>    -->
  </div>
</template>
<script>
import axios from "axios"
import Carttop from '../common/Carttop.vue'
import CartCard from '../common/CartCard.vue'
import CartItem from '../common/CartItem.vue'
import CartButton from '../common/CartButton.vue'
export default {
  data(){
    return{
      itemlist:[],
      cardlist:[]
    }
  },
  created() {
    //findcart数据请求
    axios.get("cart/findcart").then(result=>{
      // console.log(result)
      if(result.data.code==1){
        this.itemlist=result.data.data;
      }
    })
    .catch(err=>{
      console.log(err)
    })
    //购物车小卡片
    axios.get("cart/card").then(result=>{
      //console.log(result)
      this.cardlist=result.data.data;
      // console.log(this.cardlist)
    }).catch(err=>{
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