var path = require('path');
var copy = require('copy');
var chalk = require('chalk');

const input = path.resolve(__dirname, '../www/components');
const output = path.resolve(__dirname, '../www-app/components');



function copyComps() {
 
  new Promise((resolve,reject) => {
    // COPY IN NEW FILES
    copy(`${input}/**/*`, output, (err, files) => {
    // copy('../www/components/**/*', '../www-app/components', (err, files) => {
      
      if(!err) {
        console.log(chalk.green(`${files.length} components copied to dev site.`));
      } else {
        throw err; 
      }
    });
    
    return resolve(true);
  }).catch(err => {
    console.log(chalk.red(`ERROR IN COPYCOMPONENTS: ${err}`));
    
    return reject(false);
  });
}
 
copyComps();
