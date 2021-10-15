function runProgram(input) {
    var input=input.trim().split("")
    console.log(input);
    var count=0
    for (let i = 0; i < input.length; i++) {
     for (let j = i+1; j < input.length; j++) {
      if(input[i]==input[j]){
        count++
     }
      }
      
    }if(count>0){
      console.log("No");
      
            }else{
              console.log("Unique");
            }

}
  
    if (process.env.USERNAME ==='Rohan') {
      runProgram(`masai`)
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