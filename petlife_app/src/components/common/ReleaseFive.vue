<template>
        <!--搜索框的子组件-->
<div class="d1">
<van-search placeholder="请输入搜索关键词" v-model="value" />
    <span>
    <router-link to="/Release">取消</router-link>
    </span>
    <div>
        <img src="../../assets/images/1571240501(1).png" alt="">
        <p>很抱歉，未搜查到相关信息</p>  
    </div>
    </div>
</template>
<style scoped>
.d1{background: #F6F6F6;height:700px;}
img{margin-top: 37%;margin-left:0;}
span{font-size:15px !important;margin-left:340px;margin-top:-35px;display: flex;}
.van-search{padding: 2px 33px;}

</style>

