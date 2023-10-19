const { error } = require('console');
const fs = require('fs');
const http = require('http');

// creating server
    http.createServer((req, res)=>{
        console.log("Server created successfully");

// Writing into file
    console.log("Writing into file");
    fs.writeFile("input.txt", "helooo", (err)=>{
        if(err){
            return console.error(err);
        }

        console.log("Data written successfully");
        console.log("Reading written data");

        fs.readFile('input.txt', (err, data)=>{
            if(err) {

                return console.error(err);
            }
            // Print the content of the file on the console
            console.log(data.toString());
        });
    });
}).listen(4000);