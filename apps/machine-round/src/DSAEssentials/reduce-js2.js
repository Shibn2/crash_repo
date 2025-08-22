function intersectionOfArray(list) {
  return list.reduce((acc, curr) => acc.filter((val) => curr.includes(val)));
}

export default function intersectionOfArrayUtil() {
  const arrayList = [
    ["A", "QW", "C", "123", "@#ASD", "@1"],
    ["A", "QW", "W", "@1"],
    ["QW", "123", "@#ASD", "@1"],
    ["A", "QW", "C", "123", "B", "FGH", "@1"],
  ];

  console.log("intersectionOfArray------>", intersectionOfArray(arrayList));
}
