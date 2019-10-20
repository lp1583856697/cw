<template>
  <div>
      <ul>
          <li v-for="(item,i) of cardlist" :key="i">
              <router-link to="">
                   <img :src="'http://127.0.0.1:4006/'+item.pic" class="dogImg">
                    <span class="title">{{item.title}}</span>
                    <span class="pageviews">{{item.pageviews}} 浏览量</span>
                    <span class="likecount">{{item.likecount}} 有用</span>
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
        align-items: center;
        overflow: scroll;  
        background-color: #fff;
    }
    /* 消除滚动条 */
    ul::-webkit-scrollbar {display:none}
    ul li{
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
        width:13rem;height:6rem;  /*宽高*/
        border-radius: .5rem;
    }
    .pageviews,.likecount{
        position: absolute;
        top:4.3rem;
        font-size:.75rem;
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
        font-size:.85rem;
        color:#fff;
    }
</style>