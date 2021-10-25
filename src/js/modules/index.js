require('@babel/register')({
  extensions: ['.ts', '.cjs', '.jsx', '.js', '.mjs'],
  cache: true,
});
require('@babel/core').transformSync('code', {
  presets: ['@babel/preset-typescript', '@babel/preset-env', '@babel/preset-react'],
  plugins: ['babel-plugin-transform-class-properties', { "spec": true }]
});
// require("@babel/polyfill");
require('../temp/theme-switcher/theme-switcher');
require('../temp/even-height/even-height');
require('../temp/hs-timeline/hs-timelineJS');
require('../temp/show-more-fadebar/show-more');
require('../temp/time-stamper/time-stamper');
require('../temp/validate-url/validate-url');
require('../temp/hs-slide-button/slide-button');
require('../temp/HeathScript');


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';


// import { applyPolyfills, defineCustomElements } from 'test-components/loader';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// applyPolyfills().then(() => {
//   defineCustomElements();
// });
