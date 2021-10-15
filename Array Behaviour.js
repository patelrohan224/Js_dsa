function runProgram(input) {
  input=input.trim().split("\n")
// console.log(input);
  var testcase=input[0].trim().split("").map(Number)
//  console.log(testcase);
  for (let i = 2; i < input.length; i=i+2) {
     
      var str=input[i].trim().split(" ").map(Number)
  // console.log(str);   
  var rs=fun(str)
   if(rs>0){
   console.log("Misbehave!");}
   else{
   console.log("Behave!");}
  }

}
function fun(params) {
  //console.log(params);
  var oddc=0
  var evenc=0
  for (let i = 0; i < params.length; i++) {
    
   
         
      if(params[i] %2 !=0 && params[i+1]%2 !=0 && params[i+2]%2 !=0 &&  params[i+2] !=null && params[i+1]!=null && params[i]!=null ){
      oddc++
  
      } 
}return oddc
} 

if (process.env.USERNAME === 'OM') {
  runProgram(`2
  6
  1 3 3 4 5 6
  5
  1 2 3 4 5`);
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

