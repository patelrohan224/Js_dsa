function runProgram(input) {
    input=input.trim().split("\n")
   
    let len=input[1].trim().split(" ").map(Number)
    let k=input[0].trim().split(" ").map(Number)
    fun(len,k)
    }
    
    function fun(array,k) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length-i-1; j++) {
                if(array[j]%k[1]>array[j+1]%k[1]){
                    let temp=array[j]
                    array[j]=array[j+1]
                    array[j+1]=temp      
                }
            }   
        }
        console.log(array.join(" "));
    }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`5 6
        12 18 17 65 46`);
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