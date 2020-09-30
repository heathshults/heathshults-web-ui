require("@babel/register")({
  presets: ["@babel/preset-env"],
  "plugins": [["import", {"libraryName": "@material-ui/core"}], "@babel/plugin-syntax-dynamic-import"]
});

import {src } from 'gulp';
import eslint from 'gulp-eslint';
import esconfig from '../.eslintrc';



function lint(filestocheck, ignorefiles, cb) {
  
  return new Promise((resolve, reject) => {
    try {
      setTimeout({
      lintr: function(files, ignored) {
        return src([`${files}, ${ignored}`])
        .pipe(eslint({ esconfig }))
        .pipe(eslint.formatEach('compact', process.stderr));
      },
        lintr(filestocheck, ignorefiles),
        resolve(cb)
      }, 500);
    }
    catch(error) {
      console.log(error)
      reject(cb);
    }
  });
}
exports.lint = lint
