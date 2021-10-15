function runProgram(input) {
    input = input.trim().split("\n");
    let len1 = input[1].trim().split(" ").map(Number);
    let len2 = input[2].trim().split(" ").map(Number);
    let rs = 0
    
    while(len1.length != 0){
      if(len1[0] == len2[0]){
        len1.shift()
        len2.shift()
        rs++
      } else {
        let a = len1.shift();
        len1.push(a)
        rs++
      }
      
    }
    console.log(rs);
  
  
  }
  
  if (process.env.USERNAME === 'Rohan') {
    runProgram(`3
    3 2 1
    1 3 2`);
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