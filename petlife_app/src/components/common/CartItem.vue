<template>
  <div class="container" >
    <div class="item" v-for="(item,i) of itemlist" :key="i" @touchstart="showDeleteButton(i)" @touchend="clearend(i)">
      <!-- 商品复选框-->
      <div class="checkbox">
        <van-checkbox @change="itemSelect" v-model="item.checked" checked-color="#ff8928"></van-checkbox>
      </div>  
      <!-- 图片 -->
      <img :src="'http://127.0.0.1:4006/'+item.pic" alt="">
      <!-- 右侧文字 -->
      <div class="rightcontent"> 
        <div class="ctitle">
          {{item.ctitle}}
        </div>
        <div class="subtitle">{{item.subtitle}}</div>
        <div><van-tag round type="warning">普通</van-tag></div>
        <div class="price">
          <span>¥{{item.price}}</span>
          <van-stepper v-model="value" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    itemlist:{default:[]}
  },
  methods:{
    itemSelect(){
      //商品复选框的状态修改
      //1.累加商品状态
      //2.创建变量，保存累加的状态
      var sum=0;
      //3.创建循环遍历商品状态
      for(var item of this.list){
        if(item.checked){
          //4.如果true,那么sum加1
          sum++;
        }
      }
      // console.log(sum);
      // console.log(this.list.length)
      //5.如果选中的数量与数组相同，将全选按钮的状态改为true
      
      if(sum==this.list.length){
        this.checkedAll=true;
      }else{
        this.checkedAll=false;
      }
    },
    
    //长按删除功能
    showDeleteButton(i){
      console.log(i)
        clearInterval(this.Loop); //再次清空定时器，防止重复注册定时器
        this.Loop = setTimeout(function() {
          this.$messagebox.confirm("确定删除该商品").then(() => {
            // console.log("删除")
            this.list.splice(i, 1);
          }).catch(() => {
            // on cancel
            // console.log("不删")
          });
        }.bind(this), 2000);
    },
    clearend(i) {
     // 这个方法主要是用来将每次手指移出之后将计时器清零
     clearInterval(this.Loop);
    }
  }
}
</script>
<style scoped>
.container{
  background:#f9f7f9;
  margin:0 auto;
}
.item{
  width:357px;
  height:138px;
  display: flex;
  margin:8px auto;
  border-radius: 12px;
  background:white;
  z-index:1; 
  
}
/* 复选框样式 */
.item .checkbox{
  margin:58px 5px;
}
.item img{
  height:6rem;
  margin:7px 6px;
}
/* 右侧div文本内容 */
.rightcontent{
  text-align: left;
  box-sizing: border-box;
  padding:12px 5px 5px 20px;
}
/* 右侧标题 */
 .rightcontent .ctitle{
  font-size: 14px;
  padding-right: 10px;
  margin-bottom: 3px;
  position: relative;
} 
/* 右侧副标题 */
.rightcontent .subtitle{
  font-size:8px;
  color:#ccc;
  margin-bottom:5px;
}
.container .rightcontent .price{
  display:flex;
  color:#ff333f;
  font-size:16px;
  margin-top:10px;
  justify-content: space-between;
} 
.rightcontent .van-stepper{
  border-radius: 8px;
  background: #f9f7f9;
  margin:-8px 5px 5px 0;
}
/* 确定框的样式 */
.element.style {
  background:darkorange;
}
.mint-msgbox .mint-msgbox-confirm{
  color:white;
}

</style>