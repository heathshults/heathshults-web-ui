/* eslint-disable no-octal */
var nfs = require('node-fs');
var path = require('path')
/**
 *  @name mkdir directories
 *  @version  1.0.0
 *  @description  creates directory structure before copying files
 *
 *  Asynchronous operation. No arguments other than a possible exception
 *  are given to the completion callback.
 */

// dirs with recursion
function makeDirectory(path) {
  console.log(path)

  nfs.mkdir(path, 0777, true, function (err) {
    if (err) {
      console.log(err);
      return `Error making path: ${err}`
    } else {
      console.log(`Created: ${path}`);
      return 'Success'
    }
  });
}
exports.makeDirectory = makeDirectory

makeDirectory('www/assets/js')





 // function mkdir_p(path, mode, callback, position) {
//     //var fullPath = `${rootPath}/${path}`
//     mode = mode || 0777;
//     position = position || 0;
//     var parts = require('path').normalize(path).split('/'); console.log(parts)

//     if (position >= parts.length) {
//         if (callback) {
//             return callback();
//         } else {
//             return true;
//         }
//     }

//     var directory = parts.slice(0, position + 1).join('/');
//     fs.stat(directory, function(err) {
//         if (err === null) {
//             mkdir_p(path, mode, callback, position + 1);
//         } else {
//             fs.mkdir(directory, mode, function (err) {
//                 if (err) {
//                     if (callback) {
//                         return callback(err);
//                     } else {
//                         throw err;
//                     }
//                 } else {
//                     mkdir_p(path, mode, callback, position + 1);
//                 }
//             })
//         }
//     })
// }
// exports.mkdir_p = mkdir_p;

// mkdir_p(`${rootPath}/src/assets/js`, 0777, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Directory created');
//   }
// });

