/**
 * Created by DIYgod on 15/9/27.
 */
var http = require('http');
var url = require('url');
var mongoose = require('mongoose');
var mongodbUrl = 'mongodb://localhost:27017/vote';

function start() {
    var likeSchema = new mongoose.Schema({
        like: Number
    });
    var Like = mongoose.model('Like', likeSchema);
    var ipSchema = new mongoose.Schema({
        ip: String
    });
    var IP = mongoose.model('IP', ipSchema);

    var onResponse = function (request, response) {
        var pathname = url.parse(request.url).pathname;
        var userIP = request.connection.remoteAddress;
        console.log('Request for ' + pathname + ' form ' + userIP + ' received.');
        if (pathname !== '/api/like') {
            return;
        }

        response.writeHead(200, {'Content-Type': 'text/plain'});

        mongoose.connect(mongodbUrl);
        var db = mongoose.connection;
        db.on('error',console.error);

        switch (url.parse(request.url,true).query.action) {

            // 初始化数据库
            case 'install':
                db.once('open', function() {
                    Like.find(function (err, like) {
                        if (err) return console.error(err);
                        if (!like.length) {
                            like = new Like({like: 0});
                            like.save(function (err, like) {
                                if (err) return console.error(err);
                                response.write('Install succeed');
                                response.end();
                                db.close();
                            });
                        }
                        else {
                            response.write('Already installed');
                            response.end();
                            db.close();
                        }
                    })
                });
                break;

            // 返回like数
            case 'get':
                db.once('open', function() {
                    Like.find(function (err, like) {
                        if (err) return console.error(err);
                        if(like) {
                            response.write('{"success": 1, "like": ' + like[0].like + '}');
                        }
                        response.end();
                        db.close();
                    })
                });
                break;

            // 增加并返回like数
            case 'add':
                db.once('open', function() {
                    IP.findOne({ip: userIP},function (err, ip) {
                        if (err) return console.error(err);
                        if (!ip) {
                            ip = new IP({ip: userIP});
                            console.log(ip);
                            ip.save(function (err, ip) {
                                if (err) return console.error(err);
                            });

                            Like.update({ "like": {$gt: -1} }, { $inc : {"like" : 1} }, function(err, results) {
                                if (err) return console.error(err);
                                Like.find(function (err, like) {
                                    if(like) {
                                        response.write('{"success": 1, "like": ' + like[0].like + '}');
                                    }
                                    response.end();
                                    db.close();
                                })
                            });
                        }
                        else {
                            response.write('{"success": 0}');
                            response.end();
                            db.close();
                        }
                    });
                });
                break;

            // url错误
            default :
                response.write('{"success": 0, "like": -1}');
                response.end();
                db.close();
                break;
        }
    };
    http.createServer(onResponse).listen(8888);
    console.log('Server has started.');
}

start();