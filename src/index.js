/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, @typescript-eslint/no-var-requires, no-console */
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    '@babel/plugin-transform-typescript',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    '@babel/plugin-transform-runtime',
    ['import', {'libraryName': '@material-ui/core'}]
  ],
  compact: false,
});

import './js/HeathScript';
import './js/modules/hs-timeline';
import './js/modules/theme-switcher';
import './js/modules/back-to-top';
import './js/modules/even-height';
import './js/modules/hs-3d-rotate';
// import './js/modules/show-more-fadebar/show-more.js';
import './js/contact_me';
// import './js/jqBootstrapValidation'
