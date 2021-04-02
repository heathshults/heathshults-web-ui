#!/usr/bin/env bash
# set -x
# NMB="node_modules/.bin"

echo "Running Build from AppRoot"
cd $(npm root) # changes to the node_modules folder (npm root)
cd .. # changes directories one level up to the app root

echo "Build initializing..."
sleep 3

echo "STENCILjs WEB COMPONENTS BUILD..."
npx stencil build --dev --ci --next --no-cache --docs-readme &
STENCILPID=$! # get background process id of stencil

wait $STENCILPID 
sleep 2
echo "Typechecking and compiling [.js, .jsx, .ts, .tsx] files..."
tsc --project ./tsconfig.build.json &&
TSC=$! # get background process id of stencil
wait $TSC 
echo "JAVASCRIPT BUILD..."
npx babel src/js/temp --out-dir src/js/temp &&
BABELJS=$!

wait $BABELJS
npx babel src/js/modules/HeathScript.js -o src/js/temp/HeathScript.js &&
BABELHS=$!
wait BABELHS
npx babel src/js/modules/bundle.js -o src/js/temp/bundle.js &&
BABELBUNDLE=$!
wait BABELBUNDLE
npx browserify src/js/temp/bundle.js -o www/assets/js/HeathScript.concat.js &&
BRWSRIFYCONCAT=$!
wait $BRWSRIFYCONCAT
npx browserify src/index.js -o www/assets/js/HeathScript.bundle.js &&
BRWSRIFYHS=$!
wait $BRWSRIFYHS
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
}
file_copy &

FILECOPY=$!

wait $FILECOPY




echo "Build complete..." &
