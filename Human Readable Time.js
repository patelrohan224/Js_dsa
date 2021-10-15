function runProgram(input) {
    input=Number(input)
   console.log(input);
   

   fun(input)
}
// int hours = n/60
// * int minutes = n%60
function fun(a) {
        var hr=Math.floor(a / 60)
        console.log(hr);
       var min=a-(hr*60)
       console.log(min);
       if(hr==1){
           console.log(hr+"hr");
       }else{
           console.log(hr+"hrs"+" "+min+"mins");
       }

}
 
     if (process.env.USERNAME ==='Rohan') {
       runProgram(`135`);
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