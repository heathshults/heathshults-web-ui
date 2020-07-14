const concurrently = require('concurrently');
const path = require('path');

const browserSyncPath = path.resolve(path.dirname(__filename), '../node_modules/.bin/browser-sync');

concurrently([
    { command: 'node scripts/sb-watch.js', name: 'SB_WATCH', prefixColor: 'bgBlue.bold.black' },
    {
        command: `"${browserSyncPath}" --reload-delay 2000 --reload-debounce 2000 www -w --no-online --open local`,
        name: 'SB_BROWSER_SYNC',
        prefixColor: 'bgMagenta.bold.black',
    }
], {
    prefix: 'name',
    killOthers: ['failure', 'success'],
}).then(success, failure);

function success() {
    console.log('Success');
}

function failure() {
    console.log('Failure');
}
