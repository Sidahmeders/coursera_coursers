// single Linked List
/*
class LinkedList {
    constructor(value) {
        this.value = value,
        this.next  = null
    }
}

let head = new LinkedList("head value");
let node1 = new LinkedList("first value");
head.next = node1;
let node2 = new LinkedList("gear Last");
node1.next = node2;

// Linked List Traversal

let on = head;

while (on.next) {
    console.log(on.value);
    on = on.next;
}
console.log(on.value); */

// double Linked List

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Append
    append(val) {
        if (!this.head && !this.tail) {
            this.head = this.tail = new Node(val);
        } else {
            let prevTail = this.tail;
            this.tail = new Node(val);
            prevTail.next = this.tail;
            this.tail.prev = prevTail;
        }
    }
    // Prepend
    prepend(val) {
        if (!this.head && !this.tail) {
            this.head = this.tail = new Node(val);
        } else {
            let prevHead = this.head;
            this.head = new Node(val);
            this.head.next = prevHead;
            prevHead.prev = this.head;
        }
    }

    // del Head
    delHead() {
        let removedHead = this.head;
        if (!this.head) return null;
        else if (this.head == this.tail) this.head = this.tail = null;
        else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        return removedHead.val;
    }
    // del Tail
    delTail() {
        let removedTail = this.tail;
        if (!this.tail) return null;
        else if (this.head == this.tail) this.tail = this.head = null;
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;    
        }
        return removedTail.val;
    }
    // Search
    serach(val) {
        let on = this.head;
        while (on) {
            if (on.val == val) return on;
            on = on.next;
        }
        return "Item Not Found";
    }

    // Reverse
    reverse() {// 1 > 2 > 3 > 4
        let prev = null;
        let curr = this.head;
        let next;
        
        while (curr) {
            next = curr.next;
            
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    // ForEach
    forEach() {
        let on = this.head;
        while (on) {
            console.log(on.val);
            on = on.next;
        }
    }

}

let list = new DoublyLinkedList();

list.append(10)
list.append(20)
list.append(30)


list.forEach()
