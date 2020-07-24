/**
 * Enum members can also be types.
 * The variable which type is a enum member can only have value of that enum member
 */

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  radius: number;
}

let circle: Circle = {
  kind: ShapeKind.Circle,
  radius: 10,
};

// let square: Square = {
//   kind: ShapeKind.Circle, // Error! Type 'ShapeKind.Circle' is not assignable to type 'ShapeKind.Square'.
//   radius: 20,
// };

enum Enum {
  A,
  B,
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
let nameofB = Enum[1]; // "B"
console.log(nameOfA, nameofB);

let a1: number = Enum.A;

export {};
