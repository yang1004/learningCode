var http = require('http');

var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req,res){
	
	if(req.url == "/favicon.ico"){
		res.end("favicon.ico");
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
		console.log(req.url);
		if(req.url.search(/\?/) != -1){
			var parm = url.parse(req.url,true).query;
			console.log(parm);
			var objToJson = JSON.stringify(parm);
			res.end(objToJson);
		}else{
			var filePath = "./" + req.url;
			fs.readFile(filePath,function(err,date){
				if(err){
					res.statusCode = 404;
					res.end("not found!!!");
				}else{
					res.end(date);
				}
			})
		}

	}else{
		res.end("ok");
	}

})

server.listen(3000,"127.0.0.1",function(){
	console.log("server is running at https://127.0.0.1:3000");
})