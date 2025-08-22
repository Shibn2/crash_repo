function validParenthesis(str) {
  str = str.split("");
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const stk = [];

  for (let i = 0; i < str.length; i++) {
    if (Object.values(map).includes(str[i])) {
      stk.push(str[i]);
    } else {
      if (stk.at(-1) === map[str[i]]) {
        stk.pop();
      }
    }
  }

  return stk.length === 0;
}

export default function validParenthesisUtil() {
  const str1 = "{}{}{]";
  console.log("Validate this str: ", validParenthesis(str1));
  const str2 = "{}{}[]";
  console.log("Validate this str2: ", validParenthesis(str2));
}
