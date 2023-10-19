const fs = require("fs");

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