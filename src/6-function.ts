let myAdd: (x: number, y: number) => number = (x, y) => {
  return x + y;
};

function buildName(firstName: string, secondName: string): string {
  return firstName + " " + secondName;
}

let buildNameFn: (
  firstName: string,
  ...restName: string[]
) => string = buildName;

interface Card {
  suit: string;
  card: number;
}

interface Deck {
  suits: string[];
  cards: Array<number>;

  createCardPicker: (this: Deck) => () => Card;
}

let Deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),

  createCardPicker: function (this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13,
      };
    };
  },
};

let cardPicker = Deck.createCardPicker();
let pickedCard = cardPicker();

console.log(pickedCard.card, pickedCard.suit);

// this

interface UIElement {
  addClickListener(onClick: (this: void, e: Event) => void): void;
}

class Handler {
  type: string;
  constructor(type: string) {
    this.type = type;
  }

  onClick = (e: Event) => {
    this.type = e.type;
  };
}

let handler = new Handler("Double Click");
let uiElement: UIElement = {
  addClickListener(onClick) {},
};

uiElement.addClickListener(handler.onClick);

function MyAdd2(x: number, y: number): number;
function MyAdd2(x: string, y: string): string;

function MyAdd2(x: any, y: any): any {
  return x + y;
}

let sum = MyAdd2(1, 2);
let sumStr = MyAdd2("hello", "world");
// let sumBad = MyAdd2("hah", 12); // not allowed
console.log(sum, sumStr);

export {};
