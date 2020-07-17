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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " move " + distance + " m");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 10; }
        console.log("Sliterring...");
        _super.prototype.move.call(this, distance);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distance) {
        if (distance === void 0) { distance = 40; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distance);
    };
    Horse.prototype.speak = function () {
        console.log("mia heiheihei");
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy");
var tom = new Horse("Tommy");
sam.move();
tom.move(100);
// tom.speak(); // not allowed, tom is declared as Animal
// 在 TypeScript 中，类进行结构上的比较，有一个例外是对于 private 与 protected 的成员。
// 当一个成员是 private 或者 protected 时，它们必须来自同一个声明，才能被视为与另一个 private 或者 protected 的成员相同。
var A = /** @class */ (function () {
    function A() {
        this.name = "aa";
    }
    return A;
}());
var B = /** @class */ (function () {
    function B() {
        this.name = "bb";
    }
    return B;
}());
var a = new A();
var b = new B();
// a = b; // not allowed
// Access control 访问控制
var Person = /** @class */ (function () {
    function Person(name) {
        this.Address = "lala land";
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.printDescription = function () {
        console.log("My name is " + this.name + ", work in " + this.department);
    };
    return Employee;
}(Person));
// let remie = new Person("Remie"); // not allowed, constructor is protected
var derick = new Employee("Derick", "Sales");
var passcode = "1234567";
var User = /** @class */ (function () {
    function User(name) {
        this._fullName = name;
    }
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode === "123456") {
                this._fullName = newName;
            }
            else {
                console.log("Error: pass code not match, cannot modify fullname");
            }
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var john = new User("John");
john.fullName = "Josh";
console.log(john.fullName);
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log(this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Acounting ad") || this;
    }
    AccountingDepartment.prototype.printMeets = function () {
        console.log("Acounting department meets at 10am");
    };
    AccountingDepartment.prototype.printAccount = function () {
        console.log("llllllll");
    };
    return AccountingDepartment;
}(Department));
var account = new AccountingDepartment();
account.printMeets();
var Greeter = /** @class */ (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        console.log(Greeter.standardGreeting, this.greeting);
    };
    Greeter.standardGreeting = "Hello";
    return Greeter;
}());
var greeter = new Greeter("hhhh");
greeter.greet();
// typeof Greeter is the static part of Greeter
var greeterMaker = Greeter;
greeterMaker.standardGreeting = "hey";
var greeter2 = new greeterMaker("xxxx");
greeter2.greet();
