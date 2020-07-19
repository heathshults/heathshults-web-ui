var browserSync = require('browser-sync');
const { exec } = require('child_process');


function server() {
  var phpServer = ()=>{}
  var syncServer = ()=>{}

  phpServer = (callback) => {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          exec('php -S 127.0.0.1:8800 -t ./www')
        resolve(callback)}, 2000)
      }
      catch(error) { reject(callback) }
    })
  }
  exports.phpServer = phpServer

 /* ======= SYNC SERVER =====================>
  * Browsersync server proxying to PHP server
  * for serverside language support
  */
  syncServer = (callback) => {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          browserSync.init({
            server: 'www/',
            files: ['www/*.html', 'www/css/*.css'],
            proxy: '127.0.0.1:8800',
            port: 3000
          });
          resolve(callback)
        }, 2000)
      }
      catch(error) { reject(callback) }
    })

  }
  exports.syncServer = syncServer


}
exports.server = server

server.phpserver()
  .then(server.syncServer())
