function subsets(list) {
  const out = [];
  function backtrack(start = 0, current = []) {
    console.log("->Out", JSON.stringify(current));
    out.push([...current]);

    for (let idx = start; idx < list.length; idx++) {
      current.push(list[idx]);
      backtrack(idx + 1, current);
      current.pop();
    }
  }
  backtrack();
  return out;
}

export default function subsetUtil() {
  const list = [1, 2, 3];
  console.log("Subsets --->", subsets(list));
}
