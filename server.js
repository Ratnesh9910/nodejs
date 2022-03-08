
// // console.log("helloworld")
// // var http = require('http');

// // http.createServer(function (req, res) {
// //   res.writeHead(200, {'Content-Type': 'text/html'});
// //   res.end('Hello World!');
// // }).listen(8080);

// // console.log("running server")


// // //console.log("helloworld")
// // var http = require('http');

// // http.createServer(function (req, res) {
// //   res.writeHead(200, {'Content-Type': 'text/html'});
// //   res.end('Hello World!');
// // }).listen(8080);

// // console.log("running server")


// /// ye nhi work kr rha......**
// // var http = require('http');
// // let url = require("url")

// // http.createServer(function (req, res) {
// //   res.writeHead(200, {'Content-Type': 'text/html'});
// //   let test = url.parse(req.url,true).query
// //   let yearMonth = test.year+ " " + test.month;
// //     // res.write(req.url)
// //   res.end(yearMonth);
// // }).listen(3000);

// // console.log("running server")



// // var http = require('http');

// // let capital = require("upper-case")

// // http.createServer(function (req, res) {
// //   res.writeHead(200, {'Content-Type': 'text/html'});
 
// //   res.write(capital.upperCase("ratnesh"))

// //   res.end();
// // }).listen(3030);

// // console.log("running server")





// // var http = require('http');

// // let fileSystem = require("fs");

// // http.createServer(function (req, res) {
// //   fileSystem.appendFile("sample.txt", "HI" , function (eroor){
// //     if(error)
// //     {
// //       console.log("eroor");
// //     }else{
// //       console.log("file save");
// //     }
// //   });
// //  }).listen(3030);

// // console.log("running server")



// // var http = require('http');

// // let fileSystem = require("fs");

// // http.createServer(function (req, res) {
// //   fileSystem.writeFile("sample.txt", "Cricket" , function (error, file){
// //     if(error)
// //     {
// //       console.log("error");
// //     }else{
// //       console.log("file save");
// //     }
// //   });
// //  }).listen(3030);

// // console.log("running server")



// // var http = require('http');

// // let fileSystem = require("fs");

// // http.createServer(function (req, res) {
// //   fileSystem.appendFile("sample.txt", "Cricket and BAll" , function (error, file){ 
// //     if(error)
// //     {
// //       console.log("error");
// //     }else{
// //       console.log("file save");
// //     }
// //   });
// //  }).listen(3030);

// // console.log("running server")



// var http = require('http');

// let fileSystem = require("fs");

// http.createServer(function (req, res) {
//   fileSystem.unlink("sample.txt",  function (error){ 
//     if(error)
//     {
//       console.log("error");
//     }else{
//       console.log("file save");
//     }
//   });
//  }).listen(3030);

// console.log("running server")



// var http = require('http');

// let fileSystem = require("fs");

// http.createServer(function (req, res) {
//   fileSystem.rename("sample.txt", "first.txt" , function (error){ 
//     if(error)
//     {
//       console.log("error");
//     }else{
//       console.log("file save");
//     }
//   });
//  }).listen(3030);

// console.log("running server")