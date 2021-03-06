/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
let path = require('path');

// let fs = require('fs-extra')
let {src, dest, gulp, task, watch, series, parallel} = require('gulp');

// var sass = require('gulp-sass')
var browserSync = require('browser-sync')
var header = require('gulp-header')
var browserify = require('browserify')
var babelify = require('babelify')
// var cleanCSS = require('gulp-clean-css')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
var pkg = require('../package.json')
var connect = require('gulp-connect-php')
var plumber = require('gulp-plumber')
var open = require('open')
var { exec } = require('child_process')
// var autoprefixer = require('gulp-autoprefixer')
// var postcss = require('gulp-postcss')
// var postcssCustomProperties = require('postcss-custom-properties')
var debug = require('gulp-debug')
var changed = require('gulp-changed')
var ejs = require('gulp-ejs')
var log = require('fancy-log')

var srcPath = path.resolve('../', 'src')
var distPath =  path.resolve('../', 'dist')

let p = {

  src_js: `${srcPath}/assets/js`,
  src_scss: `${srcPath}/scss`,
  src_html: src,
  src_img: `${srcPath}/assets/img`,

  dist_js: `${distPath}/assets/js`,
  dist_css: `${distPath}/assets/css`,
  dist_html: distPath,
  dist_img: `${distPath}/assets/img`
}

let assets = '{jpg,png,gif,svg,mp4}'

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

function ejsit(done) {
  return src(`${srcPath}/*.ejs`, null, null)
    .pipe(plumber())
    .pipe(ejs().on('error', log))
    .pipe(rename({
      extname: ".html"
    }))
    .pipe(debug({ title: 'compiled html: ' }))
    .pipe(dest(distPath, { overwrite: true, cwd: process.cwd() })), done()
}
exports.ejsit = ejsit

function jsify(cb){
  var fs = require("fs");

  browserify({ debug: true })
  .transform(babelify)
  .require(`${srcPath}/index.js`, { entry: true })
  .bundle()
  .on("error", function (err) { console.log("Error: " + err.message); })
  .pipe(fs.createWriteStream(`${distPath}/assets/js/HeathScript.built.js`))
  , cb();
}
exports.jsify = jsify

// function js(done) {
//   try {
//     exec('./node_modules/.bin/webpack --config webpack-js.js --mode development --display-error-details --verbose --watch --colors', (error, stdout, stderr) => {
//       if (error) {
//           console.log(`error: ${error.message}`);
//           return;
//       }
//     })
//   }
//   catch(e) {
//     console.log('HeathenError: ' + e)
//   }
//   done()
// }
// exports.js = js

function sassy(done) {
  try {
    exec(`sass ${srcPath}/scss/styles.scss ${distPath}/assets/css/HeathStyle.built.css`, (error, stdout, stderr) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      } else {console.log('Sass compiled: HeathStyle.built.css')}
    })
  }
  catch(e) {
    console.log('HeathenError: ' + e)
  }

  try{
    exec(`sass ${srcPath}/scss/theme-dark-mode.scss ${distPath}/assets/css/theme-dark-mode.built.css`, (error, stdout, stderr) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      } else {console.log('Sass compiled: theme-dark-mode.built.css')}
    })
  }
  catch(e) {
    console.log('HeathenError: ' + e)
  }
  done()
}
exports.sassy = sassy

function copy_img(cb) {
  src([
    `${srcPath}/assets/**/*.{jpg,png,gif,svg,mp4}`
    // 'src/content/**/*.{jpg,png,gif,svg,mp4,html}',
    // 'src/**/*.{jpg,png,gif,svg,mp4}'
  ])
    // .pipe(plumber())
    // .pipe(changed('www/'))
    .pipe(dest(`${distPath}/assets/img`), {
      overwrite: true
    })
    .pipe(debug({ title: 'copied' })), cb();
  // if (typeof cb === 'function') {
  //     cb(null, file);
  //     called = true;
  //   }
}
exports.copy_img = copy_img

// Copy vendor libraries from /node_modules into /vendor
function copy_vendor(cb) {
  src([`${srcPath}/node_modules/bootstrap/dist/**/*`, '!**/npm.js', '!**/bootstrap-theme.*'])
  .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${distPath}/assets/vendor/bootstrap`))

  src([`${srcPath}/node_modules/jquery/dist/jquery.js`, 'node_modules/jquery/dist/jquery.min.js'])
  .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${distPath}/assets/vendor/jquery`))

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
    .pipe(dest(`${distPath}/assets/vendor/font-awesome`))

    src([`${srcPath}/assets/lib`])
    .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${distPath}/assets/lib`), {overwrite: true})

    src([`${srcPath}/assets/content/**/*`])
    .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${distPath}/assets/content`), {overwrite: true})

    src([`${srcPath}/assets/components/**/*.{html,css,js,json,php}`])
    .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${distPath}/assets/content`), {overwrite: true})

    src([`${srcPath}/assets/vendor/**/*`])
    .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${distPath}/assets/vendor`), {overwrite: true}), cb()
  //   var file = ''
  // if (typeof cb === 'function') {
  //   cb(null, file);
  //   called = true;
  // }
}
exports.copy_vendor = copy_vendor

function copy_html(cb) {
  src(`${srcPath}/layouts/**/*.html`)
  .pipe(plumber())
    // .pipe(changed(distPath))
    .pipe(dest(distPath), {
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
exports.copy_html = copy_html

function copy_css(cb) {
  src(`${srcPath}/assets/css/**/*.{css,map}`)
    .pipe(plumber())
    //.pipe(changed(`${distPath}/css`))
    .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${distPath}/assets/css`)), cb()
  // () => {
  //   let file = ''
  //   if (typeof cb === 'function') {
  //     cb(null, file);
  //     called = true;
  //   }
  // }
}
exports.copy_css = copy_css

function copy_js(cb) {
  src(`${srcPath}/assets/js/**/*.{js,json,map}`)
    .pipe(plumber())
    //.pipe(changed(`${distPath}/js`))
    .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${distPath}/assets/js`)), cb()
  // () => {
  //   let file = ''
  //   if (typeof cb === 'function') {
  //     cb(null, file);
  //     called = true;
  //   }
  // }
}
exports.copy_js = copy_js

function copy_components(cb) {
  exec('stencil build', (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    } else {console.log('Components built. Stencil will now chill...')}
  }), cb()
  // src('src/components/**/*.{js,json,html,css}')
  //   .pipe(plumber())
     //.pipe(changed(`${distPath}/js`))
    //  .pipe(debug({ title: 'copied' }))
    // .pipe(dest('www/')), cb()
    // () => {
    //   let file = ''
    //   if (typeof cb === 'function') {
    //     cb(null, file);
    //     called = true;
    //   }
    // }
}
exports.copy_components = copy_components

function copy_assets(cb) {
  src(`${srcPath}/assets/**/*.${assets}`)
    .pipe(plumber())
    .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${distPath}/assets/`)),
    () => {
      let file = ''
      if (typeof cb === 'function') {
        cb(null, file);
        called = true;
      }
    }
}
exports.copy_assets = copy_assets

function copy_all (cb) { series(sassy, copy_js, copy_vendor, ejsit, copy_img ), cb() }
exports.copy_all = copy_all

function copy_dev (cb) { series(copy_css, copy_js, copy_vendor, copy_img ), cb() }
exports.copy_dev = copy_dev

function watchers(cb) {
  // connect.server({base: 'www/'}, function (){
    browserSync.init({
      // proxy: '127.0.0.1:8000',
      server: {
        baseDir: `${distPath}`,
        open: 'true',
        watch: true,
        notify: false,
        injectChanges: true
      }
    })

  // })
  , cb()

  // eslint-disable-next-line no-sequences
  watch(`${srcPath}/*.ejs`, ejsit), cb()
  watch([`${srcPath}/assets/img/**/*.{jpg,png,gif,svg}`, `${srcPath}/assets/content/**/*.{jpg,png,gif,svg}`], copy_img), cb()
  watch([`${srcPath}/scss/**/*.scss`], sassy), cb()
  watch([`${srcPath}/assets/**/*.css`], copy_css), cb()
  watch([`${srcPath}/assets/js/*.{js,json,mjs,cjs}`, `!${srcPath}/assets/js/HeathScript.js`], copy_js), cb()
  watch([`${srcPath}/assets/js/**/*.js`], jsify), cb()
  // watch(`${srcPath}/components/**/*.{js,json,html,css}`, copy_components), cb()
}
exports.watchers = watchers

// Configure the browserSync task
function serve(cb) {
    browserSync.init({
        server: {
            baseDir: `${distPath}`
        },
    })
if (typeof cb === 'function') {
    cb(null, file);
    called = true;
  }
}
exports.serve = serve

function connect_sync(cb) {

  connect.server({base: `${distPath}`}, function (){
    browserSync({
      proxy: '127.0.0.1:8000',
      open: 'localhost',
      watch: true,
      injectChanges: true,
      files: [
        {
            match: [`${distPath}/**/*.php`, `${distPath}/**/*.css`, `${distPath}/**/*.{jpg,png,gif,svg}`, `${distPath}/**/*.js`, `${distPath}/**/*.html`],
            fn: function (event, file) {
               browserSync.reload()
            },
            options: {
                ignored: ['package.json']
            }
        }
    ]
    });
  }), cb()

  // let file = ''
  // if (typeof cb === 'function') {
  //   cb(null, file);
  //   called = true;
  // }

}
exports.connect_sync = connect_sync

// close the server
function close_server(cb) {
  connect.closeServer()
  if (typeof cb === 'function') {
    cb(null, file);
    called = true;
  }
}
exports.close_server = close_server

// Dev task with browserSync
function watchers2(cb) {

  watch(`${srcPath}/scss/*.scss`, {
    readDelay: 500,
    verbose: true
  }, sassy);
  // watch('src/css/*.css', {readDelay: 500, verbose: true }, minify_css);
  watch(`${srcPath}c/assets/js/*.js`, {
    readDelay: 500,
    verbose: true
  }, copy_js);
  // Reloads the browser whenever HTML or JS files change
  watch(`${srcPath}/*.ejs`, ejsit);
  watch(`${srcPath}/assets/**/*.{jpg,png,gif,svg,mp4}`, {
    readDelay: 500,
    verbose: true
  }, copy_assets, browserSync.reload)
  // let file = ''
  // if (typeof cb === 'function') {
  //       cb(null, file);
  //       called = true;
  //     };
}
exports.watchers2 = watchers2

// // Run everything
// exports.build = series(sassy, minify_css, minify_js, copy_vendors)

exports.setup_develop = series(sassy, jsify, copy_js, copy_vendor, ejsit, copy_img, copy_css)
exports.build = series(copy_all)
