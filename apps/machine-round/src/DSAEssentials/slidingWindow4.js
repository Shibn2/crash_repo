function minimumWindowSubstring(s, t) {
  if (t.length > s.length) {
    return -1;
  }

  let left = 0;
  let minStart = 0;
  const windowCharMap = {};
  let tMap = {};
  let minLen = Number.MAX_SAFE_INTEGER;
  let formed = 0;

  for (const key in t) {
    const ch = t[key];
    tMap[ch] = (tMap[ch] || 0) + 1;
  }
  const required = Object.keys(tMap).length;

  console.log("tMap", tMap);

  for (let right = left; right < s.length; right++) {
    const ch = s[right];
    windowCharMap[ch] = (windowCharMap[ch] || 0) + 1;
    if (tMap[ch] && windowCharMap[ch] === tMap[ch]) {
      formed++;
    }

    while (formed === required) {
      minLen = Math.min(minLen, right - left + 1);
      minStart = left;
      const leftChar = s[left];
      windowCharMap[leftChar]--;
      if (tMap[leftChar] && windowCharMap[leftChar] < tMap[leftChar]) {
        formed--;
      }
      left++;
    }
  }
  console.log("minStart", minStart, "minLen", minLen);
  return s.substring(minStart, minStart + minLen);
}

export default function minimumWindowSubstringUtil() {
  const s = "ADOBECODEBANC";
  const t = "ABC";
  console.log("Minimum window substing---->", minimumWindowSubstring(s, t));
}
