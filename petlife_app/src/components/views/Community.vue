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
import axios from "axios"
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
            imglist:[],
            more:"养宠知识",
            more1:"铲屎官热议",
            more2:"它嗅故事",
            cardlist:[],
            commentlist:[
                // {
                //     question:"两个月左右的阿拉还没换牙，发现牙齿有天包地的情况，这个长大会严重吗",
                //     comment:"会严重，小时候矫正治疗，买一些好一点的钙片和磨牙棒，情况得不到改善要去医院",
                //     count:1
                // },
                // {
                //     question:"两个月左右的阿拉还没换牙，发现牙齿有天包地的情况，这个长大会严重吗",
                //     comment:"会严重，小时候矫正治疗，买一些好一点的钙片和磨牙棒，情况得不到改善要去医院",
                //     count:1
                // },
                // {
                //     question:"两个月左右的阿拉还没换牙，发现牙齿有天包地的情况，这个长大会严重吗",
                //     comment:"会严重，小时候矫正治疗，买一些好一点的钙片和磨牙棒，情况得不到改善要去医院",
                //     count:1
                // },
                // {
                //     question:"两个月左右的阿拉还没换牙，发现牙齿有天包地的情况，这个长大会严重吗",
                //     comment:"会严重，小时候矫正治疗，买一些好一点的钙片和磨牙棒，情况得不到改善要去医院",
                //     count:3
                // }
            ],
            storylist:[
                {
                    pic:"12.jpg",
                    title:"搭建用户桥梁倾听宠物新生",
                    text:"家中从小养过几条小狗，至今还记得陪伴我时间最久的那只名叫'灰灰'的狗狗狗狗"
                },
                 {
                    pic:"12.jpg",
                    title:"搭建用户桥梁倾听宠物新生",
                    text:"家中从小养过几条小狗，至今还记得陪伴我时间最久的那只名叫'灰灰'的狗狗狗狗"
                },
                 {
                    pic:"12.jpg",
                    title:"搭建用户桥梁倾听宠物新生",
                    text:"家中从小养过几条小狗，至今还记得陪伴我时间最久的那只名叫'灰灰'的狗狗狗狗"
                }
            ]
        }

    },
    created(){
        //轮播图数据请求
        axios.get("community/sybanner").then(result=>{
            // console.log("result",result);
            if(result.data.code==1){
                this.imglist = result.data.data;
            }
        }).catch(err=>{
        console.log(err);
      });
        //养宠知识列表数据请求
        var url = "community/knowledgelist";
        var obj = {pno:1,psize:3};
        axios.get(url,{params:obj}).then(result=>{
            // console.log("result",result);
            this.cardlist = result.data.data;
        }).catch(err=>{
            console.log(err);
        });
        //铲屎官热议
        var url = "community/commentlist";
        var obj = {pno:1,psize:4};
        axios.get(url,{params:obj}).then(result=>{
            // console.log(result);
            this.commentlist = result.data.data;
        }).catch(err=>{
            console.log(err);
        })
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