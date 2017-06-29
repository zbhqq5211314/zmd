
var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
    console.log(req.url);
    var url=req.url;
    switch (url) {
        case "/index.html":
            fs.readFile("index.html", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"})
                    res.end(data)
                }
            });
            break;
        case "/index1.html":
            fs.readFile("index1.html", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"})
                    res.end(data)
                }
            });
            break;
        case "/index2.html":
            fs.readFile("index2.html", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"})
                    res.end(data)
                }
            });
            break;
        case "/css":
            fs.readFile("index.css","utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "text/css;charset=utf8"})
                    res.end(data)
                }
            })
            break;
        case "/js":
            fs.readFile("index.js","utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "text/javascript;charset=utf8"})
                    res.end(data)
                }
            });
            break;
        case "/png":
            fs.readFile("1.png", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "image/png;charset=utf8"});
                    res.end(data)
                }
            })
            break;
        default://  其他请求
            res.writeHead(200, {"content-type": "text/html;charset=utf8"})
            res.end("404 未找到")

    };
}).listen(5000);

