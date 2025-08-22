function romanToNumber(num) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let out = 0;
  let idx = 0;

  while (idx < num.length) {
    // console.log("romanNumerals[num[idx]]", romanNumerals[num[idx]]);
    if (romanNumerals[num[idx]] < romanNumerals[num[idx + 1]]) {
      out -= romanNumerals[num[idx]];
    } else {
      out += romanNumerals[num[idx]];
    }
    idx++;
  }
  return out;
}

function romanToNumberUtil() {
  const rommanNumber = "XII";
  console.log(romanToNumber(rommanNumber));
  console.log(romanToNumber("III")); // 3
  console.log(romanToNumber("IV")); // 4
  console.log(romanToNumber("IX")); // 9
  console.log(romanToNumber("LVIII")); // 58
  console.log(romanToNumber("MCMXCIV")); // 1994
}

export default romanToNumberUtil;
