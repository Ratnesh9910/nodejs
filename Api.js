const express = require("express");
// const { append } = require("express/lib/response");


const api = express();


const fs= require("fs");
const { request } = require("http");
let list = {
    "list3":{
        "username":"ratnesh3",
        "password": "123",
        "id": 3
    }
}
 
api.get("/UserList", function(req, res){
     
    fs.readFile(__dirname+"/" + "UserList.json" , function(err, data){
        console.log(data);
        res.end(data);

    })
})


api.post("/Useradd", function(req, res){
     
    fs.readFile(__dirname+"/" + "UserList.json" , function(err, data){
        console.log(data);
        data = JSON.parse(data);
        data["list3"] = list["list3"]

        res.end (JSON.stringify(data));

    })
})

api.get("/UserList/:id", function(req, res){
     
    fs.readFile(__dirname+"/" + "UserList.json" , function(err, data){
        console.log(data);
        var getuser  = JSON.parse(data)
        var listuser = getuser["list"+ req.params.id]
        res.end (JSON.stringify(listuser));f

    })
})

api.delete("/deleteuser/:id", function(req, res){
    console.log("id",req.params.id);
    fs.readFile(__dirname+"/" + "UserList.json" , function(err, data){
        console.log(data);
        var getuser  = JSON.parse(data)
       delete getuser["list"+ req.params.id]
        res.end (JSON.stringify(getuser));
})
})
api.listen(3000);
console.log("server running")
