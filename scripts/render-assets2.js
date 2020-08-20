'use strict';
const path = require('path');
const { src, dest } = require('gulp')
const debug = require('gulp-debug')

const sourcePath = path.resolve(__dirname, '../src/assets');
const destPath = path.resolve(__dirname, '../www-app/assets');
const srcJS = path.resolve(__dirname, '../src/js/')

module.exports = function RenderAssets() {
  // constructor(){

    this.copy_assets_content = (cb) => {
        src(`${sourcePath}/content/**/*`)
          .pipe(dest(`${destPath}/content`))
          .pipe(debug({
            title: 'Copied content: '
          }));
        if (typeof cb === 'function') {
          cb()
        }

    }
    // exports.copy_assets_content = copy_assets_content
    // this.copy_assets_content



    this.copy_css = (cb) => {
        src(`${sourcePath}/css/**/*`)
          .pipe(dest(`${destPath}/css`))
          .pipe(debug({
            title: 'Copied css: '
          }))
        if (typeof cb === 'function') {
          cb()
        }
    }

    this.copy_images = (cb) => {
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

    this.copy_mail = (cb) => {
      src(`${sourcePath}/mail/**/*`)
        .pipe(dest(`${destPath}/mail`))
        .pipe(debug({
          title: 'Copied mail: '
        }));
      if (typeof cb === 'function') {
        cb()
      }
    }

    this.copy_vendor = (cb) => {
      src(`${sourcePath}/vendor/**/*`)
        .pipe(dest(`${destPath}/vendor`))
        .pipe(debug({
          title: 'Copied vendor: '
        }));
      if (typeof cb === 'function') {
        cb()
      }
    }


      // if (typeof cb === 'function') {
      //   cb()
      // }


    this.copy_js = (cb) => {
      src([
          `${srcJS}/**/*`,
          `!${srcJS}/scripts.js`,
          `!${srcJS}/jqBootstrapValidation.js`,
          `!${srcJS}/contact_me.js`,
          `!${srcJS}/HeathScript.js`
        ])
        .pipe(dest(`${destPath}/js/`))
        .pipe(debug({
          title: 'Copied JS: '
        }))
      if (typeof cb === 'function') {
        cb()
      }
    }
  // }
}
// exports.RenderAssets = RenderAssets
// exports.copy_assets = series(copy_assets_content, copy_js, copy_css, copy_images, copy_mail, copy_vendor)
