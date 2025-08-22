// TreeNode definition
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function validateBST(root) {
  function validate(
    node,
    min = Number.NEGATIVE_INFINITY,
    max = Number.POSITIVE_INFINITY
  ) {
    if (!node) return true;

    if (node.val <= min || node.val >= max) return false;

    return (
      validate(node.left, min, node.val) && validate(node.right, node.val, max)
    );
  }

  return validate(root);
}

export default function validateBSTUtil() {
  const invalidBST = new TreeNode(
    10,
    new TreeNode(5),
    new TreeNode(
      15,
      new TreeNode(6), // ❌ violates the BST property
      new TreeNode(20)
    )
  );

  console.log("validateBST-->", validateBST(invalidBST)); // false
}
