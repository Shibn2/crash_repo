function quickSort(a) {
  if (!a.length) {
    return [];
  }
  if (a.length === 1) {
    return a;
  }
  // find out / set pivot
  const pivot = a[0];
  // create left and right from array
  const left = [];
  const right = [];
  for (const val of a) {
    if (val < pivot) {
      left.push(val);
    } else if (val > pivot) {
      right.push(val);
    }
  }

  // recursively do the same for left and right
  return [...quickSort(left), pivot, ...quickSort(right)];
}

export default function quickSortUtil() {
  const arr = [1, 100, 0, 23, 74, 9, 3];
  console.log("quickSort(arr)->", quickSort(arr));
}
