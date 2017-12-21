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
  describe('testing that find method functions properly', () => {
    test('testing that find method will return the requested value of the node', () => {
      expect(bst.find(10)).toEqual(true);
      expect(bst.find(12)).toEqual(true);
    });

    test('testing that find method will return false if value is not in bst', () => {
      expect(bst.find(1)).toEqual(false);
      expect(bst.find(3)).toEqual(false);
    });
  });
});
