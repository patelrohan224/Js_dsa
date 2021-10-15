function runProgram(input) {
input=input.trim().split("\n")
// console.log(input);
for (let i = 2; i < input.length; i=i+2) {
    let str=input[i].trim().split(" ").map(Number)
   fun(str)
   
}
}
var ar=[]
let top=-1
function push(data) {
    ar[++top]=data
}
function pop() {
    if(top==-1){
        return "empty"
    }
    let ans=ar[top]
    top--
    return ans
}
function peek() {
    if(top==-1){
        return "empty"
    }
    return ar[top]
}
function empty() {
   return top==-1
}
function fun(array) {
   
    let s=0
    
    for (let i = array.length-1; i >=0; i--) {
        while(empty()==false && array[i]<=ar[top]){
            pop()
        }
        if(top==-1){
            s+=0
        }else{
         s+=ar[top]
        }
        push(array[i])
    }
   console.log(s);
    top=-1
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`2
    4
    4 3 1 2
    4
    1 2 3 4`);
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