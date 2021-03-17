require('./js/modules/theme-switcher/theme-switcher.js');
require('./js/modules/show-more-fadebar/show-more.ts');
require('./js/modules/time-stamper/time-stamper.js');
require('./js/modules/validate-url/validate-url.ts');
require('./js/modules/HeathScript.js');


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// test-component is the name of our made up Web Component that we have
// published to npm:
import { applyPolyfills, defineCustomElements } from 'test-components/loader';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

applyPolyfills().then(() => {
  defineCustomElements();
});
