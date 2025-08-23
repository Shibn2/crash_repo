function findTheSingleNumber(arr) {
  let res = 0;
  for (const num of arr) {
    res ^= num;
  }
  return res;
}
export default function findTheSingleNumberUtil() {
  console.log(
    "Find the single number in : [4, 1, 2, 1, 2, 5, 5]",
    findTheSingleNumber([4, 1, 2, 1, 2, 5, 5])
  );
}
