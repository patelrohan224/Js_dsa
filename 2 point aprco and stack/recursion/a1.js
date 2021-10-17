function runProgram(input) {
input=input.trim().split("\n")
for (var i=2; i<input.length; i=i+2) {
    
    let len=input[i].trim().split(" ").map(Number)
   
    let k=0
    console.log( fun(len,k))
}
}
function fun(len,i){
//  console.log(i);
   if(i==len.length-1){
       return 0
   }else{

      
       return Math.abs(len[i]-len[i+1])+fun(len,i+1)
   }
}


if (process.env.USERNAME === 'Rohan') {
    runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8`);
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