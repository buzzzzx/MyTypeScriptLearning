function identity<T>(args: T): T {
  return args;
}

let o1 = identity<string>("my string1");
let o2 = identity("my string2");

interface IdentityFn<T> {
  (args: T): T;
}

let myIdentity: IdentityFn<number> = identity;

// class GenericNumber<T> {
//   x: T;
//   add: (x: T, y: T) => T;
// }

// let myNumber = new GenericNumber<number>();
// myNumber.x = 12;
// myNumber.add = function (x: number, y: number) {
//   return x + y;
// };

// let stringNumeric = new GenericNumber<string>();
// stringNumeric.x = "12";
// stringNumeric.add = function (x: string, y: string) {
//   return x + " " + y;
// };

interface Lengthwise {
  length: number;
}

function loggingStuff<T extends Lengthwise>(args: T): T {
  console.log(args.length);
  return args;
}

loggingStuff({ length: 1 });
loggingStuff("hahah");

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let obj = {
  a: 1,
  b: 2,
  c: 3,
};

getProperty(obj, "a");
// getProperty(obj, "m") // not allowed

class BeeKeeper {
  hasMask: boolean = true;
}

class LionKeeper {
  isAlive: boolean = true;
}

class Animal {
  name: string = "Animal";
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: LionKeeper = new LionKeeper();
}

function createInstance<T extends Animal>(ctor: new () => T): T {
  return new ctor();
}

createInstance(Bee).keeper.hasMask;
createInstance(Lion).keeper.isAlive;

export {};
