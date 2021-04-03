#!/usr/bin/env bash
# set -x
# NMB="node_modules/.bin"

echo "Switching to AppRoot"
cd $(npm root) # changes to the node_modules folder (npm root)
cd ../ # changes directories one level up to the app root

del "src/js/temp/**/**"

echo "Typechecking and compiling [.js, .jsx, .ts, .tsx] files..."
tsc --project ./tsconfig.build.json &&
TSC=$! # get background process id of stencil
wait $TSC 
echo "// ======* JAVASCRIPT BUILD... *====== //"
echo "Babelfry the javascript"
npx babel src/js/temp --out-dir src/js/temp &&
BABELJS=$!

wait $BABELJS
npx babel src/js/modules/HeathScript.js -o src/js/temp/HeathScript.js &&
BABELJS=$!

wait $BABELJS
npx babel src/js/modules/bundle.js -o src/js/temp/bundle.js &&
BABELJS=$!

wait $BABELJS
echo "Browserfry till crispy..."
npx browserify src/js/temp/bundle.js -o www/assets/js/HeathScript.concat.js &&
BRWSRIFYCONCAT=$!

wait $BRWSRIFYCONCAT
npx browserify src/index.js -o www/assets/js/HeathScript.bundle.js &&
BRWSRIFYHS=$!

wait $BRWSRIFYHS
echo "// ======* JAVASCRIPT BUILD COMPLETE! *====== //"
echo "Done cooking..."

#parcel build src/js/modules/**/.ts -d www/assets/js -d HeathScript.parcel.js
# npx parcel build src/js/index.ts -d www/assets/js -o HeathScript.bundle.js
