const http = require('http');
// importing file system module
const fs = require('fs');

http.createServer((req, res)=>{
    fs.readFile("server.js" , (err, data)=>{
    res.writeHead(200, {'content-type':'text/plain'});
     res.write(data)   
    res.end()
    })
}).listen(4000);