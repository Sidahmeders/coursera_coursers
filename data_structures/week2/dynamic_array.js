// dynamic Array


class MyArray {
    constructor(node, index) {
        this.array = {};
        this.node = node;
        this.index = index;
        this.size = 0;
        if (node) {
            this.array[this.size] = node;
            this.size++;
        }
    }
    
    append(node) {
        this.array[this.size] = node;
        this.size++;
    }

    add(node) {
        let i = 1;
        let tmp = {...this.array};
        while (i <= this.size) {
            this.array[i] = tmp[i-1];
            i++
        }
        this.array[0] = node;
    }

    replace(index, node) {
        this.array[index] = node;
    }

    getItem(index) {
        return this.array[index];
    }

    // this is not part of the dynamic array
    setChildrenNodes(index, value) {
        this.array[index] = {
            ...this.array[index],
            [value]: value
        }
    }
    
}


let arr = new MyArray("node js");

arr.append("python");
arr.append("javascript");
arr.append("ruby");
arr.append("c++ & c#");
arr.add("start of assembly");
arr.replace(4, "ruby on rails");
console.log(arr);

console.log(">>>", arr.getItem(3));
