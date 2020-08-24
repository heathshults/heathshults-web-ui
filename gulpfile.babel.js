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
var pkg = require('./package.json')
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
var chalk = require('chalk')
var ra =require('./scripts/render-assets')

var srcPath = path.resolve(__dirname, 'src')
var wwwPath =  path.resolve(__dirname, 'www-app')
var distPath =  path.resolve(__dirname, 'dist')

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
}

let assets = '{jpg,png,gif,svg,mp4}'
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

function ejsit(done) {
  return src(`${srcPath}/views/**/*.ejs`)
    .pipe(plumber())
    .pipe(ejs().on('error', log))
    .pipe(rename({ extname: ".html" }))
    .pipe(debug({ title: 'Compiled html: ' }))
    .pipe(dest(wwwPath, { overwrite: true, cwd: process.cwd() })), done()
}
exports.ejsit = ejsit

function babelfry(cb){
  var fs = require("fs");

  browserify({ debug: true })
  .transform(babelify)
  .require(`${srcPath}/index.js`, { entry: true })
  .bundle()
  .on("error", function (err) { console.log(chalk.red("Error: " + err.message)); })
  .pipe(fs.createWriteStream(`${wwwPath}/assets/js/HeathScript.built.js`)),
  console.log(chalk.green('Babelifried JS')), cb();
}
exports.babelfry = babelfry

function renderJS(cb) {
  console.log(chalk.yellow('starting JS renderrer...'))
  exec('node scripts/build-scripts-launcher.js', (error, stdout, stderr) => {
    if (error) {
        console.log(chalk.red("ERROR renderJS: \n stdout: " + stderr + "\n Error Message: " + error.message));
        return 'renderJS error'+error
    }
    console.log(chalk.green('JS Rendererred: HeathScript.built.js'))
    return true
  })
  if (typeof cb === 'function') cb()
}
exports.renderJS = renderJS

function sassy(done) {
  try {
    exec(`sass ${srcPath}/scss/styles.scss ${wwwPath}/assets/css/HeathStyle.built.css`, (error, stdout, stderr) => {
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
    exec(`sass ${srcPath}/scss/theme-dark-mode.scss ${wwwPath}/assets/css/theme-dark-mode.built.css`, (error, stdout, stderr) => {
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

function compileCSS(cb) {
  exec('node scripts/build-scss.js', (error, stdout, stderr) => {
      if (error) {
          console.log("ERROR compileMain: \n stdout: " + stderr + "\n Error Message: " + error.message);
          return 'SCSS compile error'+error
      }
      return true

  })

  if (typeof cb === 'function') cb(null)
}
exports.compileCSS = compileCSS

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
exports.copy_img = copy_img

// Copy vendor libraries from /node_modules into /vendor
function copy_vendor(cb) {
  src([`${srcPath}/node_modules/bootstrap/www/**/*`, '!**/npm.js', '!**/bootstrap-theme.*'])
  .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${wwwPath}/assets/vendor/bootstrap`))

  src([`${srcPath}/node_modules/jquery/www/jquery.js`, 'node_modules/jquery/www/jquery.min.js'])
  .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${wwwPath}/assets/vendor/jquery`))

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
    .pipe(dest(`${wwwPath}/assets/vendor/font-awesome`))

    src([`${srcPath}/assets/lib`])
    .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${wwwPath}/assets/lib`), {overwrite: true})

    src([`${srcPath}/assets/content/**/*`])
    .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${wwwPath}/assets/content`), {overwrite: true})

    src([`${srcPath}/assets/components/**/*.{html,css,js,json,php}`])
    .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${wwwPath}/assets/content`), {overwrite: true})

    src([`${srcPath}/assets/vendor/**/*`])
    .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${wwwPath}/assets/vendor`), {overwrite: true}), cb()
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
exports.copy_html = copy_html

function copy_css(cb) {
  src(`${srcPath}/assets/css/**/*.{css,map}`)
    .pipe(plumber())
    //.pipe(changed(`${wwwPath}/css`))
    .pipe(debug({ title: 'copied' }))
    .pipe(dest(`${wwwPath}/assets/css`)), cb()
  // () => {
  //   let file = ''
  //   if (typeof cb === 'function') {
  //     cb(null, file);
  //     called = true;
  //   }
  // }
}
exports.copy_css = copy_css

// function copy_js(cb) {
//   src(`${srcPath}/assets/js/**/*.{js,json,map}`)
//     .pipe(plumber())
//     //.pipe(changed(`${wwwPath}/js`))
//     .pipe(debug({ title: 'copied' }))
//     .pipe(dest(`${wwwPath}/assets/js`)), cb()
//   // () => {
//   //   let file = ''
//   //   if (typeof cb === 'function') {
//   //     cb(null, file);
//   //     called = true;
//   //   }
//   // }
// }
// exports.copy_js = copy_js

function copy_components(cb) {
  exec('stencil build', (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    } else {console.log('Components built. Stencil will now chill...')}
  }), cb()
  // src('src/components/**/*.{js,json,html,css}')
  //   .pipe(plumber())
     //.pipe(changed(`${wwwPath}/js`))
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
  ra.copy_assets_content('first')
    .then(ra.copy_css)
    .then(ra.copy_images)
    .then(ra.copy_mail)
    .then(ra.copy_vendor)
    .then(ra.copy_js)
    .then(renderer());
    if (typeof cb === 'function') cb(null)

}
exports.copy_assets = copy_assets

function renderer(cb) {
  series(compileCSS, babelfry, ejsit)
  if (typeof cb === 'function') cb()
}
exports.renderer = renderer

function copy_dev(cb) {
  series(copy_css, ra.copy_js, copy_vendor, copy_img )
  if (typeof cb === 'function') cb()
}
exports.copy_dev = copy_dev

function build_components(cb) {
  exec('node_modules/.bin/stencil build --dev --docs-readme --debug')
  if (typeof cb === 'function') cb()
}
exports.build_components = build_components


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
        })
        resolve()
      },2000 )
    }
    catch(e) {
      console.log('Error in browsersync: '+e)
      reject()
    }
  })
    // })
}
exports.serve = serve

function watchers(cb) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
         browserSync.init({
          // proxy: '127.0.0.1:8000',
          server: {
            baseDir: `${wwwPath}`,
            open: 'true',
            watch: true,
            notify: false,
            injectChanges: true
          }
        })
        // eslint-disable-next-line no-sequences
        var callback = ()=>{if (typeof cb === 'function') {return cb()}return};
        watch(`${srcPath}/views/*.ejs`, ejsit), callback;
        watch([`${srcPath}/assets/img/**/*.{jpg,png,gif,svg}`, `${srcPath}/assets/content/**/*.{jpg,png,gif,svg}`], ra.copy_images().then(callback));
        watch([`${srcPath}/scss/**/*.scss`], compileCSS), callback;
        watch([`${srcPath}/assets/**/*.css`], ra.copy_css().then( callback ));
        watch([`${srcPath}/assets/js/*.{js,json,mjs,cjs}`, `!${srcPath}/assets/js/HeathScript.js`], ra.copy_js().then(callback));
        watch(['www/build/**/*`'], ra.copy_components().then(callback));
        watch([`${srcPath}/assets/js/HeathScript.js`], babelfry), callback;
        watch([`${srcPath}/components/**/*`], build_components), callback;
        resolve(callback)
      },2000 )
    }
    catch(e) {
      console.log('Error in watchers: '+e)
      reject()
    }

    // })


    if (typeof cb === 'function') {cb()}
  })
}
exports.watchers = watchers

// Configure the browserSync task
function serveSync(cb) {
    browserSync.init({
        server: {
            baseDir: `${wwwPath}`
        },
    })
if (typeof cb === 'function') {
    cb(null, file);
    called = true;
  }
}
exports.serveSync = serveSync

function connect_sync(cb) {

  connect.server({base: `${wwwPath}`}, function (){
    browserSync({
      proxy: '127.0.0.1:8000',
      open: 'localhost',
      watch: true,
      injectChanges: true,
      files: [
        {
            match: [`${wwwPath}/**/*.php`, `${wwwPath}/**/*.css`, `${wwwPath}/**/*.{jpg,png,gif,svg}`, `${wwwPath}/**/*.js`, `${wwwPath}/**/*.html`],
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
  }, ra.copy_js);
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

exports.setup_develop = series(compileCSS, renderJS, copy_assets, ejsit)
exports.build = series(copy_assets)
