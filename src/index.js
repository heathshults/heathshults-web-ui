require('@babel/register')({
  extensions: ['.ts', '.cjs', '.jsx', '.js', '.mjs'],
  cache: true,
});
require('@babel/core').transformSync('code', {
  presets: ['@babel/preset-typescript', '@babel/preset-env', '@babel/preset-react'],
  plugins: ['babel-plugin-transform-class-properties', { "spec": true }]
});
// require("@babel/polyfill");
require('./js/modules/theme-switcher/theme-switcher');
require('./js/modules/even-height/even-height');
require('./js/modules/hs-timeline/hs-timelineJS');
require('./js/modules/show-more-fadebar/show-more');
require('./js/modules/time-stamper/time-stamper');
require('./js/modules/validate-url/validate-url');
require('./js/modules/hs-slide-button/slide-button');
require('./js/modules/HeathScript');


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
