function runProgram(input) {
  var input=input.trim().split("\n")
  //console.log(input);
 
  var le=input[1].trim().split(" ").map(Number)
  //console.log(le);
  var rs=fun(le)
  //console.log(rs);
  var min=rs[0]
  for (let i = 0; i < rs.length; i++) {
if(rs[i]<min){
min=rs[i]
}
   
  }
  //console.log(min);
  var ans
  for (let j = 0; j < le.length; j++) {
    if(le[j]==min){
      ans=j
    }
    
  }
 if(ans==null){
   console.log("-1");
 }else{
   console.log(ans);
 }
}
function fun(array) {
ar=[]
for (let i = 0; i < array.length; i++) {
  var sum=0
  for (let j = 0; j < array.length; j++) {
    sum=sum+array[j]
  }
// console.log(sum);
  sum=sum-array[i]
  if(sum%7==0){
ar.push(array[i])
  } 
}
return ar
}

function sum(array) {
var sum=0
for (let i = 0; i < array.length; i++) {
  sum=sum+array[i]
}
for (let j = 0; j < array.length; j++) {
  
  
}
}

  if (process.env.USERNAME ==='Rohan') {
    runProgram(`100
      18 794 259 404 945 483 884 155 214 279 965 830 941 249 491 353 459 40 293 749 783 21 619 68 650 321 939 230 767 786 78 604 776 864 740 721 615 32 4 501 6 643 150 676 152 955 598 582 402 967 143 254 675 769 340 458 707 867 666 206 565 733 175 810 925 972 675 449 684 854 854 901 39 853 618 527 456 525 685 850 47 770 133 521 263 944 264 906 669 858 265 724 827 432 641 654 73 538 687 324`);
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