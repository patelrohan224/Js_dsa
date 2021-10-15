function runProgram(input) {
  input=input.trim().split("\n")
  //console.log(input);
  var str=input[0].trim().split(" ")
  //console.log(str[0]);
  var n=Number(input[1])

//console.log(rm);
var ry=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
var cn
for (let i = 0; i <7; i++) {
    if(str==ry[i]){
      cn=i
    }
}
  var rm=(n+cn)%7
//console.log(cn);
//console.log(rm+cn);

console.log(ry[rm]);


}  

 
 
  if (process.env.USERNAME === 'Rohan') {
    runProgram(`Saturday
    67`); 
    } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
    }
  
  