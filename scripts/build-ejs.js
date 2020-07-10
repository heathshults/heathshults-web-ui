const path = require('path');
const {src, dest} = require('gulp');
const ejs = require('gulp-ejs')
const plumber = require('gulp-plumber')
const rename = require('gulp-rename')
const debug = require('gulp-debug')
const log = require('fancy-log')

const srcPath = path.resolve('../', 'src')
const distPath =  path.resolve('../', 'dist')

function ejsit(done) {
  return src(`${srcPath}/*.ejs`, null, null)
    .pipe(plumber())
    .pipe(ejs().on('error', log))
    .pipe(rename({ extname: ".html" }))
    .pipe(debug({ title: 'compiled html: ' }))
    .pipe(dest(distPath, { overwrite: true, cwd: process.cwd() })), done()
}
exports.ejsit = ejsit
