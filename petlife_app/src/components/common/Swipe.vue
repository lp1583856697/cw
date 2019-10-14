<template>
    <div>
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,i) of imglist" :key="i">
                <router-link to="">
                    <img :src="require('../../assets/images/'+imglist[i])">
                </router-link>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
    export default{
        props:{
            imglist:{ default:[] }
        }
    }
</script>
<style scoped>
    img{
        width:100%;  
    }
</style>