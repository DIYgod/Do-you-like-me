# Do you like me?

[![npm](https://img.shields.io/npm/v/do-you-like-me.svg?style=flat-square))](https://www.npmjs.com/package/do-you-like-me)
[![npm](https://img.shields.io/npm/l/do-you-like-me.svg?style=flat-square))](https://www.npmjs.com/package/do-you-like-me)
[![npm](https://img.shields.io/npm/dt/do-you-like-me.svg?style=flat-square))](https://www.npmjs.com/package/do-you-like-me)

## 前言

+ idea 来自于 [MoeFront](https://moefront.github.io/)
+ 后端使用NodeJS + MongoDB 或者 PHP + MySQL，其中PHP版是 [LWL](https://blog.lwl12.com/) 在 [月光光](http://www.helloweba.com/view-blog-237.html) 的基础上帮我写的

## 食用说明

### 后端配置

#### 使用 NodeJS + MongoDB

+ 安装 NodeJS 和 MongoDB
+ 上传 `nodejs/*`
+ 在 `nodejs` 目录运行:
```
npm install
nohup node index.js &
```
+ 将 `js/like.js` 里的接口改为
```
域名:8888/api/like?action=add
域名:8888/api/like?action=get
```
+ Enjoy it!

#### 使用 PHP + MySQL

+ 创建一个mysql数据表，执行以下SQL语句
```
CREATE TABLE IF NOT EXISTS `votes` (
   `id` int(10) NOT NULL AUTO_INCREMENT,
   `likes` int(10) NOT NULL DEFAULT '0',
   PRIMARY KEY (`id`)
 ) ENGINE=MyISAM  DEFAULT CHARSET=utf8;


 INSERT INTO `votes` (`id`, `likes`) VALUES
 (1, 0);

 CREATE TABLE IF NOT EXISTS `votes_ip` (
   `id` int(10) NOT NULL,
   `vid` int(10) NOT NULL,
   `ip` varchar(40) NOT NULL
 ) ENGINE=MyISAM DEFAULT CHARSET=utf8;
```
+ 在 `like.php` 里填入数据库信息
+ 上传 `like.php`
+ Enjoy it!

### 前端

以 `demo` 目录内容为例

## Demo

1. [Anotherhome](https://www.anotherhome.net)右侧栏
1. https://www.anotherhome.net/file/like/

## LICENSE

(MIT License)

Copyright (c) DIYgod

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.