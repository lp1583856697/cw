<template>
    <div >
        <div class="head">
            <router-link to="ReleaseFive">
            <img src="../../assets/ss.png" alt="" style="width:20px;margin-left:-340px;margin-top:5px">
            </router-link>
        </div>
        <div>
        <van-tabs>
            <van-tab title="精选" name="a">
                <releaseTwo></releaseTwo>
                <releaseOne></releaseOne>
            </van-tab>
            <van-tab title="发现" name="b">
                <releaseThree></releaseThree>
            </van-tab>
            <van-tab title="关注" name="c">
                <releaseFour></releaseFour>
            </van-tab>
        </van-tabs>
        </div>
    </div>
</template>

<script>
import ReleaseTwo from "../common/ReleaseTwo.vue"
import ReleaseThree from "../common/ReleaseThree.vue"
import ReleaseFour from "../common/ReleaseFour.vue"
import ReleaseOne from "../common/ReleaseOne.vue"
export default {
    data(){
        return{}
    },  
    props:{ 
    imgurl:{default:""}
  },
    components:{
    "releaseTwo":ReleaseTwo,
    "releaseThree":ReleaseThree,
    "releaseFour":ReleaseFour,
    "releaseOne":ReleaseOne
  }
}
</script>
<style scoped>
 
</style>
<style>
.head{background:#ffd028;}
.van-tabs__nav--line{background:#ffd028;padding-bottom:15px;padding-left:8px;}
.van-tabs--line .van-tabs__wrap{height:22px;}
.van-tab{line-height:16px;}
.van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{border-width:0 0;}
.van-ellipsis{padding:0 0;}
.van-tabs__line{width:25px !important; 
transform: translateX(62.5px) translateX(-23%);transition-duration: 0.3s;background-color:#000000;}
</style>

