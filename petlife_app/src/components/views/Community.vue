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
            commentlist:[],
            storylist:[]
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
        //它嗅故事
        var url = "community/storylist";
        var obj = {pno:1,psize:3};
        axios.get(url,{params:obj}).then(result=>{
            // console.log(result);
            this.storylist = result.data.data;
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