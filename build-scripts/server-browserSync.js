var browserSync = require('browser-sync')

/* ======= SYNC SERVER =====================>
 * Browsersync server proxying to PHP server
 * for serverside language support
 */
function syncServer(callback) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        browserSync.init({
          // server: 'www-app/',
          files: ['www-app/*.html', 'www-app/css/*.css'],
          proxy: '127.0.0.1:8800',
          port: 3000
        })
        resolve(callback)
      }, 2000)
    }
    catch (error) { reject(callback) }
  })
}
exports.syncServer = syncServer





