<template>
    <div>
        <van-swipe @change="onChange" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,i) of imglist" :key="i">
                <router-link to="">
                    <img :src="require('../../assets/images/'+imglist[i])">
                </router-link>
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator">
                <ul>
                    <li class="smallcircle current"></li>
                    <li class="smallcircle"></li>
                    <li class="smallcircle"></li>
                    <li class="smallcircle"></li>
                </ul>
            </div>
        </van-swipe>
    </div>
</template>
<script>
    export default{
        props:{
            imglist:{ default:[] }
        },
        data(){
            return {
                current:0
            }
        },
        methods:{
            onChange(index){
                this.current = index;
            }
        }
    }
</script>
<style scoped>
    img{
        width:100%;  
        border-radius:0 0 300px 300px/0 0 20px 20px; 
    }
    .smallcircle{
        background:#fff;
        width:.5rem;height:.5rem;
        border-radius:50%;
        margin-left:.3rem;
    }
    .custom-indicator{
        position:absolute;
        z-index:2;
        bottom:3rem;
        left:10rem;
    }
    ul{
        display:flex;   
        align-items: center; 
    }
    /* 轮播图的骨头图标 */
    .current{
        width:1.8rem;height:1rem;
        background-image: url(../../assets/gutou.svg);
        background-size: 100% auto;
        background-position: center;
        background-color:transparent;
    }
</style>