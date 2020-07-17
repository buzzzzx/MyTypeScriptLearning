"use strict";
var x = [1, 2, null]; // x: (number | null)[]
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var a = new Animal();
console.log(a.numLegs);
