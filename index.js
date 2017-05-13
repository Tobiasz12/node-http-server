var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    if (response.statusCode === 404) {
    	fs.readFile('error.jpg', function(err, data) {
    		if (err) throw err; 
	        response.setHeader("Content-Type", "image/jpeg");
	        response.end(data);
        });	     
    } else {
    	response.setHeader("Content-Type", "text/html; charset=utf-8");
    	response.write('<h1>Hello World</h1>');
    	response.end();     
    }
   
   
});
console.log('Server running at http://localhost:9000/');

server.listen(9000);