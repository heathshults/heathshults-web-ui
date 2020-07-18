
const path = require('path');
const { watch } = require('gulp')
const RenderAssets = require('./render-assets2.js');
const renderJS = require('./build-scripts')
const renderEJS = require('./render-ejs');
const renderPug = require('./render-pug');
const renderSCSS = require('./render-scss');

var r = new RenderAssets


// var destPath =  path.resolve(__dirname, '../www')
var srcPath = path.resolve(__dirname, '../src')

// r.copy_assets_content()
// r.copy_css()
// r.copy_images()
// r.copy_js()
// r.copy_mail()
// r.copy_vendor()


function watchers(cb) {
  cb = () => {if (typeof cb === 'function'){cb(null); called = true}}
  watch(`${srcPath}/*.ejs`, renderEJS.ejsit()), cb
  watch(`${srcPath}/pug/*.pug`, renderPug.renderPug()), cb
  watch([`${srcPath}/assets/img/**/*.{jpg,png,gif,svg}`, `${srcPath}/assets/content/**/*.{jpg,png,gif,svg}`], r.copy_images()), cb
  watch([`${srcPath}/scss/**/*.scss`], renderSCSS.renderSCSS()), cb
  watch([`${srcPath}/assets/**/*.css`], r.copy_css()), cb
  watch([`${srcPath}/js/*.{js,json,mjs,cjs,tsx}`, `!${srcPath}/js/HeathScript.js`], r.copy_js()), cb
  watch([`${srcPath}/js/HeathScript.js`], renderJS), cb

}
exports.watchers = watchers
watchers()






// const watcher = chokidar.watch('src', {
//     persistent: true,
// });

// let READY = false;

// process.title = 'pug-watch';
// process.stdout.write('Loading');
// let allPugFiles = {};

// watcher.on('add', filePath => _processFile(filePath, 'add'));
// watcher.on('change', filePath => _processFile(filePath, 'change'));
// watcher.on('ready', () => {
//     READY = true;
//     console.log(' READY TO ROLL!');
// });

// _handleSCSS();

// function _processFile(filePath, watchEvent) {

//     if (!READY) {
//         if (filePath.match(/\.pug$/)) {
//             if (!filePath.match(/includes/) && !filePath.match(/mixins/) && !filePath.match(/\/pug\/layouts\//)) {
//                 allPugFiles[filePath] = true;
//             }
//         }
//         process.stdout.write('.');
//         return;
//     }

//     console.log(`### INFO: File event: ${watchEvent}: ${filePath}`);

//     if (filePath.match(/\.pug$/)) {
//         return _handlePug(filePath, watchEvent);
//     }

//     if (filePath.match(/\.scss$/)) {
//         if (watchEvent === 'change') {
//             return _handleSCSS(filePath, watchEvent);
//         }
//         return;
//     }

//     if (filePath.match(/src\/js\//)) {
//         return renderScripts();
//     }

//     if (filePath.match(/src\/ejs\//)) {
//         return _renderEJS();
//     }

//     if (filePath.match(/src\/assets\//)) {
//       exec(`node ${renjsPath}`)
//       return;
//     }

//     // if (filePath.match(/src\/assets\//)) {
//     //     return renderAssets();
//     // }

// }

// function _handlePug(filePath, watchEvent) {
//     if (watchEvent === 'change') {
//         if (filePath.match(/includes/) || filePath.match(/mixins/) || filePath.match(/\/pug\/layouts\//)) {
//             return _renderAllPug();
//         }
//         return renderPug(filePath);
//     }
//     if (!filePath.match(/includes/) && !filePath.match(/mixins/) && !filePath.match(/\/pug\/layouts\//)) {
//         return renderPug(filePath);
//     }
// }

// function _renderAllPug() {
//     console.log('### INFO: Rendering All');
//     _.each(allPugFiles, (value, filePath) => {
//         renderPug(filePath);
//     });
// }

// function _renderEJS() {
//   ejsit.ejsit()
// }

// function _handleSCSS() {
//     rSCSS.renderSCSS();
// }
