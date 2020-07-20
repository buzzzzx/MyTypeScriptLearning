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

export {};
