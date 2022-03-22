class MinHeap{
    constructor(){
        this.heap = [null]
    }

    insert(value){
        this.heap.push(value)

        let curr = this.heap.length - 1

        let parent = Math.floor(curr/2)

        while(this.heap[curr] < this.heap[parent]) {
            [this.heap[curr], this.heap[parent]] = [this.heap[parent], this.heap[curr]];
            // update current to be the parent.
            curr = parent
            parent = Math.floor(curr/2)
        }
        return this.heap
    }
}



let heap1 = new MinHeap();
heap1.insert(23)
heap1.insert(35)
heap1.insert(60)
heap1.insert(12)

console.log(heap1)