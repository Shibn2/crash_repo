function curryN(func) {
  const argList = [];
  return function curryUtil(arg, argList = []) {
    if (argList.length === func.length - 1) {
      return func.apply(this, [...argList, arg]);
    }
    return (newArg) => curryUtil(newArg, [...argList, arg]);
  };
}

function curryN2(func) {
  return function curried(...args) {
    if (args.length === func.length) {
      return func.apply(this, args);
    }
    return (...args2) => curried.apply(this, [...args, ...args2]);
  };
}

export default function curryN3(func) {
  return function curryUtil(...args) {
    const fn = func.bind(this, ...args);

    fn[Symbol.toPrimitive] = () => func.apply(this, args);
    return fn;
  };
}

export function currNUtil() {
  const multiplyByThreeNumbers = (a, b, c) => {
    return a * b * c;
  };

  const curriedMultipleFunc = curryN(multiplyByThreeNumbers);
  console.log(
    "Curried multiplication of three numbers using curryN curriedMultipleFunc(6)(5)(4)",
    curriedMultipleFunc(6)(5)(4)
  );
}

export function currN2Util() {
  const multiplyByThreeNumbers = (a, b, c) => {
    return a * b * c;
  };

  const curriedMultipleFunc = curryN2(multiplyByThreeNumbers);
  console.log(
    "Curried multiplication of three numbers using curryN2 curriedMultipleFunc(6, 5)(4)",
    curriedMultipleFunc(6, 5)(4)
  );
}

export function currN3Util() {
  function multiply(...numbers) {
    return numbers.reduce((a, b) => a * b, 1);
  }

  const curried = curryN3(multiply);
  console.log("curryN3 curried-->", curried);
  console.log("curryN3 curried()-->", +curried(2, 4, 5, 6)(3));
}
