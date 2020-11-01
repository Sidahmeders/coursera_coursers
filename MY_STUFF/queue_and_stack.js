// Node
class Node {
    constructor(val, prev, next) {
        this.val = val;
        this.prev = prev || null;
        this.next = next || null;
    }
}

// queue DS 
// first In fisrt Out

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Enqueue
    enQue(val) {
        if (!this.head && !this.tail) {
            this.head = this.tail = new Node(val);
            this.size++;
        } else {
            let prevTail = this.tail;
            this.tail = new Node(val);
            prevTail.next = this.tail;
            this.tail.prev = prevTail;
            this.size++;
        }
    }

    // Dequeue
    deQue() {
        let removedHead = this.head;
        if (!this.head) return null;
        else if (this.head == this.tail) this.head = this.tail = null;
        else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        return removedHead.val;
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

// let queue = new Queue();

// queue.enQue(10)
// queue.enQue(20)
// queue.enQue(30)
// queue.deQue()

// queue.forEach()


// stack DS
// last In fist Out

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add
    add(val) {
        if (!this.head && !this.tail) this.head = this.tail = new Node(val);
        else {
            let prevTail = this.tail;
            this.tail = new Node(val);
            prevTail.next = this.tail;
            this.tail.prev = prevTail;
        }
    }

    // Pop
    pop() {
        let removedTail = this.tail;
        if (!this.tail) return null;
        else if (this.head == this.tail) this.tail = this.head = null;
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;    
        }
        return removedTail.val;
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


// let stack = new Stack();

// stack.add(10);
// stack.add(20)
// stack.add(30)
// stack.pop()

// stack.forEach()
