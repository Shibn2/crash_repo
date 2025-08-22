function longestPalindromicSubString(str) {
  let start = 0;
  let end = 0;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right <= str.length - 1 && str[left] === str[right]) {
      left--;
      right++;
    }

    return [left + 1, right - 1];
  }

  for (let idx = 0; idx < str.length; idx++) {
    const [l1, r1] = expandAroundCenter(idx, idx);
    const [l2, r2] = expandAroundCenter(idx, idx + 1);

    if (r1 - l1 > end - start) {
      [start, end] = [l1, r1];
    }
    if (r2 - l2 > end - start) {
      [start, end] = [l2, r2];
    }
  }

  return str.slice(start, end + 1);
}

export default function logestPalindromicSubStringUtil() {
  console.log(
    "Find the longest palindromic substring: ",
    longestPalindromicSubString("bbabcbcab"),
    longestPalindromicSubString("bbabcbaabcab")
  );
}
