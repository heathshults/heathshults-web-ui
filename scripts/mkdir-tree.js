var dirTree = require('directory-tree');
var tree = dirTree('/src/', {attributes: ['path']})

var stripFileRegEx = /(.*\/).*/

console.log(tree)

exports.tree = tree
