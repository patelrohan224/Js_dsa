function runProgram(input) {
    input=input.trim().split("\n")
    var testcase=Number(input[0])
    let line=1
    for (let i = 2; i < input.length; i=i+3) {
      let len=input[i].trim().split(" ").map(Number)
      let k=input[i+1].trim().split(" ").map(Number)
      fun(len,k[0])
      console.log('len,k:', len,k[0])
    }
}
function fun(array,k) {
  let l=0
  let r=0
  var object={}
  let ar=[]
  let e=0
  let temp=0
   while(l<array.length-1 && r<array.length-1){
        let s=0
        s=array[l]+array[r+1]
if(s<k && temp<s){
  temp=s
 
}
else{
  e++
}

        if(r==(array.length-2)){
          r=l
          l++  
        }
        r++
   }
if(temp==0){
  console.log("-1");
}
else{
  console.log(temp);
}
}
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`2
        5
        1 2 3 4 5
        7
        3
        30 10 20
        15`);
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