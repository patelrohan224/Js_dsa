function runProgram(input) {
input=input.trim().split("\n")
for (let i = 0; i < input.length; i++) {
    let inpt=input[i].trim().split(" ").map(Number)
    if(inpt.length>1){
     push(inpt[1])
    }
    if(inpt==2){
        pop()
    }
    if(inpt==3){
      let rs=peek()
        if(rs=="Empty!"){
              console.log(rs);
              break
        }else{
            console.log(rs);
        } 
    }
}
}
let array = []
let top = -1
function push(data){
  
    array[++top] = data
}
function pop(){
    if (top == -1) return "Empty!"
    ans = array[top]
    top--
    return ans
}
function peek(){
    if (top == -1) return "Empty!"
    return array[top]
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`6
    1 15
    1 20
    2
    3
    2
    3`);
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