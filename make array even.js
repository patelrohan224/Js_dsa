function runProgram(input) {
  input=input.split("\n")
  var line=1
  for (let i = 2; i < input.length; i=i+2) {
      var ar=input[i].trim().split(" ").map(Number)
      
     // console.log(ar);
     if(ar.length==1)
     {
       console.log("NO");
     }else{
      fun(ar)}
  }
  
}
function fun(params) {
  var sum=0
var count=0
  for (let i = 0; i <params.length; i++) {
     sum=sum+params[i]
     
  }
  for (let j = 0; j < params.length; j++) {
    if(params[j]%2==0){
    count++
      }
  }
  if(sum%2==0 || count>0){
      console.log("YES");
      
  } else if(params.length==1){
      console.log("NO");
  }
else {
      console.log("NO");
  }
  }
  
 
 

  if (process.env.USERNAME ==='Rohan') {
    runProgram(`7
    7
    64 63 32 2 15 13 53
    10
    21 81 69 13 72 59 13 89 50 25
    4
    43 81 93 63
    5
    1
    6
    2 94 66 29 60 73
    8
    39 91 15 61 65 25 5 53
    5
    29 60 83 38 22`);
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