// Constants:
const brailleUnicodeBlock = 0x2800;
export const space = [];
export const fullCell = [1,2,3,4,5,6,7,8];

/* Converts an array of dot specifications to a string of (Unicode) braille.
   Each dot specification is an array of integers (1-8); [] represents a braille space character.
*/
export function create_table (data, container) {
    while (container.firstChild) {
      container.firstChild.remove();
    }

  const table = document.createElement(`table`);

  for (const series in data) {
    let cell_type = `td`;
    if (`label` === series) {
      cell_type = `th`;
    }

    const row_el = table.insertRow();

    let row = data[series];
    for (let record of row) {
      let val = record;
      let cell = document.createElement(cell_type);
      cell.textContent = val;
      row_el.appendChild(cell);
    }
    table.appendChild(row_el);

    container.appendChild(table);
  }
}
