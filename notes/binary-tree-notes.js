class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    add(node) {
        if(node.value === this.value) {
            return;
        }

        // if(node.value < this.value) {
        //     if(!this.left) this.left = node;
        //     else this.left.add(node);
        // }
        // else {
        //     if(!this.right) this.right = node;
        //     else this.right.add(node);
        // }

        const dir = node.value < this.value ? 'left' : 'right';
        if(!this[dir]) this[dir] = node;
        else this[dir].add(node);
    };





}

const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');

// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);