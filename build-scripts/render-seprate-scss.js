'use strict';
// const autoprefixer = require('autoprefixer')
const fs = require('fs');
const path = require('path');
// const postcss = require('postcss')
const { exec } = require('child_process');
var appRoot = require('app-root-path');
var chalk = require('chalk');
// const banner = require('./goCreds')
const prependFile = require('prepend-file');




// var result;
function renderSCSS(callback) {
  // console.log('starting inside...');
  const bsmods = [
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_reboot.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_type.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_images.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_code.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_grid.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_tables.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_forms.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_buttons.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_transitions.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_dropdown.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_button-group.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_input-group.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_custom-forms.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_nav.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_navbar.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_card.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_breadcrumb.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_pagination.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_badge.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_jumbotron.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_alert.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_progress.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_media.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_list-group.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_close.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_toasts.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_modal.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_tooltip.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_popover.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_carousel.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_spinners.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_utilities.scss',
    '/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/scss/_print.scss'
  ];
  console.log(JSON.stringify(bsmods));
  
  
  
  bsmods.map((mod) => {
    // var diditcred
    var inFile = mod;
    var inFileName = path.basename(mod);
    var outTempFileName = inFileName.replace('_', '');
    var outTempCSSFileName = outTempFileName.replace('scss', 'css');
    var outTempFile = `/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/temp/${inFileName}`;
    var outTempFilePath = `/home/heathshults/_appdev/heathshults-web-ui/src/scss/bootstrap/temp/`;
    var outFilePath = `/home/heathshults/_appdev/heathshults-web-ui/src/components/global`;
    
    console.log(`in file: ${mod}`);
    console.log(`inFileName: ${inFileName}`);
    console.log(`out temp file path: ${outTempFilePath}`);
    console.log(`out temp name: ${outTempFileName}`);
    console.log(`out: ${outFilePath}`);
    
    fs.copyFile(mod, outTempFilePath + outTempFileName, (err) => {
      if (err) throw err;
      console.log(`${inFile} was copied to ${outTempFile}`);
    });
    
    var injectText = `
    @import "../scss/_functions.scss";
    @import "../scss/_variables.scss";
    @import "../scss/_mixins.scss";`;
    
    (async () => {
      await prependFile(`${outTempFilePath}${outTempFileName}`, injectText);
    });
    var finalOutSCSSFile = `${outTempFilePath}${outTempFileName}`;
    
    console.log(`outTempFilePath: ${outTempFilePath}`);
    console.log(`OUTFILE SCSS: ${finalOutSCSSFile}`);
    
    var inStyleSheet = finalOutSCSSFile;
    var outStyleSheet = `${outFilePath}/${outTempCSSFileName}`;
    console.log(`OUTFILE CSS: ${outStyleSheet}`);

    exec(`sass ${inStyleSheet} ${outStyleSheet}`, (error) => {
      if (error) {
        console.log(chalk.red(`ERROR compileMain: ${error.message}`));
        return false;
      }
      return;
    });
  });

  console.log(chalk.green('CSS compiled'));
  return callback;
}
exports.renderSCSS = renderSCSS;

renderSCSS();



