class Graph {
    constructor () {
        this.vertices = new Set()
        this.adjacentList = new Map()
    }

    addVertex(vertex) {
        if (vertex && !this.vertices.has(vertex)) {
            this.vertices.add(vertex)
            this.adjacentList.set(vertex, new Set())
        }
        return this.vertices
    }

    removeVertex(vertex) {
        if (vertex && this.vertices.has(vertex)) {
            this.removeEdges(vertex)
            this.vertices.delete(vertex)
            this.adjacentList.delete(vertex)
        }
    }

    get graphView() {
        let graphView = ''
        this.adjacentList.forEach((val, key) => {
            graphView += `\n ${key} -> ${Array.from(val).join(', ')}`
        })
        return graphView
    }
}

class DirectedGraph extends Graph {}

class UndirectedGraph extends Graph {
    addEdges(source, destination) {
        if (source && destination) {
            if (!this.vertices.has(source)) this.addVertex(source)
            if (!this.vertices.has(destination)) this.addVertex(destination)
            this.adjacentList.get(source).add(destination)
            this.adjacentList.get(destination).add(source)
        }
    }

    removeEdges(vertex) {
        if (vertex) {
            const verticesSet = this.adjacentList.get(vertex)
            if (verticesSet) {
                verticesSet.forEach(v => {
                    let set = this.adjacentList.get(v)    
                    set.delete(vertex)
                })
                this.adjacentList.set(vertex, new Set())
            }
        }
    }

    bfs(vertex) {
        const queue = [vertex]
        let neighbors
        
        while (queue.length) {
            neighbors = this.adjacentList.get(vertex)
            queue.push(...neighbors)
        }

        return queue
    }

    dfs(vertex) {}
}

// Set = [1]
// Map = {1: Set(0)}

const adjGraph = new UndirectedGraph()

adjGraph.addVertex(1)
adjGraph.addVertex(2)
adjGraph.addEdges(2, 1)
adjGraph.addEdges(2, 5)
adjGraph.addEdges(5, 7)
adjGraph.addEdges(7, 9)
// adjGraph.removeVertex(2) // remove the vertex and all it's edges
// adjGraph.removeEdges(1) // remove all the vertex edges

// console.log(adjGraph.getVertices())
// console.log(adjGraph.getEdges())
console.log(adjGraph.graphView)
console.log(adjGraph.bfs(2))
