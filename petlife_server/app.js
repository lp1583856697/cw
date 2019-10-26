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
//引入路由模块
const community = require("./routers/community");
//引入购物车路由模块
const cart = require("./routers/cart")

//3:创建数据库连接池(池 提高效率)
var pool = mysql.createPool({
  host: "127.0.0.1", //数据库地址
  user: "root",      //数据库用户名
  password: "",      //数据库密码
  port: 3306,      //数据库端口
  database: "cw",//库名
  connectionLimit: 15//15连接
})
//4:配置跨域模块
//  允许哪个程序跨域访问服务器
//  脚手架:3006 允许3006访问我
//  服务器:4006 你
var server = express();
server.use(cors({
  //允许程序列表
  origin: ["http://localhost:3006"],
  credentials: true//每次请求需要验证
}))
//5:配置session模块
server.use(session({
  secret: "128位字符串",//安全字符串
  resave: true,//请求时更新数据
  saveUninitialized: true//保存初始数据
}))
//6:配置项目静态目录 public
server.use(express.static("public"))
//7:创建express对象绑定4006端口
server.listen(4006);
//8.路由器管理路由
server.use("/community", community);
server.use("/cart",cart)

//1.获取商城专区数据
server.get("/shop_zhuan", (req, res) => {
  var pno = parseInt(req.query.pno);
  var size = parseInt(req.query.size);
  //console.log(pno, size);
  var sql = "SELECT * FROM cw_zhuan LIMIT ?,?";
  pool.query(sql, [pno, size], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send({ code: 1, msg: "获取成功", data: result })
    } else {
      res.send({ code: -1, msg: "获取失败" })
    }
  })
})
//获取商城专区商品列表
server.get("/shop_zhuan_s",(req,res)=>{
  var zid=parseInt(req.query.zid);
  console.log(zid);
  var sql="SELECT * FROM cw_zhuan_shop WHERE zid=?";
  pool.query(sql,[zid],(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send({code:1,msg:"获取成功",data:result})
    }else{
      res.send({code:-1,msg:"获取失败"})
    }
  })
})
// //查询指定购物车的列表
// server.get("/findcart",(req,res)=>{
//   var uid=req.session.uid;
//   if(!uid){
//     res.send({code:-1,msg:"请登录"})
//     return;
//   }
//   //创建sql语句
//   var sql="SELECT uid,cid,title,subtitle,count,pic,price FROM cw_cart_item WHERE uid=? "
//   pool.query(sql,[uid],(err,result)=>{
//     if(err)throw err;
//     res.send({code:1,msg:"登录成功",data:result})
//   })
// })
//2.功能二:完成用户登录
server.get("/login1", (req, res) => {
  //(1)获取脚手架参数 phone upwd
  var phone = req.query.phone;
  var upwd = req.query.upwd;
  //(2)创建sql语句查询
  var sql = "SELECT uid FROM CW_user_login WHERE phone = ? AND upwd =?";
  //(3)执行sql语句
  pool.query(sql, [phone, upwd], (err, result) => {
    if (err) throw err;
    //(4)获取执行结果
    //(5)判断查询是否成功 result.length 
    if (result.length == 0) {
      res.send({ code: -1, msg: "手机号或密码有误" })
    } else {
      //5.1 保存用户id在session对象中
      //result数据格式[{uid:1}]
      req.session.user_id = result[0].uid;
      res.send({ code: 1, msg: "登录成功" })
    }
    //(6)将结果返回脚手架
  })
})
//打开浏览器在地址栏输入按回
//   http://127.0.0.1:4006/login1?phone=13112345671&upwd=web123456
//   http://127.0.0.1:4006/login1?phone=13112345671&upwd=web123452 


//3.功能三:完成用户注册
server.get("/Myreg", (req, res) => {
  //(1)获取脚手架参数 phone upwd
  var phone = req.query.phone;
  var sms = req.query.sms;
  var upwd = req.query.upwd;
  var ic = req.query.ic;
  //(2)创建sql语句查询
  var sql1 = "SELECT * FROM CW_user_login WHERE phone=?";
  //(3)执行sql语句
  pool.query(sql1,[phone],(err, result) => {
    console.log(result);
    if (err) throw err;
    // (4)获取执行结果
    // (5)判断查询是否成功 result.length
    if (result.length == 0) {
      // 添加一条数据
      var sql2 = "INSERT INTO CW_user_login SET ?";
      // 执行SQL语句
      pool.query(sql2,{phone,upwd,ic},(err, result) => {
        if (err) throw err;
        console.log(result);
        res.send({ code: 1, msg: "添加成功" })
      })
    }
    //(6)将结果返回脚手架
  })
})
//打开浏览器在地址栏输入按回
//   http://127.0.0.1:4006/Myreg?phone=13112345671&sms=1234&upwd=web123456&ic=web123456
//   http://127.0.0.1:4006/Myreg?phone=13112345671&sms=1234&upwd=web123456&ic=web123456

//4.功能四:用户忘记原密码时,完成用户密码更改
server.get("/Mygaimi", (req, res) => {
  var obj=req.query;
  console.log(obj);
  var i=0;
  for(var key in obj){
		i++;
		//console.log(key,obj[key]);
		//如果属性值为空，则提示属性名是必须的
		if(!obj[key]){
			res.send({code:i ,msg:key+' required'});
			return;
		}
	}
	//执行SQL语句
	pool.query('UPDATE CW_user_login SET ? WHERE phone=?',[obj,obj.phone],
	function(err,result){
		if(err)throw err;
		console.log(result);
		//判断是否检索到用户，如果检索到，把该用的对象响应到浏览器，否则响应检索不到
		if(result.affectedRows>0){
			res.send({code:200,msg:'update suc'});
		}else{
			res.send({code:301,msg:'can not found'});
		}
	});
})

//4.功能四:用户退出登录
server.get("/mylogout",(req,res)=>{
  // req.session.user_id = null;
  req.session.destroy();
  res.send({code:1,msg:'退出登录'});
});