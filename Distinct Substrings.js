function runProgram(input) {
  var input=input.trim().split("\n")
  console.log(input);
 for (let i = 2; i < input.length; i=i+2) {
     var len=input[i].trim().split("")
  // console.log(len);
    var rs=find(len)
    
     
     var ar=[]
  var count=0
    var k=0
     while(k<rs.length) {
         var l=0;
          while(l<k){
            if(rs[k]==rs[l]){
                break;
            }
            l++;
         }
            if(k==l){
            count++
            }
        k++;
     }
   console.log(count);
 }

}
function find(array) {
  var ar=[]
  
  var i=0
  while(i<array.length){
   
    var j=i
    while(j<array.length){
      var empty=""
      var count=0
  
    var k=i
    while(k<=j){
      empty=empty+array[k]
      k++
    }
    //console.log(empty);
      ar.push(empty)
      j++
    }
    i++
  }
 return ar
}

  if (process.env.USERNAME ==='Rohan') {
    runProgram(`8
    90
    munjpefntsdujvvygtpwovxexakobefnyuwrydfvviqhgognixkytkdunplotrcvmcnofskdddlmrtccsobobgloxx
    4
    spiq
    28
    kesrydweikqcfueajhqlndcmbihq
    17
    xudeowdtvjdhdhmxm
    90
    ktfxkkawligebecgksfpocytjccxdomnktnufntsyaacgelqwsglugggkignysdjpqhuhbpicrkkvxcurkhospveae
    70
    bxaknqtkavciauvkstmonaxdspbypftqftdumxhnvkvvhrgcovqcvofoeiovokovgursuy
    57
    qlfmuyuxnqoqogxgmjwlahavpwpirprkdywyxuyolphdvhjlqgwqpypfw
    81
    nquhcbgbchvbvkqdnnkwbcdxusykxxqnpnxtoeuqltrjejmryaqactayobkoaderqclihiyuctfgftagt`)
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