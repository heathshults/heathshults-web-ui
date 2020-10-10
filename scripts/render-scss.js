'use strict';
// const autoprefixer = require('autoprefixer')
// const fs = require('fs');
// const path = require('path');
// const postcss = require('postcss')
const { exec } = require('child_process')
var appRoot = require('app-root-path');
var chalk = require('chalk')
// const banner = require('./goCreds')
var browserSync = require('browser-sync')
// vars
const mainStyleSheetIn = `${appRoot}/src/scss/styles.scss`
const mainStyleSheetOut = `${appRoot}/www-app/assets/css/HeathStyle.built.css`
const darkStyleSheetIn = `${appRoot}/src/scss/theme-dark-mode.scss`
const darkStyleSheetOut = `${appRoot}/www-app/assets/css/theme-dark-mode.css`
// console.log('starting outside...')

var theStyleSheets = [
  {
    inFile: mainStyleSheetIn,
    outFile: mainStyleSheetOut
  },
  {
    inFile: darkStyleSheetIn,
    outFile: darkStyleSheetOut
  }
]

var result

function renderSCSS(callback) {
  console.log('starting inside...');

  theStyleSheets.forEach((sheet) => {
    // var diditcred
    var inStyleSheet = sheet.inFile
    var outStyleSheet = sheet.outFile

    console.log(inStyleSheet, outStyleSheet)

    exec(`sass ${inStyleSheet} ${outStyleSheet}`, (error) => {
      if (error) {
          console.log(chalk.red(`ERROR compileMain: ${error.message}`));
          return false;

      } //else {
      return true;
        // diditcred = addCredBanner(outStyleSheet)
        // diditcred = 'Success' ? result =  'Success' + console.log('Sass compiled: ' + outStyleSheet) : result = diditcred
        // return result

     // }
    })
  })

  // add credit banner
  // function addCredBanner(styleSheet) {
  //   console.log('starting cred banner...')
  //   var credsResult = banner.goCreds(styleSheet);
  //   return credsResult
  // }

  console.log(chalk.green('CSS compiled'))
  browserSync.stream()
  return true
}
exports.renderSCSS = renderSCSS

renderSCSS()

  // autoprefix it
  // function autoprefixem(styleSheet) {
  //   console.log('starting autoprefixer...')
  //   // run autoprefixer
  //   exec(`node ${postCSSpath}/postcss --use autoprefixer --autoprefixer.browsers "> 5%" -m -o ${styleSheet} ${styleSheet}`, (error, stdout, stderr) => {
  //     if (error) {
  //       console.log("ERROR Autoprefix 'em: \n " + stderr + "\n Error Message: " + error.message);
  //       return error

  //     } else {
  //       console.log('AutoPrefixed: '+ styleSheet)
  //       return 'Success'
  //     }
  //   })
  // }



    // if (credsResult === 'Success') {
    //   console.log('Credits added to: '+styleSheet)
    //   return credsResult

    // } else {
    //   console.log('Error in goCreds function: '+ credsResult)
    //   return credsResult
    // }



// function goCreds(filePath) {
//   if (typeof accredation !== 'undefined') {
//     fs.readFile(filePath, 'utf-8', function (err, data) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(data);
//         writeIt(data);
//       }
//     });
//     function writeIt(css) {
//       if (css)
//         fs.writeFileSync(filePath, accredation + css);

//       console.log(css.toString());
//     }
//   }
//   return;
// }

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


