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

str(a,l)