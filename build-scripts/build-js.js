const path = require('path');
const HeathenScriptJS = require('./render-scripts.js');
const lnt = require('./lint');
const chalk = require('chalk');

var defaultPath = path.resolve(__dirname, '../www/assets/js/');
var processor = new HeathenScriptJS();
/* eslint-disable-next-line */
function renderJS(dest) {
  try {
    if (dest) {
      if (dest === 'default') {
        let destPath = defaultPath;
      lnt.lint_js().then(processor(destPath));
      } else {
        lnt.lint_js().then(processor(dest));
        console.log(chalk.green('JS transpiled!'));
      }
    }
  }
  catch(e) {
    console.log(chalk.red('JS transpile failed:' + e));
  }
}
