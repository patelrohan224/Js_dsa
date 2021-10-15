function runProgram(input) {
    var  arr=input.split("\n")
 //   console.log(arr.length);
    var testcase=arr[0].trim().split("").map(Number)
    //console.log(testcase[0]);
  
    
    
   for (let i = 2; i < arr.length; i=i+2) {
      
       var len=arr[i].trim().split(" ").map(Number)
       console.log(len);
    fun(len)
   }
      

}

function fun(array) {
   var sum=0
   var ar=[]
   for (let i = 0; i <array.length; i++) {
       sum+=array[i]
       ar.push(sum)
       
   }
   console.log(ar.join(" "));
}
     if (process.env.USERNAME ==='Rohan') {
       runProgram(`1
       7
       4 2 4 8 3 2 4`);
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