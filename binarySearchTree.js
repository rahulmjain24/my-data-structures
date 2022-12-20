class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root= null
    }

    insert(value) {
        // Inserts a value in a tree
        const node = new Node(value)
        if(this.root === null) {
            this.root = node
        } else {
            let current = this.root
            while(true) {
                if(value === current.value) {
                    return undefined
                }
                if(current.value > value) {
                    if(current.left === null) {
                        current.left = node
                        break
                    }
                    current = current.left
                } else if(current.value < value) {
                    if(current.right === null) {
                        current.right = node
                        break
                    }
                    current = current.right
                }
            }
        }
        return this
    }

    find(value) {
        if(this.root === null) {
            return undefined
        }
        let current = this.root
        while(true) {
            if(current.value === value) {
                break
            } else if(current.value > value) {
                if(current.left === null) {
                    return undefined
                }
                current = current.left
            } else {
                if(current.right === null) {
                    return undefined
                }
                current = current.right
            }
        }
        return current
    }

}