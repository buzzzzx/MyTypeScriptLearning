"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var remie = {
    register: function (name, age) {
        console.log(name);
    },
};
var rowan = {
    register: function () {
        console.log("it's ok");
    },
};
var outsideCancel;
var executor = function (canceler) {
    outsideCancel = canceler;
};
executor(function (message) {
    console.log(message);
});
outsideCancel();
// rest parameters and optional parameters
var foo = function (x, y) { };
var bar = function (x, y) { };
var baz = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
};
// 固定参数兼容可选参数和剩余参数
foo = bar;
foo = baz;
// 可选参数不兼容固定参数和剩余参数
// bar = foo; // not allowed, Type 'number | undefined' is not assignable to type 'number'
// bar = baz; // not allowed
// 剩余参数兼容可选参数和固定参数
baz = foo;
baz = bar;
