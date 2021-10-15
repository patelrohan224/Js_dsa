class Node{
    constructor(element){
        this.element = element;
        this.next=null;
    }
}
class Linklist{
    constructor(){
        this.head=null;
        this.size=0
    }
    clear_linklist(){
        this.head=null;
        this.size=0
    }
    isEmpty(){
        return this.size==0
    }
    size_1(){
        return this.size
    }
    add_element(element){
        let node=new Node(element)
        let current=this.head;
        if(!this.head){
            this.head=node;
        }else{
            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
        this.size++
    }
    add_first(element){
        let node=new Node(element)
        let current=this.head;
        if(!this.head){
            this.head=node;
        }
        else{
            this.head=node;
            this.size++
        }
        node.next=current
    }
    print_list(){
        let current=this.head;
        while(current){
            console.log(current.element);
            current=current.next;
        }
    }
    insert_index(element,index){
        if(index>this.size || index<0 && this.size){
            return;
        }
        let node=new Node(element)
        let current=this.head;
        let previous
        let i=0
        if(index==0){
            node.next=current
            this.head=node;
        }else{
            while(i<index){
                previous=current
                current=current.next;
                i++
            }
            previous.next=node;
            previous=previous.next
            previous.next=current;
        }
    }
    get_element(index){
        let current=this.head;
        let i=0
        while(current){
            if(i==index){
            console.log(`${index} elemet is`,current.element)}
            current=current.next
            i++
        }

    }
    get_index(element){
        let current=this.head
        let i=0
        while(current){
            i++
            if(current.element==element){
                console.log(`${element} is index is`,i)
            }
            current=current.next
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
        }
        else{
            while(i<index){
                i++
                prev=current
                current=current.next
            }
            prev.next=current.next
            this.size--
        }
    }
    remove_element(element){
        let cur=this.head
        let prev
        while(cur){
            if(cur.element=element){
              if(prev==null){
                this.head=cur.next
              }else{
                prev.next=cur.next
              }  
             
              this.size--
              return
            }
        }
    }
    middle_node(){
        let fast=this.head
        let slow=this.head
        while(fast && fast.next){
            slow=slow.next
            fast=fast.next.next
        }
        // console.log("middle",slow.element)
        return slow.element
        

    }
    nth_node_end(n){
        let cur=this.head
        let l=0
        while(cur){
            cur=cur.next
            l++
        }
        if(l<n){return}

        let node=this.head
        for (let i = 1; i < l-n+1; i++) {
            node=node.next
        }
        // console.log('node.element:', node.element)
        return node.element
       
    }
    removeFirstNode(){ 
        let cur=this.head
        cur=cur.next
        this.head=cur
        return this.head
    }
    removeLastNode(){
        let cur=this.head
        let prev=this.head
        while(cur.next.next && prev.next){
            cur=cur.next
            prev=prev.next
        }
        cur=null
        prev.next=cur
        return this.head
    }
    Reverse(){
        let prev=null
        let next=null
        let cur=this.head
        while(cur){
            next=cur.next
            cur.next=prev
            prev=cur
            cur=next
        }
        cur=prev
        this.head=cur
        return this.head
    }
    rotate(k){ // working
        if(k==0){return }
            let cur=this.head
      
        let l=0
        while(l<k && cur){
            cur=cur.next
            l++
        }
        if(cur){
            return
        }
        let rs=cur.nth_node_end(k)
        while(cur.next){
            cur=cur.next
        }
        cur.next=this.head
        this.head=rs.next
        rs.next=null

        console.log("rotate",cur);
    }
    mergetwo(l1,l2){ //working
        if(l1){
            return l2
        }
        if(l2){
            return l1
        }
        if(l1.element<l2.element){
            l1.next=sort(l1.next,l2)
            return l1
        }else{
            l2.next=sort(l1,l2.next)
            return l2
        }
    }
}
let ll=new Linklist();
ll.add_element(1)
ll.add_element(2)
ll.add_first(0)
ll.add_first(-1)
ll.insert_index(100,0)
console.log('ll:')
ll.print_list()
ll.get_element(0)
ll.get_index(100)
ll.remove_at_index(0)
ll.remove_element(-1)
console.log('ll:')
ll.print_list()
ll.middle_node()
ll.removeFirstNode()
ll.add_element(1)
ll.add_element(2)
console.log('ll:')
ll.print_list()
ll.removeLastNode()
ll.removeLastNode()
console.log('ll:')
ll.print_list()
ll.add_element(1)
ll.add_element(2)
ll.add_first(0)
console.log('ll:')
ll.print_list()
ll.nth_node_end(5) //1 to last
ll.Reverse()
console.log('reavrsre:')
ll.print_list()
ll.rotate()



