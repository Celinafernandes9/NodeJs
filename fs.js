const http = require('http');
// importing file system module
const fs = require('fs');

http.createServer((req, res)=>{

// file reading operation

    // fs.readFile("server.js" , (err, data)=>{
    // res.writeHead(200, {'content-type':'text/plain'});
    //  res.write(data)   
    // res.end()
    // })

// appending file
// In append file the data is added at the last line of the code

    // fs.appendFile('index.html','<h2>This is append file</h2>',(err, data)=>{
    //     if(err) throw err
    //     console.log("File updated");
    //     return res.end()
    // })


}).listen(4000); 