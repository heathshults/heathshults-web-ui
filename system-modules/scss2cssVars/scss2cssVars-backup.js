"use strict";
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-var-requires */
var path = require("path");
var fs = require("fs");
var lineReader = require("readline");
// const glob       = require('glob');
// import path from 'path';
// import fs from 'fs';
// import lineReader from 'readline';
// import glob from 'glob';
var scssVarFileHS = path.resolve(__dirname, "../../../scss/variables/_colors.scss");
var cssVarFileHS = path.resolve(__dirname, "../../../scss/variables/_css-vars-heathshults.scss");
var scssVarFileBS = path.resolve(__dirname, "../../../scss/variables/_bootstrap-cssvars-in.scss");
var cssVarFileBS = path.resolve(__dirname, "../../../scss/variables/_css-vars-bootstrap.scss");
var Scss2cssVars = /** @class */ (function () {
    // src = scssVarFile;
    // dest = cssVarFile;
    function Scss2cssVars(src, dest) {
        this.src = src;
        this.dest = dest;
    }
    Scss2cssVars.prototype.convert = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.sourceCssStream = lineReader.createInterface({
                    input: fs.createReadStream(_this.src)
                });
                var rebuiltFile_1 = ':root{';
                var skippingLine_1 = false;
                _this.sourceCssStream.on('line', function (line) {
                    // Skip Mixin and Comment blocks
                    if (skippingLine_1) {
                        if (line.charAt(0) === '}' || line.startsWith('*/')) {
                            skippingLine_1 = false;
                        }
                        return;
                    }
                    if (line.includes('@') || (line.startsWith('/*') && !line.includes('*/'))) {
                        skippingLine_1 = true;
                        return;
                    }
                    if (line.startsWith('//') || (line.startsWith('/*') && line.includes('*/'))) {
                        return;
                    }
                    var rebuiltLine = '';
                    var currentLineWords = line.split(' ');
                    var skippingWord = false;
                    currentLineWords.forEach(function (value, index) {
                        if (skippingWord) {
                            return;
                        }
                        // Skip in-line comments
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
                            }
                            else {
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
                    rebuiltFile_1 += '    ' + rebuiltLine;
                });
                _this.sourceCssStream.on('close', function (line) {
                    rebuiltFile_1 += '}';
                    if (this.dest) {
                        var outputFile_1 = fs.createWriteStream(this.dest);
                        outputFile_1.once('open', function (fd) {
                            outputFile_1.write(rebuiltFile_1);
                            outputFile_1.end();
                        });
                        outputFile_1.on('close', function () {
                            resolve(this.dest);
                        });
                    }
                    else {
                        var outputFile_2 = fs.createWriteStream(this.src);
                        outputFile_2.once('open', function (fd) {
                            outputFile_2.write(rebuiltFile_1);
                            outputFile_2.end();
                        });
                        outputFile_2.on('close', function () {
                            resolve(this.src);
                        });
                    }
                });
                var exec_1 = require('child_process').exec;
                exec_1("stylelint --fix " + cssVarFileHS, function (e) {
                    if (e) {
                        console.log(e);
                    }
                });
                exec_1("stylelint --fix " + cssVarFileBS, function (e) {
                    if (e) {
                        console.log(e);
                    }
                });
                return resolve(true);
            }
            catch (err) {
                throw new Error(err);
                return reject(false);
            }
        });
    };
    return Scss2cssVars;
}());
exports["default"] = Scss2cssVars;
var scssVars = new Scss2cssVars(scssVarFileHS, cssVarFileHS);
scssVars.convert()
    .then(function (result) { return console.log(result); })
    .then(function () { return new Scss2cssVars(scssVarFileBS, cssVarFileBS).convert()
    .then(function (result) { return console.log(result); }); })["catch"](function (error) { return console.log(error); });
