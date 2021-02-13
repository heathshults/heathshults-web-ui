var path = require('path');
var copy = require('copy');
var chalk = require('chalk');
var del = require('del');

const input = path.resolve(__dirname, '../www/components');
const output = path.resolve(__dirname, '../www-app/components');
console.log(input+'/n', output);

function deleteFiles() {
  return new Promise((resolve, reject)=> {
    
    // CLEAN OUT THE DIRECTORY WITH OLD FILES
    del([`${output}/*/, !${output}`]).catch(err => {
      console.log(chalk.red(`ERROR DELETING FILES IN COPYCOMPONENTS: ${err}`));
      return reject(false);
    });
    console.log(chalk.green(`Old files deleted. Copying fresh files...`));
    resolve(true);
  }).catch(err => {
      console.log(chalk.red(`ERROR DELETING FILES IN COPYCOMPONENTS: ${err}`));
      return reject(false);
    });
}

function copyComponents() {
  return new Promise((resolve, reject) => {
      // COPY IN NEW FILES
      try{
      copy(`${input}/**/*`, output, (err, files) => {
        if (err){ 
          throw err;
        } else {
          console.log(chalk.green(`Components copied to dev site.`));
          files.forEach(file=> {
            console.log(chalk.blue(file.dest));
          });
        }
      });
      return resolve(true);
    }
    catch(err) {
      console.log(chalk.red(`ERROR IN COPYCOMPONENTS: ${err}`));
      return reject(false);
    }
  });
}

deleteFiles().then(copyComponents());
