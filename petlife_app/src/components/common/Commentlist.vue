<template>
    <div class="container">
        <div v-for="(item,i) of commentlist" :key="i">
            <router-link to="">          
                <div class="question">
                    <van-tag type="primary">问</van-tag>
                    <span>{{item.question}}</span>
                </div>
                <div class="comment">
                    <van-tag type="primary">神评</van-tag>
                    <span>{{item.comment}}</span>
                </div>
                <div class="allcomment">
                    <span>查看全部{{item.commentcount}}个回答</span>
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
    /* > 字体大小和颜色 */
    .van-icon-arrow{
        color:#848689;
        font: 13px/1 "vant-icon";
    }
    /* 所有a标签字体颜色 */
    a{
        color:black;
    }
    /* 问和神评的背景色 */
    .van-tag--primary {
        background-color: #698bf6;
    }
    .van-tag {
        margin-right: .5rem;
    }
    /* 提问卡片 */
    .question{
        font-size:.9rem;
        text-align: left;
        margin-left:.5rem;
    }
    /* 评论卡片 */
    .comment{
        background:#f9f7f9;
        border-radius: .3rem;
        font-size:.8rem;
        padding:.5rem;
        margin:.8rem 0;
        /* color:#c2c0c0;  */
        color:#979696; 
        text-align: left;         
    }
    /* 查看全部回答 */
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
    /* 分割线 */
    .van-divider{
        border-color: #cfd0d1;        
        margin-bottom:.8rem;
    }
</style>