
const path = require('path');

const sassToCssVars = require('../src/js/modules/sass-to-css-variables');

const files = [
  {
    'scssVarFile': path.resolve(__dirname, '../src/scss/variables/_colors.scss'),
    'cssVarFile': path.resolve(__dirname, '../src/scss/variables/_css-vars2.scss')
  },
  {
    'scssVarFile': path.resolve(__dirname, 'src/scss/bootstrap/scss/_variables.scss'),
    'cssVarFile': path.resolve(__dirname, '../src/scss/variables/_css-vars-bootstrap.scss')
  }
]

files.forEach(file => {
  sassToCssVars.convert(file.scssVarFile, file.cssVarFile)
    .then(result => console.log(result))
    .catch(error => console.log(error));

})
