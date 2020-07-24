/**
 * Execess Property Checks:
 *   - Object literals do excess property checks
 *   - Variable assign to other variable need have common property
 */

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; width: number } {
  const newSquare = { color: "White", width: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.width = config.width;
  }

  return newSquare;
}

let square1 = createSquare({});
// let square2 = createSquare({ colour: "Red", width: 200 }); // error, object literal will do excess property check
let squareOption1 = { colour: "Red", width: 200 };
// allowed, variable not do excess property check
// but need to has some common property between SquareConfig and SquareOption1, in this example is width
let square2 = createSquare(squareOption1);

let squareOption2 = { colour: "Red" };
// let square3 = createSquare(squareOption2); // error, because not has common property

// let square3: SquareConfig = { colour: "red", width: 100 }; // error
let square3: SquareConfig = squareOption1; // allowed
// let square4: SquareConfig = squareOption2; // error, no common property

export {};
