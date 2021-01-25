const path       = require('path');
const fs         = require('fs');
const lineReader = require('readline');
const glob       = require('glob')

// const scssVarFile = path.resolve(__dirname, "../../../scss/variables/_colors.scss");
// const cssVarFile = path.resolve(__dirname, "../../../scss/variables/_css-vars2.css");


(function convert(src, dest) {
  // src = scssVarFile;
  // dest = cssVarFile;
    return new Promise((resolve, reject) => {

        let sourceCssStream = lineReader.createInterface({
            input: fs.createReadStream(src)
        })

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
                return
            }
            
            let rebuiltLine = '';

            let currentLineWords = line.split(' ');

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
                    let oldVariable = value.substring(value.indexOf('$')).replace(/;|,| |\)/g, '');
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
                let outputFile = fs.createWriteStream(dest);

                outputFile.once('open', function(fd) {
                    outputFile.write(rebuiltFile);
                    outputFile.end();
                });
                outputFile.on('close', function() {
                    resolve(dest)
                });
            } else {
                let outputFile = fs.createWriteStream(src);

                outputFile.once('open', function(fd) {
                    outputFile.write(rebuiltFile);
                    outputFile.end();
                });
                outputFile.on('close', function() {
                    resolve(src);
                });
            }
        });

    });

});

exports.convert = convert;

// convert()
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
