/* eslint-disable @typescript-eslint/no-var-requires */
import * as path from 'path';
import * as fs from 'fs';
import * as lineReader from 'readline';
import { stylelint } from 'stylelint';
import { exec } from 'child_process';
// const glob       = require('glob');

// import path from 'path';
// import fs from 'fs';
// import lineReader from 'readline';
// import glob from 'glob';

const scssVarFileHS = path.resolve(__dirname, "../../../scss/variables/_colors.scss");
const cssVarFileHS = path.resolve(__dirname, "../../../scss/variables/_css-vars-heathshults.scss");
const scssVarFileBS = path.resolve(__dirname, "../../../scss/variables/_bootstrap-cssvars-in.scss");
const cssVarFileBS = path.resolve(__dirname, "../../../scss/variables/_css-vars-bootstrap.scss");


export default class Scss2cssVars {
  
  public sourceCssStream: any;
  public src: string;
  public dest: string;
  
  // src = scssVarFile;
  // dest = cssVarFile;
  
  constructor(src?: string, dest?: string) {
    this.src = src;
    this.dest = dest;
  }
  
  public convert(): Promise<unknown> {
    return new Promise((resolve, reject) => {
      try {
        this.sourceCssStream = lineReader.createInterface({
          input: fs.createReadStream(this.src)
        });

        let rebuiltFile = ':root{';
        let skippingLine = false;

        this.sourceCssStream.on('line', function(line) {
            
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
        
        this.sourceCssStream.on('close', function(line) {
            rebuiltFile += '}';
            if(this.dest) {
                const outputFile = fs.createWriteStream(this.dest);

                outputFile.once('open', function(fd) {
                    outputFile.write(rebuiltFile);
                    outputFile.end();
                });
                outputFile.on('close', function() {
                    resolve(this.dest);
                });
            } else {
                const outputFile = fs.createWriteStream(this.src);

                outputFile.once('open', function(fd) {
                    outputFile.write(rebuiltFile);
                    outputFile.end();
                  });
                  outputFile.on('close', function() {
                    resolve(this.src);
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
       
        return resolve(true);
      }
      catch(err) {
        throw new Error(err);
        
        return reject(false);
      }
    });
  }
}

const scssVars = new Scss2cssVars(scssVarFileHS, cssVarFileHS);
scssVars.convert()
  .then(
    result => console.log(result)
  )
  .then(
    () => new Scss2cssVars(scssVarFileBS, cssVarFileBS).convert()
    .then(
      result => console.log(result)
    )
  )
  .catch(error => console.log(error));
