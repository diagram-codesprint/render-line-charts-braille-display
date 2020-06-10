import * as braille from "./directBraille.mjs";
console.log(braille.convertCells([braille.fullCell]));
const text = [[1], [1,2], [], [1,4], [1,4,5]]; // "ab cd"
console.log(braille.convertCells(text));
