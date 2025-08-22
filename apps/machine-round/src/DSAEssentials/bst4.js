function bstLevelOrderTraversal(root) {
  let queue = [];
  queue.push(root);
  const result = [];

  while (queue.length) {
    const len = queue.length;
    const levelList = [];
    for (let idx = 0; idx < len; idx++) {
      levelList.push(queue[idx].val);
      const node = queue[idx];
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(levelList);
    queue = queue.slice(len);
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
