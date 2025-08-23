function numberToRoman(num) {
  const romanMap = [
    { value: 1000, rsymbol: "M" },
    { value: 900, rsymbol: "CM" },
    { value: 500, rsymbol: "D" },
    { value: 400, rsymbol: "CD" },
    { value: 100, rsymbol: "C" },
    { value: 90, rsymbol: "XC" },
    { value: 50, rsymbol: "L" },
    { value: 40, rsymbol: "XL" },
    { value: 10, rsymbol: "X" },
    { value: 9, rsymbol: "IX" },
    { value: 5, rsymbol: "V" },
    { value: 4, rsymbol: "IV" },
    { value: 1, rsymbol: "I" },
  ];

  let result = "";
  let targetNum = num;
  for (const { value, rsymbol } of romanMap) {
    if (value <= targetNum) {
      const rsymbolCount = Math.floor(targetNum / value);
      result += rsymbol.repeat(rsymbolCount);
      targetNum = targetNum % value;
    }
  }
  return result;
}

export default function numberToRomanUtil() {
  console.log("Convert number to roman - 34", numberToRoman(34));
  console.log("Convert number to roman - 110", numberToRoman(110));
  console.log("Convert number to roman - 15", numberToRoman(15));
}
