// Cycle detection in unidirection graph.

function dfs(adjMap, node, parent, visited) {
  visited.add(node);
  for (const neighbor of adjMap[node]) {
    if (visited.has(neighbor) && neighbor !== parent) {
      return true;
    }
    if (!visited.has(neighbor) && dfs(adjMap, neighbor, node, visited)) {
      return true;
    }
  }
}

function checkCycleDependency(graph) {
  const adjMap = {};
  for (const [node, node2] of graph) {
    if (!(node in adjMap)) {
      adjMap[node] = [];
    }
    if (!(node2 in adjMap)) {
      adjMap[node2] = [];
    }
    adjMap[node].push(node2);
    adjMap[node2].push(node);
  }
  const visited = new Set();
  for (const node in adjMap) {
    if (!visited.has(node)) {
      if (dfs(adjMap, node, null, visited)) {
        return true;
      }
    }
  }
  return false;
}

export default function graphCycleUtility() {
  const edgesWithCycle = [
    ["A", "B"],
    ["B", "C"],
    ["C", "D"],
    ["D", "B"],
  ];
  const edgesWithCycle2 = [
    ["A", "B"],
    ["B", "C"],
    ["C", "A"],
    ["D", "C"],
  ];
  const edgesWithoutCycle = [
    ["A", "B"],
    ["B", "C"],
    ["C", "D"],
  ];

  console.log("Is having cycle?", checkCycleDependency(edgesWithCycle));
  console.log("Is having cycle?", checkCycleDependency(edgesWithCycle2));
  console.log("Is having cycle?", checkCycleDependency(edgesWithoutCycle));
}
