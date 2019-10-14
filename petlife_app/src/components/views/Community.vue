<template>
    <div>
        <pageheader></pageheader>
        <swipe :imglist="imglist"></swipe>
    </div>
</template>
<script>
import Pageheader from "../common/Pageheader.vue"
import Swipe from "../common/Swipe.vue"
export default {
    data(){
        return {
            imglist:["1746014.jpg","1747083.jpg","1748028.jpg","1750155.jpg"]
        }
    },
    components:{
        "pageheader":Pageheader,
        "swipe":Swipe
    }
}
</script>

<style>

</style>