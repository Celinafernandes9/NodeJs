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

// fs.open("example.txt", "a+", (err, data) => {
//   if (err) {
//     console.log("Error while appending file: ", err);
//     return;
//   }
//   console.log("File append successfully");

// closing file 
 
//   fs.close(data, (err)=>{
//     if(err){
//         console.error("Error closing the file :" + err)
//         return;
//     }
//     console.log("file closed");
//   })
// });

// write file
// in writefile  if the dile is not craeted it will create and give file automatically

// fs.writeFile("new.txt", "helloo world..", (err)=>{
//   if(err) throw err
//   console.log("saved");
// })

// append file

// fs.appendFile("new.txt", "helloo world.. this is append file", (err)=>{
//   if(err) throw err
//   console.log("updated");
// })

// use to check existence file/folder
getCurrentFile();

// first it call function after that it will get complete file data from the drive that is mention and after that you will get complete list of the data. After that it will perform the operation.

let exists = fs.existsSync("demo.txt")
console.log("demo.html file exists ?", exists);

exists=fs.existsSync("new.txt")
console.log("new.txt file exists ?", exists);

function getCurrentFile(){
  console.log("\n Current filename :");
  fs.readdirSync(__dirname).forEach(file=>{
    console.log(file);
  })
}