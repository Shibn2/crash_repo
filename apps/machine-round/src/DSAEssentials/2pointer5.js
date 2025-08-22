function reverseArray(arr) {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++;
    r--;
  }
  return arr;
}

export default function reverseArrayUtil() {
  const a1 = ["s", "h", "i", "b", "i", "n"];
  console.log("Reverse array:", reverseArray(a1));
}
