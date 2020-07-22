var php = require('./server-php')
var sync = require('./server-browserSync')
const { reject } = require('assert')
const chalk = require('chalk')

try {
php.phpServer(() => {
  console.log(chalk.blue('Starting the PHP server...'))
})
.then(sync.syncServer())
}
catch(error) {
  reject()
}
