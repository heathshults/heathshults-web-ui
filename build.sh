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
echo "JAVASCRIPT BUILD...\n"
echo "Babelfry the javascript... \n"
# node build-scripts/render-scripts.js &&
npx browserify src/js/modules/bundle.ts -o www/assets/js/HeathScript.bundle.js --extensions=.ts -t [ babelify --presets [ @babel/preset-env @babel/preset-typescript @babel/preset-react ] --plugins [ babel-plugin-transform-class-properties ] --extensions .ts ] &&
BABELIFY=$!

wait $BABELIFY
echo "Battering with Browserify\n"
sleep 1
echo "Cooking until crispy...\n"
npx ncp src/js/vendor www/assets/js/vendor &&
COPYJS=$!

wait $COPYJS &&
echo "Done cooking!\n"
sleep 1

echo "Cleaning up the mess...\n"
del src/js/temp/**/* &&
CLEANUP=$!

wait $CLEANUP
echo "// ======* JAVASCRIPT BUILD COMPLETE! *====== //\n"

echo "Render HTML pages..."
npx gulp ejsit & 
# echo "Assembling CSS Variables..."
#  node system-modules/scss2cssVars/dist/scss2cssVars.js

echo "SCSS-2-CSS..." 
node build-scripts/build-scss.js &&

echo "Copying supporting files..." 
file_copy() {
  npx ncp src/assets www/assets/
  # npx ncp "src/js/temp/**/*" www/assets/js/
  npx ncp src/js/vendor www/assets/js/vendor/
  npx ncp src/global www/global/
  npx ncp src/php www/php/
  npx ncp src/mail www/mail/
}
file_copy &

FILECOPY=$!

wait $FILECOPY




echo "Build complete..." &

# npx babel src/js/modules/HeathScript.js -o src/js/temp/HeathScript.js &&
# BABELHS=$!
# wait BABELHS
# npx babel src/js/modules/bundle.js -o src/js/temp/bundle.js &&
# BABELBUNDLE=$!
# wait BABELBUNDLE
# npx browserify src/js/temp/bundle.js -o www/assets/js/HeathScript.concat.js &&
# BRWSRIFYCONCAT=$!
# wait $BRWSRIFYCONCAT
# npx browserify src/index.js -o www/assets/js/HeathScript.bundle.js &&
# BRWSRIFYHS=$!
# wait $BRWSRIFYHS
