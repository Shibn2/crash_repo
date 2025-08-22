function twoSum(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    const sum = arr[l] + arr[r];
    if (sum > target) {
      r--;
    } else if (sum < target) {
      l++;
    } else {
      break;
    }
  }
  return [l, r];
}

export default function twoSumUtil() {
  const a1 = [1, 2, 3, 9, 10, 14, 25];
  console.log("2 sum : ", twoSum(a1, 11));
}
