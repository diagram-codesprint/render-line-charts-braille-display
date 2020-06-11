# render-line-charts-braille-display
# Purpose
The aim of the project is to explore the viability of representing the gist of a line chart (i.e., a summary of its "form") on a typical refreshable braille display (e.g., one line of 40 cells). Extension to larger (including multi-line) displays could be explored subsequently.

# Testing
A simple test file is in `src/test.html`. At least initially, JavaScript (ES6) modules are used. Hence, the test cannot be run from the local file system due to cross-domain security issues. It can however be run from a local Web server. For example, with node.js installed, and with the root directory of the project as the current directory:
```
npx serve src
```
will make the project available on localhost (port 5000). A browser can then connect to it and access `src/test.html`.

# Implementation Note
The Unicode block for braille (0x2800-0x28ff) is used to specify the braille cells directly. In general, screen readers write the corresponding braille cells directly to the display, without further translation, as desired. In some cases (for example, certain versions of VoiceOver for Mac), it may be necessary to turn off Grade II translation to achieve the desired effect.

Within the Unicode range (0x2800-0x28ff), if a bit is set, the corresponding braille dot is raised on the display, and shown visually in a braille font. Thus, 0x2800 is a space (blank cell) with no dots raised. The least significant bit (bit position 0) represents braille dot 1. The next bit (moving from right to left in the binary representation) represents braille dot 2, and so on. Bit 7 represents braille dot 8.

Consequently, for example, to represent a braille cell consisting of dots 1, 2 and 3, the low-order byte is 00000111 in binary (i.e., 7 in decimal).

Note that for historical reasons, braille is composed of a six-dot cell, wherein the dots are conventionally numbered 1, 2 and 3 in the left column, and 4, 5 and 6 in the right column. In an eight-dot cell, two additional dot positions are added below the conventional six-dot arrangement: dot 7 is on the lower left, and dot 8 on the lower right. Most braille displays provide eight-dot cells.

# HTML Rendered View
https://diagram-codesprint.github.io/render-line-charts-braille-display/src/test.html
