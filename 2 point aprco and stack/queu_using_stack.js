class Queue {
    constructor() {
        this.S1 = new Stack()
        this.S2 = new Stack()
    }
    push(value) {
        while (!this.isEmpty()) {
            this.S2.stack.push(this.S1.stack.pop())
        }
        this.S1.stack.push(value)
        while (this.S2.stack.length > 0) {
            this.S1.stack.push(this.S2.stack.pop())
        }
    }
    pop() {
        return this.S1.stack.pop()
    }
    front() {
        return this.S1.stack[this.S1.stack.length - 1]
    }
    isEmpty() {
        return this.S1.stack.length === 0;
    }
}