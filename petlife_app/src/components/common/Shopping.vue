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
          <li>狗粮</li>
          <li>零食</li>
          <li>保健品</li>
          <li>清洁</li>
          <li>日用</li>
          <li>玩具</li>
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
        <van-icon name="circle" />
        <van-icon name="like" />
      </div>
    </van-swipe>
    <!-- 卡片 -->
    <div class="card">
      <!-- 跳转按钮 -->
      <div class="card_l">
        <!-- 文字 -->
        <ul>
          <li><img src="../../assets/store.png" alt="">超值拼团</li>
          <li><img src="../../assets/car.png" alt="">超值拼团</li>
          <li><img src="../../assets/car.png" alt="">超值拼团</li>
          <li><img src="../../assets/car.png" alt="">超值拼团</li>
          <li><img src="../../assets/car.png" alt="">超值拼团</li>
          <li><img src="../../assets/car.png" alt="">超值拼团</li>
          <li><img src="../../assets/car.png" alt="">超值拼团</li>
          <li><img src="../../assets/car.png" alt="">超值拼团</li>
        </ul>
        <!-- 正品图 -->
        <img src="../../assets/images/1749533.jpg" alt="">
      </div>
      <!-- 图一 -->
      <img src="../../assets/images/1749533.jpg" alt="">
      <!-- 图二 -->
      <img src="../../assets/images/1749533.jpg" alt="">
    </div>
    <!-- 秒杀 -->
    <div class="miao">
      <h4>今日秒杀</h4>
      <div class="miao_shop">
        <ul>
          <li><img src="../../assets/car.png" alt=""><p>标题介绍</p><div>打折价格</div><span>原来价格</span></li>
          <li><img src="../../assets/car.png" alt=""><p>标题介绍</p><div>打折价格</div><span>原来价格</span></li>
          <li><img src="../../assets/car.png" alt=""><p>标题介绍</p><div>打折价格</div><span>原来价格</span></li>
          <li><img src="../../assets/car.png" alt=""><p>标题介绍</p><div>打折价格</div><span>原来价格</span></li>
          <li><img src="../../assets/car.png" alt=""><p>标题介绍</p><div>打折价格</div><span>原来价格</span></li>
          <li><img src="../../assets/car.png" alt=""><p>标题介绍</p><div>打折价格</div><span>原来价格</span></li>
        </ul>
      </div>
    </div>
    <!-- 各种专区 -->
    <div class="zhuan">
      <div class="zhuan_l">
        <h4>狗粮专区</h4>
        <div class="zhuan_shop">
          <img src="../../assets/images/1749533.jpg" alt="">
          <div class="uu">
            <ul>
              <li><img src="../../assets/car.png" alt=""><p>标题介绍</p><div>价格</div></li>
              <li><img src="../../assets/car.png" alt=""><p>标题介绍</p><div>价格</div></li>
              <li><img src="../../assets/car.png" alt=""><p>标题介绍</p><div>价格</div></li>
              <li><img src="../../assets/car.png" alt=""><p>标题介绍</p><div>价格</div></li>
              <li><img src="../../assets/car.png" alt=""><p>标题介绍</p><div>价格</div></li>
              <li><img src="../../assets/car.png" alt=""><p>标题介绍</p><div>价格</div></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var nav1=document.getElementById("nav1");
export default {
  methods:{

  }
}
</script>
<style scoped>
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
  width: 450px;
  display: flex;
  justify-content: space-around;
}
/* 选中按钮 */
.active{
  color: #000;
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
  background: #eee;
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
  font-size: 12px;
  
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
}
</style>