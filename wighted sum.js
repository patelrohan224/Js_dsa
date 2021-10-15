function runProgram(input) {
    var input=input.trim().split("\n")
    console.log(input);
   for (let i = 2; i < input.length; i=i+2) {
       var len=input[i].trim().split(" ").map(Number)
       console.log(len);
       fun(len)
   }

}
  function fun(array) {
      var sum=0
      for (let i = 0; i < array.length; i++) {
          
        sum=sum+(array[i]*i)+array[i]
          
      }
      console.log(sum);
  }
    if (process.env.USERNAME ==='Rohan') {
      runProgram(`2
      5
      1 2 3 4 5
      2
      100 1`)
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