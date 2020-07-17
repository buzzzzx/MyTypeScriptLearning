enum Color {
  red = 1,
  green,
  blue,
}

let r: Color = Color.red;
let colorName: string = Color[2];

let notSure: any[] = [1, "sda", true];

function greet(): void {
  console.log("hello");
}

let num: number = 2;

// This is allowed when strickNullChecks is false.
// null and undefined are subtype of any types, so they can assigned to any types.
// num = null;
// num = undefined;

// never: never returns: 1. throw an error; 2. infinite loop.
function throwError(): never {
  throw new Error("Ooooops, Error");
}

function infiniteLoop(): never {
  while (true) {
    // ...
  }
}

let str: any = "this is a string";
let strLength: number = (str as string).length;

// tuple
let t: [string, number] = ["hello", 200];
// t[1] = ["dd"]; // not allowed

export {};
