function stringCompression(chars) {
  let i = 0,
    index = 0;
  while (i < chars.length) {
    let j = i;
    while (j < chars.length && chars[i] === chars[j]) j++;
    chars[index++] = chars[i];
    const count = j - i;
    console.log("i", i, "j", j);
    if (count > 1) {
      for (let ch of count.toString()) {
        console.log("ch--", ch);
        chars[index++] = ch;
      }
    }
    console.log("chars", chars);
    i = j;
  }
  return index;
}

export function stringCompressionUtil() {
  const strArr = ["a", "a", "a", "a", "b", "b"];
  console.log("--> stringCompression", stringCompression(strArr));
}
