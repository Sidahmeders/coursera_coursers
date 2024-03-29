
class Trie {
  constructor() {
    this.root = {}
  }

  insert(word) {
    let node = this.root
    for (let char of word) {
      if (node[char] == null) node[char] = {}
      console.log(node)
      node = node[char]
    }
    node.isWord = true
  }

  traverse(word) {
    let node = this.root
    for (let char of word) {
      node = node[char]
      if (node == null) return null
    }
    return node
  }

  search(word) {
    const node = this.traverse(word)
    return node != null && node.isWord === true
  }

  startsWith(prefix) {
    return this.traverse(prefix) != null
  }
}

let trie = new Trie()
trie.insert("apple")
// trie.search("apple") // return True
// trie.search("app") // return False
// trie.startsWith("app") // return True
trie.insert("app")
// trie.search("app") // return True


console.log(trie)




