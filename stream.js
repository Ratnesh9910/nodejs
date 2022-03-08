
// let fileSystem = require("fs");

// let test = "";

// let readStream = fileSystem.createReadStream("test.txt"); 

// readStream.setEncoding("utf8");

// readStream.on("data", function(value){

//     test += value;
// });

// readStream.on("end", function(){
//     console.log( test);
// })
// console.log("program end");



// let fileSystem = require("fs");

// let test = "This is Ratnesh";

// let writeStream = fileSystem.createWriteStream("show.txt"); 

// writeStream.write(test, "utf8");

// writeStream.end()

// writeStream.on("finish", function(){

//     console.log("success")
// });
// console.log("program end")


// let fileSystem = require("fs");

// let readStream = fileSystem.createReadStream("test.txt"); 

// let writeStream = fileSystem.createWriteStream("New.txt"); 

// readStream.pipe(writeStream)

// console.log("program end")



// let fileSystem = require("fs");

// let zipFile = require("zlib");
// fileSystem.createReadStream("New.txt").pipe(zipFile.createGzip()).pipe(fileSystem.createWriteStream("New.txt.gz"))

// console.log("program end")


let fileSystem = require("fs");

let zipFile = require("zlib");

fileSystem.createReadStream("New.txt.gz").pipe(zipFile.createGunzip()).pipe(fileSystem.createWriteStream("New.txt"))

console.log("program finish")









