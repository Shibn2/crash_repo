class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Inserts a new value into the BST while maintaining BST properties.
   * @param {*} value The value to be inserted into the BST.
   */
  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;
    while (true) {
      if (current.value === value) {
        return undefined;
      }
      if (current.value < value) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
      if (current.value > value) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      }
    }
  }

  /**
   * Searches for a value in the BST. Returns true if the value exists, false otherwise.
   * @param {*} value The value to search for.
   * @return {boolean} True if the value is found, false otherwise.
   */
  // Search for a value in the BST (returns true/false)
  search(value) {
    if (!this.root) return false;

    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }
  /**
   * Deletes a value from the BST, if it exists, while maintaining BST properties.
   * @param {*} value The value to be deleted from the BST.
   */
  delete(value) {
    throw "Not implemented!";
  }
}

export default function bstFundamentalsUtil() {
  const bst = new BinarySearchTree();
  bst.insert(15);
  bst.insert(10);
  bst.insert(20);
  console.log("<<<bst>>>", bst);
  bst.search(10); // true
  bst.delete(10);
  bst.search(10); // false
}
