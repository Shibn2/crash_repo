function maxSumSubArray(nums, k) {
  let maxSum = 0;
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

export default function maxSumSubArrayUtil() {
  const nums = [1, 4, 2, 10, 23, 3, 1, 0, 20];
  const k = 4;
  console.log(
    "Find max sum sub array from",
    nums,
    "window:",
    k,
    "-> ",
    maxSumSubArray(nums, k)
  );
}
