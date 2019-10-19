const express=require("express");
const router=express.Router();
const pool=require("../pool");
//1.获取首页轮播图
router.get("/sybanner",(req,res)=>{
    var sql =  "SELECT imgurl FROM sy_banner";
    pool.query(sql,(err,result)=>{
      if(err) throw err;
      console.log("result",result);
      if(result.length>0){
        res.send({code:1,msg:"获取成功",data:result});
      }else{
        res.send({code:-1,msg:"获取失败"});
      }
    });
  })

module.exports=router;
