// Constants:
const brailleUnicodeBlock = 0x2800;
export const space = [];
export const fullCell = [1,2,3,4,5,6,7,8];

/* Converts an array of dot specifications to a string of (Unicode) braille.
   Each dot specification is an array of integers (1-8); [] represents a braille space character.
*/
export function convertCells(cells) {
    return cells.reduce((accumulator, cell) => {
        if (typeof(cell) == "undefined" || cell == null)
            throw new Error("Invalid dot specification");
        let dots = brailleUnicodeBlock;
        for (let dot of cell) {
            if (dot < 1 || dot > 8)
                throw new Error(`Dot out of range: ${dot}`);
            dots |= 1 << (dot - 1);
        }
        return accumulator + String.fromCharCode(dots);
    }, "");
}

export function insertBraille(node, dots) {
    node.innerText = convertCells(dots);
}
