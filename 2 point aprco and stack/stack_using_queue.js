class Stack {
    constructor()
    {
        this.Q1 = new Queue()
        this.Q2 = new Queue()
        this.fr1 = 0;
        this.bk1 = 0;
        this.bk2 = 0;
    }
    push(value) {
        this.Q2.queue.push(value);
        this.bk2++;
        while (!this.isEmpty()) {
            this.Q2.queue.push(this.Q1.queue[this.fr1++]);
            bk2++;  
        }
        this.fr1 = 0;
        let temp = [];
        this.Q1.queue = this.Q2.queue;
        this.Q2.queue = temp;
        this.bk1 = this.bk2;
        this.bk2= 0;	
    }
    pop() {
    	return this.Q1.queue[this.fr1++];
    }
    top() {
        return this.Q1.queue[this.fr1];  
    }
    isEmpty() {
        return this.fr1 === this.bk1	
    }
}