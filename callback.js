
// let fileSystem = require("fs");
//  let data = fileSystem.readFileSync("first.txt");
//  console.log("data", data.toString ());
//  console.log("program end");


// let fileSystem = require("fs");
// fileSystem.readFile("first.txt", function(error,data){
//     if(error){
//         console.log("error", error);
//     } else{
//         console.log("data", data.toString());
//         console.log("program end");}
   
// })


// let events = require("events");
// let eventEmitterObj = new events.EventEmitter()
// let connectHandler = function connected(){
//     console.log("connection successfull")
//     eventEmitterObj.emit("dataReceived");
// }
// eventEmitterObj.on("dataReturn",connectHandler);
// eventEmitterObj.on("dataReceived",function(){
//     console.log("data Received Successfully")
// });

// eventEmitterObj.emit("dataReturn");
// console.log("program end");



// let events = require("events")
// let eventEmitterObj = new events.EventEmitter()
// let connectHandler = function connected(){
//     console.log("this is ratnesh")
// }
// eventEmitterObj.on("dataReturn",connectHandler);
// eventEmitterObj.emit("dataReturn");
// console.log("program end");




let events = require("events")
let eventEmitterObj = new events.EventEmitter()
let taskOne = function taskOne(){
    console.log("taskOne executed");
};

let taskTwo = function taskTwo(){
    console.log("taskTwo executed");
};
let taskThree = function taskThree(){
    console.log("taskThree executed");
};

let taskFour = function taskFour(){
    console.log("taskFour executed");
};
eventEmitterObj.addListener("connection", taskOne);
eventEmitterObj.on("connection",taskTwo)
eventEmitterObj.on("connection",taskThree)
eventEmitterObj.on("connection", taskFour);

let eventTask = require("events").EventEmitter.listenerCount(eventEmitterObj,"connection")
 console.log("eventTask count", eventTask);

  eventEmitterObj.emit("connection");
  eventEmitterObj.removeListener("connection",taskOne);
  eventEmitterObj.removeListener("connection",taskThree);

  console.log("taskOne and taskThree will not listen");

  eventEmitterObj.emit("connection");

  eventTask = require("events").EventEmitter.listenerCount(eventEmitterObj,"connection");

  console.log("eventTask count", eventTask);
  console.log("program end");








