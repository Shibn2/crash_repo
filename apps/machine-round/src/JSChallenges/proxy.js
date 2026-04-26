const Employee = {
  name: "Shibin",
  Age: 34,
  job: "SDE3",
};

const handler = {
  set(target, property, value) {
    console.log("Set proxy----");
    target[property] = value;
    return true;
  },
  get(target, property) {
    console.log("Get proxy----");
    return target[property];
  },
};

export function proxyUtil() {
  const employeeProxy = new Proxy(Employee, handler);

  console.log("1:", employeeProxy.name);
  employeeProxy.Age = 35;
}

const user = { name: "Shibin", age: 34 };

const proxy = new Proxy(user, {
  get(target, prop, receiver) {
    console.log("get ->", prop);
    // Correctly forwards including getters on prototypes (via receiver)
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    if (prop === "age" && value < 0) {
      throw new RangeError("age must be >= 0");
    }
    // Returns boolean; respects writability/configurability
    return Reflect.set(target, prop, value, receiver);
  },
  has(target, prop) {
    console.log("has ->", prop);
    return Reflect.has(target, prop);
  },
  deleteProperty(target, prop) {
    return Reflect.deleteProperty(target, prop);
  },
  ownKeys(target) {
    return Reflect.ownKeys(target); // includes symbols
  },
  defineProperty(target, prop, desc) {
    return Reflect.defineProperty(target, prop, desc); // boolean
  },
  getOwnPropertyDescriptor(target, prop) {
    return Reflect.getOwnPropertyDescriptor(target, prop);
  },
});

export function proxyUtil2() {
  proxy.age = 35; // OK
  console.log("name" in proxy); // logs, then true
  delete proxy.name; // logs, then true (if configurable)
}
