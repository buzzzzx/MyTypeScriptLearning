interface LabelledValue {
  label: string;
}

function foo(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let labelledObj = {
  size: 10,
  label: "Size 10 labelled object",
};

console.log(foo(labelledObj));

interface Square {
  color: string;
  area: number;
}

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): Square {
  const newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }

  return newSquare;
}

let mySquare1 = createSquare({});
let mySquare2 = createSquare({ color: "peru" });
let mySquare3 = createSquare({ color: "peru", width: 20 });

interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 3; // not allowed

let a: number[] = [1, 2, 3, 4];
let roa: ReadonlyArray<number> = a;
// roa[0] = 10; // not allowed
console.log(roa[0]);
a[0] = 10;
console.log(roa[0]);
// a = roa; // not allowed, types are not matched
a = roa as number[];

// function
interface SearchFunc {
  (src: string, sub: string): boolean;
}

let searchFunction: SearchFunc = (src: string, sub: string) => {
  let res = src.search(sub);
  return res > -1;
};

// constructor interface

interface ClockInterface {
  tick(): void;
}

interface ClockContructor {
  new (hour: number, minute: number): ClockInterface;
}

class DigitalClock implements ClockInterface {
  constructor(hour: number, minute: number) {}

  tick() {
    console.log("beep beep");
  }
}

class AnalogClock implements ClockInterface {
  constructor(hour: number, minute: number) {}

  tick() {
    console.log("tik tok");
  }
}

function createClock(
  ctor: ClockContructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

let dc = createClock(DigitalClock, 12, 17);
let ac = createClock(AnalogClock, 13, 11);
console.log(dc.tick());
console.log(ac.tick());

// TypeScript interface can extend multiple interfaces
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

// 混合类型
// Couter is a function interface, and also has properties
interface Couter {
  (start: number): void;

  interval: number;
  reset(): void;
}

function createCouter(): Couter {
  let counter = function (start: number) {} as Couter;
  counter.interval = 10;
  counter.reset = function () {};
  return counter;
}

let counter = createCouter();
counter(10);
console.log(counter.interval);
counter.reset();

// interface extends class
class Control {
  private state: any;
}

interface Selectable extends Control {
  select(): void;
}

class Button extends Control implements Selectable {
  select() {}
}

// Not allowed, because Card not extends Control
// There is a private property state not in Card
// class Card implements Selectable {
//   select() {}
// }

export {};
