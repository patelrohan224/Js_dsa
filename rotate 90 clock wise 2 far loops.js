function runProgram(input) {
    var  arr=input.split("\n")
   // console.log(arr);
    var testcase=Number(arr[0])
    var line=1
    var len=arr[1].trim().split(" ").map(Number)
    for (let i = 0; i < testcase; i++) {
      var len=arr[line].trim().split(" ").map(Number)
 //console.log(len);
 
 line++
 var ar=[]
      for (let j = 0; j <len[0] ; j++) {
  
        var str=arr[line].trim().split(" ").map(Number)
       
        ar.push(str)
        line++
       
      }
    //  console.log(ar);
    
    fun(ar,len)
 }
}
    function fun(array,len) {
    
       console.log(array);
       var arr=[]
       for (let j = 0; j < array.length; j++) {
        var ar=[]
         for (let i = array.length-1; i >=0; i--) {
          k=array[i][j]
          ar.push(k)      
       }
       arr.push(ar.join(" ")) 
    }
    
       console.log(arr.join("\n"))
 }
    
 
     if (process.env.USERNAME ==='Rohan') {
       runProgram(`2
       4
       1 2 3 4
       5 6 7 8
       1 2 3 4
       5 6 7 8
       3
       1 2 3
       4 5 6
       7 8 9`);
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