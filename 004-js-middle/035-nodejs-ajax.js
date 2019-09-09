var http = require('http');

var fs = require('fs')

var server = http.createServer(function(req,res){
	
	var filePath = "./" + req.url;
	fs.readFile(filePath,function(err,date){
		if(err){
			res.statusCode = 404;
			res.end("not found!!!");
		}else{
			res.end(date);
		}
	})
})

server.listen(3000,"127.0.0.1",function(){
	console.log("server is running at https://127.0.0.1:3000");
})