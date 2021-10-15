function runProgram(input) {
    var  arr=input.split("\n")
   // console.log(arr);
  
   var ar=[]
    var len=arr[0].trim().split(" ").map(Number)
       
    for (let i =1; i < arr.length; i++) {
    

 
 
  
        var str=arr[i].trim().split(" ").map(Number)
       
        ar.push(str)
       
    }
      fun(ar,len)
    console.log(len);
    
    

}
    function fun(array,n) {
        
        var len=Math.floor((array.length-1)/2)
        for (let i = 0; i <Math.floor(n/2); i++) {
            for (let j = i; j < n-i-1; j++) {
                
                var temp=array[i][j]
                array[i][j]=array[n-j-1][i]
                array[n-j-1][i]=array[n-i-1][n-j-1]
                array[n-i-1][n-j-1]=array[j][n-i-1]
                array[j][n-i-1]=temp

            }
        }
        console.log(array.join("\n"));
    }
    
 
     if (process.env.USERNAME ==='Rohan') {
       runProgram(`4
       1 2 3 4
       1 2 3 4
       1 2 3 4
       1 2 3 4`);
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