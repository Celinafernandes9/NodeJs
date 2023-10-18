const fs = require("fs");

// read and write mode

// fs.open('example.txt', 'r+', (err , data)=>{
//     if(err){
//         console.error("Error:" , err);
//         return;
//     }
//     console.log("File open for reading and writing mode");
// });

// append file
// in append mode if the file is not create it will create automatically

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
