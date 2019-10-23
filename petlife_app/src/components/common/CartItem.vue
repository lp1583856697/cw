<template>
  <div class="container" >
    <div class="item" v-for="(item,i) of list" :key="i" @touchstart="showDeleteButton(i)" @touchend="clearend(i)">
      <!-- 商品复选框-->
      <div class="checkbox">
        <van-checkbox @change="itemSelect" v-model="item.checked" checked-color="#ddd"></van-checkbox>
      </div>  
      <!-- 图片 -->
      <img :src="require('../../assets/images/'+list[i].pic+'.jpg')" alt="">
      <!-- 右侧文字 -->
      <div class="rightcontent"> 
        <div class="name">
          {{item.name}}
        </div>
        <div class="subname">{{item.subname}}</div>
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
  data(){
    return{
      checked:false,//商品复选框按钮状态
      value:1,
      //购物车列表
      list:[
        {pic:"goods2",name:"【luscious/路斯】猫用小鱼干50g*3盒",subname:"公鱼原味,50g*3盒",price:"45.90"},
        {pic:"goods2",name:"【luscious/路斯】猫用小鱼干50g*3盒",subname:"公鱼原味,50g*3盒",price:"45.90"},
        {pic:"goods2",name:"【luscious/路斯】猫用小鱼干50g*3盒",subname:"公鱼原味,50g*3盒",price:"45.90"}
      ]
    }
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
  height:7rem;
  margin:10px 14px;
}
/* 右侧div文本内容 */
.rightcontent{
  text-align: left;
  box-sizing: border-box;
  padding:12px 5px 5px 20px;
}
/* 右侧标题 */
 .rightcontent .name{
  font-size: 14px;
  padding-right: 10px;
  margin-bottom: 3px;
  position: relative;
} 
/* 右侧副标题 */
.rightcontent .subname{
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