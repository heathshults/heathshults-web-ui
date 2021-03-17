/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, @typescript-eslint/no-var-requires, no-console */

import './js/modules/theme-switcher/theme-switcher.js';
import './js/modules/show-more-fadebar/show-more.ts';
import './js/modules/time-stamper/time-stamper.js';
import './js/modules/validate-url/validate-url.ts';

import './js/modules/HeathScript.js';


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
