var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
    console.log("request was made "+req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    var myReadStream=fs.createReadStream(__dirname + '/readme.txt','utf-8');
    myReadStream.pipe(res);
});

var myReadStream=fs.createReadStream(__dirname + '/readme.txt','utf-8');

var myWriteStream=fs.createWriteStream(__dirname + '/writeme.txt');


// 

myReadStream.pipe(myWriteStream);


server.listen(3000,'127.0.0.1');

console.log('yo listening at port 3000');