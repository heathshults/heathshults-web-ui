'use strict';

const rs = require('./render-scss');

// rs.renderSCSS(() => { console.log('Finished building CSS!')});
var buildResult = rs.renderSCSS();
if (buildResult === 'Success') {
  console.log('Finished building CSS!')
} else {
  console.log('Error in SCSS Render: ' + buildResult)
}
