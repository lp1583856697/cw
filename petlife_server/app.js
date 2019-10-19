//app.js 服务器端程序
//1:下载三个模块 
//  cors            完成跨域处理
//  express-session session对象
//  mysql           数据库驱动
//  express         web服务器
//下载命令在线  
//npm i cors express-session express  mysql
//2:将以上四个模块引入到当程序
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session"); 
//3:创建数据库连接池(池 提高效率)
var pool = mysql.createPool({
    host:"127.0.0.1", //数据库地址
    user:"root",      //数据库用户名
    password:"",      //数据库密码
    port:3306,      //数据库端口
    database:"cw",//库名
    connectionLimit:15//15连接
})
//4:配置跨域模块
//  允许哪个程序跨域访问服务器
//  脚手架:3001 允许3001访问我
//  服务器:4000 你
var server = express();
server.use(cors({
  //允许程序列表
  origin:["http://127.0.0.1:3006","http://localhost:3006"],
  credentials:true//每次请求需要验证
}))
//5:配置session模块?????????
server.use(session({
   secret:"128位字符串",//安全字符串
   resave:true,//请求时更新数据
   saveUninitialized:true//保存初始数据
}))
//6:配置项目静态目录 public
server.use(express.static("public"))
//7:创建express对象绑定4000端口
server.listen(4006);

//1.获取商城专区数据
server.get("/shop_zhuan",(req,res)=>{
  var pno=parseInt(req.query.pno);
  var size=parseInt(req.query.size);
  console.log(pno,size);
  var sql="SELECT * FROM cw_zhuan LIMIT ?,?";
  pool.query(sql,[pno,size],(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send({code:1,msg:"获取成功",data:result})
    }else{
      res.send({code:-1,msg:"获取失败"})
    }
  })
})