const env = require('../.env');
process.env.NODE_ENV = env.NODE_ENV;

const del = require('del');
// const sh = require('shelljs');
const path = require('path');

const destPath = path.resolve(path.dirname(__filename), '../www' );
// sh.rm('-rf', `${destPath}/**/*.*`)

(async () => {
  const deletedPaths = await del([
    `${destPath}/**/*.*`
    // `${destPath}/**/*.*`,
    // `!${destPath}/build/*`,
    // `!${destPath}/assets/**/*`
  ]);
  console.log('Deleted files and directories:\n', deletedPaths.join('\n'));
})();
