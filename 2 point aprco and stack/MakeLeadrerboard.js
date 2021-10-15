function runProgram(input) {
  input=input.trim().split("\n")
  let arr=[]
  let ar=[]
   for (let i = 1; i <= Number(input[0]); i++) {
    let len=input[i].trim().split(" ")
    len[1]=Number(len[1])
    ar.push(len[1]) 
    arr.push(len[0])
   }
    fun(arr,ar)
    }
function fun(names,marks){
 for (let i = 0; i < names.length; i++) {
   for (let j = 0; j < names.length-i-1; j++) {
    for( let i = 0;i<Math.min(names[j].length,names[j+1].length);i++){
      if (names[j][i] != names[j+1][i]){
              if (names[j][i] < names[j+1][i]){
                let temp=names[j]
                names[j]=names[j+1]
                names[j+1]=temp
                let temp2=marks[j]
                marks[j]=marks[j+1]
                marks[j+1]=temp2
              }
            }
          }
        }
      }
   number(names,marks)
 }

function number(names,marks){
  for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < names.length-i-1; j++) {
     if(marks[j]<marks[j+1]){
        let temp=names[j]
        names[j]=names[j+1]
        names[j+1]=temp
        let temp2=marks[j]
        marks[j]=marks[j+1]
        marks[j+1]=temp2 
      }
    }
  }
  printRankList(names,marks)
 }
 function printRankList(names,marks){
  let count = 0
   let rank  = 1
  let previous = marks[0]
   let n = names.length
  for (i = 0;i<n;i++){
          if (marks[i] == previous){
                      console.log(rank,names[i])
          }else{
            rank += count
            console.log(rank,names[i])
            count = 0            
          }
          count++
          previous = marks[i]
  }
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`6
    rancho 45
    chatur 32
    raju 30
    farhan 28
    virus 32
    joy 45`);
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