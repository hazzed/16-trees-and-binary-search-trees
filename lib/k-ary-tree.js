'use strict';

const KAryTree = function(value) {
  this.value = value;
  this._children = [];
};

KAryTree.prototype.appendChild = function(tree) {
  if(!(tree instanceof KAryTree))
    throw new TypeError('must insert a k-ary tree');

  this._children.push(tree);
};

KAryTree.prototype.breadthFirstSearch = function(value) {
  let queue = [];
  queue.push(this);

  let current = null;

  while(queue.length > 0) {
    current = queue.shift();
    if(current.value === value) {
      return current;
    }

    for(let child of current._children) {
      queue.push(child);
    }
  }
};

KAryTree.prototype.breadthFirstToString = function () {
  let queue = [];
  queue.push(this);

  let current = null;
  let newString = '';
  
  while(queue.length > 0) {
    current = queue.shift();
    newString += `\n${current.value}`;

    for(let child of current._children) {
      queue.push(child);
    }
  } 
  return newString.trim();
};

KAryTree.prototype.depthFirstToArray = function () {
  let stack = [];
  stack.push(this);

  let current = null;
  let newArray = [];

  while(stack.length > 0) {
    current = stack.pop();
    newArray.push(current.value);

    for(let child of current._children) {
      stack.push(child);
    }
  }
  return newArray;
};

module.exports = KAryTree;