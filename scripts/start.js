let path = require('path');
var browserSync = require('browser-sync')
var connect = require('gulp-connect-php')
let { watch, series, parallel} = require('gulp');
var open = require('open')
// var open = require('open')
// var { exec } = require('child_process')

var srcPath = path.resolve('../', 'src')
var wwwPath =  path.resolve('../', 'www')

function connect_sync() {
  connect.server({base: wwwPath, port: 8800}, function (){
    browserSync({
      proxy: '127.0.0.1:8800',
      port: 3000
    });
  });


  watch(`${srcPath}/**/*`).on('change', function () {
    browserSync.reload()
  });

  // watch(`${srcPath}/**/*.php`).on('change', function () {
  //   browserSync.reload();
  // });

  (async () => {
    open('http://localhost:3000')
  })();

}
exports.connect_sync = connect_sync
connect_sync()
