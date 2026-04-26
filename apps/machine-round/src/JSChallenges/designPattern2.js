// Observer pattern

class Subject {
  constructor() {
    this.subscribers = [];
  }

  addObserver(subscriber) {
    this.subscribers.push(subscriber);
  }

  removeObserver(subscriber) {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  }
  notifyObserver(info) {
    this.subscribers.forEach((sub) => sub.update(info));
  }
}

class Observer {
  constructor() {}

  update(data) {
    console.log("Data received", data);
  }
}

export function observerPatternStudy() {
  const subject = new Subject();

  const observer1 = new Observer("Observer 1");
  const observer2 = new Observer("Observer 2");
  const observer3 = new Observer("Observer 3");

  subject.addObserver(observer1);
  subject.addObserver(observer2);
  subject.addObserver(observer3);

  subject.notifyObserver("Hello, observers!");

  subject.removeObserver(observer2);

  subject.notifyObserver("Observer 2 removed.");
}
