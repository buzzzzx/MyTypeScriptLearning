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
