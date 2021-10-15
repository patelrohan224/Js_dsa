function runProgram(input) {
   input=input.trim().split("\n")
   
var len=input[0].trim().split(" ").map(Number)
var arr=input[1].trim().split(" ").map(Number)
//console.log(len);
//console.log(arr);
   fun(arr,len[1])
}
function fun(array,k) {
    var coount=0
    var k=array[k-1]
    if(k==0){
        console.log("0");
    }else{
  for (let i = 0; i <array.length; i++) {
      if(array[i]>=k){
    coount++}
  }
console.log(coount);}
}
 
     if (process.env.USERNAME ==='Rohan') {
       runProgram(`17 14
        16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0`);
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