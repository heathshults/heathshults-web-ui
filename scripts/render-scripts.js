// 'use strict';
const fs = require('fs');
const path = require('path');
const sh = require('shelljs');
var browserify = require('browserify')
var babelify = require('babelify')
const accredation = require("./intellectualAccredation");
console.log('starting up scripts')

function jsify(callback) {
  console.log('Inside jsify')
  // const srcPath = path.resolve(__dirname, '../src')
  const destPath = path.resolve(__dirname, '../www/assets/js/')
  const inFile = path.resolve(__dirname, '../src/index.js')
  const outFile = path.resolve(__dirname, '../www/assets/js/HeathScript.built.js')

  // fs.access(destPath, fs.F_OK, (err) => {
  // if (err) {
  //   console.error(err)
  //   console.error('Creating destination path.')
  //   fs.mkdir(destPath)
  //   return
  // }

function ensureExists(destPath, mask, cb) {
    if (typeof mask == 'function') { // allow the `mask` parameter to be optional
        cb = mask;
        mask = 0777;
    }
    fs.mkdir(destPath, mask, function(err) {
        if (err) {
            if (err.code == 'EEXIST') cb(null); // ignore the error if the folder already exists
            else cb(err); // something else went wrong
        } else cb(null); // successfully created folder
    });
  }
  ensureExists(destPath, 0744, function(err) {
      if (err){
        console.log(err)
      }
      else {'destination created'}
  });

  try {
    browserify({ debug: true })
    .transform(babelify)
    .require(inFile, { entry: true })
    .bundle()
    .on("error", function (err) { console.log("Error: " + err.message); })
    .pipe(fs.createWriteStream(outFile))
    if (typeof callback == "function") callback('Success');
  } catch(err) {console.log(err)}
}

exports.jsify = jsify
// jsify()
