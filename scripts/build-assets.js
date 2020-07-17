'use strict';
// require('./render-assets');
const { exec } = require('child_process')

exec('gulp --gulpfile scripts/render-assets.js copy_assets')
