function runProgram(input) {
input =input.trim().split("\n")
console.log(input);
for (let i = 2; i < input.length; i=i+2) {
    str=input[i].trim().split(" ").map(Number)

   fun(str)
}
}
function fun(array) {
    var object={}
    for (let i = 0; i < array.length; i++) {
        if(object[array[i]]==undefined){
            object[array[i]]=1
          }else{
            object[array[i]]=object[array[i]]+1
          }
    }
    var c=1
    var n
    for (const key in object) {
  
      if(object[key]==c){
      c=object[key]
      n=key
      }
    }
    console.log(n);
   
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`1
    5
    1 2 1 3 4 4 5 2 3`);
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