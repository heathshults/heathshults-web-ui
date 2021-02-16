#!/usr/bin/bash


node_modules/.bin/eslint --fix src/js/HeathScript.js src/js/jqBootstrapValidation.js src/js/contact_me.js src/js/modules/show-more-fadebar/show-more.js

node_modules/.bin/stylelint --fix src/scss/**/*.scss;


node build-scripts/build-js;

node_modules/.bin/stencil build --dev --docs-readme --debug --watch;

node_modules/.bin/gulp ejsit;

node_modules/.bin/babel-node src/js/modules/sass-to-css-variables/index.js

node build-scripts/build-scss.js;







