'use strict';
const fs = require('fs');
const path = require('path');
// const pug = require('pug');
var { src, dest } = require('gulp')
var pug = require('gulp-pug');
var debug = require('gulp-debug')
const prettier = require('gulp-prettier');
const rename = require('gulp-rename')

const inPath = path.resolve(__dirname, '../src/pug')
const outPath = path.resolve(__dirname, '../www')

function renderPug(cb) {
  return src(`${inPath}/**/*.pug`)
  .pipe(pug({
    // Your options in here.
  }))
  .pipe(prettier({htmlWhitespaceSensitivity: 'strict', tabWidth: 2}))
  .pipe(rename({ extname: ".html" }))
  .pipe(dest(`${outPath}`))
  .pipe(debug({title: 'Rendered pug: '})),
  () => {
    if (typeof cb === 'function'){
      cb(null);
      called = true;
    }}
}
exports.renderPug = renderPug
// renderPug()
// module.exports = function renderPug(filePath) {
//     const destPath = filePath.replace(/src\/pug\//, 'www/').replace(/\.pug$/, '.html');
//     const srcPath = path.resolve(path.dirname(__filename), '../src');

//     console.log(`### INFO: Rendering ${filePath} to ${destPath}`);
//     const html = pug.renderFile(filePath, {
//         doctype: 'html',
//         filename: filePath,
//         basedir: srcPath
//     });

//     const destPathDirname = path.dirname(destPath);
//     if (!sh.test('-e', destPathDirname)) {
//         sh.mkdir('-p', destPathDirname);
//     }

//     const prettified = prettier.format(html, {
//         printWidth: 1000,
//         tabWidth: 4,
//         singleQuote: true,
//         proseWrap: 'preserve',
//         endOfLine: 'lf',
//         parser: 'html',
//         htmlWhitespaceSensitivity: 'ignore'
//     });

//     fs.writeFileSync(destPath, prettified);
// };
