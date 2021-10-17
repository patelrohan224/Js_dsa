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