var http    = require('http');
http.createServer((req, res)=>{
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('Hello World');
}).listen(8080, '127.0.0.1');
console.log('Server running at http://localhost:8080');