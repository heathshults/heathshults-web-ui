const path = require('path');
const rs = require('./render-scripts.js');
const lnt = require('./lint');
const chalk = require('chalk');

var defaultPath = path.resolve(__dirname, '../www-app/assets/js/');

/* eslint-disable-next-line */
function renderJS(dest) {
  try {
    if (dest) {
      if (dest === 'default') {
        let destPath = defaultPath;
      lnt.lint_js().then(rs.HeathenScriptJS(destPath));
      } else {
        lnt.lint_js().then(rs.HeathenScriptJS(dest));
        console.log(chalk.green('JS transpiled!'));
      }
    }
  }
  catch(e) {
    console.log(chalk.red('JS transpile failed:' + e));
  }
}
