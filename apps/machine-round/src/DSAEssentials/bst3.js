function bstInorderTraversal(root, result) {
  if (!root) {
    return;
  }
  bstInorderTraversal(root.left, result);
  result.push(root.val);
  bstInorderTraversal(root.right, result);
}

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

export default function bstInorderTraversalUtil() {
  const root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.right = new TreeNode(6);

  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);

  root.right.left = new TreeNode(5);
  root.right.right = new TreeNode(7);
  const result = [];
  bstInorderTraversal(root, result);
  console.log("Inorder traversal of bst", result);
}
