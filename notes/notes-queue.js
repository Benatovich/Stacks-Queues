class Queue {
    #list = [];
    #index = 0;

    enqueue(item) {
        this.#list.push(item);
    }

    dequeue() {
        // return this.#list.length ? this.#list.shift() : null;
        // stretch goal version below:
        const item = this.#list[this.#index];
        this.#index++;
        return item ? item : null;
    }

    hasNext() {
        // return !!this.#list.length;
        // use code below to match stretch goal version of dequeue:
        return !!(this.#list.length - this.#index);
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
