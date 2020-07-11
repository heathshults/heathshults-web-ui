'use strict';
const autoprefixer = require('autoprefixer')
const fs = require('fs');
const path = require('path');
const postcss = require('postcss')
const { exec } = require('child_process')
// const sass = require('sass');
// const sh = require('shelljs');
// const { accredation } = require("./intellectualAccredation");

const srcDir = path.resolve('../', 'src')
const distDir =  path.resolve('../', 'dist')
var appRoot = require('app-root-path');
const mainStyleSheetIn = `${appRoot}/src/scss/styles.scss`
const mainStyleSheetOut = `${appRoot}/dist/assets/css/HeathStyle.built.css`
const darkStyleSheetIn = `${appRoot}/src/scss/theme-dark-mode.scss`
const darkStyleSheetOut = `${appRoot}/dist/assets/css/theme-dark-mode.scss`
console.log(`Main: ${mainStyleSheetIn}`)
// const stylesPath = `${srcDir}/scss/styles.scss`;
// exports.stylesPath = stylesPath;
// const destPath = path.resolve(path.dirname(__filename), '../dist/css/HeathStyle.built.css');

module.exports = function renderSCSS(callback) {

  try {
    exec(`sass ${mainStyleSheetIn} ${mainStyleSheetOut}`, (error, stdout, stderr) => {
      if (error) {
          console.log(`error: ${error.message}`);
          console.log(`stderr: ${stderr}`);
          return;
      } else {console.log('Sass compiled: HeathStyle.built.css:/n' + stdout)}
    })
  }
  catch(e) {
    console.log('HeathenError: ' + e)
  }

  try{
    exec(`sass ${darkStyleSheetIn} ${darkStyleSheetOut}`, (error, stdout, stderr) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      } else {console.log('Sass compiled: theme-dark-mode.built.css')}
    })
  }
  catch(e) {
    console.log('HeathenError: ' + e)
  }

  const postCSSpath = `${appRoot}/node_modules/.bin`
  const cssInOutPath = `${appRoot}/dist/assets/css`
  try{
    exec(`node ${postCSSpath}/postcss --use autoprefixer --autoprefixer.browsers "> 5% -m -o ${mainStyleSheetOut} ${mainStyleSheetOut} && ${postCSSpath}/postcss --use autoprefixer --autoprefixer.browsers "> 5% -m -o ${darkStyleSheetOut} ${darkStyleSheetOut}`, (error, stdout, stderr) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      } else {console.log('AutoPrefixed: all css')}
    })
  }
  catch(e) {
    console.log('HeathenError: ' + e)
  }

  if (typeof callback == "function") callback();

}


    // const results = sass.renderSync({
    //     data: accredation,
    //     includePaths: [
    //         path.resolve(path.dirname(__filename), '../node_modules')
    //     ],
    //   });

    // const destPathDirname = path.dirname(destPath);
    // if (!sh.test('-e', destPathDirname)) {
    //     sh.mkdir('-p', destPathDirname);
    // }

    // postcss([ autoprefixer ]).process(results.css, {from: 'HeathStyle.built.css', to: 'HeathStyle.built.css'}).then(result => {
    //     result.warnings().forEach(warn => {
    //         console.warn(warn.toString())
    //     })
    //     fs.writeFileSync(destPath, result.css.toString());
    // })


// };


