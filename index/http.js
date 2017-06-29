/**
 * Created by Administrator on 2017/6/29 0029.
 */

var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
    console.log(req.url)
    if (req.url=="/"){
        fs.readFile("index.html","utf-8",function(err,data){
            if (err){
                console.log("读取失败");
                console.log(err);
            }else {
                console.log(req.url);
                res.writeHead(200,{"content-Type":"text/html;charset=UTF-8"});
                res.end(data)
            }
        })
    }else if (req.url=="/js"){
        fs.readFile("index.js","utf-8",function(err,data){
            if (err){
                console.log("读取失败");
                console.log(err);
            }else {
                res.writeHead(200,{"content-Type":"text/javascript;charset=UTF-8"});
                res.end(data)
            }
        })
    }else if (req.url=="/png"){
        fs.readFile("1.png",function(err,data){
            if (err){
                console.log("图片读取失败");
                console.log(err);
            }else {
                res.writeHead(200,{"content-Type":"image/png"});
                //发送index.html
                res.end(data)
            }
        })
    }else if (req.url=="/css"){
        fs.readFile("index.css","utf-8",function(err,data){
            if (err){
                console.log("读取失败");
                console.log(err);
            }else {
                res.writeHead(200,{"content-Type":"text/css;charset=UTF-8"});
                res.end(data)
            }
        })
    }
}).listen(3000);
