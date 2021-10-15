function runProgram(input) {
    input=Number(input)
    if(input>5){
    var mod=input%5
    //console.log(mod);
    var r=input-mod
    
    var rs=r/5
    //console.log(rs);
    if(mod>0){
    console.log(rs+1);}
    else{
        console.log(rs);
    }}
    else{
        console.log(input);
    }
    }
    
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`10`);
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