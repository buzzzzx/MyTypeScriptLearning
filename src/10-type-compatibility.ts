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

export {};
