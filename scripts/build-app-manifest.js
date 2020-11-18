// const { exec } = require('child_process');
const manifestGenerator = require('./render-app-manifest');

function renderManifest(cb) {
  manifestGenerator.appmanifest()
  .then(() => {if (typeof cb === 'function') cb();});
}
exports.renderManifest = renderManifest;
// exec('gulp --gulpfile scripts/render-app-manifest.js appmanifest');
