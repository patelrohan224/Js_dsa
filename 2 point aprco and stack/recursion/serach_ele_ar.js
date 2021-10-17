function search(a,l,r,rs)
{
  if(r>l){
      return -1
  }
  if(a[l]==rs){
      return l
  }
  if(a[r]==rs){
      return r
  }
 
      return search(a,l-1,r+1,rs)
 
}
let a=[1,2,3,4]
let l=a.length
let r=0
let rs=4
console.log('search(5): index', search(a,l,r,rs))