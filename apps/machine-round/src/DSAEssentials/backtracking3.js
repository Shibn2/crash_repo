/**
 * @param {string} str
 * @param {string[]} dict
 * @return {boolean}
 */
function segmentWords(str, dict) {
  const required = str.length;
  function backtrack(sentence, pendingSentence) {
    if (sentence.length > required) {
      return false;
    }
    if (sentence === str) {
      return true;
    }

    for (const word of dict) {
      if (pendingSentence.startsWith(word)) {
        pendingSentence = pendingSentence.slice(word.length);
        const newSentence = sentence + word;
        if (backtrack(newSentence, pendingSentence)) {
          return true;
        }
      }
    }
  }
  return backtrack("", str);
}

export default function segmentWordsUtil() {
  let str = "greatfrontendgreat";
  let dict = ["frontend", "great"];
  console.log("Segment words1", segmentWords(str, dict));
}
