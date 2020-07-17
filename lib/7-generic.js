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
function identity(args) {
    return args;
}
var o1 = identity("my string1");
var o2 = identity("my string2");
var myIdentity = identity;
function loggingStuff(args) {
    console.log(args.length);
    return args;
}
loggingStuff({ length: 1 });
loggingStuff("hahah");
function getProperty(obj, key) {
    return obj[key];
}
var obj = {
    a: 1,
    b: 2,
    c: 3,
};
getProperty(obj, "a");
// getProperty(obj, "m") // not allowed
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
        this.hasMask = true;
    }
    return BeeKeeper;
}());
var LionKeeper = /** @class */ (function () {
    function LionKeeper() {
        this.isAlive = true;
    }
    return LionKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = "Animal";
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keeper = new BeeKeeper();
        return _this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keeper = new LionKeeper();
        return _this;
    }
    return Lion;
}(Animal));
function createInstance(ctor) {
    return new ctor();
}
createInstance(Bee).keeper.hasMask;
createInstance(Lion).keeper.isAlive;
