const fs = require('fs');

console.log("Getting file info");
fs.stat('new.txt', function(err, stats){
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log(" get file info successfully");

    console.log("isFile ?" + stats.isFile());
    console.log("isDirectory ?" + stats.isDirectory());
});