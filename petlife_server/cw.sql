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
  sms VARCHAR(16),
  upwd VARCHAR(32),
  ic VARCHAR(16),
  avatar VARCHAR(128),        /*头像图片路径*/
  gender INT                  /*性别  0-女  1-男*/
);
/*****************用户信息:数据*********************/
INSERT INTO CW_user_login VALUES
  (Null,'13112345671','1234','web123456','web123456','img/avatar/default.png','0'
  ),
  (Null,'13112345672','1234','web123456','web123456','img/avatar/default.png','1'
  ),
  (Null,'13112345673','1234','web123456','web123456','img/avatar/default.png','1'
  ),
  (Null,'13112345674','1234','web123456','web123456','img/avatar/default.png','0'
  ),
  (Null,'13112345675','1234','web123456','web123456','img/avatar/default.png','0'
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
/****商城专区商品列表****/
CREATE TABLE cw_zhuan_shop(
  zsid INT PRIMARY KEY AUTO_INCREMENT,
  zsname VARCHAR(32),
  img_zs VARCHAR(32),
  zid INT
);
INSERT INTO cw_zhuan_shop VALUES
(null,"狗粮商品","06.jpg",1),
(null,"狗粮商品","06.jpg",1),
(null,"狗粮商品","06.jpg",1),
(null,"狗粮商品","06.jpg",1),
(null,"狗粮商品","06.jpg",1),
(null,"零食商品","06.jpg",2),
(null,"零食商品","06.jpg",2),
(null,"零食商品","06.jpg",2),
(null,"零食商品","06.jpg",2),
(null,"零食商品","06.jpg",2);

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

/******购物车卡片*******/
CREATE TABLE cw_cart_item(
  -- uid INT PRIMARY KEY AUTO_INCREMENT,
  cid INT PRIMARY KEY AUTO_INCREMENT,
  ctitle VARCHAR(255),
  subtitle VARCHAR(128),
  count INT,
  pic VARCHAR(128),
  price DECIMAL(10,2)
);
INSERT INTO cw_cart_item VALUES 
(NULL,"【luscious/路斯】猫用小鱼干50g*3盒","公鱼原味,50g*3盒",1,"images/goods2.jpg",46.9),
(NULL,"【路斯】宠物零食 猫用饼干夹心酥50g","三文鱼+猫薄荷，80g",1,"images/goods2.jpg",35),
(NULL,"【luscious/路斯】猫用小鱼干50g*3盒","公鱼原味,50g*3盒",1,"images/goods2.jpg",46.9);

CREATE TABLE cw_cart_card(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  pic VARCHAR(128),
  price DECIMAL(10,2),
  sold INT
);
INSERT INTO  cw_cart_card VALUES
(NULL,"【Pure&Natural/伯纳天纯】伯纳天纯猫粮6.8kg*2袋","images/03.jpg",598,0),
(NULL,"【Hoopet/华元宠具】hoopet猫头猫砂垫米猫用品","images/05.jpg",49.9,0),
(NULL,"【Pure&Natural/伯纳天纯】伯纳天纯猫粮6.8kg*2袋","images/03.jpg",598,0),
(NULL,"【Hoopet/华元宠具】hoopet猫头猫砂垫米猫用品","images/05.jpg",49.9,0);
