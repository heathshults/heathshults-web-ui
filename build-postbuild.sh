#!/usr/bin/bash


npx postcss www-app/assets/css/*.css --use autoprefixer -d www-app/assets/css;

node build-scripts/copy-comps.js; node build-scripts/build-assets.js; node ./build-scripts/build-assets.js; gulp copy_js; copy www/sw.js www-app;

gulp copy_components;

node_modules/.bin/gulp connect_sync;


