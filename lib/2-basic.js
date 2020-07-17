"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 3] = "blue";
})(Color || (Color = {}));
var r = Color.red;
var colorName = Color[2];
var notSure = [1, "sda", true];
function greet() {
    console.log("hello");
}
var num = 2;
// This is allowed when strickNullChecks is false.
// null and undefined are subtype of any types, so they can assigned to any types.
// num = null;
// num = undefined;
// never: never returns: 1. throw an error; 2. infinite loop.
function throwError() {
    throw new Error("Ooooops, Error");
}
function infiniteLoop() {
    while (true) {
        // ...
    }
}
var str = "this is a string";
var strLength = str.length;
// tuple
var t = ["hello", 200];
