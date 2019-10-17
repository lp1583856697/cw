<template>
    <div>
        <ul class="alllist">
            <li v-for="(item,i) of storylist" :key="i">
                <router-link to="">
                    <img :src="require('../../assets/images/'+storylist[i].pic)" class="Image"> 
                    <ul class="alltext">
                        <li class="title">{{storylist[i].title}}</li>
                        <li class="text">{{storylist[i].text}}</li>
                    </ul>
                </router-link>
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
    .alllist{
        background: #fff;
    }
    .Image{
        width:5.8rem;height:3.8rem;
        border-radius: .3rem;
    }
    li a{
        display:flex;
    }
    .alltext{
        color:black;
    }
    .alltext .title{
         font-size:1rem;
         text-align: left;
         padding-left:.8rem;
    }    
    .alltext .text{
         font-size:.9rem;        
         padding-left:2.5rem;        
    }
</style>

