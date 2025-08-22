function merge(left, right) {
  let out = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      out.push(left[0]);
      left = left.slice(1);
    } else {
      out.push(right[0]);
      right = right.slice(1);
    }
  }
  if (left.length) {
    out = [...out, ...left];
  }
  if (right.length) {
    out = [...out, ...right];
  }
  return out;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

export default function mergeSortUtil() {
  console.log("Merge sort ---> ", mergeSort([38, 27, 43, 3, 9, 82, 10]));
  // Output: [3, 9, 10, 27, 38, 43, 82]
}
