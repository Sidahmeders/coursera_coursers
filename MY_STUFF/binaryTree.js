// Node
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Binary Tree

class BST {
    constructor(value) {
        this.root = new Node(value);
        this.size = 1;
    }

    // Insert
    insert(val) {
        let newNode = new Node(val);
        let addNode = node => {
            if (!node.left && node.val > val) node.left = newNode;
            else if (!node.right && node.val <= val) node.right = newNode;
            else {
                if (node.left && node.val > val) addNode(node.left);
                else if (node.right && node.val <= val) addNode(node.right); 
            }
        }
        addNode(this.root);
        this.size++;
    }

    // Min
    min() {
        let currNode = this.root;
        while (currNode.left) {
            currNode = currNode.left;
        }
        return currNode;
    }

    // Max
    max() {
        let currNode = this.root;
        while (currNode.right) {
            currNode = currNode.right;
        }
        return currNode;
    }

    // Contains
    contains(val) {
        let currNode = this.root;
        while (currNode) {
            if (currNode.val == val) return currNode;
            else if (currNode.val <= val) currNode = currNode.right;
            else if (currNode.val > val) currNode = currNode.left;
        }
        return -1;
    }

    // Searching DFS... & BFS...
    // DFS (Depth first Search)
    // PreOrder 
    dfsPre() {
        let res = [];
        let preOrder = node => {
            if (!node) return;
            res.push(node.val);
            if (node.left) preOrder(node.left);
            if (node.right) preOrder(node.right);
        }
        preOrder(this.root);
        return res;
    }

    // InOrder
    dfsIn() {
        let res = [];
        let inOrder = node => {
            if (node.left) inOrder(node.left);
            res.push(node.val);
            if (node.right) inOrder(node.right);
        }
        inOrder(this.root);
        return res;
    }

    // PostOrder
    dfsPost() {
        let res = [];
        let postOrder = node => {
            if (node.left) postOrder(node.left);
            if (node.right) postOrder(node.right);
            res.push(node.val);
        }
        postOrder(this.root);
        return res;
    }

    // BFS (Breadth fisrt Search)
    bfs() {
        let res =[];
        let queue = [this.root];
        while (queue.length) {
            if (queue[0].left) queue.push(queue[0].left);
            if (queue[0].right) queue.push(queue[0].right);
            res.push(queue.shift().val);
        }
        return res;
    }

}


let bst = new BST(10);

bst.insert(2);
bst.insert(12);
bst.insert(8);
bst.insert(7);
bst.insert(16);
bst.insert(1);
bst.insert(11);

// console.log(bst.dfsPre());
// console.log(bst.dfsIn());
// console.log(bst.dfsPost());
// console.log(bst.bfs());

// console.log(bst.contains(7));
// console.log(bst.min());
// console.log(bst.max());
//console.log(bst.root);
