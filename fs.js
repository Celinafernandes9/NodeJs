const http = require('http');
// importing file system module
const fs = require('fs');
const path = require('path')

http.createServer((req, res)=>{

// read and write mode opening file

    fs.open('example.txt', 'r+', (err , data)=>{
    if(err){
        console.error("Error:" , err);
        return;
    }
    console.log("File open for reading and writing mode");
})


// file reading operation

    fs.readFile("server.js" , (err, data)=>{
    res.writeHead(200, {'content-type':'text/plain'});
     res.write(data)   
    res.end()
    })

// append file

    fs.open("example.txt", "a+", (err, data) => {
    if (err) {
      console.log("Error while appending file: ", err);
      return;
    }
    console.log("File append successfully");
  
// closing file 
   
    fs.close(data, (err)=>{
      if(err){
          console.error("Error closing the file :" + err)
          return;
      }
      console.log("file closed");
    })
  });

// appending file
// In append file the data is added at the last line of the code

    fs.appendFile('index.html','<h2>This is append file</h2>',(err, data)=>{
        if(err) throw err
        console.log("File updated");
        return res.end()
    })

// Delete operation

    fs.unlink("example.txt", (err)=>{
    if(err) throw err
    console.log("file deleted");
    return res.end()
}) 

// rename operation

    fs.rename("index.html", "demo.html", (err, data)=>{
    res.writeHead(200, {'content-type':'text/plain'});
    res.write(data)
    res.end();
})

// write file
// in writefile  if the file is not craeted it will create and give file automatically
// In writefile it simply overwrites the previous data remove or replace add the data 

fs.writeFile("new.txt", "helloo world..", (err)=>{
    if(err) throw err
    console.log("saved");
  })
  
  // append file
  // In append file it keeps the previous data as it is and add the new data
  
  fs.appendFile("new.txt", "helloo world.. this is append file", (err)=>{
    if(err) throw err
    console.log("updated");
  })

// Creating directory
fs.mkdir(path.join(__dirname, 'test'), (err)=>{
    if(err) {
        return console.error(err)
    }
    console.log("Directory created successfully");
});

// craeting a specific directory

const targetDirectory = 'D:\\new';

fs.mkdir(targetDirectory, {recursive:true}, (err)=>{
    if(err) {
        return console.error(err);
    }
    console.log("Directory created successfully");
})

}).listen(4000); 