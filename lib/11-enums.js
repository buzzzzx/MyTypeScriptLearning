"use strict";
/**
 * Enum members can also be types.
 * The variable which type is a enum member can only have value of that enum member
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var circle = {
    kind: ShapeKind.Circle,
    radius: 10,
};
// let square: Square = {
//   kind: ShapeKind.Circle, // Error! Type 'ShapeKind.Circle' is not assignable to type 'ShapeKind.Square'.
//   radius: 20,
// };
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[a]; // "A"
var nameofB = Enum[1]; // "B"
console.log(nameOfA, nameofB);
var a1 = Enum.A;
