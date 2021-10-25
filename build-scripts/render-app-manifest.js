const path = require('path');
const {src,dest} = require('gulp');
const plumber = require('gulp-plumber');
const log = require('fancy-log');
const manifest = require('gulp-manifest');
const chalk = require('chalk');

const wwwPath = path.resolve(__dirname, '../www');

function appmanifest(cb) {
  
  log(chalk.yellow('Building app.manifest'));
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          src([`${wwwPath}/**/*`], {base: './'})
            .pipe(plumber())
            .pipe(manifest({
              hash: true,
              preferOnline: true,
              network: ['*'],
              filename: 'app.manifest',
              exclude: 'app.manifest'
             }))
            .pipe(dest(wwwPath));
            log(chalk.green('app.manifest created!'));

          resolve(cb);
        }, 1000);
        } catch(error) {
          log(chalk.red('Error in render-app-manifest(): ' + error));
          reject('Rejected appmanifest(): ' + error);
        }
    });
}
exports.appmanifest = appmanifest;
appmanifest();
