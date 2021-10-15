let cur=head;
while(cur!==null){
    let neww=cur;
   
    while(neww!==null && neww.data===cur.data){
        neww=neww.next;
    }
    cur.next=neww;
    cur=cur.next;
}
return head;