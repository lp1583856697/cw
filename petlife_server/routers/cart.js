const express=require("express");
const router=express.Router();
const pool=require("../pool");
//2.已选购物车的商品
router.get("/findcart",(req,res)=>{
  //获取用户的uid
  var uid=req.session.user_id;
  console.log(uid);
  //如果没有uid，提示登录
  // if(!uid){
  //   res.send({code:-1,msg:"登录···"})
  //   return;
  // }
  //创建sql查询购物车
  var sql="SELECT cid,title,subtitle,count,pic,price FROM cw_cart_item WHERE uid=?";
  pool.query(sql,[uid],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"成功···",data:result})
    console.log("result",cid);
    console.log("result",price);
    //http://localhost:4006/cart/findcart
    //http://127.0.0.1:4006/login1?phone=13112345671&upwd=web123456
    //http://localhost:4006/cart/findcart
  })
})
module.exports=router;