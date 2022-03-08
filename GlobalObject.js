

console.log("FileName",__filename)
console.log(__dirname)

 function timeOut(){
     console.log("Hi");
 }
// setTimeout(timeOut, 5000)

// setInterval(timeOut , 5000)

let Obj = setTimeout(timeOut, 5000)
 clearTimeout(Obj);
