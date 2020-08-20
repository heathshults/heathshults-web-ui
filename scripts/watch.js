
const path = require('path');
const { watch } = require('gulp')
const renderAssets = require('./render-assets.js');
const renderJS = require('./render-scripts')
const renderEJS = require('./render-ejs');
const renderPug = require('./render-pug');
const renderSCSS = require('./render-scss');

// var destPath =  path.resolve(__dirname, '../www-app-app')
var srcPath = path.resolve(__dirname, '../src')

function watchers(cb) {
  cb = () => {if (typeof cb === 'function'){cb(null); called = true}}
  watch(`${srcPath}/*.ejs`, (cb) => { renderEJS.ejsit(), cb() })
  watch(`${srcPath}/pug/*.pug`, (cb) => { renderPug.renderPug(), cb() })
  watch([`${srcPath}/assets/img/**/*.{jpg,png,gif,svg}`, `${srcPath}/assets/content/**/*.{jpg,png,gif,svg}`], (cb) => {renderAssets.copy_images(), cb()})
  watch([`${srcPath}/scss/**/*.scss`], (cb) => {renderSCSS.renderSCSS(), cb()})
  watch([`${srcPath}/assets/**/*.css`], (cb) => {renderAssets.copy_css(), cb()})
  watch([`${srcPath}/js/*.{js,json,mjs,cjs,tsx}`, `!${srcPath}/js/HeathScript.js`], (cb) => {renderAssets.copy_js(), cb()})
  watch([`${srcPath}/js/HeathScript.js`], (cb) => {renderJS.HeathenScriptJS('../www-app/assets/js'), cb()})
  cb()
}
exports.watchers = watchers
// watchers()
