function round1UtilityFile2() {
  // let count = 0;
  // (function immediate() {
  //   if (count === 0) {
  //     let count = 1;
  //     console.log("1", count); // What is logged?
  //   }
  //   console.log("2", count); // What is logged?
  // })();
  // //-------------------------------//
  // for (var i = 0; i < 3; i++) {
  //   setTimeout(function log() {
  //     console.log(i); //  What is logged?
  //   }, 1000);
  // }
  // work arounds
  // for (let i = 0; i < 3; i++) {
  //   setTimeout(() => {
  //     console.log(i); // What is loged?
  //   }, 1000);
  // }
  // for (var i = 0; i < 3; i++) {
  //   (function (i) {
  //     setTimeout(() => {
  //       console.log(i); // What is loged?
  //     }, 1000);
  //   })(i);
  // }
  // for (var i = 0; i < 3; i++) {
  //   setTimeout(
  //     (i) => {
  //       console.log(i); // What is loged?
  //     },
  //     1000,
  //     i
  //   );
  // }
  // for (var i = 0; i < 3; i++) {
  //   {
  //     let j = i;
  //     setTimeout(() => {
  //       console.log(j); // What is loged?
  //     }, 1000);
  //   }
  // }
  // //--------------------------------//
  // function createIncrement() {
  //   let count = 0;
  //   function increment() {
  //     count++;
  //   }
  //   function log() {
  //     var message = `Count is  ${count}`;
  //     console.log(message);
  //   }
  //   return [increment, log];
  // }
  // const [increment, log] = createIncrement();
  // increment();
  // increment();
  // increment();
  // log(); // What is logged?
  // //--------------------------------------//
  // let obj = {
  //   a:1,
  //   b: () => {
  //     console.log('this is inside b ', this.a);
  //   },
  // }
  // obj.b();
  // //----------------------------//
  // var status = "x";
  // var status = "v";
  // function outer() {
  //   var status = "u";
  //   console.log("1", this.status); //
  //   function test() {
  //     console.log("2", this.status, status);
  //     var status = "y";
  //     console.log("3", status); //
  //     const data = {
  //       status: "z",
  //       getStatus: () => {
  //         return this.status;
  //       },
  //     };
  //     console.log("4", data.getStatus()); //
  //     console.log("5", data.getStatus.call(this)); //
  //   }
  //   test.call(this);
  // }
  // const obj1 = {
  //   status: "w",
  // };
  // outer.call(obj1);
  // console.log("6-", status); //
  //------------------------------------------------------//
  // const a1 = [1,2,3,4];
  // for(let item in a1){
  //   console.log('item', item);
  // }
  //-----------------------------------------------------//
  // function createStack() {
  //   const items = [];
  //   return {
  //     push(item) {
  //       items.push(item);
  //     },
  //     pop() {
  //       return items.pop();
  //     },
  //     displayItems: function () {
  //       console.log("this.item", this.items);
  //     },
  //     displayLocalItem: function () {
  //       console.log("Local items", items);
  //     },
  //   };
  // }
  // const stack = createStack();
  // stack.push(555);
  // stack.push(5555);
  // stack.pop(); //
  // stack.items; //
  // stack.items = [10, 100, 1000];
  // console.dir(stack);
  // console.log("stack", stack.items);
  // console.log("displayItems", stack.displayItems());
  // console.log("displayLocalItem", stack.displayLocalItem());
  // console.log(stack.pop());
  //---------------------------------------//
  // const arr = [10,12,15,21];
  // for(var i=0; i<=4; i++) {
  //   setTimeout(()=>{
  //     console.log('index', i, 'e lement', arr[i])
  //   }, 3000)
  // }
  //--------------------------------------//
  // for (var i = 0; i <= 4; i++) {
  //   setTimeout(function log() {
  //     console.log(i); //  What is logged?
  //   }, 1000);
  // }
  //---------------------------------------//
  // class study
  // class Parent{
  //   #privteField1
  //   constructor(name){
  //     this.name = name;
  //     this.#privteField1 = name;
  //   }
  //   //public field
  //   publicMethod(){
  //     console.log('the name is ', this.name);
  //   }
  //   #privateMethod(){
  //     consle.log('this is private method');
  //   }
  //   set name(value){
  //     this._name = value;
  //   }
  //   get name(){
  //     return this._name;
  //   }
  // }
  //------------------------------------//
  // const p1 = new Parent('Shibin I');
  // console.dir(Parent);
  // console.dir(p1);
  // p1.publicMethod();
  // class SubClass extends Parent{
  //   #subClassPrivateField
  //   constructor(name, privateFieldSub){
  //     super(name);
  //     this.#subClassPrivateField = privateFieldSub;
  //   }
  //   childLog(){
  //     console.log("display name in child ",this.name);
  //   }
  // }
  // const child = new SubClass('hima', 'shibin');
  // child.childLog()
  // console.dir(SubClass);
  // console.dir(child);
  //---------------------//
  // console.log('0', b);
  // function foo(){
  //   let a = b = 5;
  //   a++;
  //   console.log('1',a)//
  //   return a;
  // }
  // let obj = {
  //   b: 100
  // }
  // foo.call(obj);
  // console.log('2 ',typeof a); //
  // console.log('3',typeof b);
  // console.log('4', this.b);
  //-------------------------------//
  // const arr1 = [1,2,3,4];
  // arr1.length = 3;
  // console.log(arr1[0], arr1);
  //-------------------------------//
  // const length = 4;
  // const numbers = []
  // for(var i=0; i<length; i++);{
  //   numbers.push(i+1);
  // }
  // console.log(numbers);
  // -------------------------------- //
  // let i;
  // //console.log('1',aaa);
  // function test() {
  //   const q = 0;
  //   console.log("2", aaa);
  //   for (var aaa = 0; aaa <= 5; aaa++) {
  //     const x = 9;
  //     const log = () => {
  //       console.dir(log);
  //       console.log("3", aaa, this);
  //     };
  //     bbb = 555;
  //     setTimeout(() => {
  //       aaa = 900;
  //     }, 500);
  //     // const bindFunc = log.bind(this);
  //     setTimeout(log, 1000);
  //   }
  //   console.log("4", aaa);
  // }
  // setTimeout(() => {
  //   bbbb = 900;
  // }, 500);
  // ccc = 9876;
  // //var aaa = 999;
  // //setTimeout(console.log('4', aaa), 2000);
  // let obj = {
  //   aaa: 666,
  // };
  // //test.call(obj);
  // test();
  //------------------------------- //
  // console.log("1", myVar); //
  // console.log("2", myConst); //
  // var myVar = 10;
  // var myConst = 20;
  // function outerFun() {
  //   var myVar = 33;
  //   console.log("3", myVar); //
  //   (() => {
  //     console.log("4 ", this.myVar); //
  //   })();
  // }
  // outerFun();
  // -------------------------------//
  // let obj1 = {
  //   a: "outeronj1",
  // };
  // function test() {
  //   (() => {
  //     console.log("1", this, this.a);
  //   })();
  //   const a = () => {
  //     console.log("2", this.a);
  //   };
  //   function b() {
  //     console.log("3", this, this.a);
  //   }
  //   // function x() {
  //   //   console.log("3", this, this.a);
  //   // }
  //   // x();
  //   a();
  //   b();
  // }
  // // test();
  // test.call(obj1);
  //----------------------//
  // console.log("1", x);
  // console.log("2", x());
  // var x = 100;
  // var x = 200;
  // console.log("3", x);
  // function x() {
  //   console.log("function xxxxxx");
  // }
  // console.log("4", x);
  //----------------------//
  //   x(10, 2);
  //   function x() {
  //     console.log("x1");
  //   }
  //   x(22, 2);
  //   function x(a, b) {
  //     console.log("x2");
  //   }
  //   x(12, 2);
  //   function x(a) {
  //     console.log("x3 ", a);
  //   }
  //   x(1, 2);
  //   function outerFn() {
  //     var x = 10;
  //     console.log("inside outerFn", x);
  //   }
  //   outerFn();
  //-------------------------//
  //   greeting();
  //   function greeting(x) {
  //     console.log("1", x);
  //   }
  //   greeting();
  //   function greeting(x1, x2) {
  //     console.log("2", x1, x2);
  //   }
  //   greeting();
  //   var greeting = function (a) {
  //     console.log("3", a);
  //   };
  //   greeting("shibin");
  //-----------------------------//
  // var variable = 10;
  // (() => {
  //   console.log("1", variable);
  //   var variable = 20;
  //   console.log("2", variable);
  // })();
  // console.log("3", variable);
  // var variable = 30;
  // console.log("4", variable);
  //----------------------------//
  // function testFunA() {
  //   var avar = "111";
  //   testFunB();
  // }
  // function testFunB() {
  //   dvar = 900;
  //   cvar = 90;
  //   var cvar;
  //   var bvar = "222 ";
  //   console.log("1", avar); //
  //   (() => {
  //     bvar = "insideb 2 ";
  //   })();
  //   console.log("7", bvar);
  //   bvar = "888";
  //   (function () {
  //     console.log("2", this, bvar); //
  //   })();
  //   function x() {
  //     console.log("6", bvar); //
  //   }
  //   x();
  //   console.log("5", cvar); //
  // }
  // var avar = "333";
  // var bvar = "444";
  // testFunA();
  // console.log("3 ", bvar); //
  // console.log("4", cvar); //
  // console.log("8", dvar);
  //-----------------------------------------//
  // var variable = 10;
  // function test() {
  //   (() => {
  //     variable_35 = 35;
  //     console.log("1 ", variable_35); //1 35
  //     var variable_35 = 45;
  //     variable_2 = 15;
  //     console.log("2 ", variable); //2 10
  //   })();
  // }
  // test();
  // console.log("3", variable_2); // 3
  // console.log("4", variable_35); // reference error not defined
  // var variable = 30;
  //------------------------//
  // for (var i = 0; i < 5; i++) {
  //   ((i) => {
  //     setTimeout(function () {
  //       console.log("i", i);
  //     }, 1000);
  //   })(i);
  // }
  //------------------//
  // function prod(a, b) {
  //   if (a && b) {
  //     return a * b;
  //   }
  //   return function (sec) {
  //     return a * sec;
  //   };
  // }
  // console.log(prod(5, 4), prod(5)(4));
  //----------------------------------//
  // class Dog {
  //   constructor() {
  //     this.sound = "woof";
  //   }
  //   talk() {
  //     console.log(this);
  //   }
  // }
  // const ndog = new Dog();
  // console.log(ndog.talk);
  // setTimeout(ndog.talk, 1000);
  // let str = "aaa";
  // if (Number(str) !== NaN) {
  //   console.log("Not a number");
  // }
  // functionA();
  // function functionA() {
  //   console.log("function A");
  //   functionB();
  // }
  // function functionB() {
  //   console.log("function B.");
  // }
  // let globalThis;
  // console.log("globalThis", globalThis);
  // function testFn() {
  //   let fnLet;
  //   console.log(fnLet);
  // }
  // testFn();
}
function roundOne2Utility() {
  //   (function () {
  //     console.log("IIFE");
  //     console.log(1);
  //     setTimeout(() => console.log(2), 1000);
  //     setTimeout((() => console.log(3))(), 3000);
  //     console.log(4);
  //   })();
}

export { roundOne2Utility, round1UtilityFile2 };
