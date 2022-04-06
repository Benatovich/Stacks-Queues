class PersonTreeNode {
    constructor(person) {
        this.value = person.name;
        this.person = person;
        this.left = null;
        this.right = null;
    }

    add(node) {
        if(node.value === this.value) {
            return;
        }

        const dir = node.value < this.value ? 'left' : 'right';
        if(!this[dir]) this[dir] = node;
        else this[dir].add(node);
    };

    findPerson(name) {
        if(name === this.value) {
            return this.person;
        }

        const dir = person.name < this.value ? 'left' : 'right';
        if(!this[dir]) return null;
        return this[dir].findPerson(name);
    }



}

// "root" is the node at the root of the tree (the tree)
let person = root.find('Nelson');
// person looks like
// { 
//   name: 'Nelson', 
//   phone: '555-1212', 
//   address: '123 Main St' 
// }
console.log(person);
let person2 = root.findPerson('Foo');
// person2 is null