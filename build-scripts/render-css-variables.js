// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
    ['import', {libraryName: '@material-ui/core'}],
  ],
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
const sassToCssVars = require('../src/js/modules/sass-to-css-variables');

const scssVarFile = path.resolve(__dirname, '../src/scss/variables/_colors.scss');
const cssVarFile = path.resolve(__dirname, '../src/scss/variables/_css-vars2.css');

sassToCssVars
  .convert(scssVarFile, cssVarFile)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
