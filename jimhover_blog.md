# React+Go 实现个人博客

## 准备工作

前端需要学习的知识：

## 第一阶段：javascript+html+css

## 第二阶段：nodejs+express+Mongoose 

node主要特点：事件驱动、非阻塞、异步 I/O，高并发

express 安装npm install -g express-generator

express的路由是支持正则表达式的

http request常见参数：路径参数、请求参数、cookie，requestbody，header

http response常见参数：status，content-type，redirect

### 实现个人心愿墙

数据库创建：

docker run -p 3306:3306 --name mymysql -e MYSQL_ROOT_PASSWORD=root -d mysql

docker exec -it 38d9f1ccb226 /bin/bash

grant all on *.* to 'root'@'%';

flush privileges;



创建数据库，创建表，写入值：

create table wish
(
id int,
name varchar(20),
content varchar(500),
created_at timestamp,
updated_at timestamp
);

insert wish (id,name,content,created_at,updated_at) values(2,'vicent_jason','愿你是个勇敢的人','2020-06-28 22:30:30','2020-06-28 22:30:00');



Express 修改之后自动加载需要安装nodedemon npm install -g nodemon

修改package.json 

"scripts": {

​    "start": "nodemon ./bin/www"

  },



### 增加后台管理功能

创建用户表

```
create table admin(

id int,

username varchar(50),

Password varchar(50),

name varchar(50),

role int,

last_login_at timestamp,

created_at timestamp,

updated_at timestamp ,

primary key(id)

);
```

insert admin (id, username,password, name, role, last_login_at, created_at,updated_at) values (1, 'jimhover','jimhover@123','jimhover',1,'2020-07-01 00:00:00','2020-07-01 00:00:00','2020-07-01 00:00:00');

第三阶段：Gulp +Webpack+Jasmine & Karma

第四阶段：JQuery / Bootstrap / Vue.js /React / Angular

第五阶段：phonegap / react-native / electron / 微信小程序开发

学习正则表达式











