function nextGreatElement(arr) {
  const result = new Array(arr.length).fill(-1);

  let idx = arr.length - 1;
  const stk = [];
  while (idx >= 0) {
    while (stk.length && stk[stk.length - 1] <= arr[idx]) {
      stk.pop();
    }
    if (stk.length > 0) {
      result[idx] = stk[stk.length - 1];
    }
    stk.push(arr[idx]);
    idx--;
  }
  return result;
}

export default function nextGreatElementUtil() {
  console.log("nextGreaterElement--->", nextGreatElement([4, 5, 2, 10])); // [5, 10, 10, -1]
  console.log("nextGreatElement--->2", nextGreatElement([3, 2, 1])); // [-1, -1, -1]
  console.log("nextGreatElement--->3", nextGreatElement([1, 3, 2, 4])); // [3, 4, 4, -1]
}
