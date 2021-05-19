const http = require("http");
const fs = require("fs");

const server = http.createServer( (req,res)=>{
	console.log(req.url);
	if(req.url === "/"){
		fs.readFile("./views/index.html", "utf8" ,(err,data)=>{
			res.writeHead(200,{"Content-Type":"text/html"});
			res.write(data);
			res.end();
		})
	}
	else if(req.url === "/css/main.css"){
		fs.readFile("./css/main.css" ,"utf8",(err,data)=>{
			res.writeHead(200,{"Content-Type":"text/css"});
			res.write(data);
			res.end();
		})
	}
	else if(req.url === "/cars"){
		fs.readFile("./views/cars.html", "utf8" ,(err,data)=>{
			res.writeHead(200,{"Content-Type":"text/html"});
			res.write(data);
			res.end();
		})
	}
	else if(req.url === "/cars/new"){
		fs.readFile("./views/new_cars.html", "utf8" ,(err,data)=>{
			res.writeHead(200,{"Content-Type":"text/html"});
			res.write(data);
			res.end();
		})
	}
	else if(req.url === "/cats" && req.method === "POST"){
		res.write("POST SUBMITTED");
		res.end();
	}
	else if(req.url === "/cats"){
		fs.readFile("./views/cats.html", "utf8" ,(err,data)=>{
			res.writeHead(200,{"Content-Type":"text/html"});
			res.write(data);
			res.end();
		})
	}
	else if(req.url === "/images/cat.jpg"){
		fs.readFile("./images/cat.jpg" ,(err,data)=>{
			res.writeHead(200,{"Content-Type":"image/jpg"});
			res.write(data);
			res.end();
		})
	}
	else if(req.url === "/images/cars.jpg"){
		fs.readFile("./images/cars.jpg" ,(err,data)=>{
			res.writeHead(200,{"Content-Type":"image/jpg"});
			res.write(data);
			res.end();
		})
	}
	else{
			res.write('Page not found!');
			res.end();
	}
})

server.listen(8080);
console.log('listening at port 8080');