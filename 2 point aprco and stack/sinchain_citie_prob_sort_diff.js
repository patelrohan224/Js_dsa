function runProgram(input) {
  input=input.trim().split("\n")
  for (let i = 1; i < input.length; i=i+2) {
      let inpt=input[i].trim().split(" ").map(Number)
      // console.log('inpt:', inpt)
      let inpt2=input[i+1].trim().split(" ").map(Number)
      // console.log('inpt2:', inpt2)
      let arra=[]
      if(inpt2.length>1){
        for (let i = 0; i < inpt2.length; i++) {
          arra.push(inpt2[i])
        }
          fun(arra,inpt[1])
      
      }else{
        console.log("0");
      }
     
      // console.log(array);
  }
  }
  function fun(arrays,q) {
    for (let i = 0; i < arrays.length; i++) {
      for (let j = 0; j < arrays.length-i-1; j++) {
       if(arrays[j]>arrays[j+1]){
         let temp=arrays[j]
         arrays[j]=arrays[j+1]
         arrays[j+1]=temp
       }
     }
    }
    // console.log(arrays);
    let res=0
    for (let i = 0; i < arrays.length-1; i++) {
      res=res+Math.abs(arrays[i]-arrays[i+1])
    }
    console.log(res*q);
  }
    if (process.env.USERNAME === 'Rohan') {
      runProgram(`2
      2 4
      2 1
      1 5
      3`);
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