
let express = require("express");
let api = express();
let bodyParser = require("body-parser");
// let urlEncode = bodyParser.urlencode({extended:true})
let urlEncode = bodyParser.urlencoded({extended:true});

let multer =require
 api.get("/getapi", function(req,res){
    //  res.send("Rahul");
     console.log("req", req.query.firstname)

     let Obj = {
         firstname : req.query.firstname ,
         lastname : req.query.lastname,
     }
     console.log("Obj" ,Obj);
     let json = JSON.stringify(Obj)
     res.end(json)
 })

 
 api.post('/postapi', urlEncode , function(req, res){
    
    let data = {
        firstname:req.body.firstname,
        lastname: req.body.lastname
    }
    let jsonObj = JSON.stringify(data);
    console.log("request data", data);

    res.end(jsonObj);
});
api.use(express.static("public"));

api.get("/index.html", function(req, res){
    res.sendFile(__dirname + "/" + "index.html");
})


 api.post("/apipost", function(req,res){
    res.send("Sudhir and Zahid");
})
api.delete("/apidelete", function(req,res){

    res.send("Sudhir and AMit");
})
api.use(express.static("public"))

api.get("/index.html", function(req,res){
   res.sendFile(__dirname + "/" + "index.html"); 
})

 let server = api.listen(3000);
 console.log("Hi");


