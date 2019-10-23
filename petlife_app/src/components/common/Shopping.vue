<template>
  <div id="shopp">
    <!-- 顶部导航 -->
    <div class="top_nav" id="nav1">
      <!-- 第一行导航 -->
      <div class="first_nav">
        <div class="img_nav"></div>
        <span>狗狗</span>
        <span class="xiala"></span>
        <van-search placeholder="请输入搜索关键词" shape="round"></van-search>
      </div>
      <!-- 第二行导航 -->
      <div class="second_nav">
        <ul class="list_style">
          <li class="active">推荐</li>
          <li v-for="(item,i) of list1" :key="i">{{item.zname}}</li>
        </ul>
      </div>
    </div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="blue" class="lb">
      <van-swipe-item><img src="../../assets/images/1746014.jpg" /></van-swipe-item>
      <van-swipe-item><img src="../../assets/images/1747083.jpg" /></van-swipe-item>
      <van-swipe-item><img src="../../assets/images/1748028.jpg" /></van-swipe-item>
      <van-swipe-item><img src="../../assets/images/1749533.jpg" /></van-swipe-item>
      <div class="custom-indicator" slot="indicator" id="pos">
        <!-- <van-icon name="circle" />
        <van-icon name="like" /> -->
      </div>
    </van-swipe>
    <!-- 卡片 -->
    <div class="card">
      <!-- 跳转按钮 -->
      <div class="card_l">
        <!-- 文字 -->
        <ul>
          <li><img src="../../assets/book.png" alt="">超值拼团</li>
          <li><img src="../../assets/heath.png" alt="">0元免费领</li>
          <li><img src="../../assets/img1.jpg" alt="">盘宠神器</li>
          <li><img src="../../assets/img2.jpg" alt="">分享赚钱</li>
          <li><img src="../../assets/img3.jpg" alt="">新品上新</li>
          <li><img src="../../assets/img4.jpg" alt="">清仓特价</li>
          <li><img src="../../assets/img5.jpg" alt="">纪念品</li>
          <li><img src="../../assets/img6.jpg" alt="">积分兑换</li>
        </ul>
        <!-- 正品图 -->
        <img src="../../assets/vip.jpg" alt="">
      </div>
      <!-- 图一 -->
      <img src="../../assets/images/12.jpg" alt="">
      <!-- 图二 -->
      <img src="../../assets/images/10.png" alt="">
    </div>
    <!-- 秒杀 -->
    <div class="miao">
      <h4>今日秒杀</h4>
      <div class="miao_shop">
        <ul>
          <li><img src="../../assets/images/05.jpg" alt=""><p>宠物粮食</p><div style="color:red;font-size:20px">N ¥20.00</div><span>¥30.00</span></li>
          <li><img src="../../assets/images/05.jpg" alt=""><p>宠物粮食</p><div style="color:red;font-size:20px">N ¥20.00</div><span>¥30.00</span></li>
          <li><img src="../../assets/images/05.jpg" alt=""><p>宠物粮食</p><div style="color:red;font-size:20px">N ¥20.00</div><span>¥30.00</span></li>
          <li><img src="../../assets/images/05.jpg" alt=""><p>宠物粮食</p><div style="color:red;font-size:20px">N ¥20.00</div><span>¥30.00</span></li>
          <li><img src="../../assets/images/05.jpg" alt=""><p>宠物粮食</p><div style="color:red;font-size:20px">N ¥20.00</div><span>¥30.00</span></li>
          <li><img src="../../assets/images/05.jpg" alt=""><p>宠物粮食</p><div style="color:red;font-size:20px">N ¥20.00</div><span>¥30.00</span></li>
        </ul>
      </div>
    </div>
    <!-- 各种专区 -->
    <div class="zhuan">
      <div class="zhuan_l" v-for="(item,i) of list1" :key="i">
        <h4 @click="loadZ" :data-zid="item.zid">{{item.zname}}专区</h4>
        <div class="zhuan_shop">
          <img :src="`http://127.0.0.1:4006/${item.img_zhuan}`" alt="">
          <div class="uu">
            <ul >
              <li v-for="(item,i) of list2" :key="i"><img :src="`http://127.0.0.1:4006/${item.img_zs}`" alt=""><p>{{item.zsname}}</p><div>价格</div></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"
var nav1=document.getElementById("nav1");
export default {
  data(){
    return {
      list1:[],
      list2:[]
    }
  },
  created(){
    var obj={pno:0,size:8}
    axios.get("shop_zhuan",{params:obj}).then(result=>{
      console.log(result.data.data);
      this.list1=result.data.data;
    })
  },
  methods:{
    loadZ(event){
      var zid=event.target.dataset.zid;
      axios.get("shop_zhuan_s",{params:{zid:zid}}).then(result=>{
        console.log(result.data.data)
        this.list2=result.data.data;
      })
    }
  }
}
</script>
<style scoped>
#shopp{
  background:#F8F6F8;
}
/* 顶部导航样式 */
.top_nav{
  width:100%;
  box-sizing: border-box;
  background-color:#ffd028;
}
/* 第一行导航 */
.first_nav{
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
}
/* 第一行导航图片 */
.img_nav{
  border: 1px solid #fff;
  width: 40px;height: 40px;
  background-image: url('../../assets/empcar.png');
  background-size: 100%; 
  border-radius: 50%;
}
/* 下拉按钮 */
.xiala{
  border-top:10px solid #fff;
  border-left:8px solid transparent;
  border-right:8px solid transparent;
}
/* 搜索框 */
.van-search{
  background-color:#ffd028 !important; 
}

/* 第二行导航 */
.second_nav{
  width:100%;overflow: auto;
  padding-bottom: 10px;
  color: #fff;
}
/* 消除滚动条 */
.second_nav::-webkit-scrollbar {display:none}
/* ul样式 */
.list_style{
  list-style-type: none;
  width: 550px;
  display: flex;
  justify-content: space-around;
}
/* 选中按钮 */
.active{
  color: #000;
}
.noactive{
  color:#fff;
}
/* 轮播图 */
.van-swipe-item img{
  width: 100%;
}
.lb{
  position: relative;
}
/* 指示器 */
#pos{
  position: absolute;
  bottom: 10px;left:50%;margin-left:-5px;
}
/* 卡片样式 */
.card{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top:-4px;
  /* background: #eee; */
}
.card>img{
  width: 85%;
  margin-top: 10px;
  border-radius: 10px;
}
.card_l{
  width: 85%;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.card_l>img{
  width: 100%;
  height:20px;
}
.card_l ul{
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  height:160px;
  background: #fff;
}
.card_l ul li{
  width: 25%;
  margin: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  
}
.card_l ul li img{
  width: 40px;
}
/* 今日秒杀 */
.miao{
  width: 100%;
  height: 250px;
  box-sizing: border-box;
}
.miao>h4,.zhuan_l>h4{
  margin-left: -280px;
}
.miao_shop{
  width: 100%;
  overflow: auto;
}
.miao_shop>ul{
  display: flex;
  justify-content: space-around;
  width: 600px;
  list-style-type: none;
}
.miao_shop>ul>li>img{
  width:80px;
}
.miao_shop::-webkit-scrollbar {display:none} 
/* 专区样式 */
.zhuan{
  box-sizing: border-box;
  
}
.zhuan_shop{
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  margin: 0 3%;
  border-radius: 10px;padding-top:10px; 
  box-shadow:0 0 10px 2px #ccc;
}
.uu{
  width: 96%;
  overflow: auto;
  margin: 0 10px;
}
.uu::-webkit-scrollbar {display:none}
.zhuan_shop>img{
  width: 95%;
  border-radius: 10px;
}
.uu>ul{
  display: flex;
  width: 600px;
  justify-content: space-around;
  margin-bottom: 5px;
  margin-top:10px;
}
.uu ul li img{
  width:80px;
}
</style>