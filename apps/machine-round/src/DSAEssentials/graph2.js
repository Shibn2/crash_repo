/**
 * @param {number[]} courses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canCompleteCourse(courses, prerequisites) {
  const adjList = {};
  for (const [cource, preReq] of prerequisites) {
    if (!(cource in adjList)) {
      adjList[cource] = new Set();
    }
    adjList[cource].add(preReq);
  }
  console.log("adjList---->", adjList);
  function lookup(vertex, adjList, visited, inStack) {
    console.log("======================================");
    console.log("vertex", vertex, "inStack", inStack, "visited", visited);
    if (inStack[vertex]) {
      return true;
    }
    if (visited[vertex]) {
      return false;
    }

    inStack[vertex] = true;
    visited[vertex] = true;

    if (adjList[vertex]) {
      for (const neibour of adjList[vertex]) {
        console.log("neigbhor", neibour);
        if (lookup(neibour, adjList, visited, inStack)) {
          return true;
        }
      }
    }

    inStack[vertex] = false;
  }

  const visited = {};
  const inStack = {};

  for (let vertex = 0; vertex < courses; vertex++) {
    if (lookup(vertex, adjList, visited, inStack)) {
      return false;
    }
  }
  return true;
}

export default function canCompleteCourseUtil() {
  let courses = 4;
  let prerequisites = [
    [1, 0],
    [2, 1],
    [3, 2],
    [1, 3],
  ];

  console.log(
    "onCompleteCourse ------------>",
    canCompleteCourse(courses, prerequisites)
  );
}
