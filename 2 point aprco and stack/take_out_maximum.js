function runProgram(input) {
    input=input.trim().split("\n")

   let len=input[1].trim().split(" ").map(Number)
   let k=input[0].trim().split(" ").map(Number)
   fun(len,k[1])
}
function fun(array,k) {
    var rs=0
    let cs
    let n=array.length-1

    for (let i = 0; i<k; i++) {
        rs+=array[i]     
        
    }
    
    cs=rs
    for (let j = k; j < array.length; j++) {
        cs+=array[j]-array[j-k]
        rs=Math.max(rs,cs)
    }
console.log(rs);
}
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`10 3
        -1 -1 -2 1 -2 4 1 9 3 9`);
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