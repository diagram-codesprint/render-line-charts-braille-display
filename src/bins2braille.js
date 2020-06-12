class bins2braille {
  constructor(data) {
    this.data = data;
    this.cell_dots =[ [1,2,3,7], [4,5,6,8] ];
    this.cell_array = [];
    this.init()
  }

  init () {
    // console.log(this.data);
    this.build_glyphs();
  }

  build_glyphs() {
    for (const series in this.data) {
      if (`label` !== series) {
        let row = this.data[series];
        let glyph = [];
        for (var r = 0, r_len = row.length; r_len > r; ++r) {
          let val = row[r];

          // switch column on every odd number
          if (0 === r % 2) {
            glyph[0] = this.cell_dots[0][3 - val];
            // console.log(this.cell_dots[0][3 - val]);
          } else {
            glyph[1] = this.cell_dots[1][3 - val];
            // console.log(this.cell_dots[1][3 - val]);

            // reset new glyph
            this.cell_array.push(glyph);
            glyph = [];
          }
        }
      }
    }
  }

}
