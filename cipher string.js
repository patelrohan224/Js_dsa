function runProgram(input) {
  var input=input.trim().split("\n")
  console.log(input);
 for (let i = 2; i < input.length; i=i+2) {
     var len=input[i].trim()
     var len2=input[i].trim()
    console.log(len);
  fun2(len)
  fun(len2)

 
 }
}
function fun2(array) {
var rs=""
  var i=0
  var j
while (i<array.length) {
  var count=0
  j=i
for (j = i; j< array.length; j++) {
  
if(array[i]!=array[j])
{
break;
 }
  count++ 
  i=j
}

rs+=array[i]+count

i++
}
console.log(rs);
}
function fun(array) {
  var arr=[]
  var l
  var c
  
  //console.log(len);
var ar=array.length;

console.log(ar);
for (let i = 0; i <ar; i++) {
    var count=1
    while(i<ar-1 && array[i]==array[i+1]){
      
        count++
        i++
    }
    arr.push(array[i])
  arr.push(count)
}

console.log(arr.join(""));
}

  if (process.env.USERNAME ==='Rohan') {
    runProgram(`2
    5
    aabcc
    5
    aazaa`)
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