function arrayFlatten(arr, out = []) {
  for (const val of arr) {
    if (Array.isArray(val)) {
      arrayFlatten(val, out);
    } else {
      out.push(val);
    }
  }
  return out;
}

function arrayFlattenUtil() {
  const a1 = [1, 2, [12, 34, 0], [1], [[100], 5, 600]];
  console.log("====>", arrayFlatten(a1));
  const obj = {
    name: "shibin",
    age: 33,
    job: { role: "SDE3", company: "Agoda" },
  };
  console.log(objectNormalisation(obj));
}

export default arrayFlattenUtil;
