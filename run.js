var http = require("http");
var fs=require("fs");

var mime={
    '.js':'application/javascript',
    '.css':'text/css'
}
http.createServer(function(req, res){

    if (req.url==="/") {
        //设置编码
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.createReadStream('index.html').pipe(res);
    } else {
        if (fs.existsSync(`.${req.url}`)) {
            res.setHeader('Content-Type',mime[req.url.match(/\.\w+$/)[0]] +';charset=utf-8');
            fs.createReadStream(`.${req.url}`).pipe(res);
        } else {
            res.setHeader('Content-Type','text/html;charset=utf-8');
            fs.createReadStream('index.html').pipe(res);
        }
    }
}).listen(9999);

console.log("start server: 9999");