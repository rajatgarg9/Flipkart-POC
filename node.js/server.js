var http = require('http');

http.createServer(function(request, response) {
  request.on('error', function(err) {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', function(err) {
    console.error(err);
  });
  if (request.method === 'GET') {
    console.log(`Sever is connected`);
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(8080);
console.log("Server is listening");


