#!/usr/bin/env bash

NMB="node_modules/.bin"
DNOW=$(date +'%A %b %d %Y')
TNOW=$(date +'%r')
  echo "Building HeathShults Web UI on $DNOW $TNOW"
  echo "Cleaning...."
  node build-scripts/clean-components.js
  echo "Running Javascript linters...."
  $NMB/eslint --fix src/js/HeathScript.js src/js/vendor/jqBootstrapValidation.js src/js/contact_me.js src/js/modules/show-more-fadebar/show-more.js
  echo "Running css linters"
  $NMB/stylelint --fix src/scss/**/*.scss
  
  echo "Prebuild completed"

