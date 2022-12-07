class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(value) {
        // Pushes a new node at the end
        const node = new Node(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        // Removes an node from the end
        if (this.length === 0) {
            return;
        }
        const current = this.tail;
        this.tail = this.tail.prev;
        if (this.tail === null) {
            this.head = null;
        } else {
            this.tail.next = null;
        }
        this.length--;
        return current;
    }

    shift() {
        // Removes a node from the beginning
        if (this.length === 0) {
            return;
        }

        const current = this.head;
        this.head = this.head.next;
        if (this.head === null) {
            this.tail = null;
        } else {
            this.head.prev = null;
        }
        this.length--;
        return current;
    }

    unshift(value) {
        // Adds a node at the beginning
        if (this.length === 0) {
            return this.push(value);
        }

        const node = new Node(value);
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }

    get(index) {
        // Get's the value of the node at given index
        if (index < 0 || index >= this.length) {
            return;
        }
        let current;
        let iterator = 0;
        if (this.length / 2 <= index) {
            current = this.head;
            while (iterator !== index) {
                current = current.next;
                iterator++;
            }
        } else {
            current = this.tail;
            while (iterator !== this.length - 1 - index) {
                current = current.prev;
                iterator++;
            }
        }
        return current;
    }

    set(index, value) {
        // Updates the value of a node at given index
        const node = this.get(index);
        if (node !== undefined) {
            node.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        // Inserts a node at given index
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            return !!this.unshift(value);
        }
        if (index === this.length) {
            return !!this.push(value);
        }
        const node = new Node(value);
        let current = this.get(index);
        node.prev = current.prev;
        node.next = current;
        current.prev = node;
        current = node.prev;
        current.next = node;
        return true;
    }

    remove(index) {
        // Removes a node at given index
        if (index < 0 || index >= this.length) {
            return;
        }
        if (index === 0) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        const node = this.get(index);
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.length--;
        return node;
    }

    reverse() {
        // Reverses the list
        let node = this.tail;
        this.tail = this.head;
        this.head = node;
        let current = node.prev;

        while (node !== null) {
            node.prev = node.next;
            node.next = current;
            node = current;
            if (node === null) return this;
            current = current.prev;
        }
    }

    print() {
        let arr = [];
        let curr = this.head;
        while (curr) {
            arr.push(curr.value);
            curr = curr.next;
        }
        console.log(arr);
    }
}