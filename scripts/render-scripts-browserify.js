var fs = require('fs')
var path = require('path');
var browserify = require('browserify')
var babelify = require('babelify')
var defaultInFile = path.resolve(__dirname, '../src/index.js')
var outFile = path.resolve(__dirname, '../www/assets/js/HeathScript.built.js')
console.log(`Default: ${defaultInFile}`)

function processJS(jsFile) {
  console.log('inside procesJS')
  if (!jsFile) jsFile = defaultInFile

  browserify({ debug: true })
  .transform(babelify)
  .require(jsFile, { entry: true })
  .bundle()
  .on("error", function (err) {
    console.log("Error: " + err.message)
    console.log("Using default JS file...")
    processJS(defaultInFile)

    return 'damn it! ', err.message
  })
  .pipe(fs.createWriteStream(outFile));

  return fs.access(outFile, (err) => {
      if (err) {
          console.log("File not created. Check file passed. Check this script for further debuggin.");
          return err
      } else {
        console.log("File created");
        return 'Success'
      }
    });

}

exports.processJS = processJS
// processJS(defaultInFile)
