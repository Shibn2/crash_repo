function longestSubStrWithoutRepeatingChar(word) {
  let longestNonRepeatingSubStr = "";
  let currString = "";
  for (let i = 0; i < word.length; i++) {
    while (currString.includes(word[i])) {
      currString = currString.slice(1);
    }
    currString += word[i];
    if (longestNonRepeatingSubStr.length < currString.length) {
      longestNonRepeatingSubStr = currString;
    }
  }
  return longestNonRepeatingSubStr;
}

export default function longestSubStrWithoutRepeatingCharUtil() {
  const word = "abcabcbb";
  const k = 3;
  console.log(
    "Longest non repeating sub str: ",
    longestSubStrWithoutRepeatingChar(word, k)
  );
  const word1 = "pwwkew";
  const k1 = 3;
  console.log(
    "Longest non repeating sub str: ",
    longestSubStrWithoutRepeatingChar(word1, k1)
  );
}
