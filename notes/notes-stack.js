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
        return this.#list.at(-1);
    }

    get size() {
        return this.#list.length;
    }
}

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

}