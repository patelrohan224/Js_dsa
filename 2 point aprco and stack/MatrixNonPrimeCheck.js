function runProgram(input) {
    input=input.trim().split("\n")
    let ts=input[0].trim().split(" ").map(Number)
    // console.log('ts:', ts)
    let op=[]
    for (let i = 1; i < input.length; i++) {
        let str=input[i].trim().split(" ").map(Number)
        // console.log(str)
        for (let j = 0; j < str.length; j++) {
            op.push(str[j])
        }
       
    }
    // console.log(op);
    fun(op)
    }
    
    function fun(array) {
       
        
    c=0
        for (let i = 0; i <array.length; i++) {
            if(!prime(array[i])){
              c++
            //  console.log(array[i]);
            }
            
        }
        console.log(c);
    }
    function prime(num) {
        if(num==1){
            return false
        }
        else if(num==2){
            return true
        }else{
            for (let i = 2; i < num; i++) {
                if(num%i==0){
                    return false
                }
            }
            return true
        }
    }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`3 3
        1 2 3
        4 5 6
        7 8 9 `);
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