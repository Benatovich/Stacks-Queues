// notes
// in a linked list, each node links to the next node
// in a tree, a child can't contain its parent
// in a graph, there's no hierarchy. just a bunch of nodes connected in any way
class LinkedListNode {

    constructor(data) {
        this.#data = data;
        // initialize our pointers to our other nodes?
        this.#next = null; // another instand of LinkedListNode, but we don't have it yet so it's null. null is a great way to say "there will be an object here"
    }

    addData(data) {
        this.add(new LinkedListNode(data));
    }

    add(node) {
        // is there a next property?
        if(!this.#next) {
            // no, this "node" can be our next
            this.#next = node
        } else {
            // yes, delegate to the current "next"
            this.#next.add(node)
        }
    }
}



// test cases:
const root = new LinkedListNode('A');
const nodeB = new LinkedListNode('B');
root.add(nodeB);
console.log(root.getList()); // 'A B'
const nodeC = new LinkedListNode('C');
const nodeD = new LinkedListNode('D');
const nodeE = new LinkedListNode('E');
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root.getList()); // 'A B C D E'