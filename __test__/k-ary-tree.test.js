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

  describe('testing that append method functions properly', () => {
    test('testing that append method successfully appends values', () => {
      expect(three._children).toEqual([five, six, seven]);
      expect(one._children).toEqual([two, three, four]);
      expect(six._children).toEqual([eight]);
    });
  
    test('testing that invalid input throws an error', () => {
      expect(() => one.appendChild('invalidInput')).toThrow();
    });
  });

  describe('testing that breadthFirstSearch method functions properly', () => {
    test('testing that breadthFirstSearch method returns the requested node', () => {
      expect(one.breadthFirstSearch(5)).toEqual(five);
      expect(one.breadthFirstSearch(6)).toEqual(six);
    });
  });

  describe('testing that breadthFirstToString method functions properly', () => {
    test('testing that breadthFirstToString returns the expected string', () => {
      expect(one.breadthFirstToString()).toEqual('1\n2\n3\n4\n5\n6\n7\n8');
    });

    test('testing that a root node with no children will return only the root node', () => {
      const oneNode = new KAryTree(1);
      expect(oneNode.breadthFirstToString()).toEqual('1');
    });
  });

  describe('testing that depthFirstToArray method functions properly', () => {
    test('testing that depthFirstArray method returns an array of node values in depth first order', () => {
      expect(one.depthFirstToArray()).toEqual([1, 4, 3, 7, 6, 8, 5, 2]);
    });
  });
    
  test('testing that a root node with no children will return only the root node', () => {
    const oneNode = new KAryTree(1);
    expect(oneNode.depthFirstToArray()).toEqual([1]);
  });
});