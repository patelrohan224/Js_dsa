function runProgram(input) {
    var input=input.trim().split("\n")
    //console.log(input);
    var ar=[]
    var le=input[0].trim().split(" ").map(Number)
    for (let i = 1; i < input.length; i++) {
      var len=input[i].trim().split(" ").map(Number)
      ar.push(len)   
    }
    //console.log(ar);
    //console.log(le);
    var rs=spiralPrint(ar)
    console.log(rs.join(" "));
  }
  
  function spiralPrint(arr) {
  var m=arr.length
  var n=arr.length
  var i, left = 0,rigth = 0;
  
  var ar=[]
  while (left < m && rigth < n) {
      for (i =rigth; i < n; i++) {
         ar.push(arr[left][i])
      }
      left++;
      for (i = left; i < m; i++) {
         
          ar.push(arr[i][n-1])
      }
      n--;
      if (left < m) {
          for (i = n - 1; i >=rigth; i--) {
             
              ar.push(arr[m-1][i])
          }
          m--;
      }
      if (rigth < n) {
          for (i = m - 1; i >= left; i--) {
             
              ar.push(arr[i][rigth])
          }
         rigth++;
      }
  }
  return ar
  }
    if (process.env.USERNAME ==='Rohan') {
      runProgram(`4 
      1 2 3 
      5 6 7 
      1 2 3 
      5 6 7`);
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