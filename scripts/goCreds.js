const fs = require('fs');
const path = require('path')
const packageJSON = require('../package.json');

const accredation = `/*!
* Heathen's Profile - ${packageJSON.title} v${packageJSON.version} (${packageJSON.homepage})
* Copyright 2020-${new Date().getFullYear()} ${packageJSON.author}
* Licensed under ${packageJSON.license} (https://github.com/heathshults.com/${packageJSON.name}/blob/master/LICENSE)
*/
`;

console.log('accessing the goCreds function')

function goCreds(filePath) {
  console.log('Starting...')

  if (typeof filePath !== 'undefined') {
    console.log('Starting goCreds for: '+filePath)

    fs.readFile(filePath, 'utf-8', function (err, data) {

      if (err) {
        console.log(err)
        return 'Error in readFile: \n' + err;

      } else {
        console.log('readFile = Success');
        console.log('Snip of data: '+data.substring(0, 50));

        const diditwrite = writeIt(data);

        if (diditwrite === 'Success') {
          console.log('Banner written succefully but lets doubble check.')
          var dblchk = doublecheck()
          if (dblchk === 'Success')  return 'Success'

        } else {
          return diditwrite
        }

      }
    });
  }

    function writeIt(fileData) {
      if (fileData) {
        fs.writeFileSync(filePath, accredation + fileData);
        console.log('Credits completed...');

        return 'success'

      } else {
        return console.log('nope');
      }
    }

  function doublecheck() {
    var fileCheck = fs.readFile(filePath, 'utf-8', function (err, data) {

      if (err) {
        console.log(err)
        return 'Error in readFile: \n' + err;
      }
      var checker = data.substring(0, 3)
      if (checker === '/*!') return 'Success'
        else return 'Fail!'

    })

    if (fileCheck === 'Success') return 'Success'
  }
}

  exports.goCreds = goCreds

  // goCreds(path.resolve(__dirname, '../www/assets/js/HeathScript.built.js'))
