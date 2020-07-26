// 类构造器，重写类
function classDecorator<T extends new (...args: any[]) => {}>(constructor: T) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class Greeter {
  property = "property";
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}

const greeter = new Greeter("halo");
console.log(greeter.hello);
console.log(greeter.property);
