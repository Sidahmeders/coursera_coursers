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
    constructor(initialSize = 16) {
        this.bucket = new Array(initialSize)
        this.size = null
    }

    hashFunction(key) {
        let hashKey = 0
        const charList = key.toString() + typeof key
        for (let i = 0; i < charList.length; i++) {
            let char = charList[i]
            hashKey += char.charCodeAt() + i
        }
        return hashKey % this.bucket.length
    }

    set(key, value) {
        this.rehash()
        const hashedKey = this.hashFunction(key)
        const bucketItem = this.bucket[hashedKey]
        const _linkedList = bucketItem ? bucketItem : new LinkedList()
        const isKeyExist = _linkedList.search(key)
        let newNode

        if (isKeyExist) {
            console.log(isKeyExist)
            newNode = _linkedList.update(key, value)
        } else {
            newNode = _linkedList.append(key, value)
            this.size++
        }

        this.bucket[hashedKey] = _linkedList
        return newNode.value
    }

    get(key) {
        const hashedKey = this.hashFunction(key)
        const bucketItem = this.bucket[hashedKey]
        let currNode = bucketItem.head

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
        if (this.bucket.length <= this.size) {
            const oldBucket = this.bucket
            this.bucket = new Array(this.size * 2)
            this.size = 0
            for (let linkedList of oldBucket) {
                if (linkedList) {
                    if (linkedList.size > 1) {
                        let currNode = linkedList.head
                        while (currNode) {
                            const { key, value } = currNode
                            this.set(key, value)
                            currNode = currNode.next
                        }                
                    } else {
                        const { key, value } = linkedList.head
                        this.set(key, value)
                    }
                }
            }
        }
    }
}

const myHashMap = new HashMap()

let add_gara = myHashMap.set('gara', 'nartuto sand village'), //1
    add_mama = myHashMap.set('mama', 'Im coming home, Yes'), //2

    add_hello = myHashMap.set('hello', 'Hello World!'), //14
    add_hello2 = myHashMap.set('hello', 'I Hate this World'), //14

    add_lop = myHashMap.set('lop', 'Computer Program!'), //14
    get_lop = myHashMap.get('lop')

myHashMap.set('mop', 'value 1')
myHashMap.set('pop', 'value 2')
myHashMap.set('comb', 'value 3')
myHashMap.set('damn', 'value 4')
myHashMap.set('tall', 'value 5')
myHashMap.set('tale', 'value 6')

// myHashMap.set('kilo', 'value 7')
// myHashMap.set('kado', 'value 8')
// myHashMap.set('simo', 'value 9')
// myHashMap.set('sima', 'value 10')
// myHashMap.set('kat', 'value 11')
// myHashMap.set('tea', 'value 12')

// console.log(get_lop)

console.log(myHashMap)
console.log(myHashMap.bucket.length)
