function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 1; i < input.length; i=i+4) {
      let l1=input[i+1].trim().split(" ").map(Number)
      let l2=input[i+3].trim().split(" ").map(Number)
        // console.log(l1,l2);
        fun(l1,l2)
    }
    }
    function fun(l1,l2) {
        let set=new Set();
        for (let i = 0; i < l1.length; i++){
            if(set.has(l1[i])){
    
            }else{
                set.add(l1[i])
            }
        }
        for (let i = 0; i < l2.length; i++) {
            if(set.has(l2[i])){
    
            }else{
                set.add(l2[i])
            }
            
        }
        // console.log(set);
        let ar=Array.from(set)
     for (let i = 0; i <ar.length; i++){
         let swap=false
         for (let j = 0; j <ar.length; j++){
             if(ar[j]>ar[j+1]){
                 let temp=ar[j]
                 ar[j]=ar[j+1]
                 ar[j+1]=temp
                 swap=true
             }
         }
         if(swap==false){
             break
         }
     }
     console.log(ar.join(" "));
    
    }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`1
        4
        1 2 3 4
        5
        1 2 3 4 5`);
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