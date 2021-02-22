const {exec} = require('child_process');



let filestocheck = 'src/js/HeathScript.js src/js/modules/hs-3d-rotate/index.ts src/js/modules/hs-timeline/hs-timeline-ts.ts src/js/modules/back-to-top/index.ts src/js/modules/show-more-fadebar/index.ts';

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
