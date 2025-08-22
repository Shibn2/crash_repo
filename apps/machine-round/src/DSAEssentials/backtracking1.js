function generateParenthesis(n) {
  const out = [];
  function backtracking(curr, open, close) {
    if (curr.length === n * 2) {
      out.push(curr);
      return;
    }

    if (open < n) {
      backtracking(curr + "(", open + 1, close);
    }
    if (close < open) {
      backtracking(curr + ")", open, close + 1);
    }
  }
  backtracking(out, 0, 0);
  return out;
}

export default function generateParenthesisUtil() {
  console.log("Genrate parenthesis list for n: ", 3, generateParenthesis(3));
}
