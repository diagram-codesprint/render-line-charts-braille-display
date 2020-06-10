# render-line-charts-braille-display
# Purpose
The aim of the project is to explore the viability of representing the gist of a line chart (i.e., a summary of its "form") on a typical refreshable braille display (e.g., one line of 40 cells). Extension to larger (including multi-line) displays could be explored subsequently.

# Testing
A simple test file is in `src/test.html`. At least initially, JavaScript (ES6) modules are used. Hence, the test cannot be run from the local file system due to cross-domain security issues. It can however be run from a local Web server. For example, with node.js installed, and with the root directory of the project as the current directory:
```
npx serve src
```
will make the project available on localhost (port 5000). A browser can then connect to it and access `src/test.html`.
