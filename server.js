var http, url, fs, requestHandler, server;

http = require("http");
url = require("url");
querystring = require("querystring");
fs = require("fs");
// express = require("express");

requestHandler = function(req, res) {
  
  var pathname = url.parse(req.url);
  if(pathname === '/') {

  }


  console.log(res);
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write("Hello World!");
  res.end();
}

server = http.createServer(requestHandler).listen(8080);
