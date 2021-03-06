// 'use strict';
/* eslint-disable no-octal, @typescript-eslint/explicit-module-boundary-types, no-unused-vars, @typescript-eslint/no-unused-vars, @typescript-eslint/no-var-requires, no-console */
var babel = require("@babel/core");
// require("@babel/core").transform("code", {
//   presets: [
    // '@babel/preset-env', 
    // '@babel/preset-typescript',
    // '@babel/preset-react'
  // ],
  // plugins: [
    // "@babel/plugin-transform-typescript",
    // 'babel-plugin-replace-ts-export-assignment',
    // '@babel/plugin-syntax-dynamic-import',
    // '@babel/plugin-proposal-class-properties',
    // ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    // '@babel/plugin-transform-runtime',
    // ['import', {'libraryName': '@material-ui/core'}]
  // ],
  // compact: false
// });
// require('@babel/register')({
//   presets: [
//     '@babel/preset-env', 
//     '@babel/preset-react', 
//     '@babel/preset-typescript'
//   ],
//   plugins: [
//     '@babel/plugin-transform-typescript',
//     '@babel/plugin-syntax-dynamic-import',
//     '@babel/plugin-proposal-class-properties',
//     ['@babel/plugin-proposal-decorators', { 'legacy': true }],
//     '@babel/plugin-transform-runtime',
//     ['import', {'libraryName': '@material-ui/core'}]
//   ],
//   compact: false,
// });
const nfs = require('node-fs'),
  fs = require('fs'),
  path = require('path'),
  browserify = require('browserify'),
  browserSync = require('browser-sync'),
  chalk = require('chalk'),
  { exec } = require('child_process');
  theLinters = require('./lint');

// let babelify = require('babelify')
let inFile = path.resolve(__dirname, '../src/index.js');
let outFile = path.resolve(__dirname, '../www/assets/js/HeathScript.built.js');
let outPath = path.resolve(__dirname, '../www/assets/js/');


// let whoDidIt =
// let giveProps = require('./goCreds.js');

function HeathenScriptJS(jsdest) {
  
  function paths(){ console.log(chalk.blue('checking directories...'));
    if (jsdest) {
      outPath = path.resolve(__dirname, jsdest);
    }
    makeDirectory(outPath)
    .then(processJS(inFile));
  }
    /**
   * create js directory if not exist
   *
   * @param {*} path  string
   */
  // makeDirectory(outPath)
  function makeDirectory(path, cb) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          fs.mkdirSync(path);
          resolve(true);
        } catch (err) {
          // if (err.code === 'EEXIST') { // curDir already exists!
          //   console.log(chalk.red('path exists'))
          //   return path;
          // }
          // // To avoid `EISDIR` error on Mac and `EACCES`-->`ENOENT` and `EPERM` on Windows.
          // if (err.code === 'ENOENT') { // Throw the original parentDir error on curDir `ENOENT` failure.
          //   throw new Error(`EACCES: permission denied, mkdir '${path}'`);
          // }

          // const caughtErr = ['EACCES', 'EPERM', 'EISDIR'].indexOf(err.code) > -1;
          // if (!caughtErr || caughtErr && path === path.resolve(path)) {
          //   throw err; // Throw if it's just the last created dir.
          // }
          reject(false);
        }
      }, 2000);
      return processJS(outFile);
    });
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
        console.log(chalk.green('Initializing process...'));
        if (!jsFile) jsFile = inFile;

        // make the js file and save it to the makeDirectory path
        try {
          console.log(chalk.yellow('Browserfrying JS...'));
          browserify(jsFile)
            .transform('babelify', {
              presets: [
                '@babel/preset-env', 
                '@babel/preset-typescript',
                '@babel/preset-react'
              ],
              plugins: [
                "@babel/plugin-transform-typescript",
                'babel-plugin-replace-ts-export-assignment',
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
                ['@babel/plugin-proposal-decorators', { 'legacy': true }],
                '@babel/plugin-transform-runtime',
                ['import', {'libraryName': '@material-ui/core'}]
              ]
            })
            .bundle()
            .pipe(nfs.createWriteStream(outFile));
          console.log(chalk.green(`Compiled: ${outFile}`));
        } catch (e) {
          console.log(chalk.red(`Browserfy Error: ${e}`));
          console.log(chalk.yellow('Using bash to compile'));
          reject(bashcompileJS());
        }
        resolve(cb);
      }, 2000);
    });
  }
  exports.processJS = processJS;

  function bashcompileJS(cb) {
    return new Promise((resolve, reject) => {
      exec(`browserify ${inFile} -o ${outFile} -t [ babelify --presets ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react" ] --plugins [ @babel/plugin-transform-typescript babel-plugin-replace-ts-export-assignment @babel/plugin-proposal-decorators @babel/plugin-transform-runtime ] ]`,
        function (err) {
          if (err) return `Browserify Error: ${err}`;
          reject(cb);
        });
      console.log(chalk.green('Finished browserfrying JS...'));
      resolve(cb);
    });
  }
  exports.bashcompileJS = bashcompileJS;
  if (typeof callback === 'function'){cb()}
  browserSync.stream();
  return true;
}
exports.HeathenScriptJS = HeathenScriptJS;

