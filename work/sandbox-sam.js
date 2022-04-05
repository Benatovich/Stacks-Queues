// implement Queue as an abstract data type (class that has an array property) that exposes:
// - enqueue() take an item
// - dequeue() return an item
// - hasNext() return true or false

class Queue {
    queue = [];

    constructor(initialQueue) {
        if(initialQueue) this.queue = initialQueue;
    }

    // methods
    enqueue(item) {
        return this.queue.unshift(item);
    }

    dequeue() {
        return this.queue.pop();
    }

    hasNext() {
        return this.queue.length < 1 ? false : true;
    }
}



// TEST CASES
const queue = new Queue();
queue.enqueue('fox');
queue.enqueue('goose');
queue.enqueue('lizard');
console.log(queue.dequeue()); // 'fox'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'goose'
queue.enqueue('llama');
console.log(queue.dequeue()); // 'lizard'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'llama'
console.log(queue.hasNext()); // false
console.log(queue.dequeue()); // null

// stretch challenge
// Most likely, the time complexity of your enqueue is O(1) but dequeue is O(n). Can you make it so both operations are O(1)? Hint: the people in line can't shift (take a step forward), can you move the front of the line?
// What is the trade-off of this approach?
