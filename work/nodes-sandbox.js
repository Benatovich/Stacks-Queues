// linked list getList() method
// getList() returns a string with values in order. should use recursion to delegate.
class LinkedListNode {
    #data = '';
    #next = null; 

    constructor(data) {
        this.data = data;
    }

    add(node) {
        if(!this.next) {
            this.next = node
        } else {
            this.next.add(node)
        }
    }
    
    getList() {
        // return this.data identifies the root
        if(!this.next) {
            return this.data;
        } else {
            return `${this.data}, ${this.next.getList()}`;
        }
    }


    remove(node) {
        // is this the node to remove? if so, return its next
        // so that can be the new next of the caller
        if(this === node) return this.#next;
        // no more nodes? return undefined to signal not found
        if(!this.#next) return;
        // get the potentially new next node
        const newNext = this.#next.remove(node);
        // and assign it if provided
        if(newNext !== undefined) this.#next = newNext;
    }

    // removeByIndex(index) {
    //     if(index === 0) return this.#next;

    //     if(!this.#next) return;

    //     index--;

    //     const newNext = this.#next.removeIndex(index);

    //     // if(newNext !== )
    // }

}



// test cases:
const root = new LinkedListNode('A');
const nodeB = new LinkedListNode('B');
root.add(nodeB);
console.log(root.getList()); // 'A B'
console.log(root.remove(nodeB)); // 'A B'
console.log(root.getList()); // 'A B'
console.log(root.remove(root)); // 'A B'
const nodeC = new LinkedListNode('C');
const nodeD = new LinkedListNode('D');
const nodeE = new LinkedListNode('E');
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root.getList()); // 'A B C D E'
console.log(root.getList()); // 'A B C D E'