"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var path = _interopRequireWildcard(require("path"));

var fs = _interopRequireWildcard(require("fs"));

var lineReader = _interopRequireWildcard(require("readline"));

/* eslint-disable @typescript-eslint/no-var-requires */
// import { stylelint } from 'stylelint';
// import { exec } from 'child_process';
// const glob       = require('glob');
// import path from 'path';
// import fs from 'fs';
// import lineReader from 'readline';
// import glob from 'glob';
var log = console.log;
var scssVarFileHS = path.resolve(__dirname, "../../../scss/variables/_colors.scss");
var cssVarFileHS = path.resolve(__dirname, "../../../scss/variables/_css-vars-heathshults.scss");
var scssVarFileBS = path.resolve(__dirname, "../../../scss/variables/_bootstrap-cssvars-in.scss");
var cssVarFileBS = path.resolve(__dirname, "../../../scss/variables/_css-vars-bootstrap.scss");
/**
 * 
 * 
 * @export
 * @class Scss2cssVars
 */

var Scss2cssVars = /*#__PURE__*/function () {
  // src = scssVarFile;
  // dest = cssVarFile;
  function Scss2cssVars(src, dest) {
    (0, _classCallCheck2.default)(this, Scss2cssVars);
    (0, _defineProperty2.default)(this, "line", void 0);
    (0, _defineProperty2.default)(this, "sourceCssStream", void 0);
    (0, _defineProperty2.default)(this, "src", void 0);
    (0, _defineProperty2.default)(this, "dest", void 0);
    this.src = src;
    this.dest = dest;
  }
  /**
   * @description Converts SCSS variables into CSS variables.
   * 
   * @returns {Promise<unknown>} 
   * 
   * @memberOf Scss2cssVars
   */


  (0, _createClass2.default)(Scss2cssVars, [{
    key: "convert",
    value: function convert() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        try {
          _this.sourceCssStream = lineReader.createInterface({
            input: fs.createReadStream(_this.src)
          });
          var rebuiltFile = ':root{';
          var skippingLine = false;

          _this.sourceCssStream.on('line', function (line) {
            var ln = line; // Skip Mixin and Comment blocks

            if (skippingLine) {
              if (ln.charAt(0) === '}' || ln.startsWith('*/')) {
                skippingLine = false;
              }

              return;
            }

            if (ln.includes('@') || ln.startsWith('/*') && !ln.includes('*/')) {
              skippingLine = true;
              return;
            }

            if (ln.startsWith('//') || ln.startsWith('/*') && ln.includes('*/')) {
              return;
            }

            var rebuiltLine = '';
            var currentLineWords = ln.split(' ');
            var skippingWord = false;
            currentLineWords.forEach(function (value, index) {
              if (skippingWord) {
                return;
              } // Skip in-line comments


              if (value.startsWith('//') || value.startsWith('/*')) {
                skippingWord = true;
                return rebuiltLine;
              }

              if (value.includes('!default')) {
                return rebuiltLine += ';';
              }

              if (value.includes('$')) {
                var oldVariable = value.substring(value.indexOf('$')).replace(/;|,| |\)/g, '');

                if (index === 1) {
                  value = value.replace(oldVariable, 'var(--' + oldVariable.replace('$', '') + ')');
                } else {
                  value = value.replace(oldVariable, '--' + oldVariable.replace('$', ''));
                }
              }

              if (value.includes('http')) {
                value = 'url(' + value.replace(';', ');');
              }

              if (index > 0) {
                return rebuiltLine += ' ' + value;
              }

              return rebuiltLine += value;
            });
            rebuiltLine = rebuiltLine.replace('    ', '\t') + '\n';
            rebuiltFile += '    ' + rebuiltLine;
          });

          _this.sourceCssStream.on('close', function (line) {
            var ln = line;
            log(ln);
            rebuiltFile += '}';

            if (this.dest) {
              var outputFile = fs.createWriteStream(this.dest);
              outputFile.once('open', function (fd) {
                log(fd);
                outputFile.write(rebuiltFile);
                outputFile.end();
              });
              outputFile.on('close', function () {
                resolve(this.dest);
              });
            } else {
              var _outputFile = fs.createWriteStream(this.src);

              _outputFile.once('open', function (fd) {
                log(fd);

                _outputFile.write(rebuiltFile);

                _outputFile.end();
              });

              _outputFile.on('close', function () {
                resolve(this.src);
              });
            }
          });

          var _require = require('child_process'),
              exec = _require.exec;

          exec("stylelint --fix ".concat(cssVarFileHS), function (e) {
            if (e) {
              console.log(e);
            }
          });
          exec("stylelint --fix ".concat(cssVarFileBS), function (e) {
            if (e) {
              console.log(e);
            }
          });
          return resolve(true);
        } catch (err) {
          throw new Error(err);
          return reject(false);
        }
      });
    }
  }]);
  return Scss2cssVars;
}();

exports.default = Scss2cssVars;
var scssVars = new Scss2cssVars(scssVarFileHS, cssVarFileHS);
scssVars.convert().then(function (result) {
  return console.log(result);
}).then(function () {
  return new Scss2cssVars(scssVarFileBS, cssVarFileBS).convert().then(function (result) {
    return console.log(result);
  });
}).catch(function (error) {
  return console.log(error);
});
