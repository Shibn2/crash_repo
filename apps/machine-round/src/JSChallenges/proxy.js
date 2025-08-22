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
