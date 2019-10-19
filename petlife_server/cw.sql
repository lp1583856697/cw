-- 123
-- 设置客户端连接服务器端编码
SET NAMES UTF8;
-- 丢弃数据库，如果存在
DROP DATABASE IF EXISTS cw;
-- 创建数据库，设置存储的编码
CREATE DATABASE cw CHARSET=UTF8;
USE cw;
/*********************用户信息*********************/
CREATE TABLE CW_user_login(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  phone VARCHAR(16),
  upwd VARCHAR(32),
  avatar VARCHAR(128),        /*头像图片路径*/
  gender INT                  /*性别  0-女  1-男*/
);
/*****************用户信息:数据*********************/
INSERT INTO CW_user_login VALUES
  (Null,'13112345671','web123456','img/avatar/default.png','0'
  ),
  (Null,'13112345672','web123456','img/avatar/default.png','1'
  ),
  (Null,'13112345673','web123456','img/avatar/default.png','1'
  ),
  (Null,'13112345674','web123456','img/avatar/default.png','0'
  ),
  (Null,'13112345675','123456','img/avatar/default.png','0'
  );
-- 商城专区表
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

#首页轮播图
CREATE TABLE sy_banner(
    bid INT PRIMARY KEY AUTO_INCREMENT,
    imgurl VARCHAR(32)
);
INSERT INTO sy_banner (bid,imgurl) VALUES
(null,"sy_banner/1746014.jpg"),
(null,"sy_banner/1747083.jpg"),
(null,"sy_banner/1748028.jpg"),
(null,"sy_banner/1750155.jpg")