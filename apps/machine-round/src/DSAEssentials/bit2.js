function countBits(n) {
  const ans = Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
  }
  return ans;
}

export default function countBitsUtil() {
  console.log(countBits(5)); // [0, 1, 1, 2, 1, 2]
}
