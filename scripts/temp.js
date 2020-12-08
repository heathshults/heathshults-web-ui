const fs = require('fs');
const path = require('path')
const packageJSON = require('../package.json');
const filePath = path.resolve(__dirname, '../www-app/assets/css/HeathStyle.built.css')
const accredation = require('./intellectualAccredation.js')
// console.log(accredation)
// const accredation = `/*!
// * Heathen's Profile - ${packageJSON.title} v${packageJSON.version} (${packageJSON.homepage})
// * Copyright 2020-${new Date().getFullYear()} ${packageJSON.author}
// * Licensed under ${packageJSON.license} (https://github.com/heathshults.com/${packageJSON.name}/blob/master/LICENSE)
// */
// `;
function goCreds() {
  if (typeof accredation !== 'undefined') {
    fs.readFile(filePath, 'utf-8', function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        writeIt(data);
      }
    });
    function writeIt(css) {
      if (css)
        fs.writeFileSync(filePath, accredation + css);

      console.log(accredation + css.toString());
    }
  }
  return;
}

goCreds()
