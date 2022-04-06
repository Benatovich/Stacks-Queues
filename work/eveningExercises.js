class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    add(node) {
        if(this.value < node.value) {
            if(node.left === null) {
                node.left = this;
            } else {
                this.add(node)
            };
        } else {
            if(node.right === null) {
                node.right = node;
            } else{
                this.add(node);
            };
        };
    };


    // add(node) {
    //     // 
    //     if(this.value > node.value) {
    //         !this.left ? this.left === node : this.left.add(node);
    //     } else {
    //         !this.right ? this.right === node : this.right.add(node);
    //     }
    // }







}

const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');

// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);