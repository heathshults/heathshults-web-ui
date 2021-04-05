#!/usr/bin/env bash
# set -x
# NMB="node_modules/.bin"

echo "Switching to AppRoot\n"
cd $(npm root) # changes to the node_modules folder (npm root)
cd ../ # changes directories one level up to the app root

# Lint JS
echo "Checking JS for syntax errors... \n"
echo "Running Javascript linters.... \n" 
npx eslint --fix src/js/modules/**/*.ts &&
ESLINTPID=$! # get background process id of ESLINT

wait $ESLINTPID
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


# del "src/js/temp/**/**"

# echo "Typechecking and compiling [.js, .jsx, .ts, .tsx] files..."
# tsc --project ./tsconfig.build.json &&
# TSC=$! # get background process id of stencil
# wait $TSC 
# echo "// ======* JAVASCRIPT BUILD... *====== //"
# echo "Babelfry the javascript"
# npx babel src/js/temp --out-dir src/js/temp &&
# BABELJS=$!

# wait $BABELJS
# npx babel src/js/modules/HeathScript.js -o src/js/temp/HeathScript.js &&
# BABELJS=$!

# wait $BABELJS
# npx babel src/js/modules/bundle.js -o src/js/temp/bundle.js &&
# BABELJS=$!

# wait $BABELJS
# echo "Browserfry till crispy..."
# npx browserify src/js/temp/bundle.js -o www/assets/js/HeathScript.concat.js &&
# BRWSRIFYCONCAT=$!

# wait $BRWSRIFYCONCAT
# npx browserify src/index.js -o www/assets/js/HeathScript.bundle.js &&
# BRWSRIFYHS=$!

# wait $BRWSRIFYHS
# echo "// ======* JAVASCRIPT BUILD COMPLETE! *====== //"
# echo "Done cooking..."

#parcel build src/js/modules/**/.ts -d www/assets/js -d HeathScript.parcel.js
# npx parcel build src/js/index.ts -d www/assets/js -o HeathScript.bundle.js
