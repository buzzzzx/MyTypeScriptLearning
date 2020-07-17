let x = [1, 2, null]; // x: (number | null)[]

// !: 非null和非undefined的类型断言
// 对numLegs这个属性进行非空断言，编译时不会出现问题
class Animal {
  numLegs!: number;
}

class Bee extends Animal {
  isFlying!: boolean;
}

class Lion extends Animal {
  isEating!: boolean;
}

let a = new Animal();
console.log(a.numLegs); // undefined

let animals: Animal[] = [new Bee(), new Lion()];

// Add type annotation any for mouseEvent which will ignore the original context
// of mouseEvent
window.onmousedown = function (mouseEvent: any) {
  console.log(mouseEvent.clickTime);
};
