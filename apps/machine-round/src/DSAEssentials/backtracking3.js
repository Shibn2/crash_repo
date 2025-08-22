/**
 * @param {string} str
 * @param {string[]} dict
 * @return {boolean}
 */
function segmentWords(str, dict) {
  const required = str.length;
  function backtrack(out, pending) {
    if (out.length > required) {
      return false;
    }
    if (out === str) {
      return true;
    }

    for (const word of dict) {
      if (pending.startsWith(word)) {
        const newOut = out + word;
        const newPending = pending.slice(word.length);
        if (backtrack(newOut, newPending)) {
          return true;
        }
      }
    }
    return false;
  }
  return backtrack("", str);
}

export default function segmentWordsUtil() {
  let str = "greatfrontendgreat";
  let dict = ["frontend", "great"];
  console.log("Segment words1", segmentWords(str, dict));
}
