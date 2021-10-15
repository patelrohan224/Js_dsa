function runProgram(input) {
   
      input = input.split("\n")
    //console.log(input);\
    var rs=['a','i','o','u']
             var str=input[0].trim().split("")
       //console.log(str);
        
        
         fun(str,rs)
     
        
}
  function fun(array,rs) {
      var ar=[]
      for (let i = 0; i < array.length; i++) {
          for (let j = i; j < array.length; j++) {
              var empty=[]
              var count=0
              for (let k = i; k <=j; k++) {
                  empty.push(array[k])
                  
              }
              
          //   console.log(empty);
              
              for ( let m = 0; m <rs.length; m++) {
                  for (let l = 0; l < empty.length; l++) {
                      if(empty[l]==rs[m]){
                          count++
                          break
                      }
                      
                  }    
                  
              }
              
              if(count>=rs.length){
                  ar.push(empty)
              }

          }
          
      }
   console.log(ar.length);
  }
       
    if (process.env.USERNAME === 'Rohan') {
      runProgram(`dangerouscovid`);
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
  