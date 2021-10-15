function runProgram(input) {
    input=Number(input)
  // console.log(input);
   

  Pyramid(input)
} 
  function sum(n){

  return ((n*(n+1))/2)
}
 function Pyramid(no){
  var n=no
  var i = 1 
 while(n>0){  
     var temp = sum(i)
   if (temp>n) {
     break
   }
     
    
     n = n - temp
     i++;
     
    }
    console.log(i-1);

}
// function fun(a) {
//     var sum=0
//     var i=1
//     var count=0
//     var ar=[]
//      while (i<=a) {
         
     
//           sum+=i
//           //console.log(sum);

//           if(sum<a){
//            ar.push(sum)
           
//           }
//           i++
//           }
//          // console.log(ar);
//           var j=0
//           var k=0
//           var s=0
//           while (j<=ar.length) {
//             s+=ar[j];
//             if(s<=a){
//               k++
//             }
//             j++
//           }
//      console.log(k);
// }
 
     if (process.env.USERNAME ==='Rohan') {
       runProgram(`25`);
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