const express=require("express");
const router=express.Router();
const pool=require("../pool");
//2.已选购物车的商品
router.get("/findcart",(req,res)=>{
  // //获取用户的uid
  // var uid=req.session.uid;
  // console.log(uid);
  //如果没有uid，提示登录
  // if(!uid){
  //   res.send({code:-1,msg:"登录···"})
  //   return;
  // }
  //创建sql查询购物车
  var sql="SELECT cid,ctitle,subtitle,count,pic,price FROM cw_cart_item ";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    // console.log(result)
    res.send({code:1,msg:"成功···",data:result})
    //http://localhost:4006/cart/findcart
  })
})
//3.购物车小卡片
router.get("/card",(req,res)=>{
  var sql ="SELECT cid,title,pic,price,sold FROM cw_cart_card";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    //console.log(result)
    res.send({code:1,msg:"查询成功",data:result})
    //http://localhost:4006/cart/card
  })
})
module.exports=router;