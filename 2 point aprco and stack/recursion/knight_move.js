function runProgram(input) {
    input=input.trim().split(" ").map(Number)
    fkm(input[2],input[0],input[1])
let count=0

for (let i = 0; i <10 ; i++) {
    for (let j = 0; j <10; j++) {
        if(ar[i][j]==1){
           count++
        }    
    }
}

console.log(count);
}
var ar =[...Array(11)].map(e => Array(11));


function fkm(n,i,j){
    if(i<0 || i>9 || j<0 || j>9){
        return 
    }
    if(n==1){
        ar[i][j]=1;
        return 
    }
    fkm(n-1,i-2,j+1)
    fkm(n-1,i-2,j-1)
    fkm(n-1,i-1,j+2)
    fkm(n-1,i-1,j-2)
    fkm(n-1,i+2,j+1)
    fkm(n-1,i+2,j-1)
    fkm(n-1,i+1,j-2)
    fkm(n-1,i+1,j+2)
    
}

    if (process.env.USERNAME === 'Rohan') {
        runProgram(`4 7 6`);
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