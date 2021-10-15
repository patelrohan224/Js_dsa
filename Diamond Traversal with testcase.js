function runProgram(input) {
    var  arr=input.split("\n")
   // console.log(arr);
    var testcase=Number(arr[0])
    var line=1
    var len=arr[1].trim().split(" ").map(Number)
    for (let i = 0; i < testcase; i++) {
      var len=arr[line].trim().split(" ").map(Number)
 //console.log(len);
 
 line++
 var ar=[]
      for (let j = 0; j <len[0] ; j++) {
  
        var str=arr[line].trim().split(" ").map(Number)
       
        ar.push(str)
        line++
       
      }
    //  console.log(ar);
    
    fun(ar,len)
 }
}
    function fun(array,len) {
     
        len=Number(len)

        if(len==1){
          console.log("1");
        }else{
var arr=[]
            for (let i = len-1; i>0; i--) {
                for (let j = len-1; j >=0; j--) {
                    if(j-i==(len-1)/2){
                    arr.push(array[i][j])
                    }
                }
                
            }
            for (let i = 0; i < len; i++) {
                for (let j = len-1; j >0; j--)  {
                 if(i+j==(len-1)/2){
                    arr.push(array[i][j])
                 }
                }
                
            }
            for (let i = 1; i < len-1; i++)  {
            for (let j = 0; j < len; j++) {
            if(i-j==(len-1)/2){
                arr.push(array[i][j])
            }
            }
                
            }
           // console.log(len+1);
            for (let i = len-1; i>=0; i--)  {

                for (let j = 0; j < len-1; j++) {
                    
                    if(i+j==3*((len-1)/2)){
                        arr.push(array[i][j])
                    }
                }
               
            }
            
   console.log(arr.join(" "));}
 }
    
 
     if (process.env.USERNAME ==='Rohan') {
       runProgram(`1
       3
4 9 3
5 5 5
3 2 2`);
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