function runProgram(input) {
  var input=input.trim().split("\n")
 // console.log(input);
 var lmn=input[0].trim().split(" ").map(Number)
 //console.log(lmn[1]);
 var mat=input[1].trim().split(" ").map(Number)
 //console.log(mat);
 
 var ar2=[]
 var m=0 
 var n=0
    for (let i = 0; i <lmn[0]; i++) {
      var ar1=[] 
   for (let j = 0; j <lmn[1]; j++) { 
   var ar=[]
     for (let k = 0; k <lmn[2]; k++) {
      ar.push(mat[k+j+i+n+m])
     }
     ar1.push(ar.join(" "))
     n=n+lmn[2]-1
    }
    ar2.push(ar1.join("\n"))
   m=m+lmn[1]-1
   }
    
 console.log(ar2.join("\n"));  
  }
  if (process.env.USERNAME ==='Rohan') {
    runProgram(`2 2 2
    1 2 3 4 5 6 7 8`);
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