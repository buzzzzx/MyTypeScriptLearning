"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myAdd = function (x, y) {
    return x + y;
};
function buildName(firstName, secondName) {
    return firstName + " " + secondName;
}
var buildNameFn = buildName;
var Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: _this.suits[pickedSuit],
                card: pickedCard % 13,
            };
        };
    },
};
var cardPicker = Deck.createCardPicker();
var pickedCard = cardPicker();
console.log(pickedCard.card, pickedCard.suit);
var Handler = /** @class */ (function () {
    function Handler(type) {
        var _this = this;
        this.onClick = function (e) {
            _this.type = e.type;
        };
        this.type = type;
    }
    return Handler;
}());
var handler = new Handler("Double Click");
var uiElement = {
    addClickListener: function (onClick) { },
};
uiElement.addClickListener(handler.onClick);
function MyAdd2(x, y) {
    return x + y;
}
var sum = MyAdd2(1, 2);
var sumStr = MyAdd2("hello", "world");
// let sumBad = MyAdd2("hah", 12); // not allowed
console.log(sum, sumStr);
