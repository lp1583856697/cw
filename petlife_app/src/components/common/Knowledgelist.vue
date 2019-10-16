<template>
  <div>
      <ul>
          <li v-for="(item,i) of cardlist" :key="i">
              <router-link to="">
                   <img :src="require('../../assets/images/'+cardlist[i].pic)" class="dogImg">
                    <span class="title">{{cardlist[i].title}}</span>
                    <span class="pageviews">{{cardlist[i].pageviews}} 浏览量</span>
                    <span class="likecount">{{cardlist[i].likecount}} 有用</span>
              </router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:{
        cardlist:{ default:[] }
    }
}
</script>

<style scoped>
    ul{
        display:flex;
        overflow: scroll;  
    }
    /* 消除滚动条 */
    ul::-webkit-scrollbar {display:none}
    ul li{
        width:13rem;height:6rem;  /*li 宽高*/
        flex-shrink:0;  /*li不会因为空间不足缩小*/
        margin-left:.7rem; 
        margin-top:.7rem;
        position:relative;
    }
    ul li:first-child{
        margin-left:.7rem;
    }
     ul li:last-child{
        margin-right:.7rem;
    }
    .dogImg{
        width:100%;height:100%;
        border-radius: .5rem;
    }
    .pageviews,.likecount{
        position: absolute;
        top:4.3rem;
        font-size:.8rem;
        color:#fff;
    }
    /* 让元素水平居中！！！！面试 */
    .pageviews{ 
        left:50%;
        transform: translateX(-50%); 
    }
    .likecount{
        right:1rem;
    }
    .title{
        position: absolute;
        top:.55rem;
        left:1rem;
        font-size:.9rem;
        color:#fff;
    }
</style>