
function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 1; i < input.length; i++) {
        let inpt=input[i].trim().split(" ").map(Number)
      if(inpt.length>1){
        let rs=inpt[0]
        if(rs==1){
        ar.push(inpt[1])
        }
        if(rs==2){
           sar.push(inpt[1]) 
        }
      }
      
      if(inpt[0]==3){
          if(ar.length!==0){
      console.log(ar[0]);  }
      else{
          console.log("-1");
      }
      }
      if(inpt[0]==4){
          if(sar.length!==0){
        console.log(sar[sar.length-1]); }
        else{console.log("-1");} 
        }
        if(inpt[0]==5){
            let rs=ar[0]
            ar.shift()
            sar.push(rs)
        }
    }
    }
let ar=[]
let sar=[]
if (process.env.USERNAME === 'Rohan') {
    runProgram(`7
    1 4
    2 3
    1 2
    3
    4
    5
    4`);
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