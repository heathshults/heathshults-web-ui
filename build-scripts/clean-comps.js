var path = require('path');
var copy = require('copy');
var chalk = require('chalk');
var del = require('del');

const input = path.resolve(__dirname, '../www/components');
const output = path.resolve(__dirname, '../www/components');
console.log(input+'/n', output);

module.exports = function deleteFiles() {
  return new Promise((resolve, reject)=> {
    
    // CLEAN OUT THE DIRECTORY WITH OLD FILES
    await del([`${output}/*/, !${output}`]).catch(err => {
      console.log(chalk.red(`ERROR DELETING FILES IN COPYCOMPONENTS: ${err}`));
      console.log(chalk.green(`Old files deleted. Copying fresh files...`));
      return true;
    }).catch(err => {
      console.log(chalk.red(`ERROR DELETING FILES IN COPYCOMPONENTS: ${err}`));
      return false;
    });
  });
};


deleteFiles();
