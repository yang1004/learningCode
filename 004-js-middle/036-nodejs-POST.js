var http = require('http');

var fs = require('fs')

var server = http.createServer(function(req,res){
	console.log(req.method)

	if(req.url == "/favcon.ico"){
		res.end("favcon.ico");
	}

	if(req.method == "POST"){
		var body = "";
		req.on("data",function(chunk){
			body += chunk;
		})
		req.on("end",function(){
			console.log(body);
			res.end(body);
		})
	}else if(req.method == "GET"){
		var filePath = "./" + req.url;
		fs.readFile(filePath,function(err,date){
			if(err){
				res.statusCode = 404;
				res.end("not found!!!");
			}else{
				res.end(date);
			}
		})
	}else{
		res.end("OK");
	}

	
})

server.listen(3000,"127.0.0.1",function(){
	console.log("server is running at https://127.0.0.1:3000");
})