// 'use strict';
/* eslint-disable no-octal */
var nfs = require('node-fs');
var fs = require('fs')
var path = require('path')
var browserify = require('browserify')
const chalk = require('chalk');

// var babelify = require('babelify')
var inFile = path.resolve(__dirname, '../src/index.js')
var outFile = path.resolve(__dirname, '../www/assets/js/HeathScript.built.js')
var destPath = path.resolve(__dirname, '../www/assets/js/')
// var whoDidIt =
// var giveProps = require('./goCreds.js');
const { exec } = require('child_process');

console.log(chalk.blue('starting up heathenScriptJS'))

function HeathenScriptJS(path) {
  makeDirectory(destPath)
  /**
   * create js directory if not exist
   *
   * @param {*} path  string
   */
  function makeDirectory(path) {
    console.log(chalk.blue(`makeDirectory() is creating: ${path}`))

    nfs.mkdir(path, 0777, true, function (err) {
      if (err) {
        console.log(chalk.red(`makeDirectory() Error: ${err}`));
        return `Error making path: ${err}`
      } else {
        console.log(chalk.green(`Created path: ${path}`));
        return 'Success'
      }
    });
  }
  exports.makeDirectory = makeDirectory

  // processJS(path)

  /**
   * @name processJS
   * babelifies, browserifies and
   * concatenates the main js file
   *
   * @param {*} jsFile string
   * @param {*} callback function
   */
  function processJS(jsFile, callback) {
    console.log(chalk.green('Initializing procesJS...'))
    if (!jsFile) jsFile = inFile

    // make the js file and save it to the makeDirectory path
    try {
      browserify(jsFile)
      .transform('babelify', {presets: ['@babel/preset-env', '@babel/preset-react']})
      .bundle()
      .pipe(fs.createWriteStream(outFile));
      console.log(chalk.green(`Compiled: ${outFile}`))
    }
    catch(e) {
      console.log(chalk.red(`Browserfy Error: ${e}`))
      console.log(chalk.yellow('Using bash to compile'))
      bashcompileJS()
    }

    function bashcompileJS() {
      exec(`browserify ${jsFile} -o ${outFile} -t [ babelify --presets [ @babel/preset-env @babel/preset-react ] --plugins [ @babel/plugin-transform-arrow-functions ] ]`,
      function(err) {
        if (err) return `Browserify Error: ${err}`
      })
    }

    if (typeof callback === 'function'){callback()}
  }
  exports.processJS = processJS






}
exports.HeathenScriptJS = HeathenScriptJS
// HeathenScriptJS()
