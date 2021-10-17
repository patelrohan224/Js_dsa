function runProgram(input) {
    var input = input.trim().split(" ");
    let ans;
   let N =input[0];
   let K=Number(input[1]);
 
   let P = sumDigits(N);
    P = (P*K)
    ans = sumDigits(P)
    console.log(ans);
}

function sumDigits(str) {
    str=""+str;
    if (str.length == 0) return 0;
    if (str.length == 1) return str;
  
  let  temp = 0
    for (i =0;i<str.length;i++){
        temp += (Number(str[i]));     
    }
  let  sstr = String(temp)
    return sumDigits(sstr)				
}



if (process.env.USERNAME === "Rohan") {
    runProgram(`123 3`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}