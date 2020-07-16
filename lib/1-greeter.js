"use strict";
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullname = this.firstName + " " + this.lastName;
    }
    return User;
}());
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user1 = {
    firstName: "Remie",
    lastName: "Choo",
};
var user2 = {
    firstName: "Remie",
    lastName: "Choo",
    age: 20,
};
var user3 = {
    firstName: "Remie",
    lastName: "Choo",
};
var user4 = new User("Remie", "Choo");
console.log(greeter(user1));
console.log(greeter(user2));
console.log(greeter(user3));
console.log(greeter(user4));
