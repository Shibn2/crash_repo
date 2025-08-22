function findLongestSubstrWithoutRepeatingChars(str) {
  let left = 0;
  let maxLen = 0;
  const seen = new Set();

  for (let right = 0; right < str.length; right++) {
    while (seen.has(str[right])) {
      seen.delete(str[left]);
      left++;
    }
    seen.add(str[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

export default function findLongestSubstrWithoutRepeatingCharsUtil() {
  const str = "abcabcbb";
  console.log(findLongestSubstrWithoutRepeatingChars(str)); // Output: 3
}
