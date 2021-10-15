function runProgram(input) {
    input=input.split("\n")
   //console.log(input);
   for (let i = 1; i < input.length; i++) {
      var len=input[i].trim().split(" ").map(Number)
     //console.log(len);
    var rs=powerOf2(len)
    if(rs){
        console.log("True");
    }else{
        console.log("False");
    }
   }
}
function powerOf2(n)
{
  
  if (n == 1)
    return true;
 
 
  else if (n % 2 != 0 ||n ==0)
    return false;
 

  return powerOf2(n / 2);
}
   
   

    if (process.env.USERNAME ==='Rohan') {
      runProgram(`6
      17281
      -8388608
      11724
      1073741824
      -11085
      16384`);
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