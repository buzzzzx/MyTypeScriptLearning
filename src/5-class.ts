class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number = 0) {
    console.log(`${this.name} move ${distance} m`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }

  move(distance: number = 10) {
    console.log("Sliterring...");
    super.move(distance);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }

  move(distance: number = 40) {
    console.log("Galloping...");
    super.move(distance);
  }

  speak() {
    console.log("mia heiheihei");
  }
}

let sam = new Snake("Sammy");
let tom: Animal = new Horse("Tommy");
sam.move();
tom.move(100);
// tom.speak(); // not allowed, tom is declared as Animal

// 在 TypeScript 中，类进行结构上的比较，有一个例外是对于 private 与 protected 的成员。
// 当一个成员是 private 或者 protected 时，它们必须来自同一个声明，才能被视为与另一个 private 或者 protected 的成员相同。
class A {
  private name: string = "aa";
}

class B {
  private name: string = "bb";
}

let a = new A();
let b = new B();
// a = b; // not allowed

// Access control 访问控制
class Person {
  private Address: string = "lala land";
  protected name: string;
  protected constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  protected department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  printDescription() {
    console.log(`My name is ${this.name}, work in ${this.department}`);
  }
}

// let remie = new Person("Remie"); // not allowed, constructor is protected
let derick = new Employee("Derick", "Sales");

let passcode = "1234567";
class User {
  private _fullName: string;

  constructor(name: string) {
    this._fullName = name;
  }

  get fullName() {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode === "123456") {
      this._fullName = newName;
    } else {
      console.log("Error: pass code not match, cannot modify fullname");
    }
  }
}

let john = new User("John");
john.fullName = "Josh";
console.log(john.fullName);

abstract class Department {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }

  abstract printMeets(): void;
}

class AccountingDepartment extends Department {
  constructor() {
    super("Acounting ad");
  }

  printMeets(): void {
    console.log("Acounting department meets at 10am");
  }

  printAccount() {
    console.log("llllllll");
  }
}

let account = new AccountingDepartment();
account.printMeets();

class Greeter {
  static standardGreeting: string = "Hello";

  greeting: string;
  constructor(greeting: string) {
    this.greeting = greeting;
  }

  greet() {
    console.log(Greeter.standardGreeting, this.greeting);
  }
}

let greeter: Greeter = new Greeter("hhhh");
greeter.greet();
// typeof Greeter is the static part of Greeter
let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "hey";
let greeter2: Greeter = new greeterMaker("xxxx");
greeter2.greet();

export {};
