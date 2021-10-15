function runProgram(input) {
    input=input.trim().split("\n")
    let len=input[1].trim().split(" ").map(Number)
    fun(len)
    }
function fun(array){
    let min_index
    for (let i = 0; i < array.length-1; i++) {
       min_index=i
        for (let j=i+1; j < array.length; j++) {
            if(array[j]<array[min_index]){
                min_index=j
             }
        } let temp=array[min_index]
        array[min_index]=array[i]
        array[i]=temp
    }
    console.log(array.join(" "));
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`34
    -17 11 -11 -27 -22 41 0 -27 -43 -15 27 7 -49 12 45 48 -45 -25 45 -32 -29 -18 -16 -48 -20 -46 3 -41 -43 -7 -39 -34 -17 -19`);
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