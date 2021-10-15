

function runProgram(input) {
input=input.trim().split("\n")
for (let i = 1; i < input.length; i++) {
    let str=input[i].trim("").split("")
    //console.log(str);
  rs=  fun(str)
  if(rs){
      console.log("balanced");
  }else{
      console.log('not balanced');
  }
}
}
function fun(array) {
    let s=[]
   for (let i = 0; i < array.length; i++) {
       
       if(array[i]=='(' || array[i]=='[' || array[i]=='{'){
           s.push(array[i])
          
       }
       if(s.length==0){
           return false
       }
       let rs
       switch(array[i]){
           case ')':
            rs=s.pop()
            if(rs=='{' || rs=='[')
            {
                return false;   
            }
            break;
            case '}':
                rs=s.pop()
                if(rs=='(' || rs=='[')
                {
                    return false;
                  
                }
                break;
                case ']':
                    rs=s.pop()
                    if(rs=='(' || rs=='{')
                    {
                        return false;
                      
                    }
                    break;
       }
   }
   return s.length==0
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`3
    {([])}
    ()
    ([]
    `);
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