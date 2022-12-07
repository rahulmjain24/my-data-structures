class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    // Pushes a new node at the end
    const node = new Node(val);
    if (this.head == null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    // Removes an node from the end
    if (this.length === 0) {
      return undefined;
    }
    let curr = this.head;
    let last = curr;
    while (curr.next) {
      last = curr;
      curr = curr.next;
    }
    this.tail = last;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return curr;
  }

  shift() {
    // Removes a node from the beginning
    if (this.length === 0) {
      return undefined;
    }
    const currHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currHead;
  }

  unshift(val) {
    // Adds a node at the beginning
    const node = new Node(val);
    if (this.length === 0) {
      this.tail.next = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    // Get's the value of the node at given index
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let counter = 0;
    let node = this.head;
    while (counter !== index) {
      node = node.next;
      counter++;
    }
    return node;
  }

  set(index, value) {
    // Updates the value of a node at given index
    const node = this.get(index);
    if (node) {
      node.val = value;
      return false;
    }
    return true;
  }

  insert(index, value) {
    // Inserts a node at given index
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      return !!this.push(value);
    }
    if (index === 0) {
      return !!this.unshift(value);
    }
    const node = this.get(index - 1);
    const newNode = new Node(value);
    const temp = node.next;
    newNode.next = temp;
    node.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    // Removes a node at given index
    if(index < 0 || index >= this.length) {
        return undefined;
    }
    if(index === 0) {
        return this.shift();
    }
    if(index === this.length - 1) {
        return this.pop();
    }
    const prevNode = this.get(index-1);
    const current = prevNode.next;
    prevNode.next = current.next;
    this.length--;
    return current;
  }

  reverse() {
    // Reverses the list
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let lastNode = null;
    let nextNode;

    while(node !== null) {
        nextNode = node.next;
        node.next = lastNode;
        lastNode = node;
        node = nextNode;
    }

    return this;
  }

  print() {
    // Prints all the values of given nodes
    const arr = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    console.log(arr);
  }
}