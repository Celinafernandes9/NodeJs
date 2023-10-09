// importing http module by craeting a variable
const http = require('http');

http.createServer((req, res)=>{
    // in place of html we can use plain format also or diff format
    res.writeHead(200, {'content-type':'text/html'});
     
    // to stop the execution we use res.end
    // res.end("Server has created")  for plain text

    // for html format
    res.end("<h6>Server has created</h6>")
    // which port no we want to see the output, we want to mention
}).listen(4000);