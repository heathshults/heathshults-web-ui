#!/usr/bin/env bash
# set -x
# NMB="node_modules/.bin"

echo "Running Build from AppRoot"
cd $(npm root) # changes to the node_modules folder (npm root)
cd .. # changes directories one level up to the app root

echo "Build initializing..."
sleep 3

echo "Typechecking [.js, .jsx, .ts, .tsx] files..."
tsc --project ./tsconfig.typecheck.json
TSC=$! # get background process id of stencil

wait $TSC
echo "STENCILjs WEB COMPONENTS BUILD..."
npx stencil build --dev --ci --next --no-cache --docs-readme &
STENCILPID=$! # get background process id of stencil

wait $STENCILPID &
echo "JAVASCRIPT BUILD..."

# npx babel system-modules/scss2cssVars/scss2cssVars.ts --out-file system-modules/scss2cssVars/scss2cssVars.js
npx babel src/js/modules --out-dir src/js/temp/ &&
BABELJS=$!

wait $BABELJS &&
npx babel src/js/modules/ --out-file src/js/temp/HeathScript-all-concat.js &&
BABELJS=$!

# npx NODE_ENV=development parcel build src/js/index.ts -d www/assets/js -o HeathScript.bundle.js --no-minify &&
# BABELJS=$!

# wait $BABELJS &&

wait $BABELJS &&
browserify src/index.js -o www/assets/js/HeathScript.bundle.js &&
BROWSERIFYJS=$!

wait $BROWSERIFYJS &&

echo "Render HTML pages..."
npx gulp ejsit & 
# echo "Assembling CSS Variables..."
#  node system-modules/scss2cssVars/dist/scss2cssVars.js

echo "SCSS-2-CSS..." 
node build-scripts/build-scss.js &&

echo "Copying supporting files..." 
file_copy() {
  npx copy "src/assets/**/*" www/assets/
  npx copy "src/js/temp/**/*" www/assets/js/
  npx copy "src/js/vendor/**/*" www/assets/js/vendor/
  npx copy "src/global/**/*" www/global/
  npx copy "src/php/**/*" www/php/
  npx copy "src/mail/**/*" www/mail/
  npx copy "src/favicon.ico" www/
}
file_copy &

FILECOPY=$!

wait $FILECOPY




echo "Build complete..." &
