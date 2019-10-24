const express=require("express");
const router=express.Router();
const pool=require("../pool");
//2.已选购物车的商品
router.get("/cartitem",(req,res)=>{
  //获取用户的uid
  var uid=req.session.uid;
  var sql="SELECT cid,title,subtitle,count,pic,price FROM cw_cart_item WHERE uid=?";
  pool.query(sql,[uid],(err,result)=>{
    if(err)throw err;

    console.log("result",cid);
    console.log("result",price)
    //http://localhost:3006/cartitem
  })
})
module.exports=router;