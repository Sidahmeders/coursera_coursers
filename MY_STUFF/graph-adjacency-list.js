///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
/* MY GRAPH IMPLEMENTATION */
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
/* REMOVE LINE 6
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
        const visited = new Set()

        while (queue.length) {
            let currentNode = queue.shift()
            if (!visited.has(currentNode)) {
                visited.add(currentNode)
                let neighbors = this.adjacentList.get(currentNode)
                queue.push(...neighbors)
            }
        }

        return visited
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
REMOVE LINE 100 */


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
/*  ANOTHER GRAPH IMPLEMENTATION   */
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

/*
    node {
        value[vertex]
        adjacent-nodes[list-of-vertices]
        EXAMPLE:
        value = 2 
        adjacent-nodes = { 3, 6 }
    }

    graph {
        nodes-list {
            verticesList -> [list of unique nodes]
            node -> list of referances to other nodes
        }
    }

*/

class Node {
    constructor() {
        this.edges = new Set()
        this.adjacent = new Set()
    }

    addPath(value) {
        this.edges.add(value)
        return value
    }

    addAdjacent(value) {
        this.adjacent.add(value)
    }

    isAdjacent(value) {
        return this.adjacent.has(value)
    }
}

class Graph {
    constructor(graphDirection = Graph.DIRETCED) {
        this.graphDirection = graphDirection
        this.adjacencyList = new Map()
    }

    get graph() {
        let graphView = ''
        this.adjacencyList.forEach((node, entry) => {
            graphView +=  `\n ${entry} -> ${Array.from(node.edges).join(', ')}`
        })
        return graphView
    }

    addVertex(value) {
        if (!this.adjacencyList.has(value)) {
            this.adjacencyList.set(value, new Node())
        }
        return this.adjacencyList.get(value)
    }

    removeVertex(value) {
        const vertex = this.adjacencyList.get(value)
        const adjacentNodes = vertex.adjacent

        this.adjacencyList.delete(value)

        Array.from(adjacentNodes).forEach(node => {
            const { edges, adjacent } = this.adjacencyList.get(node)
            edges.delete(value)
            adjacent.delete(value)
        })

        return value
    }

    addEdges(source, destination) {
        const sourceNode = this.addVertex(source)
        const destinationNode = this.addVertex(destination)

        sourceNode.addPath(destination)
        if (this.graphDirection === Graph.UNDIRECTED) {
            destinationNode.addPath(source)
        }

        sourceNode.addAdjacent(destination)
        destinationNode.addAdjacent(source)
    }

    removeEdges(source, destination) {
        const sourceNode = this.adjacencyList.get(source)
        const destinationNode = this.adjacencyList.get(destination)

        const sourcePaths = sourceNode.edges
        const soureceAdjacent = sourceNode.adjacent
        const destinationPaths = destinationNode.edges
        const destinationAdjacent = destinationNode.adjacent
        
        sourcePaths.delete(destination)

        if (this.graphDirection === Graph.UNDIRECTED) {
            destinationPaths.delete(source)
        }

        if (!sourcePaths.has(destination) && !destinationPaths.has(source)) {
            soureceAdjacent.delete(destination)
            destinationAdjacent.delete(source)
        }
    }
}

Graph.UNDIRECTED = Symbol('undirected Graph')
Graph.DIRETCED = Symbol('directed Graph')

const myGraph = new Graph()

myGraph.addVertex(7)
myGraph.addVertex(3)

myGraph.addEdges(3, 4)
myGraph.addEdges(3, 12)
myGraph.addEdges(10, 12)
myGraph.addEdges(4, 7)
myGraph.addEdges(4, 3)

// myGraph.removeVertex(12)
myGraph.removeEdges(3, 4)

console.log(myGraph.graph)
// console.log(myGraph.adjacencyList)
