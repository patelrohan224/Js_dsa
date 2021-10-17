function sum(a,l)
{
  if(l<=0){
      return 0
  }else{
      return (a[l-1]+sum(a,l-1))
  }
}
let a=[1,2,3,4]
let l=a.length
console.log('sum(5):', sum(a,l))