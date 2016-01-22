# Do you like me?

[![npm](https://img.shields.io/npm/v/do-you-like-me.svg?style=flat-square)](https://www.npmjs.com/package/do-you-like-me)
[![npm](https://img.shields.io/npm/l/do-you-like-me.svg?style=flat-square)](https://www.npmjs.com/package/do-you-like-me)
[![npm](https://img.shields.io/npm/dt/do-you-like-me.svg?style=flat-square)](https://www.npmjs.com/package/do-you-like-me)

## Usage

### Back-end

#### 1. Use NodeJS + MongoDB

+ Install NodeJS 和 MongoDB
+ Upload `back-end/nodejs/*`
+ Run in `nodejs`:
```
$ npm install
$ nohup node index.js &
```
+ Change `js/like.js`
```
url:8888/api/like?action=add
url:8888/api/like?action=get
```
+ Enjoy it!

#### 2. Use PHP + MySQL

+ Create a mysql table, run sql:
```
CREATE TABLE IF NOT EXISTS `votes` (
    `id` int(10) NOT NULL AUTO_INCREMENT,
    `likes` int(10) NOT NULL DEFAULT '0',
    PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `votes` (`id`, `likes`) VALUES
(1, 0);

CREATE TABLE IF NOT EXISTS `votes_ip` (
    `id` int(10) NOT NULL AUTO_INCREMENT,
    `vid` int(10) NOT NULL,
    `ip` varchar(40) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
```
+ Fill out database information in `like.php`
+ Upload `like.php`
+ Enjoy it!

### Font-end

See `demo`

## Demo

1. [Anotherhome](https://www.anotherhome.net)
1. https://www.anotherhome.net/file/like/

## LICENSE

MIT © [DIYgod](http://github.com/DIYgod)