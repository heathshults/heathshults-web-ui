const packageJSON = require('../package.json');


const accredation = `/*!
* Heathen's Profile - ${packageJSON.title} v${packageJSON.version} (${packageJSON.homepage})
* Copyright 2020-${new Date().getFullYear()} ${packageJSON.author}
* Licensed under ${packageJSON.license} (https://github.com/heathshults.com/${packageJSON.name}/blob/master/LICENSE)
*/
`;

exports.accredation = accredation
