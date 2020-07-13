'use strict';
const fs = require('fs');
const path = require('path');
const sh = require('shelljs');
const { gulp, src, dest } = require('gulp')
const debug = require('gulp-debug')

function renderAssets(done) {
  const sourcePath = path.resolve(path.dirname(__filename), '../src/assets');
  const destPath = path.resolve(path.dirname(__filename), '../dist/assets');


  src(`${sourcePath}/content/**/*`).pipe(dest(`${destPath}/content`))
  src(`${sourcePath}/css/**/*`).pipe(dest(`${destPath}/css`))
  src(`${sourcePath}/img/**/*`).pipe(dest(`${destPath}/img`))
  src(`${sourcePath}/mail/**/*`).pipe(dest(`${destPath}/mail`))
  src(`${sourcePath}/vendor/**/*`).pipe(dest(`${destPath}/vendor`))
  .pipe(debug({title: 'Copied: '}))
    // sh.cp('-R', sourcePath, destPath)
};
exports.renderAssets = renderAssets
renderAssets()
