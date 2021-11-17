class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.node = null
        this.size = 0
    }

    add(key, value) {
        const newNode = new Node(key, value)
        if (this.head === null) {
            this.node = this.head = this.tail = newNode
        } else {
            this.tail.next = newNode
            this.node = this.tail = newNode
        }
        this.size++
        return newNode
    }
}

class HashMap {
    constructor() {
        this.list = new Array(16)
        this.size = null
    }


    hashFunction(key) {
        let uniqueKey = 0
        const charList = key.toString().split('')
        for (let i = 0; i < charList.length; i++) {
            let char = charList[i]
            uniqueKey += char.charCodeAt() + i
        }
        return uniqueKey % this.list.length
    }

    add(key, value) {
        const hashedKey = this.hashFunction(key)
        const targetList = this.list[hashedKey]
        const newList = targetList ? targetList : new LinkedList()
        const newNode = newList.add(key, value)
        this.list[hashedKey] = newList
        return newNode
    }

    get(key) {
        const hashedKey = this.hashFunction(key)
        const listItem = this.list[hashedKey]
        let currNode = listItem.node

        while (currNode) {
            const isTargetItem = currNode.key === key
            if (isTargetItem) {
                return currNode
            }
            currNode = currNode.next
        }
        return false
    }

}

const myHashMap = new HashMap()

myHashMap.add('gara', 'nartuto sand village') //1
myHashMap.add('mama', 'your morther fucker') //2
myHashMap.add('hello', 'Hello World!') //14
myHashMap.add('lop', 'Computer Program!') //14

console.log(myHashMap.list)
