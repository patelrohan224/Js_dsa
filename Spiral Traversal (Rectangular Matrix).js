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
    
    spiralPrint(ar,len[0],len[1])
 }
}
function spiralPrint(arr,ii,jj) {
    var m=ii
    var n=jj
    var i, left = 0,top = 0;
    
    var ar=[]
    while (left < m && top < n) {
        for (i =top; i < m; i++) {
           ar.push(arr[i][left])
        }
        left++;
        for (i = left; i < n; i++) {
           
            ar.push(arr[m-1][i])
        }
        m--;
        if (left < n) {
            for (i = m-1; i >=top; i--) {
               
                ar.push(arr[i][n-1])
            }
            n--;
        }
        if (top < m ) {
            for (i = n - 1; i >= left; i--) {
               
                ar.push(arr[top][i])
            }
           top++;
        }
    }
   console.log(ar.join(" "));
    }
    
 
     if (process.env.USERNAME ==='Rohan') {
       runProgram(`4
       3 5
       7 6 1 4 2
       8 1 1 9 7
       7 5 4 6 7
       7 7
       8 3 4 4 1 2 4
       6 5 2 8 5 4 2
       3 9 3 7 3 3 9
       8 8 9 3 5 1 3
       8 7 8 8 4 1 4
       8 9 8 7 3 4 5
       6 9 9 7 2 6 5
       8 3
       2 5 2
       3 5 1
       6 2 3
       2 6 2
       8 4 6
       3 3 3
       4 4 3
       5 9 2
       4 1
       2
       4
       6
       6`);
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