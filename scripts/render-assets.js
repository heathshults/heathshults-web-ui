'use strict';
const path = require('path');
const {
  src,
  dest
} = require('gulp')
const debug = require('gulp-debug')
const chalk = require('chalk')
const plumber = require('gulp-plumber')
const changed = require('gulp-changed')
const ngAnnotate = require('gulp-ng-annotate')

const rootPath = path.resolve(__dirname, '../')
const srcPath = path.resolve(__dirname, '../src/assets');
const wwwPath = path.resolve(__dirname, '../www/assets');
const srcJS = path.resolve(__dirname, '../src/js/');

var onError = (err) => {
  console.log(chalk(`Error: ${err}`))
  this.emit('end')
}

function runAssetsPromises(cb) {
  console.log('running sequential with promises.')
  copy_assets_content('first')
    .then(copy_css)
    .then(copy_images)
    .then(copy_mail)
    .then(copy_vendor)
    .then(copy_js)
    if (typeof cb === 'function') cb()
}
exports.runAssetsPromises = runAssetsPromises
// runPromises()

function copy_assets_content(cb) {

  return new Promise((resolve, reject) => {
    try {
      src(`${srcPath}/content/**/*`)
        .pipe(changed(`${wwwPath}/content`))
        .pipe(ngAnnotate())
        .pipe(dest(`${wwwPath}/content`))
        .pipe(debug({
          title: 'Copied content: '
        }));
      console.log(chalk.green('Finished: copy_assets_content()'))
      resolve(cb)
    } catch (error) {

      reject(console.log(chalk.red('Error in copy_assets_content(): ' + error)))
    }
  })
}
exports.copy_assets_content = copy_assets_content
// copy_assets_content()

function copy_css(cb) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        src(`${srcPath}/css/**/*`)
        .pipe(plumber(error => onError(error)))
          // .pipe(changed(`${wwwPath}/css`))
          // .pipe(ngAnnotate())
          .pipe(dest(`${wwwPath}/css`))
          // .pipe(debug({
          //   title: 'Copied css: '
          // }))
        // if (typeof cb === 'function') {cb()}
        //
        //
        console.log(chalk.green('copy_css() complete!'))
        resolve(cb)
      }, 2000)
    } catch (error) {
      console.log(chalk.red('Error in copy_assets_content(): ' + error))
      reject(()=>{ if (typeof cb === 'function') {cb()} })
    }
  })
}
exports.copy_css = copy_css
// copy_css()

function copy_images(cb) {
  return new Promise((resolve, reject) => {
    try {
      src(`${srcPath}/img/**/*.{png,jpg,gif,svg}`)
        .pipe(changed(`${wwwPath}/img`))
        .pipe(ngAnnotate())
        .pipe(dest(`${wwwPath}/img`))
        // .pipe(debug({
        //   title: 'Copied images: '
        // }))
        // .pipe(dest(`${wwwPath}/img/portfolio`))
        // .pipe(debug({
        //   title: 'Copied images: '
        // }));

      // src(`${srcPath}/img/portfolio/**/*.{png,jpg,gif,svg}`)
      //   .pipe(changed(`${wwwPath}/img/portfolio`))
      //   .pipe(ngAnnotate())
      //   .pipe(dest(`${wwwPath}/img/portfolio`))
      //   .pipe(debug({
      //     title: 'Copied images: '
      //   }));
      // if (typeof cb === 'function') {
      //   cb()
      // }
      console.log(chalk.green('copy_img() complete!'))
      resolve(cb)
    } catch (error) {
      console.error(chalk.red('Error in copy_assets_content(): ' + error))
      reject('Rejected copy_assets_content(): '+error)
    }
  })
}
exports.copy_images = copy_images
// copy_images()

function copy_mail(cb) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        src(`${srcPath}/mail/**/*`)
          .pipe(changed(`${wwwPath}/mail`))
          .pipe(ngAnnotate())
          .pipe(dest(`${wwwPath}/mail`))
          .pipe(debug({
            title: 'Copied mail: '
          }));
        // if (typeof cb === 'function') {
        //   cb()
        // }
        console.log(chalk.green('copy_mail() complete!'))
        resolve(cb)
      }, 2000)
    } catch (error) {
      console.error(chalk.red('Error in copy_assets_content(): ' + error))
      reject(`Rejected copy_assets_content(): ${error}`)
    }
  })
}
exports.copy_mail = copy_mail
// copy_mail()

function copy_vendor(cb) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        src(`${srcPath}/assets/vendor/**/*`)
          .pipe(changed(`${wwwPath}/vendor`))
          .pipe(ngAnnotate())
          .pipe(dest(`${wwwPath}assets/vendor`))
          .pipe(debug({
            title: 'Copied vendor: '
          }));


        src([`${rootPath}/node_modules/bootstrap/www/**/*`, '!**/npm.js', '!**/bootstrap-theme.*'])
          .pipe(changed(`${wwwPath}/assets/vendor/bootstrap`))
          .pipe(ngAnnotate())
          .pipe(debug({
            title: 'Copied bootstrap'
          }))
          .pipe(dest(`${wwwPath}/assets/vendor/bootstrap`))

        src([`${rootPath}/node_modules/jquery/dist/jquery.js`, `${rootPath}/node_modules/jquery/dist/jquery.min.js`])
          .pipe(changed(`${wwwPath}/assets/vendor/jquery`))
          .pipe(ngAnnotate())
          .pipe(debug({
            title: 'Copied jquery'
          }))
          .pipe(dest(`${wwwPath}/assets/vendor/jquery`))

        src([
            `${rootPath}/node_modules/font-awesome/**`,
            `!${rootPath}/node_modules/font-awesome/**/*.map`,
            `!${rootPath}/node_modules/font-awesome/.npmignore`,
            `!${rootPath}/node_modules/font-awesome/*.txt`,
            `!${rootPath}/node_modules/font-awesome/*.md`,
            `!${rootPath}/node_modules/font-awesome/*.json`
          ])
          .pipe(changed(`${wwwPath}/assets/vendor/font-awesome`))
          .pipe(ngAnnotate())
          .pipe(debug({
            title: 'Copied font-awesome'
          }))
          .pipe(dest(`${wwwPath}/assets/vendor/font-awesome`))

        console.log(chalk.green('copy_vendor() complete!'))
        resolve(cb)
      }, 2000)
    } catch(error) {
      console.error(chalk.red('Error in copy_assets_content(): ' + error))
      reject('Rejected copy_assets_content(): ' + error)
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
          `!${srcJS}/HeathScript.js`,
          `!${srcJS}/modules/**/*`
        ])

          .pipe(dest(`${wwwPath}/js`))
          .pipe(debug({
            title: 'Copied JS: '
          }))
        if (typeof cb === 'function') {
          cb()
        }
        resolve(cb)
      }, 2000)
    } catch(error) {
      console.log(chalk.red('Error in copy_js(): ' + error))
      reject('Rejected copy_js(): ' + error)
    }
  })
}
exports.copy_js = copy_js


// exports.copy_assets = series(copy_assets_content, copy_js, copy_css, copy_images, copy_mail, copy_vendor)
