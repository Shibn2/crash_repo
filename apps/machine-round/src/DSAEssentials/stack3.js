function dailyTemperature(temperatures) {
  const n = temperatures.length;
  const res = Array(n).fill(0);
  const stack = []; // stores indices

  console.log("Temperatures:", temperatures);
  console.log("Temperatures:", Object.keys(temperatures));
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack.at(-1)]) {
      stack.pop();
    }
    if (stack.length > 0) {
      res[i] = stack.at(-1) - i;
    }
    stack.push(i);
  }

  return res;
}

export default function dailyTemperatureUtil() {
  const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]; // [1, 1, 4, 2, 1, 1, 0, 0]

  console.log("Daily temperature ---->", dailyTemperature(temperatures));
}
