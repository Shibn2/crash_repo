function removeDuplicatesFromSortedArray(a) {
  let wIdx = 1;
  for (let rIdx = 1; rIdx < a.length; rIdx++) {
    if (a[rIdx] !== a[rIdx - 1]) {
      a[wIdx] = a[rIdx];
      wIdx++;
    }
  }
  return a.slice(0, wIdx);
}

function removeDuplicatesUtil() {
  const arr = [1, 1, 2, 3, 6, 7, 7, 20];
  console.log("Remove duplicates", removeDuplicatesFromSortedArray(arr));
}

export default removeDuplicatesUtil;
