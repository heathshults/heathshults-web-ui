'use strict';
const path = require('path');
const { src, dest, series } = require('gulp')
const debug = require('gulp-debug')

const sourcePath = path.resolve(__dirname, '../src/assets');
const destPath = path.resolve(__dirname, '../www/assets');



  function copy_assets_content(cb) {
    src(`${sourcePath}/content/**/*`)
    .pipe(dest(`${destPath}/content`))
    .pipe(debug({title: 'Copied:'}));
    cb()
  }
  exports.copy_assets_content = copy_assets_content

  function copy_css(cb) {
    src(`${sourcePath}/css/**/*`)
    .pipe(dest(`${destPath}/css`))
    .pipe(debug({title: 'Copied: '}))
    cb()
  }
  exports.copy_css = copy_css

  function copy_images(cb) {
    src(`${sourcePath}/img/**/*`)
    .pipe(dest(`${destPath}/img`))
    .pipe(debug({title: 'Copied:'}));
    cb()
  }
  exports.copy_images = copy_images

  function copy_mail(cb){
    src(`${sourcePath}/mail/**/*`)
    .pipe(dest(`${destPath}/mail`))
    .pipe(debug({title: 'Copied:'}));
    cb()
  }
  exports.copy_mail = copy_mail

  function copy_vendor(cb){
    src(`${sourcePath}/vendor/**/*`)
    .pipe(dest(`${destPath}/vendor`))
    .pipe(debug({title: 'Copied:'}));
    cb()
  }
  exports.copy_vendor = copy_vendor

  function copy_uiComponents(cb){
    src([`${sourcePath}/js/heathenscript-ui-components/**/*`])
    .pipe(dest(`${destPath}/js/heathenscript-ui-components`))
    .pipe(debug({title: 'Copied:'}));
    cb()
  }
  exports.copy_uiComponents = copy_uiComponents

  function copy_jsLib(cb) {
    src(`${sourcePath}/js/lib/**/*`)
    .pipe(dest(`${destPath}/js/lib`))
    .pipe(debug({title: 'Copied:'}));
    cb()
  }
  exports.copy_jsLib = copy_jsLib

  function copy_js(cb) {
    src(`${sourcePath}/js/**/*`)
    .pipe(dest(`${destPath}/js/vendor`))
    .pipe(debug({title: 'Copied: '}))
    cb()
  }
  exports.copy_js = copy_js

// renderAssets()
exports.copy_assets = series(copy_assets_content, copy_js, copy_css, copy_images, copy_jsLib, copy_mail, copy_uiComponents, copy_vendor)
