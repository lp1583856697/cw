<template>
    <div>
        <pageheader></pageheader>
        <swipe :imglist="imglist"></swipe>
        <tabbar></tabbar>
    </div>
</template>
<script>
import Pageheader from "../common/Pageheader.vue"
import Swipe from "../common/Swipe.vue"
import Tabbar from "../common/Tabbar.vue"
export default {
    data(){
        return {
            imglist:["1746014.jpg","1747083.jpg","1748028.jpg","1750155.jpg"]
        }
    },
    components:{
        "pageheader":Pageheader,
        "swipe":Swipe,
        "tabbar":Tabbar
    }
}
</script>

<style>
    body{ background:#f9f7f9 }
</style>