function runProgram(input) {
    var input=input.trim().split("\n")
    console.log(input);
   for (let i = 2; i < input.length; i=i+2) {
     
     var s=input[i].trim().split("")
     console.log(s);
    fun(s)
   }
    }

  
function fun(array) {
  var object={}
  for (let i = 0; i < array.length; i++) {
    if(object[array[i]]==undefined){
      object[array[i]]=1
    }else{
      object[array[i]]=object[array[i]]+1
    }
  }
  console.log(object);
  var c=0
  
  for (key in object) {
   
         if(object[key]%2==0)
         {
         }else{
           c++
         }
        
  }
  if(c>1){
    console.log("Not Possible!");
  }else{
    console.log("Possible!");
  }
}

    if (process.env.USERNAME ==='Rohan') {
      runProgram(`2
      6
      aabbcc
      5
      aabcd`);
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