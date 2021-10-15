function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 0; i < input.length; i++) {
        let inpt=input[i].trim().split(" ").map(Number)
        if(inpt.length>1){
         push(inpt[1])
        }
        if(inpt==1){
         peek()
         console.log( peek())
         pop()
        }
        // console.log(array);
    }
    }
    let array = []
    let top = -1
    function push(data){
        array[++top] = data
    }
    function pop(){
        if (top == -1) return "No Food!"
        ans = array[top]
        top--
        return ans
    }
    function peek(){
        if (top == -1) return "No Food!"
        return array[top]
    }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`6
        1
        2 5
        2 7
        2 9
        1
        1`);
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