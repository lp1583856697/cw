<template>
    <div>
        <pageheader></pageheader>
        <swipe :imglist="imglist"></swipe>
        <homenav></homenav>
        <homemore :more=more></homemore>
    </div>
</template>
<script>
import Pageheader from "../common/Pageheader.vue"
import Swipe from "../common/Swipe.vue"
import Homenav from "../common/Homenav.vue"
import Homemore from "../common/Homemore.vue"
export default {
    data(){
        return {
            imglist:["1746014.jpg","1747083.jpg","1748028.jpg","1750155.jpg"],
            more:"养宠知识"
        }

    },
    components:{
        "pageheader":Pageheader,
        "swipe":Swipe,
        "homenav":Homenav,
        "homemore":Homemore
    }
}
</script>

<style>
    body{ background:#f9f7f9 }
</style>