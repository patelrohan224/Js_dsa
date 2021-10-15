function runProgram(input) {
    input=input.trim().split("\n")
  // console.log(input);
    var testcase=input[0].trim().split("").map(Number)
  //  console.log(testcase);
    for (let i = 2; i < input.length; i=i+2) {
       var str=input[i].trim().split("")
       if(str.length %2==0){
      // console.log(str);
       fun(str)}
    }
}
function fun(params) {
   // console.log(params);
    var ar=[]
    var x
  for (let i = 0; i < params.length; i=i+2) {
        ar.push(params[i+1])
     ar.push(params[i])

        
      
  }
  console.log(ar.join(""));
}
if (process.env.USERNAME === 'OM') {
    runProgram(`1
    6
    rutwik`);
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

