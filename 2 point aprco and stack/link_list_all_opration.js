class Node{
    constructor(element){
        this.element=element
        this.next=null
    }
}
class linklist{
    constructor(){
        this.head=null;
        this.size=0
   }
   clear_list(){
              this.head=null
              this.size=0
          }
        isEmpty(){
            return this.size==0?true:false
        }

        size_l(){
            return this.size
        }
   add_element(element){
       
       let node=new Node(element)
       
       if(!this.head){
           this.head=node
          
       }
       else{
            let current=this.head
            while(current.next){
                current=current.next
            }
            current.next=node
       }
       this.size++
   }
   add_first(element){
       let node=new Node(element)
       let current=this.head
       if(!this.head){
        this.head=node
    }else{
          this.head=node
          this.size++
      }
     this.head.next=current
   }
   add_last(element){
    let node=new Node(element)
   
    if(!this.head){
        this.head=node
    }else{
        let current=this.head
        
        while(current.next){
            current=current.next
        }
        current.next=node
    }
    this.size++

   }
   print_list(){
     
       let cureent=this.head
               while(cureent){
                   console.log(cureent.element);
                   cureent=cureent.next
               }
   }
   insert_index(element,index){
       if(index>this.size || index<0 && this.size){
           return 
        }
        let node=new Node(element)
        let current=this.head
        let prev
        let i=0
        if(index===0){
            node.next=current
            this.head=node
        }else{
            while(i<index)
            {
                prev=current
                current=current.next
                i++
            }
            prev.next=node
           prev=prev.next
           prev.next=current
            
        }
    }
    get_elemet(index){
        let cureent=this.head
        let i=0
        while(cureent){
            if(i==index){console.log(cureent.element);}
            cureent=cureent.next
            i++
        }
    }
    get_index(element){
        let cureent=this.head
        let i=-1
        while(cureent){
            i++
            if(cureent.element==element){console.log(i);}
            cureent=cureent.next
        
        }
    }
    remove_at_index(index){
        if(index>this.size && index>0){return
    }
    let current=this.head
    let prev
    let i=0
    if(index==0){
        this.head=current.next
    }else{
        while (i<index){
            i++
            prev=current
            cureent=cureent.next
    
        }
        prev.next=current.next
        this.size--
    }

    }
    remove_element_using_element(element){
        var current=this.head
                  var prev=null
                  while(current){
                      if(current.element===element){
                          if(prev===null){
                              this.head=current.next
                          }else{
                              prev.next=current.next
                          }
                          this.size--
                          return 
                      }
                  }
    }
    revarse_linklist(){  // working 
     
        if (!head || !head.next) {
            return head;
          }
          let temp = reverse(head.next);
          head.next.next = head;
          head.next = undefined;
          return temp;
    }
    middle_node(){
        let first = this.head;
        let second = this.head;
      
        while (first && first.next) {
          second = second.next;
          first = first.next.next;
        }
        return second.element;
    }
    n_th_from_end(){
        curent_node = head;
        for( let i = 0; i < n; i++ ) {
            if( curent_node.next ) {
                curent_node = curent_node.next;
            } else {
                return NULL;
            }
        }
    
        ans_node = head;
        while( curent_node.next ) {
            curent_node = curent_node.next;
            ans_node = ans_node.next;
        }ans_node
    
        return ans_node.next.data;
    }
}
let ll=new linklist()
ll.add_element(1)
ll.add_element(1)

ll.add_first(3)
ll.add_first(2)




// ll.get_elemet(1)
// ll.get_index(11111)
// ll.remove_at_index(0)
// ll.remove_element_using_element(2)
ll.print_list()
// ll.remove_element_using_element(3)
console.log("s");


console.log('ll:', ll.size_l())
// console.log(ll);
ll.insert_index(11111,1)
ll.print_list()
ll.middle_node()

ll.size_l()
console.log('ll.size_l():', ll.size_l())
console.log('ll.middle_node():', ll.middle_node())









// 	Insert a node at the Tail
let node=new LinkedListNode(data)
if(!head){
    head=node
}else{
    let current=head
    
    while(current.next){
        current=current.next
    }
    current.next=node
}
return head

//Deleting a Node
if(position>this.size && position>0){return;
}
let current=head;
let prev;
let i=0;
if(position===0){
    this.head=current.next;
}else{
    while (i<position){
        i++;
        prev=current;
        current=current.next;

    }
    prev.next=current.next;
}
return head

// Insert at a specific position
let node=new LinkedListNode(data);
let current=head;
let prev;
let i=0;
if(position===0){
    node.next=current;
   head=node;
}else{
    while(i<position)
    {
        prev=current;
        current=current.next;
        i++;
    }
    prev.next=node;
   prev=prev.next;
   prev.next=current;
    
}
return head

//Nth node from the end
curent_node = head;
for( let i = 0; i < n; i++ ) {
    if( curent_node.next ) {
        curent_node = curent_node.next;
    } else {
        return NULL;
    }
}
ans_node = head;
while( curent_node.next ) {
    curent_node = curent_node.next;
    ans_node = ans_node.next;
}ans_node
return ans_node.next.data;

//Reverse the Linked List
if (!head || !head.next) {
    return head;
  }
  let temp = reverse(head.next);
  head.next.next = head;
  head.next = undefined;
  return temp;

//Middle Node
let first = head;
let second = head;

while (first && first.next) {
  second = second.next;
  first = first.next.next;
}
return second.data;

//Linked List Cycle
let slow = head;
let fast = head;
while(slow){
    if(slow.next == null || fast.next==null || fast.next.next == null){
        return false
    }
    else{
        slow = slow.next;
        fast = fast.next.next;
        if(slow==fast){
            return true;
        }
    }
}
// cycle
{
let set= new Set()
while (head != null) {
    
    if (set.has(head)){
        return true;
    }
    set.add(head);
    head = head.next;
}
return false;
}
//Merge two Linked Lists

//Remove Duplicates
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

// is palindrone
let slow = head;
let palindrone = true;
let st = [];
while (slow != null) {
    st.push(slow.data);
    slow = slow.next;
}
while (head != null) {
    let rs = st.pop();
    if (head.data == rs) {
        palindrone = true;
    } else {
        palindrone = false;
        break;
    }
    head = head.next;
}
return palindrone

// Delete node without head
if(!node.next){
    return
}
let curent=node.next
node.data=curent.data
node.next=curent.next
curent=null

// Merge two Linked Lists 
  let node=new ListNode()
    let current=node
    while(l1&&l2){
        if(l1.val<l2.val){
            current.next=l1
            l1=l1.next
        }else{
            current.next=l2
            l2=l2.next
        }
        current=current.next
    }
    while(l1){
         current.next=l1
            l1=l1.next
              current=current.next
    }
    while(l2){
          current.next=l2
            l2=l2.next
              current=current.next
    }
    return node.next