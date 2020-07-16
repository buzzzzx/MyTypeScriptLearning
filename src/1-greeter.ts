class User {
  firstName: string;
  lastName: string;
  fullname: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullname = this.firstName + " " + this.lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello " + person.firstName + " " + person.lastName;
}

let user1 = {
  firstName: "Remie",
  lastName: "Choo",
};

let user2 = {
  firstName: "Remie",
  lastName: "Choo",
  age: 20, // allowed
};

let user3: Person = {
  firstName: "Remie",
  lastName: "Choo",
  // age: 20,  // not allowed
};

let user4 = new User("Remie", "Choo");

console.log(greeter(user1));
console.log(greeter(user2));
console.log(greeter(user3));
console.log(greeter(user4));
