// Tobin Risser's Binary Serach Tree
//

let one = new treeNode('1');
let two = new treeNode('2');
let three = new treeNode('3');
let four = new treeNode('4');
let five = new treeNode('5');
let six = new treeNode('6');

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.right = six;

console.log(one);

function inOrderPrint(root) {
  if (root === null) return;

  inOrderPrint(root.left);
  console.log(root.val);
  inOrderPrint(root.right);

}

inOrderPrint(one);


class treeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(val, root = this.root) {
    // If the tree is empty, new node is the root
    if (this.root === null) {
      this.root = new treeNode(val);
      return;
    }

    if (val < root.val) {
      if (root.left === null) {
        root.left = new treeNode(val);
      } else {
        this.add(val, root.left)
      }
    } else {
      if (root.right === null) {
        root.right = new treeNode(val);
      } else {
        this.add(val, root.right);
      }
    }
  }

  search(val, root = this.root) {
    if (root === null) {
      return false;
    }
    if (val < root.val) {
      return this.search(val, root.left);
    } else if (val > root.val) {
      return this.search(val, root.right);
    } else {
      return true;
    }
  }
}

let tree = new BST();
tree.add(15);
tree.add(3);
tree.add(17);
tree.add(9);
tree.add(5);
tree.add(18);

console.log(tree.search(19));