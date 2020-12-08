var path = require('path')
var { exec } = require('child_process')
var hostPath = path.resolve(__dirname, '../www-app')

function phpServer(callback) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        exec(`php -S 127.0.0.1:8800 -t ${hostPath}`);
        resolve(callback);
      }, 2000);
    }
    catch (error) { reject(callback); }
  });
};
exports.phpServer = phpServer
