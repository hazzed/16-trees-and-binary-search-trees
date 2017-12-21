'use strict';

const BinarySearchTree = require('../lib/binary-search-tree');

describe('testing binary-search-tree.js', () => {
  let bst = new BinarySearchTree(10);

  describe('testing that insert method functions properly', () => {
    bst.insert(12);

    test('testing that insert method is returning expected value', () => {
      expect(bst.right.value).toEqual(12);
      expect(bst.left).toBeNull();
    });

    test('testing that insert method will throw an error with invalid input', () => {
      expect(() => bst.insert(12)).toThrow();
      expect(() => bst.insert('invalid')).toThrow();
    });
  });
});
