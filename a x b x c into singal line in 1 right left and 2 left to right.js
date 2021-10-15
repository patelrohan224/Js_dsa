function runProgram(input) {
   var  arr=input.split("\n")
   console.log(arr);
   var testcase=Number(arr[0])
   var line=1
   var len=arr[1].trim().split(" ").map(Number)
   for (let i = 0; i < testcase; i++) {
     var len=arr[line].trim().split(" ").map(Number)
console.log(len);

line++
var ar=[]
     for (let j = 0; j <len[0] ; j++) {
 
       var str=arr[line].trim().split(" ").map(Number)
      
       ar.push(str)
       line++
      
     }
     console.log(ar);
     var rs=fun(ar,len[2],len[0],len[1])
     var ark=[]
     for (let l = 0; l < rs.length; l++) {
       if(rs[l]==undefined){

       }else{
         ark.push(rs[l])
       }

     }
       console.log(ark.join(" "));
     
   } 
}
   function fun(array,m,a,b) {
     console.log(a);
    var ar=[]
     if(m==2){
      
      
     for (let i = 0; i < a; i++) {
       if(i%2==0){
       for (let j =b-1; j >=0; j--) {
         ar.push(array[i][j])
         
       }}
       else{
        for (let j =0; j <b; j++) {
          ar.push(array[i][j])
          
        }
       }
     }
    }else{
      for (let i = 0; i <a; i++) {
        if(i%2==0){
        for (let j =0; j <b; j++) {
          ar.push(array[i][j])
          
        }}
        else{
         for (let j =b-1; j >=0; j--) {
           ar.push(array[i][j])
           
         }
        }
    }
   
  }
  console.log(ar);
  
}
   

    if (process.env.USERNAME ==='Rohan') {
      runProgram(`1
      7 2 1
      31 60
      69 91
      99 14
      79 21
      55 71
      90 58
      65 6`);
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