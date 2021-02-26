import concurrently from 'concurrently';
import {resolve,dirname} from 'path';

const browserSyncPath = resolve(dirname(__filename), '../node_modules/.bin/browser-sync');

const doConcurrently='node --inspect build-scripts/sb-watch.js';
concurrently([
    { command: doConcurrently, name: 'SB_WATCH', prefixColor: 'bgBlue.bold' },
    {
        command: `${browserSyncPath} www -w --no-online`,
        name: 'SB_BROWSER_SYNC',
        prefixColor: 'bgBlue.bold',
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
