
const fs = require('fs').promises;

const filePaths = ['example.txt','new.txt','input.txt'];

async function readFiles(filePath){
    try {
        const fileContents = await Promise.all(
            filePath.map(async (path)=>{
                const data = await fs.readFile(path, 'utf8');
                console.log(`\ncontents of ${path} :`);
                console.log(data);
                return data;
            })
        );
        console.log("files are read");
    } catch (err) {
        console.error(`Error while reading files : ${err.message}`);
    }  
}

readFiles(filePaths);

    

