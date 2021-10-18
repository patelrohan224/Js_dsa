// fibonaci
function fib(n)
{
     if (n == 0)
        return 0;
    if (n == 1 || n == 2)
        return 1;
    else
        return (fib(n - 1) + fib(n - 2));
}

//factorial
function fact(a){
    if(a<=1){
        return 1
    }else{
        return (a*fact(a-1))
    }
}

//sum of diff
function fun(len,i){
       if(i==len.length-1){
           return 0
       }else{  
           return Math.abs(len[i]-len[i+1])+fun(len,i+1)
       }
}

// steps 1 ,2 ,3
function fib(n)
{
    if (n == 1 || n == 0)
    { return 1;}
     else if(n==2)
    { return 2}
    else
    { return (fib(n - 1) + fib(n - 2)+fib(n-3)) }
}

//follow the knight
for (let i = 0; i <10 ; i++) {
    for (let j = 0; j <10; j++) {
        if(ar[i][j]==1){
           count++
        }    
    }
}
console.log(count);
}
// var ar =[...Array(11)].map(e => Array(11));
function runProgram(input) {
    input=input.trim().split(" ").map(Number)
    fkm(input[2],input[0]-1,input[1]-1)
let count=0

for (let i = 0; i <10 ; i++) {
    for (let j = 0; j <10; j++) {
        if(ar[i][j]==1){
           count++
        }    
    }
}

console.log(count);
}
var ar =[]
for (var i = 0; i <10; i++){
let arr=[]
for (let j = 0; j <10; j++) {
    arr.push(0)
}
ar.push(arr)
}

function fkm(n,i,j){
    if(i<0 || i>9 || j<0 || j>9){
        return 
    }
    if(n==0){
        ar[i][j]=1;
        return 
    }
    fkm(n-1,i-2,j+1)
    fkm(n-1,i-2,j-1)
    fkm(n-1,i-1,j+2)
    fkm(n-1,i-1,j-2)
    fkm(n-1,i+2,j+1)
    fkm(n-1,i+2,j-1)
    fkm(n-1,i+1,j-2)
    fkm(n-1,i+1,j+2)
    
}


// length of arrays
function fun(i,l) {
    // console.log(i);
    if(i==""){
        return l
    }
     return (fun(i.slice(1),l+1))
}

//sum all elements ni arrays
function fun(a,l) {
    if(a.length==l){
        return 0
    }
    return a[l]+fun(a,l+1)
}

//10x and 20x of 1
function fun(a,l) {
    
  
      if(a==l){
            return "Yes"
        }
        if(a<l){
            return "No"
        }
             if(fun(a,l*10)=="Yes" ||fun(a,l*20)== "Yes") { return "Yes"; } else { return "No" }
    }

 //sum is eq to k
 check(arr[],left,right,k){
    if (left == arr.length || right < 0) return false;
    if (left == right) return false;
    if (arr[left] + arr[right] == k) return true;
    return check(arr,left+1,right,k) || check(arr,left,right-1,k);
}
check(arr,0,arr.length-1,k) // first function call   

// max recursnio
n=a.length
function findMaxRec(A[], n){
      if(n == 1)
        return A[0];
         
        return Math.max(A[n-1], findMaxRec(A, n-1));
}


// findSumOfArrayNumbers
function findSumOfArrayNumbers(A,N)
{
        if(N<=0)
                return 0 
    else
                return findSum(A,N-1) + A[N-1]
}

//findProductOfArrayNumbers
function findProductOfArrayNumbers(A,N)
{
        if(N<=0)
                return 0 
    else
                return findSum(A,N-1) * A[N-1]
}


//reverseString
let a="abcd"
let l=a.length

function str(a,l){
    // console.log(a);
if(a==null || l<=1){
    console.log(a);
}else{
    console.log(a.charAt(l-1));
    return str(a.substring(0,l-1),l-1)
}
} 

// findMax
function max_e(a,l)
{
  if(l<=1){
      return a[0]
  }else{
      return (Math.max(max_e(a,l-1),a[l-1]))
  }
}
let a=[5,2,3,4]
let l=a.length

//Searching for an Element in an Array :-
A: Array of Integers 
l: Starting index of array,  i.e 0    [integer]
r: Ending index of array, i.e A.len-1 [integer]
Key: the element which we want to search in the array [integer]

function recSearch(A, l, r, Key)
{
     if (l>r)
      return -1
   if (A[l] == Key)
      return l
   if (arr[r] == Key)
      return r;
   return recSearch(A, l+1, r-1, key);
}
main(){
    A=[1,2,3,4,5,6], key=12;
  recSearch(A, 0, A.len-1, key) // this is how we call in main function


//Check given string is palindrome or not :-
let a="aa"
let l=a.length-1
let r=0

function str(a,l,r){
    // console.log(l,r);
    if(r==l){
        return true
    }
if(a.charAt(l)!==a.charAt(r)){
    return false
}
if(r<l+1){
    console.log("s");
    return str(a,l-1,r+1)
}
return true
} 
console.log('str(a,l,r):', str(a,l,r))

