const objectNormalisation = (obj, out = "{ ") => {
  for (const key in obj) {
    console.log("key->", key, "typeof obj[key]", typeof obj[key]);
    if (key && typeof obj[key] === "object") {
      return objectNormalisation(obj[key], out);
    } else {
      out += `${key}: ${obj[key]}`;
    }
    out += ",";
  }
  return `${out} }`;
};

function objectNormalisationUtil() {
  const obj = {
    name: "shibin",
    age: 33,
    job: { role: "SDE3", company: "Agoda" },
  };
  console.log(objectNormalisation(obj));
}

export default objectNormalisationUtil;
