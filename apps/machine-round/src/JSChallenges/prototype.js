class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
  }
  speak(...langs) {
    console.log("Speaks ", ...langs);
  }
  static walks() {
    console.log("Person cna walks");
  }
}

class Employee extends Person {
  constructor(name, age, job, skills) {
    super(name, age);
    this.job = job;
    this.skills = skills;
  }
  expertise() {
    console.log("Skilled in ", this.skills);
  }
}

function Person2(name, age) {
  this.name = name;
  this.age = age;
  function speak(...langs) {
    console.log("Speaks ", ...langs);
  }
}

Person2.walks = function () {
  console.log("Person can walks");
};

function Employee2(name, age, job, skills) {
  Person2.call(this, name, age);
  this.job = job;
  this.skills = skills;
  function expertise() {
    console.log("Skilled in ", this.skills);
  }
}

Employee2.prototype = Object.create(Person2);
Employee2.prototype.contructor = Employee2;

export function inheritanceUtil() {
  console.log("Parent class, Person", Person);
  const person1 = new Person("Shibin", 34);
  console.log("Object from parent class person1", person1);

  const emp1 = new Employee("Shibin", 34, "SDE3");
  console.log("Employee object emp1", emp1);

  const person2 = new Person2("Shibinlal", 34);
  console.log("Person2 object person2", person2);

  const emp2 = new Employee2("Shibinlal", 34, "SDE", "JS, HTML, CSS");
  console.log("Employee2 object, emp2", emp2);
}
