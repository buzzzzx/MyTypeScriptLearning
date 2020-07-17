// 交叉类型
function extend<T extends {}, U extends {}>(first: T, second: U): T & U {
  let result = {} as T & U;

  for (let id in first) {
    result[id] = first[id] as any;
  }

  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      result[id] = second[id] as any;
    }
  }

  return result;
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

interface Loggable {
  log(): void;
}

class ConsoleLog implements Loggable {
  log() {}
}

let jim = extend(new Person("jimmy"), new ConsoleLog());
jim.log();
console.log(jim.name);

// 联合类型
function padLeft(value: string, padding: number | string) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  } else {
    return padding + value;
  }
}

padLeft("haha", 6);
padLeft("haha", "llllll");
// padLeft("haha", true); // not allowed

interface Bird {
  fly(): void;
  layEgg(): void;
}

interface Fish {
  swim(): void;
  layEgg(): void;
}

function sillyOne(): Fish | Bird {
  return {
    layEgg(): void {
      console.log("lay an egg");
    },
  } as Fish | Bird;
}

let silly = sillyOne();
silly.layEgg();

// 类型保护: 一旦通过类型检查，就能在之后的每个分支里清楚地知道参数的类型
//   - 自定义类型保护
//   - typeof
//   - instanceof

// 自定义类型保护：类型谓词，parameterName is Type
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function isBird(pet: Fish | Bird): pet is Bird {
  return (pet as Bird).fly !== undefined;
}

// typeof
function isNumber(x: any): x is number {
  return typeof x === "number";
}

// instanceof
class MyBird implements Bird {
  fly() {
    console.log("Bird flying");
  }

  layEgg() {
    console.log("Bird laying an egg");
  }
}

class MyFish implements Fish {
  swim() {
    console.log("Fish swiming");
  }

  layEgg() {
    console.log("Fish laying an egg");
  }
}

function getRandomPet(): Fish | Bird {
  return Math.random() > 0.5 ? new MyFish() : new MyFish();
}

let pet = getRandomPet();

if (pet instanceof MyBird) {
  pet.fly();
}
if (pet instanceof MyFish) {
  pet.swim();
}

// null
let s = "a string";
// s = null; // --strictNullChecks

// 使用了 --strictNullChecks，可选参数会被自动地加上 | undefined
function f(x: number, y?: number) {
  return x + (y || 0);
}
f(1, 2);
f(1);
f(1, undefined);
// f(1, null) // error, 'null' 不能赋值给 'number | undefined'

// null&undefined 类型断言
function foo(name: string | null) {
  function printName() {
    return "hello" + name!.charAt(0);
  }
  name = name || "Bob";
  return printName();
}
