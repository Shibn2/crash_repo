function numberToRoman(num) {
  const romanMap = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";
  let targetNum = num;
  for (const romData of romanMap) {
    if (romData.value <= targetNum) {
      const symbolCount = Math.floor(targetNum / romData.value);
      result += romData.symbol.repeat(symbolCount);
      targetNum = targetNum % romData.value;
    }
  }
  return result;
}

export default function numberToRomanUtil() {
  console.log("Convert number to roman - 34", numberToRoman(34));
  console.log("Convert number to roman - 110", numberToRoman(110));
  console.log("Convert number to roman - 15", numberToRoman(15));
}
