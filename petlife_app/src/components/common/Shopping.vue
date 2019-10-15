<template>
  <div>
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
    <div style="background:red;height:900px"></div>
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
</style>