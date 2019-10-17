<template>
    <div>
        <pageheader></pageheader>
        <swipe :imglist="imglist"></swipe>
        <homenav></homenav>
        <homemore :more="more"></homemore>
        <knowledgelist :cardlist="cardlist"></knowledgelist>
        <homemore :more="more1"></homemore>
        <commentlist :commentlist=commentlist></commentlist>
        <homemore :more="more2"></homemore> 
        <storylist :storylist="storylist"></storylist>      
    </div>
</template>
<script>
import Pageheader from "../common/Pageheader.vue"
import Swipe from "../common/Swipe.vue"
import Homenav from "../common/Homenav.vue"
import Homemore from "../common/Homemore.vue"
import Knowledgelist from "../common/Knowledgelist.vue"
import Commentlist from "../common/Commentlist.vue"
import Storylist from "../common/Storylist.vue"
export default {
    data(){
        return {
            imglist:["1746014.jpg","1747083.jpg","1748028.jpg","1750155.jpg"],
            more:"养宠知识",
            more1:"铲屎官热议",
            more2:"它嗅故事",
            cardlist:[
                {
                    pic:"1746014.jpg",
                    title:"如何保护狗狗的牙齿",
                    pageviews:"153",
                    likecount:"10"
                },
                {
                    pic:"1746014.jpg",
                    title:"泰迪的造型能维持多久",
                    pageviews:"129",
                    likecount:"66"
                },
                {
                    pic:"1746014.jpg",
                    title:"狗狗抗拒梳毛怎么办",
                    pageviews:"77",
                    likecount:"2"
                }
            ],
            commentlist:[
                {
                    question:"两个月左右的阿拉还没换牙，发现牙齿有天包地的情况，这个长大会严重吗",
                    comment:"会严重，小时候矫正治疗，买一些好一点的钙片和磨牙棒，情况得不到改善要去医院",
                    count:1
                },
                {
                    question:"两个月左右的阿拉还没换牙，发现牙齿有天包地的情况，这个长大会严重吗",
                    comment:"会严重，小时候矫正治疗，买一些好一点的钙片和磨牙棒，情况得不到改善要去医院",
                    count:1
                },
                {
                    question:"两个月左右的阿拉还没换牙，发现牙齿有天包地的情况，这个长大会严重吗",
                    comment:"会严重，小时候矫正治疗，买一些好一点的钙片和磨牙棒，情况得不到改善要去医院",
                    count:1
                },
                {
                    question:"两个月左右的阿拉还没换牙，发现牙齿有天包地的情况，这个长大会严重吗",
                    comment:"会严重，小时候矫正治疗，买一些好一点的钙片和磨牙棒，情况得不到改善要去医院",
                    count:3
                }
            ],
            storylist:[
                {
                    pic:"12.jpg",
                    title:"搭建用户桥梁倾听宠物新生",
                    text:"家中从小养过几条小狗，至今还记得陪伴我时间最久的那只名叫..."
                },
                 {
                    pic:"12.jpg",
                    title:"搭建用户桥梁倾听宠物新生",
                    text:"家中从小养过几条小狗，至今还记得陪伴我时间最久的那只名叫..."
                },
                 {
                    pic:"12.jpg",
                    title:"搭建用户桥梁倾听宠物新生",
                    text:"家中从小养过几条小狗，至今还记得陪伴我时间最久的那只名叫..."
                }
            ]
        }

    },
    components:{
        "pageheader":Pageheader,
        "swipe":Swipe,
        "homenav":Homenav,
        "homemore":Homemore,
        "knowledgelist":Knowledgelist,
        "commentlist":Commentlist,
        "storylist":Storylist
    }
}
</script>

<style>
    body{ 
        background:#f9f7f9;
        font-family:PingFangSC-Light,PingFang-Medium,PingFangSC-Regular,Helvetica,Droid Sans,Arial
    }
</style>