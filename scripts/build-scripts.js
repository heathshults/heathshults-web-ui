
const rjs = require('./render-scripts.js')

var renderJS = rjs.HeathenScriptJS()
if (renderJS=== 'Success') {
  return 'Success'
} else {
  return 'JS Compile Failed'
}
