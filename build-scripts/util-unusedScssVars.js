
const fusv = require('find-unused-sass-variables')
// 'scss' is a folder
let unused = fusv.find('../src/scss')
// Array of unused variables
console.log(unused.unused);
// ['$foo', '$bar', '$imunused']
console.log(unused.total);
// Total number of variables in the files

// ignoring variables
const ignoredVars = ['$my-var', '$my-second-var']
unused = fusv.find('scss', { ignore: ignoredVars })