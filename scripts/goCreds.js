const fs = require('fs');
const path = require('path')
const accredation = require("./intellectualAccredation");
console.log('accessing the goCreds function')

function goCreds(filePath) {
  console.log('Starting...')

  if (typeof accredation !== 'undefined' && typeof filePath !== 'undefined') {
    console.log('Starting goCreds for: '+filePath)

    fs.readFile(filePath, 'utf-8', function (err, data) {

      if (err) {
        console.log(err)
        return 'Error in readFile: \n' + err;

      } else {
        console.log('readFile = Success');
        const diditwrite = writeIt(data);

        if (diditwrite === 'Success') {
          console.log('Banner written succefully.')
          return 'Success'

        } else {
          return diditwrite
        }

      }
    });
  }

    function writeIt(css) {
      if (css) {
        fs.writeFileSync(filePath, accredation + css);

        console.log('Credits completed...');

        return console.log('success')
      } else {
        return console.log('nope');
      }
    }
  }
  exports.goCreds = goCreds

  // goCreds(path.resolve(__dirname, '../dist/assets/css/HeathStyle.built.css'))
