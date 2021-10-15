
    function runProgram(input){
      var a = Number(input);
      str=""
    for (let i = 1; i <=a; i++) {
        if(i==a){
            for (let j = 1; j <=a; j++) {
               str=str.concat("*")
               str=str.concat(" ")
            }
            str=str.substring(0,str.length-1)
            str=str.concat("\n")
          
        }else{
            for (let j = 1; j <=a; j++) {
                if(j==1 || j==a)
                {
                  str=str.concat("*")
                  str=str.concat(" ")
                }else{
                   
                      str=str.concat("  ")}
                      
                      
                
                     
            }
            
            
        } str=str.concat("\n")
        
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