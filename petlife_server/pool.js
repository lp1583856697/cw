//创建mysql连接池
const mysql = require('mysql');
//创建数据库连接池(池 提高效率)
var pool = mysql.createPool({
    host:"127.0.0.1", //数据库地址
    user:"root",      //数据库用户名
    password:"",      //数据库密码
    port:3306,      //数据库端口
    database:"cw",//库名
    connectionLimit:15//15连接
})
//把创建好的连接池导出
module.exports = pool;