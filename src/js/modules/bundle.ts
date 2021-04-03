"use strict";

require('@babel/register')({
  extensions: ['.ts', '.cjs', '.jsx', '.js', '.mjs'],
  cache: true
});

require('@babel/core').transformSync('code', {
  presets: ['@babel/preset-typescript', '@babel/preset-env', '@babel/preset-react'],
  plugins: ['babel-plugin-transform-class-properties', {
    "spec": true
  }]
}); // require("@babel/polyfill");

import './theme-switcher/theme-switcher';
import './even-height/even-height';
import './hs-timeline/hs-timelineJS';
import './show-more-fadebar/show-more';
import './time-stamper/time-stamper';
import './validate-url/validate-url';
import './hs-slide-button/slide-button';
import './HeathScript';
