function deepCloneUtility() {
  const person = {
    name: "Shibin",
    job: {
      role: "Senior associate experience technology L1",
      company: "publicis sapient",
      location: "Bangalore",
    },
    languages: ["English", "Hindi", "Malayalam"],
  };

  const clonedPerson = { ...person };
  clonedPerson.job.role = "Senior associate experience technology L0";
  console.log("3", clonedPerson);
  const clonedPerson2 = JSON.parse(JSON.stringify(person));
  clonedPerson2.job.role = "Senior associate experience technology L2";
  console.log("3", clonedPerson2);
  const clonedPerson3 = structuredClone(person);
  clonedPerson3.job.role = "Senior associate experience technology L3";
  console.log("3", clonedPerson3);
}

export default deepCloneUtility;
