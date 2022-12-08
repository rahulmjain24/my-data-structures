class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val) {
        const node = new Node(val)
        if (this.first === null) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }
        return ++this.size
    }

    dequeue() {
        if (this.first === null) {
            return null
        }

        const node = this.first
        this.first = this.first.next
        if (this.first === null) {
            this.last = null
        } else {
            node.next = null
            this.size--
            return node
        }
    }
}
