function runProgram(input) {
  input=input.trim().split("\n")
  var testcase=input[0].trim().split("").map(Number)
  var m=input[1].trim().split("").map(Number)
  //console.log(testcase,m);
var value= func(m)
     // console.log(value);
      var le=0
      for (let i = 0; i < value.length; i++) {
         
          if(value[i].length>le){
              le=value[i].length
          }
      }console.log(le);
  
}
function func(params) {
  var nn=[]
  for (let i = 0; i < params.length; i++) {
      for (let j = i; j < params.length; j++) {
          var em=[]
          for (let k = i; k <=j; k++) {
              var ff=params[k]
              em.push(ff)
              
          }
         // console.log(em);
       
          //console.log(em[em.length-1]);
          for (let i = 0; i < em.length; i++) {
              
              
          
          if(em[0]==0 && em[em.length-1]==0 && em.length>1){
            // console.log("s");
             nn.push(em)
             break
          }
          }
      }
     
  }
 return nn;
}

if (process.env.USERNAME === 'OM') {
  runProgram(`6
  110101`);
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