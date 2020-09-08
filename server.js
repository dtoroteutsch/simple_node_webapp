const http = require('http');

function responseRequest(request, response){
  response.end('Hello World from http');
}

let server = http.createServer(responseRequest);

server.listen(3000);

