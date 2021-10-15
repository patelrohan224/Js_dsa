function runProgram(input) {
input=input.trim().split("\n")

    var str=input[1].trim().split("")
   var str2=input[3].trim().split("")

console.log(str,str2);    
var ar=[]
var c=0
for (let i = 0; i < str2.length; i++) {
   
    for (let j = 0; j < str.length; j++) {
        if(str2[i]==str[j]){
           c++ 
           break
        }
    }
              
}if(str2.length==c){
    console.log("Yes");
}else{
    console.log("No");
}

}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`5
    aabbc
    4
    abcd`);
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