class MinHeap {
    constructor() {
        this.heap = [null]
    }

    insert(value) {
        this.heap.push(value)

        let curr = this.heap.length - 1

        let parent = Math.floor(curr / 2)

        while (this.heap[curr] < this.heap[parent]) {
            [this.heap[curr], this.heap[parent]] = [this.heap[parent], this.heap[curr]];
            // update current to be the parent.
            curr = parent
            parent = Math.floor(curr / 2)
        }
        return this.heap
    }

    remove() {
        // In here, we are going to swap the value at root of the tree with the last element
        [this.heap[1], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[1]];

        // remove from the array & set a variable to equal to the popped value
        let popped = this.heap.pop

        // And! from the root, determine if the parent is less than the children, if they are not, swap with the smaller child.
        let curr = 1

        // hint: to calculate the left child (parent index + 2) and right child (parent index * 2 + 1)
        let leftChild = curr * 2
        let rightChild = curr * 2 + 1

        while (this.heap[curr] > this.heap[rightChild] || this.heap[curr] > this.heap[leftChild]) {
            // if the value of leftChild is smaller than the value of the rightChild, then swap the parent with the leftChild.
            if (this.heap[leftChild] < this.heap[rightChild]) {
                [this.heap[curr], this.heap[leftChild]] = [this.heap[leftChild], this.heap[curr]];
                curr = leftChild;
            } else {
                [this.heap[curr], this.heap[rightChild]] = [this.heap[rightChild], this.heap[curr]];
                curr = rightChild;
            } leftChild = curr * 2
            rightChild = curr * 2 + 1
        }
        return popped
    }
}



let heap1 = new MinHeap();
heap1.insert(23)
heap1.insert(35)
heap1.insert(60)
heap1.insert(12)
heap1.insert(78)
heap1.insert(99)

heap1.remove()

console.log(heap1)