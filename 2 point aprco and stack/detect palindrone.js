  function runProgram(input) {
input=input.trim().split("")
var l,r
l=0
r=input.length-1
var c=0
while (l<r) {
    if(input[l]!=input[r])
    {
        console.log("No");
        c++
        break
    }
    else{
        l++;
        r--
    }
}
if(c==0){
    console.log("Yes");
}
}

if (process.env.USERNAME === 'Rohan') {
    runProgram(`1221`);
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