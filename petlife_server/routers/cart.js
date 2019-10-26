const express=require("express");
const router=express.Router();
const pool=require("../pool");
//2.已选购物车的商品
   router.get("/findcart",(req,res)=>{
  //获取用户的user_id
  var user_id=req.session.user_id;
  console.log(user_id);
  // 如果没有user_id，响应无权限访问
  if(!user_id){
    res.sendStatus(401);
    return;
  }
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
  //获取用户的user_id
  var user_id=req.session.user_id;
  console.log(user_id);
  // 如果没有user_id，响应无权限访问
  if(!user_id){
    res.sendStatus(401);
    return;
  }
  var sql ="SELECT cid,title,pic,price,sold FROM cw_cart_card";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    //console.log(result)
    res.send({code:1,msg:"查询成功",data:result})
    //http://localhost:4006/cart/card
  })
})
module.exports=router;