const env = require('../.env')
process.env.NODE_ENV = env.NODE_ENV

const del = require('del')
// const sh = require('shelljs');
const path = require('path');

const wwwApp = path.resolve(path.dirname(__filename), '../www-app');
const wwwComps = path.resolve(path.dirname(__filename), '../www-app');
// sh.rm('-rf', `${destPath}/**/*.*`)

(async () => {
  const deletedPaths = await del([
    `${wwwApp}/components/**/*.*`,
    `${wwwComps}/build/**/*`
  ]);
  console.log('Deleted files and directories:\n', deletedPaths.join('\n'));
})();
