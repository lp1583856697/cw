<template>
    <div class="container">
       <div class="list">
            <span class="title">{{more}}</span>
            <div class="rightlist">
                <span class="more">
                更多
                </span>
                <van-icon name="arrow" />
            </div>
       </div>
        <van-divider />
    </div>
</template>
<script>
export default {
    props:{
        more:{default:""}
    }
}
</script>
<style scoped> 
    .container{
        background-color: #fff;     
    }
    .list{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin:.5rem .5rem 0 .5rem;
        padding:1.1rem 0;
    }
    .van-divider{
        border-color: #848689;
        margin:0;
    }
    .title{
        font-weight: 800;
        font-size: 1rem;
    }
    .more{
        font-size:.8rem;
        color:#848689;
    }
    .rightlist{
        display:flex;
        align-items: center;
    }
    .van-icon-arrow{
        color:#848689;
        font: 13px/1 "vant-icon";
    }
</style>
