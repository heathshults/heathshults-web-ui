#!/usr/bin/env bash
# set -x
# NMB="node_modules/.bin"

echo "Running Build from AppRoot"
cd $(npm root) # changes to the node_modules folder (npm root)
cd .. # changes directories one level up to the app root

echo "Build initializing..."
# tsc -d --sourceMap

# echo "Typechecking [.js, .jsx, .ts, .tsx] files..."
tsc --project ./tsconfig.typecheck.json
TSC=$! # get background process id of stencil

wait $TSC
# echo "JAVASCRIPT BUILD..."
# npx babel system-modules/scss2cssVars/scss2cssVars.ts --out-file system-modules/scss2cssVars/scss2cssVars.js
npx babel src/js/modules --out-dir src/js/temp/ &&
# npx babel src/js/modules/HeathScript.ts --out-file www/assets/js/HeathScript.js
npx parcel build src/js/index.ts -d www/assets/js -o HeathScript.bundle.js &&
BABELJS=$!

wait $BABELJS &&
npx gulp ejsit && # echo "Render HTML pages..."

# echo "Assembling CSS Variables..."
#  node system-modules/scss2cssVars/dist/scss2cssVars.js

# echo "SCSS-2-CSS..." 
node build-scripts/build-scss.js &&

file_copy()
{
  echo "Copying supporting files..." 
 
  npx copy "src/assets/**/*" www/assets/
  npx copy "src/js/temp/**/*" www/assets/js/
  npx copy "src/js/vendor/**/*" www/assets/js/vendor/
  npx copy "src/global/**/*" www/global/
  npx copy "src/php/**/*" www/php/
  npx copy "src/mail/**/*" www/mail/
  npx copy src/favicon.ico www/
} &
file_copy
FILECOPY=$!

wait $FILECOPY
# echo "STENCILjs WEB COMPONENTS BUILD..."
npx stencil build --dev --ci --next --no-cache --docs-readme &
STENCILPID=$! # get background process id of stencil

wait $STENCILPID &&

echo "Build complete..."
