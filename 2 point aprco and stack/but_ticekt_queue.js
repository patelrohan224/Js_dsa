
function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 1; i < input.length; i++) {
        let inpt=input[i].trim().split(" ")
      if(inpt.length>1){
        let rs=Number(inpt[1])
        ar.push(rs)
        console.log(ar.length);
      }
      if(inpt[0]=="D"){
          let rs=[]
          if(ar==""){
            rs.push(-1)
          }else{
          rs.push(ar.shift())}
        ar.shift()
        rs.push(ar.length)
        console.log(rs.join(" "));
        
      }
     
    }
    }
let ar=[]
if (process.env.USERNAME === 'Rohan') {
    runProgram(`5
    E 2
    D
    D
    E 3
    D`);
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