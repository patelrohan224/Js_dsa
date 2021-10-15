function runProgram(input) {
input=input.trim().split("\n")
for (let i = 1; i < input.length; i=i+2) {
    var len=input[i].trim().split(" ").map(Number)
    var str=input[i+1].trim().split(" ").map(Number)
  fun(len[1],str)
  
    
}
}
function fun(target,array) {
   // console.log(array);
    var l,r
    l=0
    r=array.length-1
   var c=0
    while (l<r) {
        if(array[l]+array[r]==target){
             console.log(l,r);
             c++
           break
        }
        else if(array[l]+array[r]<target){
            l++;
        }else{
            r--;
        }
       
    }
    if(c==0){
        console.log("-1 -1");
    }
}

if (process.env.USERNAME === 'Rohan') {
    runProgram(`3
    4 9
    2 7 11 15
    5 10
    1 2 3 5 5
    2 100
    48 49`);
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