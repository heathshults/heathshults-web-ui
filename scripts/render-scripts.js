'use strict';
const fs = require('fs');
const path = require('path');
const sh = require('shelljs');
var browserify = require('browserify')
var babelify = require('babelify')
const accredation = require("./intellectualAccredation");
console.log('starting up scripts')

function jsify(callback) {
  console.log('Inside jsify')
  const srcPath = path.resolve(__dirname, '../src')
  const distPath = path.resolve(__dirname, '../dist')
  const inFile = path.resolve(__dirname, '../src/index.js')
  const outFile = path.resolve(__dirname, '../dist/assets/js/HeathScript.built.js')

  if (!sh.test('-e', `${distPath}/assets/js`)) {
      sh.mkdir('-p', `${distPath}/assets/js`);
  }

  browserify({ debug: true })
  .transform(babelify)
  .require(inFile, { entry: true })
  .bundle()
  .on("error", function (err) { console.log("Error: " + err.message); })
  .pipe(fs.createWriteStream(outFile))
  if (typeof callback == "function") callback('Success');
}

exports.jsify = jsify
// jsify()
