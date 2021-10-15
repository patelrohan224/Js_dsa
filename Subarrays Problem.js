function runProgram(input) {
    var  arr=input.split("\n")
 //   console.log(arr.length);
    var testcase=arr[0].trim().split("").map(Number)
    //console.log(testcase[0]);
  
    var le=arr[0].trim().split(" ").map(Number)
    
  // console.log(le);
      var len=arr[1].trim().split(" ").map(Number)
//console.log(len);
    fun(len)
}

function fun(array) {
    var len=array.length
    var cc=0
    var sum=0
    var nosum=0
    for (let i = len-1; i>=0; i--) {
       if(array[i]%2==1){
        sum=len-i-1-sum
       }
       else{
           sum=sum+1
       }
       cc+=sum
    }
    console.log(cc);
}
     if (process.env.USERNAME ==='Rohan') {
       runProgram(`100
        84 75 46 93 11 66 28 58 21 16 24 83 4 17 74 92 55 29 42 13 74 76 87 69 88 85 22 4 92 24 93 38 65 71 39 30 99 70 75 40 29 31 29 39 25 13 67 86 80 99 68 51 14 39 17 93 30 47 9 22 41 8 63 16 81 97 85 89 92 79 90 68 2 34 7 26 100 50 79 53 41 39 58 92 26 86 36 79 88 26 9 60 16 69 7 70 8 42 77 73`);
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