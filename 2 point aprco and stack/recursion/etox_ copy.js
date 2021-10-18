function runProgram(input) {
    input =input.trim().split(" ")
    let l1=input[0].trim().split(" ").map(Number)
    let l2=input[1].trim().split(" ").map(Number)
    function fu(l2){
        if(l2==1){
            return 1
        }else{
            return l2*fu(l2-1)
        }
    }
    let fun=(l1,l2)=>{
        if(l2==0){
            return 1
        }else{
            return fun(l1,l2-1)+(1/fu(l2))*(l1**l2)
        }
    }
    console.log(fun(l1,l2).toFixed(4));
}


    if (process.env.USERNAME === 'Rohan') {
        runProgram(`4 2`);
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