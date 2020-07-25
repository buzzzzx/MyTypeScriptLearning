interface User {
  register(name: string): void;
}

let remie: User = {
  register(name: string, age?: string) {
    console.log(name);
  },
};

let rowan: User = {
  register() {
    console.log("it's ok");
  },
};

interface Canceler {
  (message?: string): void;
}

interface CancelExecutor {
  (canceler: Canceler): void;
}

let outsideCancel: Canceler;
let executor: CancelExecutor = function (canceler) {
  outsideCancel = canceler;
};

executor((message) => {
  console.log(message);
});

outsideCancel!();

// rest parameters and optional parameters
let foo = (x: number, y: number) => {};
let bar = (x?: number, y?: number) => {};
let baz = (...args: number[]) => {};

// 固定参数兼容可选参数和剩余参数
foo = bar;
foo = baz;

// 可选参数不兼容固定参数和剩余参数
// bar = foo; // not allowed, Type 'number | undefined' is not assignable to type 'number'
// bar = baz; // not allowed

// 剩余参数兼容可选参数和固定参数
baz = foo;
baz = bar;

export {};
