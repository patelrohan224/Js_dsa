function runProgram(input) {
    var  arr=input.split("\n")
   // console.log(arr);
  
   var ar=[]
    var len=arr[0].trim().split(" ").map(Number)
       
    for (let i =1; i < arr.length; i++) {
    

 
 
  
        var str=arr[i].trim().split(" ")
       
        ar.push(str)
       
    }
      fun(ar,len)
      //console.log(ar);
   // console.log(len);
    
    

}
    function fun(array,n) {
        var top=0
        var left=0
        var right=n
        var bottum=n
        var prevus
        var cureent 
        while(top<bottum && left<right){
           if(right==top+1){
               break
           }
           if(bottum==right+1){
            break
        }
       // console.log(array[top+1][left]);
            prevus=array[top+1][left]
            for (let i = top; i <right; i++) {
                    //console.log(array[left][i]);
                cureent=array[left][i]
            
                array[left][i]=prevus
                prevus=cureent

            }
            left++
            for (let i = left; i < right; i++) {
                  // console.log(array[i][bottum-1]);
                cureent = array[i][bottum-1]
             
                array[i][bottum - 1] = prevus
                prevus = cureent
                
            }
            bottum--
            if(left<right){
            for (let i =bottum-1; i >=top; i--) {
                 //     console.log(array[right - 1][i]);
                cureent = array[right - 1][i]
          
                array[right - 1][i] = prevus
                prevus = cureent
            }}
            right--
            if(top<bottum){
                for (let i = right-1; i >=left; i--) {
                     //  console.log(array[i][top]);
                    cureent=array[i][top]
                 
                    array[i][top] = prevus
                    prevus = cureent
                }
            }
            top++
        }
        for (let i = 0; i <n ; i++) {
            var ar=[]
        for (let j = 0; j <n; j++) {
          ar.push(array[i][j])
          
            
        }
        console.log(ar.join(" "));
        }
    }
    
 
     if (process.env.USERNAME ==='Rohan') {
       runProgram(`4
       a b c e
        f g h i 
       j k l m 
       o p q r`);
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