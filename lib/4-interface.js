"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
function createCouter() {
    var counter = function (start) { };
    counter.interval = 10;
    counter.reset = function () { };
    return counter;
}
var counter = createCouter();
counter(10);
console.log(counter.interval);
counter.reset();
// interface extends class
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
