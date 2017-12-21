'use strict';

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if(typeof value !== 'number')
      throw new TypeError('Binary Search Tree - value should be a number');

    if(this.value === value)
      throw new Error('Binary Search Tree - value is already present');

    if(value < this.value) {
      if(!this.left) {
        this.left = new BinarySearchTree(value);
        return;
      }
      this.left.insert(value);
      return;
    }
    if(!this.right) {
      this.right = new BinarySearchTree(value);
      return;
    }
    this.right.insert(value);
    return;
  }

  find(value) {
    if(typeof value !== 'number')
      throw new TypeError('Binary Search Tree - value should be a number');
    if(value === this.value)
      return true;

    if(value > this.value) {
      if(this.right !== null)
        return this.right.find(value);
      else
        return false;
    }
    if(this.left !== null)
      return this.left.find(value);
    else
      return false;
  }
}

let bst = new BinarySearchTree(10);
bst.insert(5);
bst.insert(2);
bst.insert(8);
bst.insert(16);

console.log(bst.find(8));
console.log(bst.find(16));
console.log(bst.find(10));

module.exports = BinarySearchTree;