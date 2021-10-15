function runProgram(input) {
    var  arr=input.split("\n")
 //   console.log(arr.length);
    var testcase=arr[0].trim().split("").map(Number)
    //console.log(testcase[0]);
    var line=0
    var le=arr[0].trim().split(" ").map(Number)
    var s1=0
    var s2=0
    for (let i = 0; i <arr.length;  i=i+le) {
      var len=arr[line].trim().split(" ").map(Number)
 //console.log(len);
 
 line++
 
 
      for (let j = 0; j <len[0]; j++) {
  
        var str=arr[line].trim().split(" ").map(Number)
     //   console.log(str);  
       var rs=fun(str)
     
       
        line++
        if(line<=len[0]+2){
         //  console.log(rs);
            s1=s1+rs
        } 
            else{
                //console.log(rs);
                s2=s2+rs
            }
      }
      le=line
      
 }
if(s1>s2){
    console.log(s1);
}else{
    console.log(s2);
}
 
}
    function fun(array) {
        var len=0
        for (let i = 0; i < array.length; i++) {
            len+=array[i]
            
        }
        return len
 }
    
 
     if (process.env.USERNAME ==='Rohan') {
       runProgram(`2 3
       1 -1 1
       -1 1 1
       4 1
       2
       -5
       1
       1`);
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