const path = require('path')
const rs = require('./render-scripts.js')

var destPath = path.resolve(__dirname, '../www/assets/js/')


rs.HeathenScriptJS(destPath)

