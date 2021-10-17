function sum(a,l)
{
  if(l<=1){
      return a[0]
  }else{
      return (Math.max(sum(a,l-1),a[l-1]))
  }
}
let a=[5,2,3,4]
let l=a.length
console.log('sum(5):', sum(a,l))