"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function foo(labelledObj) {
    console.log(labelledObj.label);
}
var labelledObj = {
    size: 10,
    label: "Size 10 labelled object",
};
console.log(foo(labelledObj));
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare1 = createSquare({});
var mySquare2 = createSquare({ color: "peru" });
var mySquare3 = createSquare({ color: "peru", width: 20 });
var p1 = { x: 10, y: 20 };
// p1.x = 3; // not allowed
var a = [1, 2, 3, 4];
var roa = a;
// roa[0] = 10; // not allowed
console.log(roa[0]);
a[0] = 10;
console.log(roa[0]);
// a = roa; // not allowed, types are not matched
a = roa;
var searchFunction = function (src, sub) {
    var res = src.search(sub);
    return res > -1;
};
var DigitalClock = /** @class */ (function () {
    function DigitalClock(hour, minute) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(hour, minute) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tik tok");
    };
    return AnalogClock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var dc = createClock(DigitalClock, 12, 17);
var ac = createClock(AnalogClock, 13, 11);
console.log(dc.tick());
console.log(ac.tick());
