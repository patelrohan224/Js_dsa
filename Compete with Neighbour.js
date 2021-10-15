function runProgram(input) {
  var arr = input.split("\n")
   var numbr=arr[1];
   var len=arr[0]
 // console.log(len);
   var n=numbr.split(" ").map(Number);
   competeWithNeighbour(n,len)
  }
   function competeWithNeighbour(arr,n){
    count = 0;
    for (i=0;i<n;i++){
      if (i == 0){
        if (arr[i] > arr[i+1]) {count++;}
      }else if (i == arr.length-1){
        if (arr[i] > arr[i-1]) {count++;}
      }else{
        if (arr[i] > arr[i+1] && arr[i]>arr[i-1]) {count++;}
      }
    }
   console.log(count);
}

   
if (process.env.USERNAME === 'Rohan') {
  runProgram(`8
  1 2 3 4 2 1 6 5`);
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
