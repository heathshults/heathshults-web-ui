const path = require('path')
const rjs = require('./render-scripts.js')

var inFile = path.resolve(__dirname, '../src/index.js')
rjs.HeathenScriptJS(inFile)

