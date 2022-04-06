class Stack {
    #list = [];
    // using the constructor like in the sandboxes is fine too

    push(item) {
        this.#list.push(item);
    }

    pop() {
        const list = this.#list;
        return list.length ? list.pop() : null;
    }
    
    peek() {
        // const list = this.#list;
        // return list.at(-1);
        return this.#list.at(-1);
    }

    get size() {
        return this.#list.length;
    }
}

[1, 2].at(0);

// test cases
const stack = new Stack();
stack.push('fox');
stack.push('goose');
stack.push('lizard');
console.log(stack.pop()); // 'lizard'
console.log(stack.peek()); // 'goose'
console.log(stack.pop()); // 'goose'
stack.push('llama');
console.log(stack.pop()); // 'llama'
console.log(stack.peek()); // 'fox'
console.log(stack.pop()); // 'fox'
console.log(stack.pop()); // null


function reverse(array) {
    const stack = new Stack();

    for (let i = 0; i < array.length; i++) {
        stack.push(array[i]);
    }

    const results = [];

    for (let i = 0; i < array.length; i++) {
        results[i] = stack.pop();
    }

    return results;
}

console.log(reverse([12, 3, 5, 7]));