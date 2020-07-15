// 'use strict';
var path = require('path');
var md = require('./mkdir-structure');
var browserfry = require('./render-scripts-browserify')
var whoDidIt = require("./goCreds");
var defaultInFile = path.resolve(__dirname, '../src/index.js')
var destPath = path.resolve(__dirname, '../www/assets/js/')
var outFile = path.resolve(__dirname, '../www/assets/js/HeathScript.built.js')
console.log('starting up heathenScriptJS')

  // if (typeof callback == "function") {
  //   console.log('Created HeathenScript.built.js')
  //   callback('Success');
  // }


var heathenScriptJS = new Promise(function(resolve, reject) {
  console.log('Inside heathenScriptJS')

  resolve = md.makeDirectory(destPath);
  if (resolve === 'Success') return resolve
    else return reject

}).then(function(result) { // (**)

  if (result === 'Success') browserfry.processJS(defaultInFile)
  return result

}).then(function(result) { // (***)

 if (result === 'Success') whoDidIt.goCreds(outFile)
  return result

})

exports.heathenScriptJS = heathenScriptJS

