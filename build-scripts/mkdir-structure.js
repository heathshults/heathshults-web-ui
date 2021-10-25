/* eslint-disable no-octal */
var nfs = require('node-fs');
var path = require('path')
var chalk = require('chalk')
/**
 *  @name mkdir
 *  @version  1.0.0
 *  @description  Creates directory structure before copying files
 *
 *  Asynchronous operation.
 *  @param  path  The path to build. Can be relative or absolute.
 *  @param  cb  Standard callback to signal function completion.
 */

// dirs with recursion
function makeDirectory(path, cb) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
      console.log(path)
      nfs.mkdir(path, 0777, true, function (err) {
        if (err) {
          console.log(`Error in makeDirectory(): ${chalk.red(err)}`);
          return `Error making path: ${err}`
        } else {
          console.log(chalk.green(`Created: ${path}`));
          return 'Success'
        }
      })
      resolve(cb)
    }, 2000)
  }
  catch(error) {
    console.log(chalk.red('Error in copy_assets_content(): '+error))
    reject()
  }
  })
}
exports.makeDirectory = makeDirectory

makeDirectory('../testercle')
