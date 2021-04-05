
// require('@babel/register')({
//   extensions: ['.ts', '.cjs', '.jsx', '.js', '.mjs'],
//   presets: [
//     '@babel/preset-env', 
//     '@babel/preset-typescript',
//     '@babel/preset-react'
//   ],
//   plugins: [
//     "@babel/plugin-transform-typescript",
//     'babel-plugin-replace-ts-export-assignment',
//     '@babel/plugin-syntax-dynamic-import',
//     '@babel/plugin-proposal-class-properties',
//     ['@babel/plugin-proposal-decorators', { 'legacy': true }],
//     '@babel/plugin-transform-runtime',
//     ['import', {'libraryName': '@material-ui/core'}]
//   ],
//   compact: false,
//   cache: true,
// });

// require('@babel/core').transformSync('code', {
//   presets: ['@babel/preset-typescript', '@babel/preset-env', '@babel/preset-react'],
//   plugins: ['babel-plugin-transform-class-properties', {
//     "spec": true
//   }]
// }); // require("@babel/polyfill");

import './js/modules/theme-switcher/theme-switcher.ts';
import './js/modules/even-height/even-height.ts';
import './js/modules/hs-timeline/hs-timelineJS.ts';
import './js/modules/show-more-fadebar/index.ts';
import './js/modules/time-stamper/time-stamper';
import './js/modules/validate-url/validate-url.ts';
import './js/modules/hs-slide-button/slide-button.ts';
import './js/modules/HeathScript.js';


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// // test-component is the name of our made up Web Component that we have
// // published to npm:
// import { applyPolyfills, defineCustomElements } from 'test-components/loader';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// applyPolyfills().then(() => {
//   defineCustomElements();
// });
