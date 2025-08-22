function squashObject(obj) {
  const out = {};
  function normaliser(value, parentKey = "") {
    for (const key in value) {
      const updatedKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof value[key] !== "object") {
        out[updatedKey] = value[key];
      } else {
        normaliser(value[key], updatedKey);
      }
    }
  }

  normaliser(obj);
  return out;
}

export default function squashObjectUtil() {
  const object = {
    a: 5,
    b: 6,
    c: {
      f: 9,
      g: {
        m: 17,
        n: 3,
      },
    },
  };

  console.log("Squash object-->", squashObject(object)); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }
}
