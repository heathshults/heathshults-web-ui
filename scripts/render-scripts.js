// 'use strict';
/* eslint-disable no-octal */
var nfs = require('node-fs');
var fs = require('fs')
var path = require('path')
var browserify = require('browserify')
var babelify = require('babelify')
var defaultInFile = path.resolve(__dirname, '../src/index.js')
var outFile = path.resolve(__dirname, '../www/assets/js/HeathScript.built.js')
var destPath = path.resolve(__dirname, '../www/assets/js/')
// var whoDidIt = require("./goCreds.js");

console.log('starting up heathenScriptJS')

function HeathenScriptJS() {

  /**
   * create js directory if not exist
   *
   * @param {*} path  string
   */
  function makeDirectory(path) {
    console.log(path)

    nfs.mkdir(path, 0777, true, function (err) {
      if (err) {
        console.log(err);
        return `Error making path: ${err}`
      } else {
        console.log(`Created: ${path}`);
        return 'Success'
      }
    });
  }
  exports.makeDirectory = makeDirectory
  makeDirectory(destPath)
  // var mkdr = makeDirectory(destPath)
  // if (mkdr === 'Success') {
  //   console.log('MakeDirectory Succeeded.')
  // } else {
  //   return 'JS Fail'
  // }



  /**
   * @name processJS
   * babelifies, browserifies and
   * concatenates the main js file
   *
   * @param {*} jsFile string
   * @param {*} callback function
   */
  function processJS(jsFile, callback) {
    console.log('inside procesJS')
    if (!jsFile) jsFile = defaultInFile

    // make the js file and save it to the makeDirectory path
    browserify({
        debug: true
      })
      .transform(babelify)
      .require(jsFile, {
        entry: true
      })
      .bundle()
      .on("error", function (err) {
        console.log("Error: " + err.message)
        console.log("Using default JS file...")
        processJS(defaultInFile)

        return 'damn it! ', err.message
      })
      .pipe(fs.createWriteStream(outFile));

     fs.access(outFile, (err) => {
      if (err) {
        console.log("File not created. Check file passed. Check this script for further debuggin.");
        return err
      } else {
        console.log("File created");
        return 'Success'
      }
    })

    if (typeof callback === 'function'){callback()}
  }
  exports.processJS = processJS


  var projs = processJS(defaultInFile)
  if (projs === 'Success') {
    console.log('JS Compiled Successfully')
  } else {
    return 'JS Fail'
  }

  // create the banner
  // var whoMadeThis = (cb) => {
  //   console.log('starting up whoMadeThis()')
  //   var who = whoDidIt.goCreds(outFile)
  //   if (who === 'Success') return cb('Success')
  //     else return 'FAIL BANNER'
  // }
  // exports.whoMadeThis = whoMadeThis


}
exports.HeathenScriptJS = HeathenScriptJS
HeathenScriptJS()
