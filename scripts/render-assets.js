'use strict';
const path = require('path');
const {
  src,
  dest,
  series
} = require('gulp')
const debug = require('gulp-debug')

const sourcePath = path.resolve(__dirname, '../src/assets');
const destPath = path.resolve(__dirname, '../www/assets');
const compPath = path.resolve(__dirname, '../src/js/heathenscript-ui-components/')
const srcJS = path.resolve(__dirname, '../src/js/')


function copy_assets_content(cb) {
  src(`${sourcePath}/content/**/*`)
    .pipe(dest(`${destPath}/content`))
    .pipe(debug({
      title: 'Copied content: '
    }));
  if (typeof cb === 'function') {
    cb()
  }
}
exports.copy_assets_content = copy_assets_content
copy_assets_content()

function copy_css(cb) {
  src(`${sourcePath}/css/**/*`)
    .pipe(dest(`${destPath}/css`))
    .pipe(debug({
      title: 'Copied css: '
    }))
  if (typeof cb === 'function') {
    cb()
  }
}
exports.copy_css = copy_css
copy_css()

function copy_images(cb) {
  src(`${sourcePath}/img/**/*.{png,jpg,gif,svg}`)
    .pipe(dest(`${destPath}/img`))
    .pipe(debug({
      title: 'Copied images: '
    }));
  src(`${sourcePath}/img/portfolio/**/*.{png,jpg,gif,svg}`)
    .pipe(dest(`${destPath}/img/portfolio`))
    .pipe(debug({
      title: 'Copied images: '
    }));
  if (typeof cb === 'function') {
    cb()
  }
}
exports.copy_images = copy_images
copy_images()

function copy_mail(cb) {
  src(`${sourcePath}/mail/**/*`)
    .pipe(dest(`${destPath}/mail`))
    .pipe(debug({
      title: 'Copied mail: '
    }));
  if (typeof cb === 'function') {
    cb()
  }
}
exports.copy_mail = copy_mail
copy_mail()

function copy_vendor(cb) {
  src(`${sourcePath}/vendor/**/*`)
    .pipe(dest(`${destPath}/vendor`))
    .pipe(debug({
      title: 'Copied vendor: '
    }));
  if (typeof cb === 'function') {
    cb()
  }
}
exports.copy_vendor = copy_vendor
copy_vendor()

function copy_uiComponents(cb) {
  console.log(sourcePath)
  src(`${compPath}/**/*.{js,ejs,mjs,cjs,jsx,json}`)
    .pipe(debug({
      title: 'Copied UI Component: '
    }))
    .pipe(dest(`${destPath}/js/heathenscript-ui-components/`))
  if (typeof cb === 'function') {
    cb()
  }
}
exports.copy_uiComponents = copy_uiComponents
copy_uiComponents()

function copy_jsLib(cb) {
  src(`${srcJS}/lib/**/*.{js,ejs,mjs,cjs,jsx,json}`)
  .pipe(dest(`${destPath}/js/lib`))
  .pipe(debug({
    title: 'Copied js/lib: '
  }));

  src(`${srcJS}/js/vendor/**/*.{js,ejs,mjs,cjs,jsx,json}`)
  .pipe(dest(`${destPath}/js/vendor`))
  .pipe(debug({
    title: 'Copied js/vendor: '
  }));
  if (typeof cb === 'function') {
    cb()
  }
}
exports.copy_jsLib = copy_jsLib

function copy_js(cb) {
  src([
      `${sourcePath}/js/**/*`,
      `!${sourcePath}/js/scripts.js`,
      `!${sourcePath}/js/jqBootstrapValidation.js`,
      `!${sourcePath}/js/contact_me.js`,
      `!${sourcePath}/js/HeathScript.js`,
    ])
    .pipe(dest(`${destPath}/js/`))
    .pipe(debug({
      title: 'Copied JS: '
    }))
  if (typeof cb === 'function') {
    cb()
  }
}
exports.copy_js = copy_js
copy_js()


exports.copy_assets = series(copy_assets_content, copy_js, copy_css, copy_images, copy_mail, copy_uiComponents, copy_vendor)
