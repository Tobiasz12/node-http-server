var http = require('http');
var fs = require('fs');
var server = http.createServer();

fs.readFile('error.jpg', function(err, data) {
	if (err) throw err;
	server.on('request', function (request, response) {
	    if (request.method === 'GET' && request.headers.host === 'localhost:9001') {
	    	response.setHeader("Content-Type", "text/html; charset=utf-8");
	        response.write('<h1>Hello World!</h1>');
	        response.end();
	    } else {
	        response.statusCode = 404;
	        response.setHeader("Content-Type", "image/jpeg");
	        response.end(data);
	    }
	});
	console.log('Server running at http://localhost:9000/');
});
server.listen(9000);