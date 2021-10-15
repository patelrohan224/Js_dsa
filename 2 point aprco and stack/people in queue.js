function runProgram(input) {
input=input.trim().split("\n")
let nlt=input[0].trim().split(" ").map(Number)
for (let i = 1; i < input.length; i++) {
    
    let len=input[i].trim().split(" ").map(Number)
    if(len[0]==1){
       if(rs.length<nlt[0]){
           rs.push(len[1])
           console.log(len[1]);
       }else{
           console.log("-1");
       }
       
    }else{
        let s=rs.shift()
                  if(s!==undefined){
                      console.log(s);
                  }
                  else{
                      console.log("-1");
                  }
                  
        
      
    }
    
}
}
let rs=[]
if (process.env.USERNAME === 'Rohan') {
    runProgram(`2 6
    1 1
    1 2
    1 3
    2
    2
    2`);
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