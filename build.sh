#!/usr/bin/env bash

NMB="node_modules/.bin"

  echo "Build initializing..."
  tsc src/js/modules/**/*.ts --outdir src/js/tsified

  echo "Build Stencil Components..."
  $NMB/stencil build --dev --docs-readme --debug --watch &

  echo "Build Javascript..."
  node build-scripts/build-js

  echo "Render HTML pages..."
  $NMB/gulp ejsit

  echo "Assembling CSS Variables..."
  $NMB/babel-node src/js/modules/sass-to-css-variables/index.js
  node build-scripts/build-scss.js

  echo "Build complete..."
