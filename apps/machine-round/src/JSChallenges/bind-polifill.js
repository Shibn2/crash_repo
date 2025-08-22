function displayName() {
  console.log(`This is ${this.name}`);
}

const context1 = {
  name: "Shibinlal",
};

Function.prototype.bindpoli = function (context) {
  const method = this;

  const methodKey = Symbol();

  const updatedContext = {
    ...context,
    methodKey: method,
  };
  return function () {
    updatedContext.methodKey(...arguments);
  };
};

export function bindPolifillUtil() {
  const displayFn = displayName.bindpoli(context1);
  console.log("====> bindPolifillOut", displayFn());
}
