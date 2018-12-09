const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/cism/runtime.js',
    './dist/cism/polyfills.js',
    './dist/cism/scripts.js',
    './dist/cism/main.js',
  ];

  await fs.ensureDir('cism');
  await concat(files, 'public/elements.js');
})();