function firstRoundScope() {
  (function () {
    let x = (y = 5);
  })();
  console.log("Tyepof x", typeof x);
  console.log("Tyepof y", typeof y);
}

function firstRoundColsure() {
  function countBitsUtil() {
    let count = 0;
    return {
      inc: () => ++count,
      dec: () => --count,
    };
  }
  const count1 = countBitsUtil();
  const count2 = countBitsUtil();
  console.log("Count 1 inc", count1.inc());
  console.log("Count 2 inc", count2.dec());
}

export default function firstRoundClosureUtil() {
  console.log("1 --> ", firstRoundColsure());
  console.log("2 -->", firstRoundScope());
}
