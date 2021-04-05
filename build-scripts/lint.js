const {exec} = require('child_process');



let filestocheck = 'src/js/modules/**/*.ts';

const lint_js = function() { 
  return new Promise((resolve, reject) => {
    try {
      
      let theError;

        exec(`eslint ${filestocheck}`, function(error) {
          if (error) {
            theError=error;
            console.log(`HSERROR: ${theError}`);
          }
        });
        
      if (typeof theError === 'undefined') {
        resolve();
      }
    }
    catch(error) {
      console.log(error);
      reject(error);
    }
  });
};

exports.lint_js = lint_js;

lint_js();
