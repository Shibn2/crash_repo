function wordLadder(startWord, endWord, dict) {
  const wordSet = new Set(dict);

  const queue = [[startWord, 1]];

  if (!wordSet.has(endWord)) {
    return;
  }

  while (queue.length) {
    const [currWord, level] = queue.shift();
    for (let idx = 0; idx < currWord.length; idx++) {
      const currChar = currWord[idx];
      for (let ch = 99; ch < 122; ch++) {
        const newChar = String.fromCharCode(ch);
        if (newChar === currChar) continue;
        const newWord = `${currWord.slice(0, idx)}${newChar}${currWord.slice(
          idx + 1
        )}`;

        if (newWord === endWord) return level + 1;

        if (wordSet.has(newWord)) {
          queue.push([newWord, level + 1]);
          wordSet.delete(newWord);
        }
      }
    }
  }
}

export default function wordLadderUtil() {
  const begin = "hit";
  const end = "cog";
  const dict = ["hot", "dot", "dog", "lot", "log", "cog"];

  console.log(wordLadder(begin, end, dict)); // Output: 5
}
