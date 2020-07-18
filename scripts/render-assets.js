'use strict';
const path = require('path');
const { src, dest } = require('gulp')
const debug = require('gulp-debug')
const chalk = require('chalk')

const sourcePath = path.resolve(__dirname, '../src/assets');
const destPath = path.resolve(__dirname, '../www/assets');
const srcJS = path.resolve(__dirname, '../src/js/');
function runPromises() {
  console.log('running sequential with promises.')
    copy_assets_content('first')
    .then(copy_css)
    .then(copy_images)
    .then(copy_mail)
    .then(copy_vendor)
    .then(copy_js)
}
exports.runPromises = runPromises
// runPromises()

function copy_assets_content(cb) {

    return new Promise((resolve, reject) => {
      try {
        src(`${sourcePath}/content/**/*`)
          .pipe(dest(`${destPath}/content`))
          .pipe(debug({
            title: 'Copied content: '
          }));
          console.log('Finished: copy_assets_content()')
          resolve(cb)
      }
      catch(error) {
      console.log(chalk.red('Error in copy_assets_content(): '+error))
        reject()
      }
    })


}
exports.copy_assets_content = copy_assets_content
// copy_assets_content()

function copy_css(cb) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        src(`${sourcePath}/css/**/*`)
          .pipe(dest(`${destPath}/css`))
          .pipe(debug({
            title: 'Copied css: '
          }))
        // if (typeof cb === 'function') {
        //   cb()
        // }
        console.log(chalk.green('copy_css() complete!'))
        resolve(cb)
      }, 2000)
    }
    catch(error) {
      console.log(chalk.red('Error in copy_assets_content(): '+error))
        reject()
      }
  })
}
exports.copy_css = copy_css
// copy_css()

function copy_images(cb) {
   return new Promise((resolve, reject) => {
    try {
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
      // if (typeof cb === 'function') {
      //   cb()
      // }
      console.log(chalk.green('copy_css() complete!'))
      resolve(cb)
    }
    catch(error) {
      console.log(chalk.red('Error in copy_assets_content(): '+error))
        reject()
    }
  })
}
exports.copy_images = copy_images
// copy_images()

function copy_mail(cb) {
   return new Promise((resolve, reject) => {
     try {
      setTimeout(() => {
        src(`${sourcePath}/mail/**/*`)
          .pipe(dest(`${destPath}/mail`))
          .pipe(debug({
            title: 'Copied mail: '
          }));
        // if (typeof cb === 'function') {
        //   cb()
        // }
        console.log(chalk.green('copy_css() complete!'))
        resolve(cb)
      }, 2000)
    }
    catch(error) {
      console.log(chalk.red('Error in copy_assets_content(): '+error))
        reject()
    }
  })
}
exports.copy_mail = copy_mail
// copy_mail()

function copy_vendor(cb) {
  return new Promise((resolve, reject) => {
    try{
      setTimeout(() => {
    src(`${sourcePath}/vendor/**/*`)
      .pipe(dest(`${destPath}/vendor`))
      .pipe(debug({
        title: 'Copied vendor: '
      }));
      // if (typeof cb === 'function') {
      //   cb()
      // }
      console.log(chalk.green('copy_css() complete!'))
      resolve(cb)
    }, 2000)
    }
    catch(error) {
    console.log(chalk.red('Error in copy_assets_content(): '+error))
      reject()
    }
  })
}
exports.copy_vendor = copy_vendor
// copy_vendor()


  // if (typeof cb === 'function') {
  //   cb()
  // }


function copy_js(cb) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
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
      // if (typeof cb === 'function') {
      //   cb()
      // }
      resolve(cb)
      }, 2000)
    }
    catch(error) {
      console.log(chalk.red('Error in copy_assets_content(): '+error))
        reject()
    }
  })
}
exports.copy_js = copy_js
// copy_js()


// exports.copy_assets = series(copy_assets_content, copy_js, copy_css, copy_images, copy_mail, copy_vendor)
