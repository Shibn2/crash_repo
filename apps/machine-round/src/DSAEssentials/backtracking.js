function permutations(arr) {
  const out = [];
  const targetLen = arr.length;
  function backtrack(currList = [], bucket) {
    if (currList.length === targetLen) {
      out.push(currList);
      return;
    }

    for (let i = 0; i < bucket.length; i++) {
      const currItem = bucket[i];
      const pendingBucket = [...bucket.slice(0, i), ...bucket.slice(i + 1)];
      const newList = [...currList, currItem];
      backtrack(newList, pendingBucket);
    }
    return;
  }

  backtrack([], arr);
  return out;
}

export default function permutationsUtil() {
  const arr = [1, 2, 3, 4];
  console.log("Permutations ---> ", permutations(arr));
}
