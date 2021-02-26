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

# echo "STENCILjs WEB COMPONENTS BUILD..."
npx stencil build --dev --ci --next --no-cache --docs-readme &
STENCILPID=$! # get background process id of stencil

wait $STENCILPID
# echo "JAVASCRIPT BUILD..."
# npx babel system-modules/scss2cssVars/scss2cssVars.ts --out-file system-modules/scss2cssVars/scss2cssVars.js
npx babel src/js/modules --out-dir src/js/temp/
npx babel src/js/modules --out-file src/js/HeathShults.built.js
n#px browserify src/js/temp/HeathShults.built.js -o www/assets/js/HeathShults.built.js -t [ babelify --presets [ @babel/preset-env @babel/preset-react @babel/preset-typescript ] ]

# echo "Browserify Javascript..."
# npx browserify src/index.js > www/js

# echo "Render HTML pages..."
npx gulp ejsit &&

# echo "Assembling CSS Variables..."
#  node system-modules/scss2cssVars/dist/scss2cssVars.js

# echo "SCSS-2-CSS..." 
node build-scripts/build-scss.js 

# echo "Post css scripts..." 
# npx postcss www/assets/css/*.css --use autoprefixer -d www/assets/css &&

echo "Copying supporting files..." 

npx copy src/assets/content/**/* www/assets/content &&
npx copy src/assets/css/**/* www/assets/css &&
# npx copy src/assets/fa-5140/**/* www/assets/fa-5140
npx copy src/assets/img/**/* www/assets/img &&
npx copy src/assets/webfonts/**/* www/assets/webfonts &&
npx copy src/js/temp/**/* www/assets/js/vendor &&
npx copy src/js/vendor/**/* www/assets/js/vendor &&
npx copy www/sw.js www &&
npx copy src/global/**/* www/global &&
npx copy src/php/**/* www/php &&
npx copy src/mail/**/* www/mail &&
npx copy src/favicon.ico www &&
npx copy www/components/**/* www/components &

echo "Starting development server..."
npx gulp connect_sync &
SERVERPID=$! # get background process id of stencil

wait $SERVERPID
gnome-terminal --tab -e "npx gulp watchers" &
echo "Build complete..."
