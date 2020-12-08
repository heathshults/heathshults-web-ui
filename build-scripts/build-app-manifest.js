// const { exec } = require('child_process');
import {appmanifest} from './render-app-manifest';

function renderManifest(cb) {
  appmanifest()
  .then(() => {if (typeof cb === 'function') cb();});
}
const _renderManifest=renderManifest;
export {_renderManifest as renderManifest};
// exec('gulp --gulpfile build-scripts/render-app-manifest.js appmanifest');
