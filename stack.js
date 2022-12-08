class Node {
    constructor(value) {
       this.value = value
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) {
        const node = new Node(val)
        if(this.first == null) {
            this.first = node
            this.last = node
        } else {
            const temp = this.first
            this.first = node
            this.first.next = temp
        }
        return ++this.size
    }

    pop() {
        if(this.size === 0) {
            return null
        }
        const current = this.first
        this.first = this.first.next
        if(this.first === null) {
            this.last = null
        } else {
            current.next = null;
        }
        this.size--
        return current.value
    }
}