function runProgram(input) {
    var  arr=input.split("\n")
   // console.log(arr);
    var testcase=Number(arr[0])
    var line=1
    var len=arr[1].trim().split(" ")
   // console.log(len);
    var tt=0
    for (let i = 0; i < testcase; i++) {
      //  console.log(i);
      var len=arr[line].trim().split(" ").map(Number)
 //console.log(len);
 line++
 var ar=[]
      for (let j = 0; j <len ; j++) {
        var str=arr[line].trim().split("")
        ar.push(str)
        line++
      }
 // console.log(ar);
  fun(ar)
  tt=line
  
 }
}
function fun(array) {
  var  len=array.length-1
  var count=0
  var count2=0
  for (let i = 0; i < array.length; i++) {
    
    for (let j = 0; j < array.length; j++) {
      
      if(array[i][j]==array[len-i][j]){
        count++
      }
      if(array[i][j]==array[i][len-j]){
        count2++
      }
    }  
   
  }
 // console.log(count,count2);
 if(count==(len+1)*(len+1)&& count2==(len+1)*(len+1)){
   console.log("BOTH");
 }
else if(count2==(len+1)*(len+1)){
  console.log("VERTICAL");
}else if(count==(len+1)*(len+1)){
  console.log("HORIZONTAL");
}else{
  console.log("NO");
}

}
     if (process.env.USERNAME ==='Rohan') {
       runProgram(`4
       4
       .*..
       ...*
       *..*
       *.**
       4
       ....
       ..*.
       .**.
       .**.
       5
       *.*.*
       ..*..
       *.*.*
       ..*..
       *.*.*
       5
       *.*.*
       .*.*.
       .***.
       .*.*.
       *...*`);
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