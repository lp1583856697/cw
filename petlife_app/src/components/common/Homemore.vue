<template>
    <div class="container">
       <div class="list">
           <h3 class="petmsg">{{more}}</h3>
           <span class="more">
               更多
               <van-icon name="arrow" />
            </span>
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
        margin:.5rem .5rem;
        padding:.8rem 0;
    }
    .van-divider{
        border-color: black;
        margin:0;
    }
    .petmsg{
        font-weight: bold;
    } 
</style>
