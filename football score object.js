function runProgram(input) {
  input=input.trim().split(/[\r\n]+/)
   console.log(input);
  var ar=[]
   for (let i = 1; i < input.length; i++) {
     
     
   
   var arr=input[i].trim().split(" ")
ar.push(arr)
 
  } 
console.log(ar);  
  var object={}
  for (let i = 0; i < ar.length; i++) {
    if(object[ar[i]]==undefined){
      object[ar[i]]=1
    }else{
      object[ar[i]]=object[ar[i]]+1
    }
  }
  console.log(object)
  var c=0
  var n
  for (const key in object) {

    if(object[key]>c){
    c=object[key]
    n=key
    }
  }
  console.log(n);
}



if (process.env.USERNAME === 'Rohan') {
runProgram(`5
A
ABA
ABA
A
A`);
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
  
  