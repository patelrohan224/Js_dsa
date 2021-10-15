function runProgram(input) {
input=input.trim().split("\n")
let len=input[1].trim().split(" ").map(Number)
fun(len)
}
function fun(array) {
    for (let i = 0; i < array.length-1; i++) {
        let swap=false
        for (let j = 0; j < array.length-1; j++) {
            if(array[j]>array[j+1]){
                let temp=array[j]
                array[j]=array[j+1]
                array[j+1]=temp
                swap=true
            }
        }
        if(swap==false){
            break
        }
    }
    console.log(array.join(" "));
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`5
    3 5 0 9 8`);
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