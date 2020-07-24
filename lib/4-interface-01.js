"use strict";
/**
 * Execess Property Checks:
 *   - Object literals do excess property checks
 *   - Variable assign to other variable need have common property
 */
Object.defineProperty(exports, "__esModule", { value: true });
function createSquare(config) {
    var newSquare = { color: "White", width: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.width = config.width;
    }
    return newSquare;
}
var square1 = createSquare({});
// let square2 = createSquare({ colour: "Red", width: 200 }); // error, object literal will do excess property check
var squareOption1 = { colour: "Red", width: 200 };
// allowed, variable not do excess property check
// but need to has some common property between SquareConfig and SquareOption1, in this example is width
var square2 = createSquare(squareOption1);
var squareOption2 = { colour: "Red" };
// let square3 = createSquare(squareOption2); // error, because not has common property
// let square3: SquareConfig = { colour: "red", width: 100 }; // error
var square3 = squareOption1; // allowed
