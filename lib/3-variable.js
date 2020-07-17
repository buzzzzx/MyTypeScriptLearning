"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
for (var i = 0; i < 10; i += 1) {
    (function (i) {
        setTimeout(function cb() {
            console.log(i);
        });
    })(i);
}
var _loop_1 = function (i_1) {
    setTimeout(function cb() {
        console.log(i_1);
    });
};
// every iteration will create a new lexial scope
for (var i_1 = 0; i_1 < 10; i_1 += 1) {
    _loop_1(i_1);
}
// a++; // 暂时性死区
var a = 2;
var Me = {
    name: "Remie",
    age: 23,
};
function foo(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    console.log(a, b);
}
foo();
foo({ a: "hh" });
foo({ a: "xx", b: 20 });
