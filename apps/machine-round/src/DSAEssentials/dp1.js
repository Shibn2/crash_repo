function longestIncreasingSubsequence(arr) {
  const n = arr.length;
  if (n === 0) return 0;
  const dp = new Array(n).fill(1);

  let ans = 1;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    ans = Math.max(ans, dp[i]);
  }
  return ans;
}

export default function lISutil() {
  console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18])); // 4 (e.g., 2,3,7,101)
  console.log(longestIncreasingSubsequence([0, 1, 0, 3, 2, 3])); // 4 (0,1,2,3)
}
