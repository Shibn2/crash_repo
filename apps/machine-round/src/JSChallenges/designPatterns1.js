// 1. CREATIONAL PATTERN.
// 1.1 Singleton pattern

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

class Normal {
  constructor() {}
  displayMessage() {
    console.log("Normal class");
  }
}

export function singletonPatternStudy() {
  const sInst1 = new Singleton();
  const sInst2 = new Singleton();

  console.log("Is sigleton", sInst1 === sInst2);

  const nInst1 = new Normal();
  const nInst2 = new Normal();

  console.log("Is sigletone", nInst1 === nInst2);
}
