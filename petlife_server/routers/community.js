const express=require("express");
const router=express.Router();
const pool=require("../pool");
//1.首页轮播图
router.get("/sybanner",(req,res)=>{
    var sql =  "SELECT imgurl FROM cw_index_carousel";
    pool.query(sql,(err,result)=>{
      if(err) throw err;
      // console.log("result",result);
      if(result.length>0){
        res.send({code:1,msg:"获取成功",data:result});
      }else{
        res.send({code:-1,msg:"获取失败"});
      }
    });
  })

//2.养宠知识列表
router.get("/knowledgelist",(req,res)=>{
  var pno = parseInt(req.query.pno);
  var psize = parseInt(req.query.psize);
  var start = (pno-1)*psize;
  // console.log("pno",pno);
  // console.log("psize",psize);
  var sql = "SELECT * from cw_index_knowledgelist LIMIT ?,?"; 
  pool.query(sql,[start,psize],(err,result)=>{
    if(err) throw err;
    // console.log("result",result);
    if(result.length>0){
      res.send({code:1,msg:"获取成功",data:result});
    }else{
      res.send({code:-1,msg:"获取失败"});
    }
  });
})

//铲屎官热议
router.get("/commentlist",(req,res)=>{
  var pno=parseInt(req.query.pno);
  var psize = parseInt(req.query.psize);
  var start = (pno-1)*psize;
  console.log("pno",pno);
  console.log("psize",psize);
  console.log("start",start);
  var sql = "SELECT * FROM cw_index_comment LIMIT ?,?";
  pool.query(sql,[start,psize],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:1,msg:"获取成功",data:result});
    }else{
      res.send({code:-1,msg:"获取失败"});
    }
  });
})

module.exports=router;
