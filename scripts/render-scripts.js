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
var outPath = path.resolve(__dirname, '../www/assets/js/')


// var whoDidIt =
// var giveProps = require('./goCreds.js');
const { exec } = require('child_process');

function HeathenScriptJS(jsdest) {
  outPath = path.resolve(__dirname, jsdest);

  if (!jsdest) {
    return

  } else {
    var go = () => {
      console.log(chalk.blue('starting up heathenScriptJS'));
      makeDirectory(outPath)
      .then(processJS(outFile))
    }
  }

  /**
   * create js directory if not exist
   *
   * @param {*} path  string
   */
  console.log(chalk.blue(`outPath: ${outPath}`))
  // makeDirectory(outPath)
  function makeDirectory(path, cb) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          if (typeof outPath !== 'undefined') {

            console.log(chalk.blue(`makeDirectory() is creating: ${path}`))

            nfs.mkdir(path, 0777, true, function (err) {

              if (err) {
                console.log(chalk.red(`makeDirectory() Error: ${err}`));
                return `Error making path: ${err}`

              } else {
                console.log(chalk.green(`Created path: ${outPath}`));
              }
              return
            });
            return true
          }
          resolve(cb)
        } catch (error) {
          console.log(chalk.red(`Error in makeDirectory(): ${error}`))
          reject()
        }
      }, 2000)

    })
  }

  /**
   * babelifies, browserifies and
   * concatenates the main js file
   *
   * @param {*} jsFile string
   * @param {*} callback function
   */
  function processJS(jsFile, cb) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(chalk.green('Initializing procesJS...'))
        if (!jsFile) jsFile = inFile

        // make the js file and save it to the makeDirectory path
        try {
          console.log(chalk.yellow('Browserfrying JS...'))
          browserify(jsFile)
            .transform('babelify', {
              presets: ['@babel/preset-env', '@babel/preset-react']
            })
            .bundle()
            .pipe(fs.createWriteStream(outFile));
          console.log(chalk.green(`Compiled: ${outFile}`))
        } catch (e) {
          console.log(chalk.red(`Browserfy Error: ${e}`))
          console.log(chalk.yellow('Using bash to compile'))
          reject(bashcompileJS())
        }
        resolve(cb)
      }, 2000)
    })
  }
  exports.processJS = processJS

  function bashcompileJS(cb) {
    return new Promise((resolve, reject) => {
      exec(`browserify ${inFile} -o ${outFile} -t [ babelify --presets [ @babel/preset-env @babel/preset-react ] --plugins [ @babel/plugin-transform-arrow-functions ] ]`,
        function (err) {
          if (err) return `Browserify Error: ${err}`
          reject(cb)
        })
      console.log(chalk.green('Finished browserfrying JS...'))
      resolve(cb)
    })
  }
  exports.bashcompileJS = bashcompileJS
  // if (typeof callback === 'function'){callback()}

  return true
}
exports.HeathenScriptJS = HeathenScriptJS

