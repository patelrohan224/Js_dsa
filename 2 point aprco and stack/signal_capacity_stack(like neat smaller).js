function runProgram(input) {
  input=input.trim().split("\n")
  // console.log(input);
  for (let i = 2; i < input.length; i=i+2) {
      let str=input[i].trim().split(" ").map(Number)
     fun(str)
     
  }
  }

  
  function fun(array) {
     
    var ar=[]
      let rs=[]
      for (let i = 0; i <array.length; i++) {
          while(ar.length!==0 && array[i]>=array[ar[ar.length-1]]){
              ar.pop()
          }
          if(ar.length!==0){
           rs.push(i-(ar[ar.length-1])); 
          }else{
           rs.push(i+1) 
          }
          ar.push(i)
      } 
    console.log(rs.join(" "));
     
  }
  if (process.env.USERNAME === 'Rohan') {
      runProgram(`2
      7
      100 80 60 70 60 75 85
      5
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