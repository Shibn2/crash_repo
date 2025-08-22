function subArraySumEqualsK(a, k) {
  let sum = 0;
  let count = 0;
  let prefixSum = new Map();
  prefixSum.set(0, 1);
  for (const val of a) {
    sum += val;
    if (prefixSum.has(sum - k)) {
      count += prefixSum.get(sum - k);
    }
    prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);
  }
  return count;
}

function subarraySumEqualsKUtil() {
  const a = [2, 2, 1, 3, 1, 7, 3, 2, 5, 6];
  console.log("Sub array sum equal to k", subArraySumEqualsK(a, 5));
}

export default subarraySumEqualsKUtil;
// Count number of sub arrays whose sum equals k.
// input: [1,1,1], k=2, out: 2
// [2, 2, 1, 3, 1, 7, 3, 2, 5, 6], k = 5, out =
