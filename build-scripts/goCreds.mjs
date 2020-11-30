const fs = require('fs');
const path = require('path')
const packageJSON = require('../package.json');

const accredation = `/*!
* Heathen's Profile - ${packageJSON.title} v${packageJSON.version} (${packageJSON.homepage})
* Copyright 2020-${new Date().getFullYear()} ${packageJSON.author}
* Licensed under ${packageJSON.license} (https://github.com/heathshults.com/${packageJSON.name}/blob/master/LICENSE)
*/
`;

// console.log('accessing the goCreds function')

function goCreds(filePath) {
  console.log('Starting credit banner...')


  if (typeof filePath !== 'undefined') {
    console.log(`Initializing file reader for: ${filePath}`)

    var crediting = fs.readFile(filePath, 'utf-8', function (err, data) {

      if (err) {
        console.log(err)
        return 'Error in reading file: \n' + err;

      } else {
        console.log('Checking file data: '+data.substring(0, 3));

        const diditwrite = writeIt(data);
        if (diditwrite) {
          console.log('Banner written succefully')
          return true
        } else { return diditwrite }
      }

      // write the creds banner and data to the file
    function writeIt(fileData) {
      if (fileData) {
        fs.writeFileSync(filePath, accredation + fileData);
        console.log('Credits completed...');
        return true

      } else {
        return console.log('No data found in file: '+filePath);
      }
    }

    });
    if (crediting) return true
      else return false
  } else { return }
}
exports.goCreds = goCreds

  // goCreds(path.resolve(__dirname, '../www/assets/js/HeathScript.built.js'))
