function runProgram(input) {
input=input.trim().split("\n")
for (let i = 2; i < input.length; i=i+2) {
    
    let len=input[i].trim().split(" ").map(Number)
    
    let rs=fun(len)
    if(rs==true){
        console.log("YES");}
    if(rs==false){
        console.log("NO");
    }
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
  let c=0
  for (key in object){
      if(object[key]%2==0 ){
       
      }else{
          c++
      }
    }
      
  if(c>1){
    console.log("NO");
  }
 else{
   console.log("YES");
  }
 
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`2
    4
    1 2 1 2
    6
    1 1 1 2 2 2`);
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