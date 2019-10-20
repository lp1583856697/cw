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
/****商城专区表****/
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

/****首页轮播图****/
CREATE TABLE cw_index_carousel(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    imgurl VARCHAR(128),
    href VARCHAR(128)
);
INSERT INTO cw_index_carousel VALUES
(null,'sy_banner/1746014.jpg',''),
(null,'sy_banner/1747083.jpg',''),
(null,'sy_banner/1748028.jpg',''),
(null,'sy_banner/1750155.jpg','');

/****首页养宠知识列表****/
CREATE TABLE cw_index_knowledgelist(
  kid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(128),
  title VARCHAR(128),         
  pageviews INT,
  likecount INT
);
INSERT INTO cw_index_knowledgelist VALUES
(NULL,'sy_banner/1746014.jpg','如何保护狗狗的牙齿',153,10),
(NULL,'sy_banner/1746014.jpg','泰迪的造型能维持多久',129,66),
(NULL,'sy_banner/1746014.jpg','狗狗抗拒梳毛怎么办',77,2);

/****首页铲屎官热议****/
CREATE TABLE cw_index_comment(
  com_id INT PRIMARY KEY AUTO_INCREMENT,
  question VARCHAR(128),
  comment VARCHAR(128),         
  commentcount INT
);
INSERT INTO cw_index_comment VALUES
(NULL,'两个月左右的阿拉还没换牙，发现牙齿有天包地的情况，这个长大会严重吗','会严重，小时候矫正治疗，买一些好一点的钙片和磨牙棒，情况得不到改善要去医院',2),
(NULL,'两个月左右的阿拉还没换牙，发现牙齿有天包地的情况，这个长大会严重吗','会严重，小时候矫正治疗，买一些好一点的钙片和磨牙棒，情况得不到改善要去医院',3),
(NULL,'两个月左右的阿拉还没换牙，发现牙齿有天包地的情况，这个长大会严重吗','会严重，小时候矫正治疗，买一些好一点的钙片和磨牙棒，情况得不到改善要去医院',5);

/****首页它嗅故事****/
CREATE TABLE cw_index_storylist(
  sid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(128),
  title VARCHAR(128),
  text VARCHAR(128)
);
INSERT INTO cw_index_storylist VALUES
(NULL,'sy_banner/1746014.jpg','搭建用户桥梁倾听宠物新生','家中从小养过几条小狗，至今还记得陪伴我时间最久的那只名叫灰灰的狗狗狗狗'),
(NULL,'sy_banner/1746014.jpg','搭建用户桥梁倾听宠物新生','家中从小养过几条小狗，至今还记得陪伴我时间最久的那只名叫灰灰的狗狗狗狗'),
(NULL,'sy_banner/1746014.jpg','搭建用户桥梁倾听宠物新生','家中从小养过几条小狗，至今还记得陪伴我时间最久的那只名叫灰灰的狗狗狗狗');
