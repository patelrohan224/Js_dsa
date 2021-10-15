    function runProgram(input) {
      var input=input.trim().split("\n")
    // console.log(input);
      var testcase=Number(input[0])
      
      //console.log(testcase);
      var len=Number(input[1])
    // console.log(len);
      var cse=1
      for (let i = 0; i <testcase; i++) {
        var len=Number(input[cse])
        var matrix=[]
        cse++
        for (let j = 0; j <len; j++) {
          
            var ii=input[cse].trim().split(" ").map(Number)
            cse++
          matrix.push(ii)
        }//console.log(matrix);
      spiralPrint(matrix)
      }
      }
        function spiralPrint(arr) {
          var n=arr.length
          var ar=[]
              for (i =n-1; i >=0; i--) {
                ar.push(arr[i][0])
              }
              for (i =1 ; i < n; i++) { 
                  ar.push(arr[0][i])
              }
                  for (i =1; i <n; i++) {  
                      ar.push(arr[i][n-1])
                  }
                  for (i = n-2; i >0; i--) {
                    ar.push(arr[n-1][i]) 
          }
        console.log(ar.join(" "));
        }
      if (process.env.USERNAME ==='Rohan') {
        runProgram(`2
      3
      1 2 3
      4 5 6
      7 8 9
      4
      1 2 3 4
      3 4 5 6
      3 4 5 6
      2 3 4 5`);
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