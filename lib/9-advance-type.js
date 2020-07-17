"use strict";
// 交叉类型
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLog = /** @class */ (function () {
    function ConsoleLog() {
    }
    ConsoleLog.prototype.log = function () { };
    return ConsoleLog;
}());
var jim = extend(new Person("jimmy"), new ConsoleLog());
jim.log();
console.log(jim.name);
// 联合类型
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    else {
        return padding + value;
    }
}
padLeft("haha", 6);
padLeft("haha", "llllll");
function sillyOne() {
    return {
        layEgg: function () {
            console.log("lay an egg");
        },
    };
}
var silly = sillyOne();
silly.layEgg();
// 类型保护: 一旦通过类型检查，就能在之后的每个分支里清楚地知道参数的类型
//   - 自定义类型保护
//   - typeof
//   - instanceof
// 自定义类型保护：类型谓词，parameterName is Type
function isFish(pet) {
    return pet.swim !== undefined;
}
function isBird(pet) {
    return pet.fly !== undefined;
}
// typeof
function isNumber(x) {
    return typeof x === "number";
}
// instanceof
var MyBird = /** @class */ (function () {
    function MyBird() {
    }
    MyBird.prototype.fly = function () {
        console.log("Bird flying");
    };
    MyBird.prototype.layEgg = function () {
        console.log("Bird laying an egg");
    };
    return MyBird;
}());
var MyFish = /** @class */ (function () {
    function MyFish() {
    }
    MyFish.prototype.swim = function () {
        console.log("Fish swiming");
    };
    MyFish.prototype.layEgg = function () {
        console.log("Fish laying an egg");
    };
    return MyFish;
}());
function getRandomPet() {
    return Math.random() > 0.5 ? new MyFish() : new MyFish();
}
var pet = getRandomPet();
if (pet instanceof MyBird) {
    pet.fly();
}
if (pet instanceof MyFish) {
    pet.swim();
}
// null
var s = "a string";
// s = null; // --strictNullChecks
// 使用了 --strictNullChecks，可选参数会被自动地加上 | undefined
function f(x, y) {
    return x + (y || 0);
}
f(1, 2);
f(1);
f(1, undefined);
// f(1, null) // error, 'null' 不能赋值给 'number | undefined'
// null&undefined 类型断言
function foo(name) {
    function printName() {
        return "hello" + name;
    }
    name = name || "Bob";
    return printName();
}
