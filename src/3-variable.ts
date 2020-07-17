for (var i = 0; i < 10; i += 1) {
  (function (i) {
    setTimeout(function cb() {
      console.log(i);
    });
  })(i);
}

// every iteration will create a new lexial scope
for (let i = 0; i < 10; i += 1) {
  setTimeout(function cb() {
    console.log(i);
  });
}

// a++; // 暂时性死区
let a = 2;

const Me = {
  name: "Remie",
  age: 23,
};

function foo({ a, b = 0 } = { a: "" }) {
  console.log(a, b);
}

foo();
foo({ a: "hh" });
foo({ a: "xx", b: 20 });

export {};
