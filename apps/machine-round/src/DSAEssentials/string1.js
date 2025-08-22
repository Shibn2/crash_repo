function checkAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = {};
  s.split("").forEach((ch) => {
    count[ch] = (count[ch] || 0) + 1;
  });
  for (let ch of t) {
    if (!count[ch]) return false;
    count[ch]--;
  }
  return true;
}

export function checkAnagramUtil() {
  const a = "listen";
  const b = "silent";
  console.log("---> checkAnagram", checkAnagram(a, b));
}
