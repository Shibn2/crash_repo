// TreeNode definition
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Lowest Common Ancestor Function (BST)
function lowestCommonAncestor(root, p, q) {
  while (root) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else if (p.val > root.val && q.val > root.val) {
      root = root.right;
    } else {
      return root;
    }
  }
  return null;
}

export default function lowestCommonAncestorUtil() {
  // Tree construction (same as diagram above)
  const tree = new TreeNode(6);
  tree.left = new TreeNode(2);
  tree.right = new TreeNode(8);
  tree.left.left = new TreeNode(0);
  tree.left.right = new TreeNode(4);
  tree.left.right.left = new TreeNode(3);
  tree.left.right.right = new TreeNode(5);
  tree.right.left = new TreeNode(7);
  tree.right.right = new TreeNode(9);

  // Helper: Find node by value (DFS)
  function findNode(root, val) {
    if (!root) return null;
    if (root.val === val) return root;
    return findNode(val < root.val ? root.left : root.right, val);
  }

  // ✅ Test Cases
  const tests = [
    [2, 8], // Output: 6
    [2, 4], // Output: 2
    [3, 5], // Output: 4
    [0, 5], // Output: 2
    [7, 9], // Output: 8
    [6, 9], // Output: 6
  ];

  tests.forEach(([a, b]) => {
    const nodeA = findNode(tree, a);
    const nodeB = findNode(tree, b);
    const lca = lowestCommonAncestor(tree, nodeA, nodeB);
    console.log(`LCA of ${a} and ${b} is: ${lca.val}`);
  });
}
