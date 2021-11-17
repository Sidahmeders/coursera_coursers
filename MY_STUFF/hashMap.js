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
        this.size = 0
    }

    append(key, value) {
        const newNode = new Node(key, value)
        if (this.head === null) {
            this.head = this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
        return newNode
    }

    update(key, value) {
        let currNode = this.head
        while (currNode) {
            if (currNode.key === key) {
                currNode.value = value
                return value
            }
            currNode = currNode.next
        }
        return false
    }

    search(key) {
        let currNode = this.head
        while(currNode) {
            if (currNode.key === key) {
                return currNode.value
            }
            currNode = currNode.next
        }
        return false
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
        const _linkedList = targetList ? targetList : new LinkedList()
        const isKeyExist = _linkedList.search(key)
        let newNode

        if (isKeyExist) {
            console.log(isKeyExist)
            newNode = _linkedList.update(key, value)
        } else {
            newNode = _linkedList.append(key, value)
            this.size++
        }

        this.list[hashedKey] = _linkedList
        return newNode.value
    }

    get(key) {
        const hashedKey = this.hashFunction(key)
        const listItem = this.list[hashedKey]
        let currNode = listItem.head

        while (currNode) {
            const isTargetItem = currNode.key === key
            if (isTargetItem) {
                return currNode.value
            }
            currNode = currNode.next
        }
        return false
    }

    rehash() {
        if (this.list.length <= this.size) {

        }
    }

}

const myHashMap = new HashMap()

let add_gara = myHashMap.add('gara', 'nartuto sand village'), //1
    add_mama = myHashMap.add('mama', 'Im coming home, Yes'), //2
    add_hello = myHashMap.add('hello', 'Hello World!'), //14
    add_hello2 = myHashMap.add('hello', 'I Hate this World'), //14
    add_lop = myHashMap.add('lop', 'Computer Program!'), //14
    get_lop = myHashMap.get('lop')

// console.log(get_lop)

console.log(myHashMap.list[14])
