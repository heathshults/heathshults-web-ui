const path = require('path');
const {src, dest} = require('gulp');
const ejs = require('gulp-ejs')
const plumber = require('gulp-plumber')
const rename = require('gulp-rename')
const debug = require('gulp-debug')
const log = require('fancy-log')

const srcPath = path.resolve(__dirname, '../src/views')
const wwwPath =  path.resolve(__dirname, '../www')

function ejsit() {
  src(`${srcPath}/*.ejs`)
    .pipe(plumber())
    .pipe(ejs().on('error', log))
    .pipe(rename({ extname: ".html" }))
    .pipe(debug({ title: 'compiled html: ' }))
    .pipe(dest(wwwPath))
    .pipe(browserSync.stream())
  return
}
exports.ejsit = ejsit
ejsit()
