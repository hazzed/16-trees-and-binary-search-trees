'use strict';

const KAryTree = require('../lib/k-ary-tree');

describe('k-ary-tree.js', () => {
  let one = new KAryTree(1);
  let two = new KAryTree(2);
  let three = new KAryTree(3);
  let four = new KAryTree(4);
  let five = new KAryTree(5);
  let six = new KAryTree(6);
  let seven = new KAryTree(7);
  let eight = new KAryTree(8);
  
  one.appendChild(two);
  one.appendChild(three);
  one.appendChild(four);
  
  three.appendChild(five);
  three.appendChild(six);
  three.appendChild(seven);
  
  six.appendChild(eight);