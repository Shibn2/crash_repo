function bstLevelOrderTraversal(root) {
  let queue = [];
  queue.push(root);
  const result = [];

  while (queue.length) {
    const len = queue.length;
    const levelList = [];
    for (let idx = 0; idx < len; idx++) {
      const curr = queue.shift();
      levelList.push(curr.val);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    result.push(levelList);
  }
  return result;
}

export default function bstLevelOrderTraversalUtil() {
  const sampleTree = {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 4,
        left: null,
        right: null,
      },
      right: {
        val: 5,
        left: {
          val: 7,
          left: null,
          right: null,
        },
        right: null,
      },
    },
    right: {
      val: 3,
      left: null,
      right: {
        val: 6,
        left: null,
        right: null,
      },
    },
  };

  console.log(
    "Binary tree level order traversal:",
    bstLevelOrderTraversal(sampleTree)
  );
}
