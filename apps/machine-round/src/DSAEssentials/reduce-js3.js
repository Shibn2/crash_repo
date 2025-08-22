function flatArray(arr) {
  return arr.reduce((acc, curr) => {
    let updated;
    console.log("curr", curr);
    if (Array.isArray(curr)) {
      updated = [...acc, ...flatArray(curr)];
    } else {
      updated = [...acc, curr];
    }
    return updated;
  }, []);
}

export default function flatArrayUtil() {
  const a1 = [1, [2, 3, 4, [5, 6, [7]]]];
  console.log("Flat array:", flatArray(a1));
}
