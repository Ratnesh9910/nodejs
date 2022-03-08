var fs = require("fs");
var childProcess = require("child_process");

for(var i=0; i <4; i++){
    var workerProcess = childProcess.exec("node support.js " + i, function(err, stdOut, stdErr){
        if(err){
            console.log("error ",err);
            console.log(err.code);
            console.log(err.signal)
        }

        console.log(stdOut)
        console.log(stdErr)
    });

    workerProcess.on("exit", function(data){
        console.log(data)
    }); 
}

 for(var i=0; i <4; i++){
    var workerProcess = childProcess.spawn("node", ["support.js", i]);

    workerProcess.stdout.on("data", function(data){
        console.log("stdOut" + data)
    });

    workerProcess.stderr.on("data", function(data){
        console.log("stdErr", data)
    })

    workerProcess.on("close", function(data){
        console.log(data)
    });
} 

 var workerProcess = childProcess.fork("support.js");
workerProcess.on("close", function(data){
    console.log(data)
}); 

for(var i=0; i <4; i++){
    var workerProcess = childProcess.fork("support.js", [i]);
    workerProcess.on("close", function(data){
        console.log(data)
    });
} 