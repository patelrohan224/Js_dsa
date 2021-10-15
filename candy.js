function runProgram(input) {
    input=input.split("\n")
   console.log(input);
   
   for (let i = 1; i < input.length; i++) {
       var rs=0
      var len=input[i].trim().split(" ").map(Number)
      console.log(len);
      var rs=fun(len[0],rs)
    //  console.log(rs);
   }
   
}
function fun(n,rs) {
    var rs=n
    var count=0
while(n>=10) {
 
       n=n-10
        count++
        n=n+1

 
}
console.log(rs+count);

}

    if (process.env.USERNAME ==='Rohan') {
      runProgram(`6
      1
      10
      19
      9876
      12345
      1000000000`);
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