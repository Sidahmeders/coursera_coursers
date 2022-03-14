class Heap {
  constructor(type = Heap.MIN_HEAP) {
    this.array = []
    this.type = type
  }

  /**
   * Returns the number of elements in this collection.
   * @runtime O(1)
   */
  get size() {
    return this.array.length
  }

  /**
   * Retrieves, but does not remove, the head of this heap
   * @runtime O(1)
   */
  peek() {
    return this.array[0]
  }

  /**
   * Insert element
   * @runtime O(log n)
   */
  add(value) {
    this.array.push(value)
    this.#bubbleUp()
  }

  /**
   * Retrieves and removes the head of this heap, or returns null if this heap is empty.
   * @runtime O(log n)
   */
  remove(index = 0) {
    if (!this.size) return null
    this.#swap(index, this.size - 1) // swap with last
    const value = this.array.pop() // remove element
    this.#bubbleDown(index)
    return value
  }

  /**
   * Move new element upwards on the heap, if it's out of order
   * @runtime O(log n)
   */
  #bubbleUp() {
    let index = this.size - 1
    while (
      this.#getParentIndex(index) >= 0 &&
      this.#comparator(this.#getParentIndex(index), index) > 0
    ) {
      this.#swap(this.#getParentIndex(index), index)
      index = this.#getParentIndex(index)
    }
  }

  /**
   * After removal, moves element downwards on the heap, if it's out of order
   * @runtime O(log n)
   */
  #bubbleDown(index = 0) {
    let curr = index
    const getTopChild = (i) =>
      this.#getRightIndex(i) < this.size &&
      this.#comparator(this.#getLeftIndex(i), this.#getRightIndex(i)) > 0
        ? this.#getRightIndex(i)
        : this.#getLeftIndex(i)

    while (
      this.#getLeftIndex(curr) < this.size &&
      this.#comparator(curr, getTopChild(curr)) > 0
    ) {
      const next = getTopChild(curr)
      this.#swap(curr, next)
      curr = next
    }
  }

  #swap(i1, i2) {
    let tmp = this.array[i1]
    this.array[i1] = this.array[i2]
    this.array[i2] = tmp
  }

  #comparator(i1, i2) {
    const minCompare = (a, b) => a - b
    const maxCompare = (a, b) => b - a
    if (this.type === Heap.MIN_HEAP) {
      return minCompare(this.array[i1], this.array[i2])
    } else {
      return maxCompare(this.array[i1], this.array[i2])
    }
  }

  #getParentIndex(i) {
    return Math.ceil(i / 2 - 1)
  }
  #getLeftIndex(i) {
    return 2 * i + 1
  }
  #getRightIndex(i) {
    return 2 * i + 2
  }
}

Heap.MIN_HEAP = Symbol("Parent Node less than the left & right nodes")
Heap.MAX_HEAP = Symbol("Parent Node greater than the left & right nodes")

const myHeap = new Heap()

myHeap.add(12)
myHeap.add(7)
myHeap.add(8)
myHeap.add(23)
myHeap.add(1)
myHeap.add(13)
myHeap.add(2)

console.log(myHeap.array)

/**
 * 1 7 8 23 12 13 2
 */

/*
        1
       / \
      7   2
    23 12 13 8
  4
*/
