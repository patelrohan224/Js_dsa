function runProgram(input) {
    var arr=input.split("\n")
    console.log(arr); var newar=[]
  
    for (let i = 1; i < arr.length; i++) {
        var array=arr[i].trim().split("")
        fun(array)
    }
}

function fun(array) {
    var a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,gg=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,x=0,z=0
    for (let i = 0; i < array.length; i++) {
      
        switch (array[i]) {
            case 'a':
                a++
               
                   
         
            break;
            case 'b':
            b++
                  
            break;
            case 'c':
                c++
            
            break;
            case 'd':
                 d++
            
            break;
            case 'e': 
            e++
             
            break;
            case 'f':
            f++
            
            break;
            case 'g':
                g++
             
            break;
            case 'h':
                h++
            
            break;
            case 'i':
                gg++
            break;
            case 'j':
                j++
            break;
            case 'k':
                k++
            break;
            case 'l':
                l++
            break;
            case 'm':
                m++
                    
            break;
            case 'n':
                n++
            break;
            case 'o':
                o++
            break;
            case 'p':
                p++
            break;
            case 'q':
                q++
            break;
            case 'r':
                r++
            break; 
            case 's':
                s++
            break;
            case 't':
                t++
            break;
            case 'u':
                u++
            break;
            case 'v':
                v++
            break;
            case 'w':
                w++
            break;
            case 'x':
                x++
            break;
            case 'y':
               y++
            break;
            case 'z':
                z++
            break;
            default:
            break;
                }
        
    }
    if(a>0){
        console.log("a-"+a);
    }
   
    if(b>0){
        
        console.log("b-"+b);}
        if(c>0){
                   
            console.log("c-"+c);}
    if(d>0){
                   
        console.log("d-"+d);}
       
           
        
            if(e>0){
                   
                console.log("e-"+e);}
                if(f>0){
              
           console.log("f-"+f);}
           if(g>0){
          
   console.log("g-"+g);}
   if(h>0){
   
console.log("h-"+h);}
if(gg>0){
  
console.log("i-"+gg);
}

if(j>0){
   
console.log("j-"+j);}
if(k>0){
   
console.log("k-"+k);}
if(l>0){
  
console.log("l-"+l);}
if(m>0){
    
console.log("m-"+m);}
if(n>0){
   
console.log("n-"+n);}
if(o>0){
  
console.log("o-"+o);}
if(p>0){
  
console.log("p-"+p);}
if(q>0){
  
console.log("q-"+q);}
if(r>0){
   
console.log("r-"+r);}
if(s>0){
   
console.log("s-"+s);}
if(t>0){
  
console.log("t-"+t);}
if(u>0){
  
console.log("u-"+u);}
if(v>0){
   
console.log("v-"+v);}
if(w>0){

console.log("w-"+w);}
if(x>0){
   
console.log("x-"+x);}
if(y>0){
  
console.log("y-"+y);}
if(z>0){
 
console.log("z-"+z);}


}


    if (process.env.USERNAME ==='Rohan') {
        runProgram(`31
        xiysdrfjgthkdehkyqquroroiujztqg`);
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