#!/usr/bin/env bash
# set -x
# NMB="node_modules/.bin"


echo "Running Build from AppRoot"
cd $(npm root) # changes to the node_modules folder (npm root)
cd .. # changes directories one level up to the app root

DNOW=$(date +'%A %b %d %Y')
TNOW=$(date +'%r')
echo "Building HeathShults Web UI on $DNOW $TNOW" 
echo "Prebuild activated..." 

# echo "Cleaning...." 
node build-scripts/clean-components.js &&

# echo "Running Javascript linters...." 
npx eslint --fix src/js/modules/**/*.ts &
ESLINTPID=$! # get background process id of ESLINT

# echo "Running css linters" 
wait $ESLINTPID
npx stylelint --fix src/scss/**/*.scss &
STYLELINTPID=$!

# echo "Typechecking [.js, .jsx, .ts, .tsx] files..." 
wait $STYLELINTPID
tsc --project ./tsconfig.typecheck.json &

echo "Prebuild completed" &&
sleep 3 &&

# //==========* MAIN BUILD SCRIPTS *==========//

echo "Build initializing..." &&
sleep 3 &&

echo "Typechecking [.js, .jsx, .ts, .tsx] files..."
tsc --project ./tsconfig.typecheck.json
TSC=$! # get background process id of stencil

wait $TSC
echo "STENCILjs WEB COMPONENTS BUILD..."
npx stencil build --prod --ci --next --no-cache --docs-readme &
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
  npx copy "src/js/temp/**/*" dist/js/
  npx copy "www/assets/js/HeathScript.bundle.js" dist/js/
  npx copy "www/assets/js/HeathScript.bundle.js.map" dist/js/
  npx copy "src/js/vendor/**/*" www/assets/js/vendor/
  npx copy "src/global/**/*" www/global/
  npx copy "src/php/**/*" www/php/
  npx copy "src/mail/**/*" www/mail/
}
file_copy
FILECOPY=$!

wait $FILECOPY &&
echo "Build complete..." &
echo "Wrapping up css..."
npx postcss "www/assets/css/*.css" --use autoprefixer -d www/assets/css/ &&
POSTCSS=$!

$POSTCSS
npx copy "www/assets/css/HeathStyle.built.css" dist/css/
npx copy "www/assets/css/HeathStyle.built.css.map" dist/css/
npx copy "www/**/*" dist/website/ &&
echo "That's it! All done."






