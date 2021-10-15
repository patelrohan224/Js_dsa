function runProgram(input) {
    input=input.trim().split("\n")
    let ar=[]
    for (let i = 2; i < input.length; i=i+2) {
        let str=input[i].trim().split(" ").map(Number)
        fun(str)
        
    }
  
    }
    
    function fun(array) {
        // console.log('array:', array)
        let rs=[]
        let s=0
        for (let i = array.length-1; i >=0; i--) {
            
            while(rs.length!==0 && array[i]>=rs[rs.length-1]){
                rs.pop()
            }
            if(rs.length==0){
                s+=0
            }else{
                if(rs[rs.length-1]%2==0){
                s+=array[i]
                    
                }
            }
           rs.push(array[i])
        }
        console.log(s);
    }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`2
        5
        2 3 5 8 3
        6
        2 3 4 5 4`);
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