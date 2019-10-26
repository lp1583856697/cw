<template>
    <div>
        <ul class="alllist">
            <li v-for="(item,i) of storylist" :key="i">
                <router-link to="">
                    <img :src="'http://127.0.0.1:4006/'+item.pic" class="Image"> 
                    <ul class="alltext">
                        <li class="title">{{item.title}}</li>
                        <li class="text">{{item.text}}</li>
                    </ul>
                </router-link>
                <van-divider />
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    props:{
        storylist:{default:[]}
    }
}
</script>
<style scoped>
    /* 最外层父元素 */
    .alllist{
        background: #fff;
        padding:.8rem;
    }
    /* 图片 */
    .Image{
        width:5.5rem;height:4.3rem;
        border-radius: .3rem;
    }
    /* a标签 */
    li a{
        display:flex;
    }
    /* 所有文本 */
    .alltext{
        color:black;
    }
    /* 标题 */
    .alltext .title{
        font-size:.9rem;
        font-size:1rem;
        text-align: left;
        padding-left:.8rem;
    }    
    /* 正文 */
    .alltext .text{
        font-size:.85rem;        
        padding-left:.8rem;    
        margin:.5rem 0;   
        color:#979696; 
        text-align: left;
        /* 段落缩进 */
        text-indent:2rem; 
        /* 多行文本过长省略 */
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
        /* 分割线 */
    .van-divider{
        border-color: #cfd0d1;
        margin: 8px 0 16px 0;
    }
</style>

