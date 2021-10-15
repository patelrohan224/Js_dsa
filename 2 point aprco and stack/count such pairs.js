function runProgram(input) {
    input=input.trim().split("\n")  
        var len=input[0].trim().split(" ").map(Number)
        var str=input[1].trim().split(" ").map(Number)
      fun(len[1],str)
    }
    function fun(target,array) {
        var c=0
       for (let i = 0; i < array.length; i++) {
           var s=0
           for (let j =i+1; j < array.length; j++) {           
              s=array[i]+array[j]
              if(s==target){
                    c++
              }    
           }
       } 
       console.log(c);
    }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`5 9
        3 0 6 2 7`);
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