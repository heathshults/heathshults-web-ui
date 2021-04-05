// 'use strict';
/* eslint-disable no-octal, @typescript-eslint/explicit-module-boundary-types, no-unused-vars, @typescript-eslint/no-unused-vars, @typescript-eslint/no-var-requires, no-console */
// var babel = require('@babel/core');
require('@babel/register')({
  extensions: [`.ts`, `.js`, `.tsx`, `.jsx`, `.json`]
});

const nfs = require('node-fs'),
  fs = require('fs-extra'),
  path = require('path'),
  browserify = require('browserify'),
  browserSync = require('browser-sync'),
  chalk = require('chalk'),
  {exec} = require('child_process');
// theLinters = require('./lint');

let babelify = require('babelify');
let inFile = path.resolve(__dirname, '../src/index.js');
let outFile = path.resolve(__dirname, '../www/assets/js/HeathScript.built.js');
let outPath = path.resolve(__dirname, '../www/assets/js/');

function cb() {
  console.log('Done!');
}
// let whoDidIt =
// let giveProps = require('./goCreds.js');
l = console.log;

function HeathenScriptJS(jsdest, inFile, outFile, outPath) {
  l(chalk.yellow('Lets begin\n'));

  !inFile ? (inFile = path.resolve(__dirname, '../src/index.js')) : '';
  !outFile ? (outFile = path.resolve(__dirname, '../www/assets/js/HeathScript.bundle.js')) : '';
  !outPath ? (outPath = path.resolve(__dirname, '../www/assets/js/')) : '';
  !jsdest ? (jsdest = outPath) : '';

  function errorHendler(message) {
    if (message) {
      throw new Error(message);
    }
    return;
  }

  let paths;

  paths = (outPath) => {
    l(chalk.blue('Checking for user input...\n'));
    let outFilePath;
    try {
      // console.log(chalk.blue('checking directories...'));
      if (jsdest) outFilePath = path.resolve(__dirname, jsdest);
      else outFilePath = outPath;

      checkDirectory(outFilePath);
    } catch (e) {
      reject(errorHandler(e));
    }
    return;
  };

  paths(outPath);

  /**
   * check if outPath exist - if not create it
   *
   * @param {*} path  string
   */
  function checkDirectory(path) {
    l(chalk.yellow('Checking for out put directory..\n'));
    return new Promise((resolve, reject) => {
      try {
        if (fs.existsSync(path)) {
          processJS(inFile);
        } else {
          fs.mkdirSync(outPath);
        }
        resolve(processJS(inFile));
      } catch (e) {
        throw new Error(e);
      }
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
    l(chalk.yellow('Processing JS with Babel and Browserify\n'));
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(chalk.green('Initializing process...\n'));
        if (!jsFile) jsFile = inFile;

        // make the js file and save it to the makeDirectory path
        try {
          console.log(chalk.magenta('Browserfrying JS...\n'));
          browserify(jsFile, {extensions: [`.ts`, `.js`, `.jsx`, `.tsx`, `.json`]})
            .transform('babelify', {
              extensions: [`.ts`, `.js`, `.tsx`, `.jsx`, `.json`],
              presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
              plugins: [
                '@babel/plugin-transform-typescript',
                'babel-plugin-replace-ts-export-assignment',
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
                ['@babel/plugin-proposal-decorators', {legacy: true}],
                '@babel/plugin-transform-runtime',
                ['import', {libraryName: '@material-ui/core'}],
              ],
            })
            .bundle()
            .pipe(nfs.createWriteStream(outFile));
          console.log(chalk.magenta(`Finished transpiline: ${outFile}`));
          l(chalk.green('JS processing completed.\n'));
          resolve(cb);
        } catch (e) {
          console.log(chalk.red(`Browserfy Error: ${e}`));
          console.log(chalk.yellow('Using bash to compile\n'));
          reject(/*bashcompileJS()*/);
        }
      }, 2000);
    });
  }
}
// browserSync.stream();

HeathenScriptJS();
