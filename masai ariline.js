function runProgram(input) {
  input=input.split("\n")
// console.log(input);
var len=Number(input[0])
// console.log(len);
var bag=input[1].trim().split(" ").map(Number)
//console.log(bag);
var hand=input[2].trim().split(" ").map(Number)
//console.log(hand);
 for (let i = 0; i <len; i++) {
 fun(bag[i],hand[i])
}
}
function fun(g,h) {
  if(g<=15 && h<=7){
      console.log("Boarding");
  }else{
      console.log("Stop");
  }
}
  if (process.env.USERNAME ==='Rohan') {
    runProgram(`4
    12 14 15 6
    8 5 7 4`);
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