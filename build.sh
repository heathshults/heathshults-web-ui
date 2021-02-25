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

# echo "Build Stencil Components..."
npx stencil build --dev --docs-readme --debug &
# STENCILPID=$! # get background process id of stencil

# wait $STENCILPID
# echo "Build Javascript..." 
# npx babel system-modules/scss2cssVars/scss2cssVars.ts --out-file system-modules/scss2cssVars/scss2cssVars.js
npx babel src/js/modules --out-dir src/js/temp/ 
npx babel src/js/modules --out-file www-app/assets/js/HeathShults.built.js 
npx browserify src/js/temp/HeathShults.built.js -o www-app/assets/js/HeathShults.built.js -t [ babelify --presets [ @babel/preset-env @babel/preset-react @babel/preset-typescript ] ]

# echo "Browserify Javascript..." 
# npx browserify src/index.js > www-app/js 

# echo "Render HTML pages..." 
npx gulp ejsit &&

# echo "Assembling CSS Variables..." 
#  node system-modules/scss2cssVars/dist/scss2cssVars.js

# echo "Compiling css..." 
node build-scripts/build-scss.js 

# echo "Post css scripts..." 
# npx postcss www-app/assets/css/*.css --use autoprefixer -d www-app/assets/css &&

echo "Copying supporting files..." 

npx copy src/assets/content/**/* www-app/assets/content &&
npx copy src/assets/css/**/* www-app/assets/css &&
# npx copy src/assets/fa-5140/**/* www-app/assets/fa-5140
npx copy src/assets/img/**/* www-app/assets/img &&
npx copy src/assets/webfonts/**/* www-app/assets/webfonts &&
npx copy src/js/temp/**/* www-app/assets/js/vendor &&
npx copy src/js/vendor/**/* www-app/assets/js/vendor &&
npx copy www/sw.js www-app &&
npx copy src/global/**/* www-app/global &&
npx copy src/php/**/* www-app/php &&
npx copy src/mail/**/* www-app/mail &&
npx copy src/favicon.ico www-app &&
npx copy www/components/**/* www-app/components &

echo "Starting development server..."
npx gulp connect_sync &
SERVERPID=$! # get background process id of stencil

wait $SERVERPID
npx gulp watchers &
echo "Build complete..."
