function findWindow(arr,k,len){
  var left = -1;
  var right = 0;
  var sum = 0;
  for(var i = 0;i<len;i++){
     sum=sum+arr[i];
     if(arr[i]%k!=0){
      
       if(left == -1){
         left = i;
       }
       right = i;
     }
  }
   if(sum%k!=0){
     return 1;
   }if(left==-1){
     return 0;
   }else{
     left++;
     right = len-right;
     var window = len-Math.min(left,right);
   }
   var count = 0;
   var sum1 = 0;
   for(var j = 0;j<window;j++){
     sum1+=arr[j];
   }
  if(sum1%k!=0){
    count++;
  }
   for(var m = window;m<len;m++){
     sum1-=arr[m-window];
     sum1+=arr[m]
     if(sum1%k!=0){
       count++;
     }
   }
   return count;
 }
 function runProgram(input) {
   var newInput = input.split("\n");
   var [n,k] = newInput[0].split(" ").map(Number);
   var data = newInput[1].split(" ").map(Number);
   console.log(findWindow(data,k,n));
 }
 if (process.env.USERNAME === "Rohan") {
  runProgram(`5 3
  3 2 2 2 3`);
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