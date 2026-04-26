class Node {
  constructor(val, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors; // Array<Node>
  }
}

function cloneGraphDFS(graph) {
  const seen = new Map();

  function dfs(node) {
    if (seen.has(node)) return seen.get(node);

    const clone = new Node(node.val);
    seen.set(node, clone);
    if (node.neighbors.length > 0) {
      for (const neighbor of node.neighbors) {
        clone.neighbors.push(dfs(neighbor));
      }
    }
    return clone;
  }
  return dfs(graph);
}

export default function graphCloneUtil() {
  console.log(`Correctness notes

    The seen map guarantees:

    each original node is cloned exactly once,

    multiple edges to the same neighbor share the same cloned neighbor,

    cycles do not cause infinite recursion/looping.

    Time & Space Complexity

    Let V be the number of nodes and E the number of edges.

    Time: O(V + E)
    We visit each node once and process all neighbor edges.

    Space: O(V)

    For the seen map (stores up to V clones).

    Plus recursion stack up to O(V) in the worst case for DFS; BFS uses O(V) queue in worst case. Overall still O(V) auxiliary space.`);
  // Build a small undirected graph: 1--2, 1--3, 2--4, 3--4 (a square)
  const n1 = new Node(1);
  const n2 = new Node(2);
  const n3 = new Node(3);
  const n4 = new Node(4);

  n1.neighbors.push(n2, n3);
  n2.neighbors.push(n1, n4);
  n3.neighbors.push(n1, n4);
  n4.neighbors.push(n2, n3);

  // Clone (try either function)
  const cloned = cloneGraphDFS(n1);
  // const cloned = cloneGraphBFS(n1);

  // Quick sanity checks
  console.log("cloned--->", cloned);
  console.log(cloned.val); // 1
  console.log(cloned.neighbors.map((n) => n.val).sort()); // [2,3]
  console.log(cloned.neighbors[0] === n2); // false (should be a different object)
}
