/* eslint-disable @typescript-eslint/no-var-requires */
const path       = require('path');
const fs         = require('fs');
const lineReader = require('readline');
const stylelint = require('stylelint');
const { exec } = require('child_process');
// const glob       = require('glob');

// import path from 'path';
// import fs from 'fs';
// import lineReader from 'readline';
// import glob from 'glob';

const scssVarFileHS = path.resolve(__dirname, "../../src/scss/variables/_colors.scss"),
  cssVarFileHS = path.resolve(__dirname, "../../src/scss/variables/_css-vars-heathshults.scss"),
  scssVarFileBS = path.resolve(__dirname, "../../src/scss/variables/_bootstrap-cssvars-in.scss"),
  cssVarFileBS = path.resolve(__dirname, "../../src/scss/variables/_css-vars-bootstrap.scss");


function scss2cssVars(src, dest) {
  // src = scssVarFile;
  // dest = cssVarFile;
    return new Promise((resolve, reject) => {

        const sourceCssStream = lineReader.createInterface({
            input: fs.createReadStream(src)
        });

        let rebuiltFile = ':root{';
        let skippingLine = false;

        sourceCssStream.on('line', function(line) {
            
            // Skip Mixin and Comment blocks
            if (skippingLine) {
                if (line.charAt(0) === '}' || line.startsWith('*/')) {
                    skippingLine = false;
                }
                return;
            }

            if(line.includes('@') || (line.startsWith('/*') && !line.includes('*/'))) {
                skippingLine = true;
                return;
            }

            if (line.startsWith('//') || (line.startsWith('/*') && line.includes('*/'))) {
                return;
            }
            
            let rebuiltLine = '';

            const currentLineWords = line.split(' ');

            let skippingWord = false;

            currentLineWords.forEach(function(value, index) {

                if (skippingWord) {
                    return;
                }

                // Skip in-line comments
                if(value.startsWith('//') || value.startsWith('/*')) {
                    skippingWord = true;
                    return rebuiltLine;
                }

                if(value.includes('!default')) {
                    return rebuiltLine += ';'; 
                }

                if(value.includes('$')) {
                    const oldVariable = value.substring(value.indexOf('$')).replace(/;|,| |\)/g, '');
                    if(index === 1) {
                        value = value.replace(oldVariable, 'var(--' + oldVariable.replace('$', '') + ')'); 
                    } else {
                        value = value.replace(oldVariable, '--' + oldVariable.replace('$', ''));
                    }
                }
                
                if(value.includes('http')) {
                    value = 'url(' + value.replace(';', ');');
                }

                if(index > 0) {
                    return rebuiltLine += ' ' + value;
                }
                return rebuiltLine += value;

            });

            rebuiltLine = rebuiltLine.replace('    ', '\t') + '\n';
            rebuiltFile += '    ' + rebuiltLine;

        });
        
        sourceCssStream.on('close', function(line) {
            rebuiltFile += '}';
            if(dest) {
                const outputFile = fs.createWriteStream(dest);

                outputFile.once('open', function(fd) {
                    outputFile.write(rebuiltFile);
                    outputFile.end();
                });
                outputFile.on('close', function() {
                    resolve(dest);
                });
            } else {
                const outputFile = fs.createWriteStream(src);

                outputFile.once('open', function(fd) {
                    outputFile.write(rebuiltFile);
                    outputFile.end();
                  });
                  outputFile.on('close', function() {
                    resolve(src);
                  });
                  
            }
        });

        const { exec } = require('child_process');
        exec(`stylelint --fix ${cssVarFileHS}`, (e) => {if (e){
           console.log(e);
        }});
        exec(`stylelint --fix ${cssVarFileBS}`, (e) => {if (e){
          console.log(e);
       }});
    });
}

exports.convert = convert;

convert(scssVarFileHS, cssVarFileHS)
  .then(
    result => console.log(result)
  )
  .then(
    () => convert(scssVarFileBS, cssVarFileBS)
    .then(
      result => console.log(result)
    )
  )
  .catch(error => console.log(error));
