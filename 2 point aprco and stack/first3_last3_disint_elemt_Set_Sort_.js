function runProgram(input) {
input=input.trim().split("\n")
let ar=input[1].trim().split(" ").map(Number)
fun(ar)
}

function fun(array) {
let set=new Set()
set.add(array[0])
 for (let i = 1; i < array.length; i++) {
   if(set.has(array[i])){

   }else{
     set.add(array[i])
    }
  }
  

 
 let arrays = Array.from(set);

 for (let i = 0; i < arrays.length; i++) {
   for (let j = 0; j < arrays.length-i-1; j++) {
    if(arrays[j]>arrays[j+1]){
      let temp=arrays[j]
      arrays[j]=arrays[j+1]
      arrays[j+1]=temp
    }
  }
 }
//  console.log('arrays:', arrays)
 if(arrays.length>2){
   let ar=[]
   for (let i = 0; i < 3; i++) {
     ar.push(arrays[i])   
   }
  let ar2=[]
  for (let i = arrays.length-1; i >=arrays.length-3; i--) {
    ar2.push(arrays[i])
    
  }
  console.log(ar.join(" "));
  console.log(ar2.reverse().join(" "));
 }else{
   console.log("Not Possible");
   console.log("Not Possible");
 }
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`10
-4 -7 -2 -11 -2 -8 0 -122 -66 10`);
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