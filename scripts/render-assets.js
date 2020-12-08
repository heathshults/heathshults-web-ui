'use strict';
const path = require('path');
const fs = require('fs');
const {
  src,
  dest
} = require('gulp');
const debug = require('gulp-debug');
const chalk = require('chalk');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const ngAnnotate = require('gulp-ng-annotate');
// const rename = require('gulp-rename')
const { exec } = require('child_process');
const browserSync = require('browser-sync');

// const rootPath = path.resolve(__dirname, '../')
const srcPath = path.resolve(__dirname, '../src/assets');
const wwwPath = path.resolve(__dirname, '../www-app/assets');

var onError = (err) => {
  console.log(chalk(`Error: ${err}`));
  this.emit('end');
};

// runPromises()
function runAssetsPromises(cb) {
  console.log('render assets sequence');
  copy_assets_content()
    .then(copy_css)
    .then(copy_images)
    .then(copy_mail)
    .then(copy_vendor);
    if (typeof cb === 'function') cb();
};
exports.runAssetsPromises = runAssetsPromises;

function render_components(cb) {
      console.log('Initiating render_components()...');
      build_components()
      .then(copy_components);
      console.log(chalk.green('render_components() complete!'));
      if (typeof cb === 'function') cb();
}
exports.render_components = render_components;

function copy_assets_content(cb) {

  return new Promise((resolve, reject) => {
    try {
      src(`${srcPath}/content/**/*`)
        // .pipe(changed(`${wwwPath}/content`))
        // .pipe(ngAnnotate())
        .pipe(dest(`${wwwPath}/content`))
        .pipe(browserSync.stream());
        // .pipe(debug({
        //   title: 'Copied content: '
        // }));
      console.log(chalk.green('Finished: copy_assets_content()'));
      resolve(cb);
    } catch (error) {

      reject(console.log(chalk.red('Error in copy_assets_content(): ' + error)));
    }
  });
}
exports.copy_assets_content = copy_assets_content;

function copy_css(cb) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        src(`${srcPath}/css/**/*`)
        .pipe(plumber(error => onError(error)))
          // .pipe(changed(`${wwwPath}/css`))
          // .pipe(ngAnnotate())
          .pipe(dest(`${wwwPath}/css`))
          .pipe(browserSync.stream());
          // .pipe(debug({
          //   title: 'Copied css: '
          // }))
        // if (typeof cb === 'function') {cb()}
        //
        //
        console.log(chalk.green('copy_css() complete!'));
        resolve(cb);
      }, 2000);
    } catch (error) {
      console.log(chalk.red('Error in copy_css(): ' + error));
      reject(()=>{ if (typeof cb === 'function') {cb()} });
    }
  });
}
exports.copy_css = copy_css;

function copy_images(cb) {
  return new Promise((resolve, reject) => {
    try {
      src(`${srcPath}/img/**/*.{png,jpg,gif,svg}`)
        // .pipe(changed(`${wwwPath}/img`))
        // .pipe(ngAnnotate())
        .pipe(dest(`${wwwPath}/img`))
        .pipe(browserSync.stream());
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
      console.log(chalk.green('copy_img() complete!'));
      resolve(cb);
    } catch (error) {
      console.error(chalk.red('Error in copy_assets_content(): ' + error));
      reject('Rejected copy_assets_content(): '+error);
    }
  });
}
exports.copy_images = copy_images;

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
          }))
          .pipe(browserSync.stream());
          if (typeof cb === 'function') {
            cb();
          }
        console.log(chalk.green('copy_mail() complete!'));
        resolve(cb);
      }, 2000);
    } catch (error) {
      console.error(chalk.red('Error in copy_assets_content(): ' + error));
      reject(`Rejected copy_assets_content(): ${error}`);
    }
  });
}
exports.copy_mail = copy_mail;

function copy_vendor(cb) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        src(`${srcPath}/vendor/**/*`)
          // .pipe(changed(`${wwwPath}/vendor`))
          // .pipe(ngAnnotate())
          // .pipe(rename({
          //   dirname: `${wwwPath}/vendor`
          // }))
          .pipe(dest(`${wwwPath}/vendor`))
          .pipe(browserSync.stream());
          // .pipe(debug({
          //   title: 'Copied vendor: '
          // }));

        // src([`${rootPath}/node_modules/bootstrap/www/**/*`, '!**/npm.js', '!**/bootstrap-theme.*'])
        //   // .pipe(changed(`${wwwPath}//vendor/bootstrap`))
        //   // .pipe(ngAnnotate())
        //   .pipe(debug({
        //     title: 'Copied bootstrap'
        //   }))
        //   .pipe(rename({
        //     dirname: `${wwwPath}/vendor/bootstrap`
        //   }))
        //   .pipe(dest('../'))

        // src([`${rootPath}/node_modules/jquery/dist/jquery.js`, `${rootPath}/node_modules/jquery/dist/jquery.min.js`])
        //   // .pipe(changed(`${wwwPath}/vendor/jquery`))
        //   // .pipe(ngAnnotate())
        //   .pipe(rename({
        //     dirname: `${wwwPath}/vendor/jquery`
        //   }))
        //   .pipe(debug({
        //     title: 'Copied jquery'
        //   }))
        //   .pipe(dest('../'))

        // src([
        //     `${rootPath}/node_modules/font-awesome/**`,
        //     `!${rootPath}/node_modules/font-awesome/**/*.map`,
        //     `!${rootPath}/node_modules/font-awesome/.npmignore`,
        //     `!${rootPath}/node_modules/font-awesome/*.txt`,
        //     `!${rootPath}/node_modules/font-awesome/*.md`,
        //     `!${rootPath}/node_modules/font-awesome/*.json`
        //   ])
        //   // .pipe(changed(`${wwwPath}/vendor/font-awesome`))
        //   // .pipe(ngAnnotate())
        //   .pipe(rename({
        //     dirname: `${wwwPath}/vendor/font-awesome`
        //   }))
        //   .pipe(debug({
        //     title: 'Copied font-awesome'
        //   }))
        //   .pipe(dest('../'))

        console.log(chalk.green('copy_vendor() complete!'));
        resolve(cb);
      }, 2000);
    } catch(error) {
      console.error(chalk.red('Error in copy_assets_content(): ' + error));
      reject('Rejected copy_assets_content(): ' + error);
    }
  });
}
exports.copy_vendor = copy_vendor;



function copy_components(cb) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        src('../www/build/**/*')
        // .pipe(debug({
        //   title: 'Copied origin component: '
        // }))
        .pipe(dest('../www-app/components'))
        .pipe(browserSync.stream());
        // .pipe(debug({
        //   title: 'Copied destination component: '
        // }))
        console.log(chalk.green('copy_components() Complete'));
        resolve(cb);
      }, 1000);
    } catch(error) {
      console.log(chalk.red(`Error in copy_components(): ${error}`));
      reject(`Rejected copy_components(): ${error}`);
    }
  });
}
exports.copy_components = copy_components;

function build_components(cb) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
  exec('../node_modules/.bin/stencil build --dev --docs-readme --debug', (error, stdout, stderr) => {
    if (error) {
        console.log(chalk.red(`error: ${error.message}`));
        browserSync.stream();
        return cb;
    } else {console.log(chalk.green('Components built!'))}
  });
  resolve(cb);
      }, 1000);
    } catch(error) {
      console.log(chalk.red('Error in build_components(): ' + error));
      reject('Rejected build_components(): ' + error);
    }
  });
}
exports.build_components = build_components;


// uncomment the line below for debugging
// runAssetsPromises()
