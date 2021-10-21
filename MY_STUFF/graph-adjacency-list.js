
class Graph {
    #vertices = new Set()
    #adjacentList = new Map()

    get vertices() {
        return this.#vertices
    }

    get edges() {
        return this.#adjacentList
    }

    addVertex(vertex) {
        if (vertex && !this.#vertices.has(vertex)) {
            this.#vertices.add(vertex)
            this.#adjacentList.set(vertex, new Set())
        }
        return this.#vertices
    }

    removeVertex(vertex) {
        if (vertex && this.#vertices.has(vertex)) {
            this.removeEdges(vertex)
            this.#vertices.delete(vertex)
            this.#adjacentList.delete(vertex)
        }
    }

    bfs(vertex) {}

    dfs(vertex) {}

    addEdges(source, destination, undirected = false) {
        if (source && destination) {
            if (!this.#vertices.has(source)) this.addVertex(source)
            if (!this.#vertices.has(destination)) this.addVertex(destination)
            this.#adjacentList.get(source).add(destination)
            if (undirected) this.#adjacentList.get(destination).add(source)
        }
    }

    removeEdges(vertex) {
        if (vertex) {
            const verticesSet = this.#adjacentList.get(vertex)
            if (verticesSet) {
                verticesSet.forEach(v => {
                    let set = this.#adjacentList.get(v)
                    if (set) {
                        set.delete(vertex)
                    }
                })
                this.#adjacentList.set(vertex, new Set())
            }
        }
    }

    getGraphView() {
        let graphView = ''
        this.#adjacentList.forEach((val, key) => {
            graphView += `\n ${key} -> ${Array.from(val).join(', ')}`
        })
        return graphView
    }
}

// Set = [1]
// Map = {1: Set(0)}

const adjGraph = new Graph()

adjGraph.addVertex(1)
adjGraph.addVertex(2)
adjGraph.addEdges(2, 1)
adjGraph.addEdges(2, 5)
adjGraph.addEdges(7, 9)
// adjGraph.removeVertex(1) // remove the vertex and all it's edges
// adjGraph.removeEdges(2) // remove all the vertex edges

// console.log(adjGraph.getVertices())
// console.log(adjGraph.getEdges())
console.log(adjGraph.getGraphView())
