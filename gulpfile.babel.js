/* eslint-disable no-console,  no-useless-escape*/
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
require("@babel/register")({
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-transform-typescript",
    "babel-plugin-replace-ts-export-assignment",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "@babel/plugin-transform-runtime",
    ["import", {"libraryName": "@material-ui/core"}]
  ]
});
// eslint-disable no-unused-expressions
// eslint-disable no-undef
// eslint-disable camelcase
// eslint-disable no-unused-vars
// eslint-disable prefer-const
import path from 'path';

// let fs = require('fs-extra')
import {src, dest, gulp, task, watch, series, parallel} from 'gulp';
import copy from 'copy';

// var sass = require('gulp-sass')
import * as chokidar from 'chokidar';
import browserSync from 'browser-sync';
import header from 'gulp-header';
import browserify from 'browserify';
import babelify from 'babelify';
import ts from 'gulp-typescript';

// var cleanCSS = require('gulp-clean-css')
import rename from 'gulp-rename';

import uglify from 'gulp-uglify';
import pkg from './package.json';
import connect from 'gulp-connect-php';
import plumber from 'gulp-plumber';
import open from 'open';
import { exec } from 'child_process';

// var autoprefixer = require('gulp-autoprefixer')
// var postcss = require('gulp-postcss')
// var postcssCustomProperties = require('postcss-custom-properties')
import debug from 'gulp-debug';
import fs from 'fs-extra';
import changed from 'gulp-changed';
import ejs from 'gulp-ejs';
import log from 'fancy-log';
import chalk from 'chalk';
import ra from './build-scripts/render-assets';
import appRoot from 'app-root-path';
const srcPath = path.resolve(__dirname, 'src');
const srcCompPath = path.resolve(__dirname, 'src/components');
const buildPath = path.resolve(__dirname, 'www/build');
const wwwPath =  path.resolve(__dirname, 'www');
const distPath =  path.resolve(__dirname, 'dist');

let p = {

  src_js: `${srcPath}/js`,
  src_scss: `${srcPath}/scss`,
  src_html: srcPath,
  src_img: `${srcPath}/assets/img`,

  www_js: `${wwwPath}/assets/js`,
  www_css: `${wwwPath}/assets/css`,
  www_html: wwwPath,
  www_img: `${wwwPath}/assets/img`,

  dist_js: `${distPath}/assets/js`,
  dist_css: `${distPath}/assets/css`,
  dist_html: distPath,
  dist_img: `${distPath}/assets/img`
};

let assets = '{jpg,png,gif,svg,mp4}';
//#region region

// Compiles sassy files from /sassy into /css
// NOTE: This theme uses sassy by default. To swtich to sassy you will need to update this gulpfile by changing the 'less' tasks to run 'sass'!
// function sassy(cb) {
//   return src(['src/scss/heathshults.scss', 'src/scss/theme-dark-mode.scss'], {
//     sourcemaps: true
//   })
//     // .pipe(changed('www/css'))
//     .pipe(sass())
//     .pipe(autoprefixer())
//     .pipe(header(banner, {
//       pkg
//     }))
//     .pipe(dest(p.dist_css), {
//       sourcemap: '.',
//       overwrite: true
//     })
//     .pipe(cleanCSS({
//       compatibility: 'ie11'
//     }, ({
//       name,
//       stats
//     }) => {
//       console.log(`${name}: ${stats.originalSize}`);
//       console.log(`${name}: ${stats.minifiedSize}`);
//     }))
//     .pipe(rename({
//       suffix: '.min'
//     }))
//     .pipe(dest('www/css'), {
//       sourcemap: '.',
//       overwrite: true
//     })
//     .pipe(browserSync.reload({
//       stream: true
//     })),
//     () => {
//       if (typeof cb === 'function') {
//         cb(null, file);
//         called = true;
//       }
//     };
// }
// exports.sassy = sassy

// // Minify compiled CSS
// function minify_css(cb) {
//   sassy()
//   return src('www/css/heathshults.css')
//     .pipe(cleanCSS({
//       compatibility: 'ie8'
//     }))
//     .pipe(rename({
//       suffix: '.min'
//     }))
//     .pipe(dest('www/css/'))
//     .pipe(browserSync.reload({
//       stream: true
//     }))
//   if (typeof cb === 'function') {
//     cb(null, file);
//     called = true;
//   }
// }
// exports.minify_css = minify_css

// // create css variable fallback properties
// function css_variable_fallbacks() {
//   src('www/*.css').pipe(
//     postcss([
//       postcssCustomProperties( /* pluginOptions */ )
//     ])
//   ).pipe(
//     dest('.')
//   );
// }
// exports.css_variable_fallbacks =

// // Minify JS
// function minify_js(cb) {
//   return src('src/js/heathshults.js')
//     .pipe(changed('www/js'))
//     // .pipe(uglify())
//     .pipe(header(banner, {
//       pkg
//     }))
//     .pipe(dest('www/js'), {
//       overwrite: true
//     })
//     .pipe(rename({
//       suffix: '.min'
//     }))
//     .pipe(dest('www/js'), {
//       overwrite: true
//     })
//     .pipe(browserSync.reload({
//       stream: true
//     })),
//     () => {
//       if (typeof cb === 'function') {
//         cb(null, file);
//         called = true;
//       }
//     };
// }
// exports.minify_js = minify_js

//#endregion

// function copy_web_components(done) {
//   return new Promise((resolve, reject) => {
//     try {
//       setTimeout(() => {
//         copy('www/components/**/*', 'www/components', done);
//         console.log(chalk.green('web components copied to app-www/components'));
//         resolve(true);
//       }, 2000);
//     } catch(e) {
//       console.log(chalk.red("Error: " + e));
//       }
//     });
// }
// exports.copy_web_components = copy_web_components;
 
function ejsit(done) {
  return src(`${srcPath}/views/*.ejs`)
    .pipe(plumber())
    .pipe(ejs().on('error', log))
    .pipe(rename({ extname: ".html" }))
    .pipe(debug({ title: 'Compiled html: ' }))
    .pipe(dest(wwwPath, { overwrite: true, cwd: process.cwd() })), done();
}
exports.ejsit = ejsit;

function typeScript(cb) {
  return src(`${srcPath}/js/modules/*.ts`)
    .pipe(ts({
      declaration: true
    }))
    // .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: `${p.src_js}/module` }))
    .pipe(dest(`${srcPath}/js/module/_transpiled_ts`, { sourcemaps: '.' })),cb();
  
}
exports.typeScript = typeScript;

function babelfry(cb) {
  browserify(`${srcPath}/js/modules/bundle.js`, { entry: true, debug: true, extensions: ['.ts', '.js', '.tsx', '.jsx'] })
  .transform(babelify, {
    "extensions": ['.ts', '.js', '.tsx', '.jsx'],
    "presets": [
      "@babel/preset-env",
      "@babel/preset-typescript",
      "@babel/preset-react"
    ],
    "plugins": [
      ["@babel/plugin-transform-typescript", {"allowDeclareFields": true, "isTSX": true}],
      "@babel/plugin-transform-modules-commonjs",
      ["babel-plugin-transform-class-properties", { "legacy": true }],
      "@babel/plugin-transform-runtime"
    ],
    "compact": false,
    "sourceMap": true
  })
  .bundle()
  .on("error", function (err) { console.log(chalk.red("Error: " + err.message)) })
  .pipe(fs.createWriteStream(`${wwwPath}/assets/js/HeathScript.bundle.js`));
  
  console.log(chalk.green('Babelifried JS'));

   return () => {
    let file = '';
    if (typeof cb === 'function') {
      cb(null, file);
      called = true;
    }
  };


 
}
exports.babelfry = babelfry;
// exports.babelfry = series(typeScript, babelJS);
// function babelfry(cb){

//   browserify({ debug: true })
//   .transform(babelify)
//   .require(`${srcPath}/index.js`, { entry: true })
//   .bundle()
//   .on("error", function (err) { console.log(chalk.red("Error: " + err.message)) })
//   .pipe(fs.createWriteStream(`${wwwPath}/assets/js/HeathScript.built.js`)),
//   console.log(chalk.green('Babelifried JS')), cb();
// }
// exports.babelfry = babelfry;
function renderJS(cb) {
 
    console.log(chalk.yellow('starting JS renderrer...'));
    exec('sh build-scripts/build-js.sh', (error) => {
      if (error) {
        console.log(chalk.red(`ERROR Build JS:\n ${error.message}`));
        return `SCSS compile error${error}`;
      }
      console.log(chalk.green('JS Rendererred: HeathScript.bundle.js'));
      return true;
  
    });
  
    if (typeof cb === 'function') cb(null);
}
exports.renderJS = renderJS;

function parcelJS(cb) {
  exec('npx parcel build src/js/index.ts -d www/assets/js -o HeathScript.bundle.js', (error, stdout, stderr) => {
      if (error) {
          console.log("ERROR compileMain: \n stdout: " + stderr + "\n Error Message: " + error.message);
          return 'SCSS compile error'+error;
      }
      return true;

  });

  if (typeof cb === 'function') cb(null);
}
exports.parcelJS = parcelJS;

function sassy(done) {
  try {
    exec(`sass ${srcPath}/scss/styles.scss ${wwwPath}/assets/css/HeathStyle.built.css`, (error) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      } else {console.log('Sass compiled: HeathStyle.built.css')}
    });
  }
  catch(e) {
    console.log('HeathenError: ' + e);
  }

  try{
    exec(`sass ${srcPath}/scss/theme-dark-mode.scss ${wwwPath}/assets/css/theme-dark-mode.built.css`, (error, stdout, stderr) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      } else {console.log('Sass compiled: theme-dark-mode.built.css')}
    });
  }
  catch(e) {
    console.log('HeathenError: ' + e);
  }
  done();
}
exports.sassy = sassy;

function compileCSS(cb) {
  exec('node build-scripts/build-scss.js', (error, stdout, stderr) => {
      if (error) {
          console.log("ERROR compileMain: \n stdout: " + stderr + "\n Error Message: " + error.message);
          return 'SCSS compile error'+error;
      }
      return true;

  });

  if (typeof cb === 'function') cb(null);
}
exports.compileCSS = compileCSS;

function copy_img(cb) {
  src([
    `${srcPath}/assets/**/*.{jpg,png,gif,svg,mp4}`
    // 'src/content/**/*.{jpg,png,gif,svg,mp4,html}',
    // 'src/**/*.{jpg,png,gif,svg,mp4}'
  ])
    // .pipe(plumber())
    // .pipe(changed('www/'))
    .pipe(dest(`${wwwPath}/assets/img`), {
      overwrite: true
    })
    .pipe(debug({ title: 'copied' })), cb();
  // if (typeof cb === 'function') {
  //     cb(null, file);
  //     called = true;
  //   }
}
exports.copy_img = copy_img;

// Copy vendor libraries from /node_modules into /vendor
function copy_vendor(cb) {
  src([`${srcPath}/node_modules/bootstrap/www/**/*`, '!**/npm.js', '!**/bootstrap-theme.*'])
    .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${wwwPath}/assets/vendor/bootstrap`));

  src([`${srcPath}/node_modules/jquery/www/jquery.js`, 'node_modules/jquery/www/jquery.min.js'])
    .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${wwwPath}/assets/vendor/jquery`));

  src([
      `${srcPath}/node_modules/font-awesome/**`,
      `!${srcPath}/node_modules/font-awesome/**/*.map`,
      `!${srcPath}/node_modules/font-awesome/.npmignore`,
      `!${srcPath}/node_modules/font-awesome/*.txt`,
      `!${srcPath}/node_modules/font-awesome/*.md`,
      `!${srcPath}/node_modules/font-awesome/*.json`
    ])
    .pipe(plumber())
    .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${wwwPath}/assets/vendor/font-awesome`));

  src([`${srcPath}/assets/lib`])
    .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${wwwPath}/assets/lib`), {overwrite: true});

  src([`${srcPath}/assets/content/**/*`])
    .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${wwwPath}/assets/content`), {overwrite: true});

  src([`${srcPath}/assets/components/**/*.{html,css,js,json,php}`])
    .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${wwwPath}/assets/content`), {overwrite: true});
    
  src([`${srcPath}/global/**/*.{html,css,js,json,php}`])
    .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${wwwPath}/global/`), {overwrite: true});

  src([`${srcPath}/assets/vendor/**/*`])
    .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${wwwPath}/assets/vendor`), {overwrite: true}), cb();
  //   var file = ''
  // if (typeof cb === 'function') {
  //   cb(null, file);
  //   called = true;
  // }
}
exports.copy_vendor = copy_vendor;

function copy_html(cb) {
  src(`${srcPath}/layouts/**/*.html`)
  .pipe(plumber())
    // .pipe(changed(wwwPath))
    .pipe(dest(wwwPath), {
      overwrite: true
    })
    .pipe(debug({
      title: 'copied'
    })), cb();
  // if (typeof cb === 'function') {
  //     cb(null, file);
  //     called = true;
  //   }
}
exports.copy_html = copy_html;

function copy_css(cb) {
  src(`${srcPath}/assets/css/**/*.{css,map}`)
    .pipe(plumber())
    //.pipe(changed(`${wwwPath}/css`))
    .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${wwwPath}/assets/css`)), cb();
  // () => {
  //   let file = ''
  //   if (typeof cb === 'function') {
  //     cb(null, file);
  //     called = true;
  //   }
  // }
}
exports.copy_css = copy_css;

function copy_js(cb) {
  return new Promise((resolve, reject) => {
    console.log('LOOK! ' + appRoot);
    try {
      setTimeout(() => {
        
        src([
          'src/js/**/*',
          `!${srcPath}/js/jqBootstrapValidation.js`,
          `!${srcPath}/js/contact_me.js`,
          `!${srcPath}/js/HeathScript.js`,
          `!${srcPath}/js/modules/**/*`
        ])
        .pipe(rename({ dirname: 'www/assets/js'}))
        .pipe(dest('./'))
        .pipe(debug({title: 'Copied JS: '}));

         console.log(chalk.green('copy_js() Complete'));
        if (typeof cb === 'function') {
          cb();
        }
        resolve(cb);
      }, 1000);
    } catch(error) {
      console.log(chalk.red('Error in copy_js(): ' + error));
      reject('Rejected copy_js(): ' + error);
    }
  });
}
exports.copy_js = copy_js;

function render_components(cb) {
  console.log('Initiating render_components()...');
  build_components()
  .then(copy_components);
  console.log(chalk.green('render_components() complete!'));
  if (typeof cb === 'function') cb();
}
exports.render_components = render_components;

function build_components(cb) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
  exec('npm run comp:build:nowatch', (error) => {
    if (error) {
        console.log(chalk.red(`error: ${error.message}`));
        return cb;
    } else {
      console.log(chalk.green('Components built!'));
    }
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

function copy_components(cb) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        src(`${buildPath}/**/*`)
        // .pipe(debug({
        //   title: 'Copied origin component: '
        // }))
        .pipe(dest(`${wwwPath}/components`));
        // .pipe(debug({
        //   title: 'Copied destination component: '
        // }))
        console.log(chalk.green('copy_components() Complete'));
        if (typeof cb === 'function') {
          cb();
        }
        resolve(cb);
      }, 1000);
    } catch(error) {
      console.log(chalk.red('Error in copy_components(): ' + error));
      reject('Rejected copy_components(): ' + error);
    }
  });
}
exports.copy_components = copy_components;

function copy_assets(cb) {
  ra.copy_assets_content('first')
    .then(ra.copy_css)
    .then(ra.copy_images)
    .then(ra.copy_mail)
    .then(ra.copy_vendor)
    .then(ra.copy_html)
    .then(copy_js)
    .then(renderer());
    if (typeof cb === 'function') cb(null);

}
exports.copy_assets = copy_assets;

function renderer(cb) {
  series(compileCSS, babelfry, ejsit);
  if (typeof cb === 'function') cb();
}
exports.renderer = renderer;


function serve(cb) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        // connect.server({base: 'www/'}, function (){
        browserSync.init({
          // proxy: '127.0.0.1:8000',
          server: {
            baseDir: `${wwwPath}`,
            open: 'true',
            watch: true,
            notify: false,
            injectChanges: true
          }
        });
        resolve(cb);
      },2000 );
    }
    catch(e) {
      console.log('Error in browsersync: '+e);
      reject(cb);
    }
  });
    // })
}
exports.serve = serve;

// Configure the browserSync task
function serveSync(cb) {
  browserSync.init({
    server: {
        baseDir: `${wwwPath}`
    }
  });
  if (typeof cb === 'function') {
    cb(null, file);
    called = true;
  }
}
exports.serveSync = serveSync;

function connect_sync(cb) {

  connect.server({base: `${wwwPath}`}, function (){
    browserSync({
      proxy: '127.0.0.1:8000',
      open: 'localhost',
      watch: true,
      injectChanges: true,
    });
    
  });
  watchers;
  
  
  // jsWatcher = watch([`${srcPath}/js/modules/**/*.ts`, `${srcPath}/js/modules/**/*.js`, `${srcPath}/js/modules/**/*.tsx`, `${srcPath}/js/modules/**/*.jsx`]);
  
  // // const droppath = '/home/heathshults/_appdev/heathshults-web-ui/heathshults.com/src/js/modules';

  // jsWatcher.on('change', function(path, stats) {
  //   exec(` sh build-scripts/_build-js.sh`, (error) => {
  //     console.log(chalk.red(`typescript error: ${error}`));
  //   });

  //   // exec(`tsc --project ./tsconfig.build.json`, 
  //   // (error) => console.log(chalk.red(`typescript error: ${error}`)));

  //   // exec(`npx babel src/js/temp/${path.replace(droppath, '').replace(/.ts/, '.js')} -o www/assets/js/${path.replace(droppath, '').replace(/.ts/, '.js')}`, 
  //   // (error) => console.log(chalk.red(`error: ${error}`)));

  //   // exec(`npx browserify src/js/temp/${path.replace(droppath, '').replace(/.ts/, '.js')} -o www/assets/js/${path.replace(droppath, '').replace(/.ts/, '.js')}`, 
  //   // (error) => console.log(chalk.red(`error: ${error}`)));
  // });

  // jsWatcher.on('add', function(path, stats) {
  //     console.log(`File ${path.replace(/^.*[\\\/]/, '').replace(/.ts/, '.js')} was added`);
  // }), browserSync.reload;

  // jsWatcher.on('unlink', function(path, stats) {
  //   console.log(`File ${path.replace(/^.*[\\\/]/, '').replace(/.ts/, '.js')} was removed`);
  // }), browserSync.reload;

  // jsWatcher.close();

    // let file = '';
    // if (typeof cb === 'function') {
    //   cb(null, file);
    //   called = true;
    // }
  
}

exports.connect_sync = connect_sync;

function watchers() {
  watchJS;
  // eslint-disable-next-line no-sequences
  var callback = ()=>{if (typeof cb === 'function') {return cb()}return};
  watch(`${srcPath}/views/*.ejs`, ejsit).on('change', browserSync.reload), callback;
  watch([`${srcPath}/assets/img/**/*.{jpg,png,gif,svg}`, `${srcPath}/assets/content/**/*.{jpg,png,gif,svg}`], ra.copy_images).on('change', browserSync.reload), callback;
  watch([`${srcPath}/scss/**/*.scss`], compileCSS).on('change', browserSync.reload), callback;
  watch([`${srcPath}/**/*.html`], ra.copy_html).on('change', browserSync.reload), callback;
  watch([`${srcPath}/assets/**/*.css`], ra.copy_css).on('change', browserSync.reload), callback;
  watch([`${srcPath}/assets/**/*.css`], ra.copy_css).on('change', browserSync.reload), callback;
  watch([`${srcPath}/js/modules/**/*.{js,ts,tsx}`], babelfry).on('change', browserSync.reload), callback;
  // watch([`${srcPath}/js/modules/HeathScript.js`], renderJS(jsfile)).on('change', browserSync.reload), callback;  

  
  
}
exports.watchers = watchers;


function babelized(cb) {
  return new Promise((resolve,reject)=> {
    try {
      console.log('JS change detected...');
      exec(` sh build-scripts/_build-js.sh`, (error) =>  errorman(error));
      resolve(true);
    }
    catch(err) {
      errorman(err);
      reject('failed');
    }
  }),
  cb();
}

function errorman(error) {
  console.log(chalk.red(`typescript error: ${error}`));
}

function watchJS(cb) {
  const watchjs = watch([`${srcPath}/js/modules/**/*.{js,ts,tsx}`]);

  watchjs.on('change', babelfry);

  watchjs.on('add', function(path, stats) {
    console.log(`File ${path} was added`);
    exec(`ncp ${path} www/assets/js`, (error) =>  errorman(error));
  });

  watchjs.on('unlink', function(path, stats) {
    console.log(`File ${path} was removed`);
  });

  // watchjs.close();
  cb();
}
exports.watchJS = watchJS;
// var callback = ()=>{if (typeof cb === 'function') {return cb()}return};
// // close the server
// function close_server(cb) {
//   connect.closeServer();
//    if (typeof cb === 'function') 
//     return cb();
// }
// exports.close_server = close_server;
