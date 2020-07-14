// 'use strict';
var fs = require('fs')
var nfs = require('node-fs')
var md = require('./mkdir-structure');
var path = require('path');
// var sh = require('shelljs');
var browserify = require('browserify')
var babelify = require('babelify')
var banner = require("./intellectualAccredation");
console.log('starting up scripts')

function jsify(callback) {
  console.log('Inside jsify')
  // var srcPath = path.resolve(__dirname, '../src')
  var destPath = path.resolve(__dirname, '../www/assets/js/')
  var inFile = path.resolve(__dirname, '../src/index.js')
  var outFile = path.resolve(__dirname, '../www/assets/js/HeathScript.built.js')

// var makeDirectoryResult = makeDirectory('www/assets/js')
// // dirs with recursion
// function makeDirectory(path) {
//   console.log('make directory: ' +path)

//   nfs.mkdir(path, 0777, true, function (err) {
//     console.log('inside make directory function')
//     if (err) {
//       console.log(err);

//     } else {
//       console.log(`Created: ${path}`);

//       if (makeDirectoryResult === 'Success'){
//           var pjs = processJS(inFile)
//           console.log('process js error: '+pjs)
//           if (pjs  === 'Success') {
//             return 'Success'
//           } else {
//             console.log('Error')
//           }
//         } else {
//           console.log('Grr... Error: ' + pjs)
//         }

//       return 'Success'
//     }
//   });
// }
// exports.makeDirectory = makeDirectory



  // var createDir = makeDirectory('../www/assets/js/');




  // function processJS(inFile) {
  //   console.log('inside procesJS')

    browserify({ debug: true })
    .transform(babelify)
    .require(inFile, { entry: true })
    .bundle()
    .on("error", function (err) {
      console.log("Error: " + err.message);
      return 'damn it! ', err.message

    })
    .pipe(fs.createWriteStream(outFile));

    // return 'Success'
    // var processJsResult = addCredBanner(outFile)

    // if (processJsResult === 'Success') return 'Success'
  // }
   // add credit banner
  // function addCredBanner(jsFile) {
  //   console.log('starting cred banner...')

  //   var credsResult = banner.goCreds(jsFile);

  //   if (credsResult === 'Success') {

  //     if (typeof callback == "function") {
  //       callback('Success');
  //       console.log('Credit banner complete')

  //       return credsResult
  //     }
  //   }
  // }
  if (typeof callback == "function") {
    console.log('Credit banner complete')
    callback('Success');
  }
}

exports.jsify = jsify
jsify()
