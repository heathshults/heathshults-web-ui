'use strict';
const path = require('path');
const { src, dest } = require('gulp')
const debug = require('gulp-debug')

function renderAssets(done) {
  const sourcePath = path.resolve(path.dirname(__filename), '../src/assets');
  const destPath = path.resolve(path.dirname(__filename), '../www/assets');

  src(`${sourcePath}/content/**/*`).pipe(dest(`${destPath}/content`))
  src(`${sourcePath}/css/**/*`).pipe(dest(`${destPath}/css`))
  src(`${sourcePath}/img/**/*`).pipe(dest(`${destPath}/img`))
  src(`${sourcePath}/mail/**/*`).pipe(dest(`${destPath}/mail`))
  src(`${sourcePath}/vendor/**/*`).pipe(dest(`${destPath}/vendor`))
  src([`${sourcePath}/js/heathenscript-ui-components/**/*`]).pipe(dest(`${destPath}/js/heathenscript-ui-components`))
  src(`${sourcePath}/js/lib/**/*`).pipe(dest(`${destPath}/js/lib`))
  src(`${sourcePath}/js/vendor/**/*`).pipe(dest(`${destPath}/js/vendor`))
  .pipe(debug({title: 'Copied: '}))
    // sh.cp('-R', sourcePath, destPath)
}
exports.renderAssets = renderAssets
// renderAssets()
