function longestConsecutiveSequence(arr) {
  let longest = 1;
  for (let i = 0; i < arr.length; i++) {
    let currLen = 1;
    let curr = arr[i];
    while (arr.includes(curr + 1)) {
      currLen++;
      curr = curr + 1;
    }
    longest = Math.max(longest, currLen);
  }
  return longest;
}

export function longestConsecutiveSequenceUtil() {
  const arr = [100, 4, 200, 1, 3, 2];
  console.log(
    "Longest consecutive sequence --> ",
    longestConsecutiveSequence(arr)
  );
}
