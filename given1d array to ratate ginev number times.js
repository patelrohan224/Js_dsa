function runProgram(input) {
  input=input.trim().split("\n")
 console.log(input.length);
var line=1
 for (let i = 1; i < input.length; i=i+2) {
  var ar=[]
  var arrlen=input[i].trim().split(" ").map(Number)
  var arr=input[i+1].trim().split(" ").map(Number)
  console.log("array",arr.length);
RightRotate(arr,arr.length,arrlen[1])
 }
} 
function RightRotate(a, n, k)
{
    k = k % n;
 var ar=[]
    for (let i = 0; i < n; i++) {
        if (i < k) {     
            ar.push(a[n+i-k])
        }
        else {
             
          ar.push(a[i-k]);
        }
    }
    console.log(ar);
}

  if (process.env.USERNAME ==='Rohan') {
    runProgram(`3
    3 1
    1 2 3
    2 2
    1 2
    2 3
    1 2`);
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