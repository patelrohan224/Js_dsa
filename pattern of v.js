
    function runProgram(input){
        var a = Number(input);
        str=""
      for (let i = 1; i <=a; i++) {
        
              for (let j = a; j >=1; j--) {
                 if((i+j)<a+2){
                 str=str.concat("*")
                 str=str.concat("_")
                 }}



                 for (let j = a; j >=1; j--) {
                 if(i+j>=a+2){
                    str=str.concat(" ")
                       str=str.concat("_")
                 }
              
            }
            str=str.substring(0,str.length-1)
              str=str.concat("\n")
        }   
                       
              
              

          
      
      console.log(str);
     
    }

   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
       read += input;
   });
   process.stdin.on("end", function () {
       read = read.replace(/\n$/,"")
      runProgram(read);
   });
   
   process.on("SIGINT", function () {
       read = read.replace(/\n$/,"")
       runProgram(read);
       process.exit(0);
   });