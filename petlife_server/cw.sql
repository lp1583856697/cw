#123
#设置客户端连接服务器端编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS cw;
#创建数据库，设置存储的编码
CREATE DATABASE cw CHARSET=UTF8;
USE cw;
#创建用户表
CREATE TABLE cw_user(
id INT PRIMARY KEY AUTO_INCREMENT,
uname VARCHAR(32),
upwd VARCHAR(32),
email VARCHAR(32),
phone VARCHAR(11),
gender VARCHAR(2)
);
#用户表中插入数据
INSERT INTO cw_user VAlUES(null,'tom',md5('123456'),'123456@163.com','18123456789','1');
INSERT INTO cw_user VAlUES(null,'jerry',md5('654321'),'654321@163.com','13123456789','0');
#商城专区表
CREATE TABLE cw_zhuan(
zid INT PRIMARY KEY AUTO_INCREMENT,
zname VARCHAR(8),
img_zhuan VARCHAR(32)
);
INSERT INTO cw_zhuan VALUES(null,"狗粮","01.jpg");
INSERT INTO cw_zhuan VALUES(null,"零食","01.jpg");
INSERT INTO cw_zhuan VALUES(null,"保健品","01.jpg");
INSERT INTO cw_zhuan VALUES(null,"清洁","01.jpg");
INSERT INTO cw_zhuan VALUES(null,"日用","01.jpg");
INSERT INTO cw_zhuan VALUES(null,"窝具","01.jpg");
INSERT INTO cw_zhuan VALUES(null,"服饰","01.jpg");
INSERT INTO cw_zhuan VALUES(null,"玩具","01.jpg");