const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.rootNode) {
      this.rootNode = newNode;
    } else {
      let current = this.rootNode;
      while (true) {
        if (data < current.data) {
          if (!current.left) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            break;
          }
          current = current.right;
        }
      }
    }
  }

  has(data) {
    let current = this.rootNode;

    while (current) {
      if (data === current.data) {
        return true;
      }
      current = data < current.data ? current.left : current.right;
    }

    return false;
  }

  find(data) {
    let current = this.rootNode;

    while (current) {
      if (data === current.data) {
        return current;
      }
      current = data < current.data ? current.left : current.right;
    }

    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let current = this.rootNode;
    while (current.left) {
      current = current.left;
    }

    return current.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let current = this.rootNode;
    while (current.right) {
      current = current.right;
    }

    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};