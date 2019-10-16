<template>
    <div class="nav">
        <ul>
            <li v-for="(item,i) of navlist" :key="i">
                <router-link to="">
                    <img :src="require('../../assets/'+navlist[i].pic)">
                    <span class="text">{{navlist[i].text}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            navlist:[
                {pic:"book.png",text:"知识库"},
                {pic:"pet.png",text:"宠物帮"},
                {pic:"play.png",text:"它秀"},
                {pic:"heath.png",text:"健康"}           
            ]
        }
    }
}
</script>
<style scoped>
    .nav{
        width:21.5rem;
        background-color: #fff;
        border-radius: .5rem;
        margin:0 auto;
        padding:.5rem 0;
        position:relative;
        top:-2.5rem;
    }
    img{
        width:3.6rem;
    }
    ul{
        display:flex;
        justify-content: space-around;

    }
    li a{
        display:flex;
        flex-direction: column;
    }
    .text{
        font-size:.8rem;
    }
</style>

