<template>
    <div class="container">
        <div v-for="(item,i) of commentlist" :key="i">
            <router-link to="">          
                <div class="question">
                    <van-tag type="primary">问</van-tag>
                    <span>{{commentlist[i].question}}</span>
                </div>
                <div class="comment">
                    <van-tag type="primary">神评</van-tag>
                    <span>{{commentlist[i].comment}}</span>
                </div>
                <div class="allcomment">
                    <span>查看全部{{commentlist[i].count}}个回答</span>
                    <van-icon name="arrow" />
                </div> 
            </router-link>
            <van-divider />
        </div>

    </div>
</template>

<script>
export default {
    props:{
        commentlist:{ default:[] }
    }
}
</script>

<style scoped>
    .van-icon-arrow{
        color:#848689;
        font: 13px/1 "vant-icon";
    }
    a{
        color:black;
    }
    .van-tag--primary {
        background-color: #698bf6;
    }
    .question{
        background-color:#fff;
        font-size:.9rem;
    }
    .comment{
        background:#f9f7f9;
        border-radius: .3rem;
        font-size:.8rem;
        padding:.5rem;
        margin:.8rem 0;
        color:#cfcfcf;  
    }
    .allcomment{
        margin:.8rem 0;
        font-size:.75rem;
        color:#1290f0;
    }
    /* 最外层父元素 */
    .container{
        background:#fff;
        padding:.8rem;
    }
    .van-divider{
        border-color: #848689;
        margin-bottom:.8rem;
    }
</style>