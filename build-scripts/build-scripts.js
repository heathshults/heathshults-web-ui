const path = require('path')
const rs = require('./render-scripts.js')

var defaultPath = path.resolve(__dirname, '../www-app/assets/js/')

/* eslint-disable-next-line */
function renderJS(dest) {
  if (dest) {
    if (dest === 'default') {
      let destPath = defaultPath
      rs.HeathenScriptJS(destPath)
    } else {
      rs.HeathenScriptJS(dest)
    }

  }
}
