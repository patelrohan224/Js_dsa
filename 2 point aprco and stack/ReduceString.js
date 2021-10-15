function runProgram(input) {
let len=input.trim().split("")
lenn(len)
}
let ar=[]
let top=-1
function push(str) {
  ar[++top]=str
}
function pop() {
  if(top==-1){
    return "Empty"}
    let ans=ar[top]
    top--
    return ans
  
}
function peek() {
  if(top==-1){
    return "Empty"}
    return ar[top]
}
function empty() {
  return top==-1
}
function lenn(array) {
    
   
   for (let i =0;i<=array.length ;i++) {
     if(empty()==true || array[i]!=ar[top]){
       push(array[i])
     }
    else{
       pop()
     }

   }
   if(ar==empty()){
     console.log("Empty String");
    }else{
      console.log(ar.join(""));  
   }
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`aaaa`);
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