function runProgram(input) {
    input=input.trim().split("\n")
   
       
        var str=input[0].trim().split(" ").map(Number)
      fun(str)
      
    
    }
    function fun(array) {

      let i=0
      
      let j=i
      
       let sum=0
      let n=array.length
      while(i<n-1 && j<n)
      
      {
      
      sum=sum+array[j]
      
      if(sum==0)
      
     console.log(i,j);
      
      if(j<n-1)
      {
      j++
      }
      else{i++;j=i;sum=0}
      
      }
      
    }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`6 3 -1 -3 4 -2 2 4 6`);
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