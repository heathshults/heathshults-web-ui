const env = require('../.env')
process.env.NODE_ENV = env.NODE_ENV

const sh = require('shelljs');
const path = require('path');

const destPath = path.resolve(path.dirname(__filename), '../www' );

sh.rm('-rf', `${destPath}/*`)

