var http = require('http');
var fs = require("fs");
var url = require("url");
var path = require("path");

http.createServer(function(request, response) {
	
	var uri = url.parse(request.url).pathname;
	var filname = path.join(__dirname, uri);
	console.log("before all file:" + filname);
	console.log("before all  dir:" + __dirname);
	console.log("URL:" + request.url);

	if(request.url === "/Home"){
		console.log("Dans Home par /Home");
		sendFileContent(response, "pages/home.html", "text/html");
	}
	else if(request.url === "/"){
		console.log("Dans Home par /");
		request.url = "/Home";
		console.log(" new URL:" + request.url);
		sendFileContent(response, "pages/home.html", "text/html");
	}
	else if(request.url === "/About"){
		sendFileContent(response, "pages/about.html", "text/html");
	}
	else if(request.url === "/Contact"){
		sendFileContent(response, "pages/contact.html", "text/html");
	}
	else if(request.url === "/Catalogue"){
		sendFileContent(response, "pages/portfolio.html", "text/html");
	}
	else if(path.extname(filname) == ".js"){
		sendFileContent(response, request.url.toString().substring(1), "text/javascript");
	}
	else if(path.extname(filname) == ".css"){
		console.log("IN CSS :" + filname);
		console.log("request.url : " + request.url.toString().substring(1));
		sendFileContent(response,request.url.toString().substring(1), "text/css");
	}
	else{
		console.log("Requested URL is: " + request.url);
		response.end();
	}
}).listen(process.env.PORT || 8080)

function sendFileContent(response, fileName, contentType){
	fs.readFile(fileName, function(err, data){
		//console.log(data);
		if(err){
			response.writeHead(404);
			response.write("Not Found!");
		}
		else{
			response.writeHead(200, {'Content-Type':contentType});
			response.write(data);
		}
		response.end();
	});
}

