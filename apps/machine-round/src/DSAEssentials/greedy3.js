function maximumSubArraySum(arr) {
  let currSum = arr[0];
  let maxSum = arr[0];

  for (let idx = 1; idx < arr.length; idx++) {
    currSum = Math.max(arr[idx], currSum + arr[idx]);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}

export default function maximumSubArraySumUtil() {
  const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

  console.log("Maximum subarray sum :", maximumSubArraySum(arr));
}
